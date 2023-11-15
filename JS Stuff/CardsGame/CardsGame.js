document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const bestTimeElement = document.getElementById('best-time');
    const startGameButton = document.getElementById('start-game');

    let cards = [];
    let flippedCards = [];
    let matchedCards = [];
    let score = 0;
    let timer = 0;
    let elapsedSeconds = 0;
    let bestTime = localStorage.getItem('bestTime') || Infinity;

    function initGame() {
        // Clear the board
        cardContainer.innerHTML = '';

        // Reset variables
        flippedCards = [];
        matchedCards = [];
        score = 0;
        elapsedSeconds = 0;

        // Clear intervals
        clearInterval(timer);

        // Update score and timer display
        updateScore();
        timerElement.textContent = '00:00';

        // Shuffle and create new cards
        cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        cards.sort(() => Math.random() - 0.5);

        cards.forEach((value, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = index;
            card.textContent = value;
            card.addEventListener('click', handleCardClick);
            cardContainer.appendChild(card);
        });

        // Start the timer for the new game
        startTimer();
    }

    startGameButton.addEventListener('click', initGame);

    function handleCardClick() {
        const clickedCard = this;

        if (flippedCards.length < 2 && !flippedCards.includes(clickedCard)) {
            flipCard(clickedCard); // flip card

            flippedCards.push(clickedCard); // add card to flipped cards array

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 100);
            }
        }
    }

    function flipCard(card) {
        card.classList.toggle('flipped');
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const isMatch = card1.textContent === card2.textContent;

        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCards.push(card1, card2);
            score += 10;
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            score -= 5;
        }

        flippedCards = [];

        updateScore();

        if (matchedCards.length === cards.length) {
            clearInterval(timer);
            handleGameCompletion();
        }
    }

    function updateScore() {
        scoreElement.textContent = score;
    }

    function startTimer() {
        timer = setInterval(() => {
            elapsedSeconds++;
            timerElement.textContent = formatTime(elapsedSeconds);
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
    }

    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    function handleGameCompletion() {
        alert(`Congratulations! Your time was: ${formatTime(elapsedSeconds)}!`);

        if (elapsedSeconds < bestTime) {
            bestTime = elapsedSeconds;
            localStorage.setItem('bestTime', bestTime);
            bestTimeElement.textContent = formatTime(bestTime);
        }


        resetGame();
    }

    function resetGame() {
        // Clear the board
        cardContainer.innerHTML = '';

        flippedCards = [];
        matchedCards = [];
        score = 0;
        elapsedSeconds = 0;

        updateScore();
        timerElement.textContent = '00:00';

        cards.sort(() => Math.random() - 0.5);

        cards.forEach((value, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = index;
            card.textContent = value;
            card.addEventListener('click', handleCardClick);
            cardContainer.appendChild(card);
        });

        // Update best time display
        bestTimeElement.textContent = formatTime(bestTime);


        startTimer();
    }



    startTimer();
});
