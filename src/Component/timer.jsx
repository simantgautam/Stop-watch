import { useState, useEffect, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  let interval = useRef(null);

  const handleStart = () => {
    console.log(interval.current);
    if (!interval.current) {
      interval.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    console.log(interval.current);
    clearInterval(interval.current);
    interval.current = null;
  };

  const handleReset = () => {
    setTime(0);
    interval.current = null;
    clearInterval(interval.current);
  };

  return (
    <div>
      <h1>Timer is : {time}</h1>
      <button onClick={handleStart}>Start</button>&nbsp;&nbsp;
      <button onClick={handlePause}>Pause</button>&nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button>&nbsp;&nbsp;
    </div>
  );
}

export default Timer;
