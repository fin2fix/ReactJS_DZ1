// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.
// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import { Button, TextField, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function TodoList() {
  const [inputTask, setinputTask] = useState("");
  const [arr, setArr] = useState([]);

  function clickHandler() {
    if (!inputTask.trim()) {
      return;
    }
    setArr([...arr, inputTask]);
    setinputTask("");
  }

  const handleDelete = (event) => {
    setArr(arr.splice(arr.indexOf(event), 1));
  };

  return (
    <>
      <TextField
        onChange={(event) => setinputTask(event.target.value)}
        width="200"
        id="outlined-basic"
        label="Введите новую задачу"
        variant="outlined"
        value={inputTask}
        style={{ marginBottom: 20, marginTop: 20 }}
      />

      <Button
        onClick={clickHandler}
        width="200"
        variant="contained"
        style={{ marginBottom: 20 }}
      >
        Нажми для добавления задачи
      </Button>

      {arr.map((item) => (
        <Card
          sx={{ minWidth: 275 }}
          key={arr.indexOf(item)}
          style={{ marginBottom: 20 }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item}
            </Typography>
          </CardContent>
          <CardActions>
            <Chip
              label="Удалить задачу"
              value={item}
              onClick={handleDelete}
              onDelete={handleDelete}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
            />
          </CardActions>
        </Card>
      ))}
    </>
  );
}
