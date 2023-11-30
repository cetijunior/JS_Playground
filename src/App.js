import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Bankomati from './Components/Bankomati';
import Calculator from './Components/Calculator';
import Clicker from './Components/Clicker';
import CounterEffect from './Components/CounterEffect';
import CountriesGame from './Components/CountriesGame';
import ToDo from './Components/ToDo';
import ToDoCr from './Components/ToDoCr';
import UserReg from './Components/UserReg';
import NameSwitcher from './Components/NameSwitcher';


const routes = [
  { path: '/', name: 'Home', element: <Home /> },
  { path: '/Bankomat', name: 'Bankomat', element: <Bankomati /> },
  { path: '/Calculator', name: 'Calculator', element: <Calculator /> },
  { path: '/Clicker', name: 'Clicker', element: <Clicker /> },
  { path: '/CounterEffect', name: 'CounterEffect', element: <CounterEffect /> },
  { path: '/CountriesGame', name: 'CountriesGame', element: <CountriesGame /> },
  { path: '/ToDo', name: 'ToDo', element: <ToDo /> },
  { path: '/ToDoCr', name: 'ToDoCr', element: <ToDoCr /> },
  { path: '/UserReg', name: 'UserReg', element: <UserReg /> },
  { path: '/NameSwitcher', name: 'NameSwitcher', element: <NameSwitcher /> },

];

const App = () => {
  return (
    <div className='app-body' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BrowserRouter>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'row' }}>
          {routes.map((route, index) => (
            <li key={index} style={{ margin: '8px' }}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;




/*
import React, { useState } from 'react'


function Child1({ onStateChange }) {
  return (
    <div>
      <button onClick={() => onStateChange('New State from Child 1')}>
        Change State te prindi
      </button>
    </div>
  );
}

function Child2({ sharedState }) {
  return <p>State te Child 2: {sharedState}</p>
}

function Parent() {
  const [sharedState, setSharedState] = useState('');

  return (
    <div>
      <Child1 onStateChange={(newState) => setSharedState(newState)} />
      <Child2 sharedState={sharedState} />
    </div>
  )
}

function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App
*/







/*
import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    alert("U shtua emer: " + name);
    setSubmitted(true);
    event.preventDefault();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type='submit'>Stumbit</button>
      </form>
      {submitted && <p>Emri: {name}</p>}
    </div>
  )

}


function App() {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App
*/





/*
import React from 'react'

function List() {
  const emra = ['Ceti', 'Ceti', 'Ceti', 'Ceti', 'Ceti'];

  return (
    <ul>
      {emra.map((emri) => (
        <li key={emri.toString()}>{emri}</li>
      ))}
    </ul>
  )

}

function App() {
  return (
    <div>
      <List />
    </div>
  )
}

export default App
*/





/*
import React, { useState } from 'react'

function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Mirseardhe, Perdors!</p> : <p>Log In</p>}
    </div>
  );
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <ConditionalRendering isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App
*/





/*
import React, { useState } from "react";

function EventShem() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('U kliku buttoni');
  };

  return (
    <div>
      <button onClick={handleClick}>M'kliko</button>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <EventShem />
    </div>
  )
}

export default App
*/






/*
import React, { useEffect } from 'react'

function LifeCycle() {
  useEffect(() => {
    console.log("u montu");

    return () => {
      console.log("Do montohet")
    };
  }, []);

  useEffect(() => {
    console.log("U updejtu");
  });

  return <p>Shembull JeteCikli</p>
}

function App() {
  return (
    <div>
      <LifeCycle />
    </div>
  );
}

export default App

*/






/*
import React, { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0);

  const hiq = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Can't go lower than that Boss")
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Shto </button>
      <button onClick={hiq}>Hiq</button>
    </div>
  )
}



function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
*/





/*
import React from 'react'
import { WelcomeClass, WelcomeFunc } from './Components/Current/MyComp'

function App() {
  return (
    <div>
      <WelcomeFunc name='Ceej' />
      <WelcomeClass name='Meej' />
    </div>
  );
}

export default App
*/