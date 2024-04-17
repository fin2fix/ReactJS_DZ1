import { useState } from "react";

function TaskInput() {
  const [inputTask, setinputTask] = useState("");
  const [arr, setArr] = useState(["Prod 1", "Prod 2"]);

  function clickHandler() {
    if (!inputTask.trim()) {
      return;
    }
    setArr([...arr, inputTask]);
    setinputTask("");
  }

  return (
    <>
      <label htmlFor="input">Введите текст:</label>
      <input
        onChange={(event) => setinputTask(event.target.value)}
        type="text"
        id="input"
        value={inputTask}
        maxLength="10"
      ></input>
      <button onClick={clickHandler}>Нажми для добавления задачи</button>
      <ul>
        {arr.map((item) => (
          <li key={arr.indexOf(item)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default TaskInput;
