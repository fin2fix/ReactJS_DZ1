// дз №1
// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание: Установить расширение React Devtools.


import "./Message.css";

function Message({ text }) {
  return (
    <div className="text__block">
      <p className="text"> Вам передали сообщение: "{text}"</p>
    </div>
  );
}

export default Message;
