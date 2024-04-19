import { useState } from "react";

function CounterSem3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count + "  "}</span>
      
{/* Кнопка, плюсующая счетчик +1 */}
      <button
        onClick={() => {
          setCount((item) => ++item);
        }}
      >
        click +1
      </button>
{/* Кнопка, минусующая счетчик -1 */}
      <button
        onClick={() => {
          setCount((item) => --item);
        }}
      >
        click -1
      </button>
    </div>
  );
}

export default CounterSem3;
