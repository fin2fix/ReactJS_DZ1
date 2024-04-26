import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </>
  );
}
