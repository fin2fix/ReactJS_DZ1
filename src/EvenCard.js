import "./EvenCard.css";

// function EvenCard(props) {
  
//   return (
//     <div className="evenCard">
//       <h2 style={{ color: props.flag ? "green" : "red" }}>
//         <span className="evenCard__title">Группа </span>"{props.title}"
//       </h2>
//       <h2>
//         <span className="evenCard__date">Дата: </span>
//         {props.date}
//       </h2>
//       <h2>
//         <span className="evenCard__description">Адрес: </span>
//         {props.location}
//       </h2>
//     </div>
//   );
// }

function EvenCard({title, date, location, flag}) {
  
  return (
    <div className="evenCard">
      <h2 style={{ color: flag ? "green" : "red" }}>
        <span className="evenCard__title">Группа </span>"{title}"
      </h2>
      <h2>
        <span className="evenCard__date">Дата: </span>
        {date}
      </h2>
      <h2>
        <span className="evenCard__description">Адрес: </span>
        {location}
      </h2>
    </div>
  );
}

export default EvenCard;
