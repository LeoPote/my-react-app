import {useEffect, useRef, useState} from 'react'

export function PollingDemo() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<any>();
  const inputElement = useRef<any>();
  const [isPollingRunning, setIsPollingRunning] = useState(false);

  useEffect(() => {
    const pollingCallback = () => {
      setCount(count => count + 1);
      console.log("pollingCallback", count);
    }

    const startPolling = () => {
      intervalRef.current = setInterval(pollingCallback, 5000);
    }

    const stopPolling = () => {
      clearInterval(intervalRef.current);
    }

    if (isPollingRunning) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => stopPolling();

  }, [isPollingRunning]);

  return (
    <>
      <h2>Polling</h2>
      <div>{count}</div>
      <input type="text" ref={inputElement}  value={isPollingRunning ? "Polling Running" : "Polling stopped"}/>
      <button onClick={() => setIsPollingRunning(b => !b)}>{isPollingRunning ? "Stop Polling" : "Start Polling"}</button>
    </>
  );
}

