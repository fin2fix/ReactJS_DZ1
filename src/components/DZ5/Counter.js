import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./ThemeChangeSlice";

export default function Counter() {
  const theme = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{theme}</h1>
      <button onClick={() => dispatch(changeTheme())}>Change theme</button>
    </>
  );
}
