// Задание 1: Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.


import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function TemperatureConverter() {
  const [celsiumTemp, setCelsiumTemp] = useState("");
  const [farenheitTemp, setFarenheitTemp] = useState("");

  const handleText = (event) => {
    event.preventDefault();
    if (celsiumTemp !== "") {
      setFarenheitTemp((celsiumTemp * 9) / 5 + 32);
      setCelsiumTemp("");
    } else if (farenheitTemp !== "") {
      setCelsiumTemp(((farenheitTemp - 32) * 5) / 9);
      setFarenheitTemp("");
    }
  };

  return (
    <>
      <TextField
        onChange={(t) => setCelsiumTemp(t.target.value)}
        width = "200"
        id="outlined-basic"
        label="Градусы Цельсия"
        variant="outlined"
        value={celsiumTemp}
        style={{ marginBottom: 20, marginTop: 20 }}
      />
      <Button
        onClick={handleText}
        width = "200"
        variant="contained"
        style={{ marginBottom: 20 }}
      >
        Конвертировать температуру
      </Button>
      <TextField
        onChange={(t) => setFarenheitTemp(t.target.value)}
        width = "200"
        id="outlined-basic"
        label="Градусы Фаренгейта"
        variant="outlined"
        value={farenheitTemp}
        style={{ marginBottom: 100 }}
      />
    </>
  );
}
