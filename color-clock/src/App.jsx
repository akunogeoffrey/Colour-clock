import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  // State to hold the current time, initialized to right now
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect runs after render; setInterval updates the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format the date and time using date-fns
  const formattedDate = format(currentTime, 'EEEE, MMMM do yyyy');
  const formattedTime = format(currentTime, 'hh:mm:ss aa');

  return (
    <div className="clock-container">
      <h1 className="clock-title">🕐 Color Clock</h1>
      <div className="clock-box">
        {/* Display the formatted time */}
        <p className="clock-time">{formattedTime}</p>
        {/* Display the formatted date */}
        <p className="clock-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default App;