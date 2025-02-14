import {useCallback, useEffect, useRef, useState} from 'react'

export function UseCallbackDemo() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState<number>(0);

  const [inputValue, setInputValue] = useState("");
  const ref = useRef(0);

  useEffect(() => {
    ref.current = ref.current + 1;
    console.log('ref.current', ref.current);
  }, []);

  const changeColorWithCallback = useCallback(() => {
    setColor((color) => color === "red" ? "blue": "red");
  },[]);

  const changeColorWithoutCallback = () => {
    setColor((color) => color === "red" ? "blue": "red");
  };

  useEffect(() => {
    console.log("count with change color callback", count);
  }, [changeColorWithCallback]);

  useEffect(() => {
    console.log("count without change color callback", count);
  }, [changeColorWithoutCallback]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Render Count: {ref.current}</h2>
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
        onClick={() => changeColorWithCallback()}
      >Change Color</button>

    </>
  )
}

