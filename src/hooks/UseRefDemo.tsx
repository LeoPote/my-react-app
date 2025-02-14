import {useEffect, useRef, useState} from 'react'

export function UseRefDemo() {
  const count = useRef(0);
  const inputElement = useRef<any>();
  const [color, setColor] = useState("red");

  useEffect(() => {
    count.current = count.current + 1;
  }, [color]);

  const focusInput = () => {
    inputElement.current!.focus();
  };

  return (
    <>
      <div>{count.current}</div>
      <input type="text" ref={inputElement}  value={color}/>
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={() => setColor(color => color === "red" ? "green" : "red")}>Change color</button>
    </>
  );
}

