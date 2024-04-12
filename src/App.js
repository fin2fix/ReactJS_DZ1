import "./App.css";
import CurrentTime from "./CurrentTime";
import "./CurrentTime.css";
import EvenCard from "./EvenCard";
import Greetings from "./Greetings";
import Message from "./Message";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}
export default App;
