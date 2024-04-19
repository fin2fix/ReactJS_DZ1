import "./App.css";
import TemperatureConverter from "./components/DZ3/TemperatureConverter";
import TodoList from "./components/DZ3/TodoList";
//import CounterSem3 from "./components/Seminar3/CounterSem3";
//import CommentsList from "./components/DZ2/CommentsList";
//import GreetingsSem3 from "./components/Seminar3/GreetingsSem3";
//import InputText from "./components/Seminar3/InputText";
//import MessagesList from "./components/Seminar3/MessagesList";
//import ThemeSwitcher from "./components/Seminar3/ThemeSwitcher";
//import CurrentTime from "./components/Seminar1/CurrentTime";
//import "./components/Seminar1/CurrentTime.css";
//import EvenCard from "./components/Seminar1/EvenCard";
//import Greetings from "./components/Seminar1/Greetings";
//import Message from "./components/DZ1/Message";
//import Counter from "./components/Seminar2/counter";
//import TextInput from "./components/Seminar2/TextInput";
//import TaskInput from "./components/Seminar2/TaskInput";
//import TimerScreen from "./components/Seminar2/TimerScreen";

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
      
      <Counter />
      <TextInput />
      <TaskInput/>
      <TimerScreen/> 
      <CommentsList/>
      <GreetingsSem3 userName="Ivan" />
      <GreetingsSem3 userName="Petr" />
      <CounterSem3 />
      <MessagesList />
      <ThemeSwitcher />
      <InputText />*/}
      <TemperatureConverter/>
      <TodoList/>
    </div>
  );
}
export default App;
