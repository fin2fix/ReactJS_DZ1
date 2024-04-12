import "./Message.css";

function Message({ text }) {
  return (
    <div className="text__block">
      <p className="text"> Вам передали сообщение: "{text}"</p>
    </div>
  );
}

export default Message;
