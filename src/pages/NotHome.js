import React, { useState, useEffect } from 'react';

const NotHome = () => {
  // Using useState to create a counter state
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState(''); // State for the message

  // Using useEffect to handle side effects like resetting counter below 0 or showing message if above 5
  useEffect(() => {
    if (counter < 0) {
      setCounter(0);  // Reset counter to 0 if it goes below 0
    } else if (counter  >= 5) {
      setMessage("You passed 5!");  // Set message if counter exceeds 5
    } else {
      setMessage('');  // Clear the message if counter is 5 or below
    }
  }, [counter]);  // The effect runs every time the counter changes

  return (
    <div>
      <h1>NotHome Page</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      {message && <h2>{message}</h2>}  {/* Conditional rendering of message */}
    </div>
  );
};

export default NotHome;
