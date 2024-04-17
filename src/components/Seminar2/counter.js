import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count + "  "}</span>
      <button
        onClick={() => {
          setCount((item) => ++item);
        }}
      >
        click +1
      </button>
    </div>
  );
}

export default Counter;
