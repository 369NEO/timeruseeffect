import React, { useState, useEffect } from 'react';

// Define a functional component called CountdownTimer. 
// It takes an object with an initialValue property as a parameter.
const CountdownTimer = ({ initialValue }) => {
 
    // Use the useState hook to create a state variable called timeRemaining.
  // Initialize it with the initialValue passed to the component.
  // setTimeRemaining is a function to update the timeRemaining variable.
  const [timeRemaining, setTimeRemaining] = useState(initialValue);
 
  // Use the useEffect hook to perform side effects.
  // This effect will run after every render where timeRemaining changes.
  useEffect(() => {
    // If timeRemaining is less than or equal to 0, stop the timer.
    if (timeRemaining <= 0) {
      return;
    }
    // Set up an interval that decrements timeRemaining by 1 every 1000 milliseconds (1 second).
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    // Return a cleanup function that will clear the interval when the component unmounts or timeRemaining changes.
    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]); // This array specifies that the effect should run whenever timeRemaining changes.
  // Return the JSX to be rendered.
  return (
    <div>
      {/* Display the time remaining in a paragraph. */}
      <p>Time Remaining: {timeRemaining}</p>
    </div>
  );
};
// Export the CountdownTimer component so it can be used in other parts of the application.
export default CountdownTimer;