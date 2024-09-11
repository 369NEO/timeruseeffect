import './App.css'
import React from 'react';
import CountdownTimer from './countdownTimer/CountdownTimer.jsx'

function App() {

  return (
    //This line is where you utilize the CountdownTimer component that you've created (or imported).
    // This is a prop being passed to the CountdownTimer component. It sets the initial value of the countdown timer to 10. You can change this value to any number you want the timer to start from.
<div>
    <h1>Countdown Timer</h1>
    <CountdownTimer initialValue={10} />
  </div>
  )
}

export default App
