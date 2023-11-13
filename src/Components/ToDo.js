import React, { useState } from "react";
import "./App.css";

function toDo() {
    const [reminder, setReminder] = useState("");
    const [reminders, setReminders] = useState([]);

    const handleReminderChange = (e) => {
        setReminder(e.target.value);
    };

    const addReminder = () => {
        if (reminder.trim() !== "") {
            setReminders([...reminders, reminder]);
            setReminder("");
        }
    };

    const removeReminder = (index) => {
        const updatedReminders = [...reminders];
        updatedReminders.splice(index, 1);
        setReminders(updatedReminders);
    };

    return (
        <div className="body">
            <h2>Shto nje remainder</h2>
            <input type="text" value={reminder} onChange={handleReminderChange} />
            <p></p>
            <button onClick={addReminder}>Add Reminder</button>
            <p></p>

            <h3>Reminders: </h3>
            <ul>
                {reminders.map((r, index) => (
                    <li key={index}>
                        {r}
                        <p></p>
                        <button onClick={() => removeReminder(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default toDo;
