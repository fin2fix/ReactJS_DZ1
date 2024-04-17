import "./App.css";

//import CurrentTime from "./components/Seminar1/CurrentTime";
//import "./components/Seminar1/CurrentTime.css";
//import EvenCard from "./components/Seminar1/EvenCard";
//import Greetings from "./components/Seminar1/Greetings";
//import Message from "./components/DZ1/Message";

import Counter from "./components/Seminar2/counter";
import TextInput from "./components/Seminar2/TextInput";
import TaskInput from "./components/Seminar2/TaskInput";
import TimerScreen from "./components/Seminar2/TimerScreen";

// usf - useState
// ffc - function component

function App() {
  return (
    <div className="App">
      {/*
       <header className="App-header">
        <div>
          <Message text="Заканчивай с уроками - пойдем гулять с ребенком" />
        </div>
        <h4>Новый текст</h4>
        <p>Какой-то абзац</p>
        <Greetings />
        <CurrentTime />
        <div>
          <EvenCard
            title="Scorpions"
            date="13.04.2024 в 19.00"
            location="Москва, Лужники"
            flag="true"
          />

          <EvenCard
            title="Парк Горького"
            date="14.04.2024 в 20.00"
            location="Москва, Кремль"
          />
        </div>
      </header> 
      */}
      <Counter />
      <TextInput />
      <TaskInput/>
      <TimerScreen/>
    </div>
  );
}
export default App;
