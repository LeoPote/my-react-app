import {useEffect, useMemo, useState} from 'react'

export function UseMemoDemo() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState<number>(0);

  const myAccounts = {
    account01: 12312,
    account02: 12313,
  };

  const myAccountsMemo = useMemo(() =>
  {
    return {
      account01: 12312,
      account02: 12313
    }
  }, []);

  useEffect(() => {
    console.log("count with myAccounts demo", count);
  }, [myAccountsMemo]);

  useEffect(() => {
    console.log("count without myAccounts memo", count);
  }, [myAccounts]);

  return (
    <>
      <hr />
      <h2>Counter!</h2>
      <b>{count}</b>
      <hr />
      <h2>My favorite color is {color}!</h2>
      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >Count</button>

      <button
        type="button"
        onClick={() => setColor((color) => color === "red" ? "green" : "red")}
      >Change Color</button>

    </>
  )
}

