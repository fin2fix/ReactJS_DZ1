// ДЗ №2
// Задание: Список комментариев с удалением.
// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.
// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const clickHandler = (event) => {
    setComments(comments.splice(comments.indexOf(event), 1));
  };

  return (
    <>
      <ul>
        {comments.map((item) => (
          <>
            <li key={comments.indexOf(item)}>
              Комментарий {item.id}: {item.text}
            </li>
            <button onClick={clickHandler}>Удалить</button>
          </>
        ))}
      </ul>
    </>
  );
}

export default CommentsList;
