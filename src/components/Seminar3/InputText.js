import { Button, TextField } from "@mui/material";
// import { Typography } from "@mui/material";
import { useState } from "react";

export default function InputText() {
  const [text, setText] = useState("");
  const [printedText, setprintedText] = useState("");

  const handleText = (event) => {
    event.preventDefault();
    setprintedText(text);
    setText("");
  };

  return (
    <>
      <TextField
        onChange={(e) => setText(e.target.value)}
        fullWidth
        id="outlined-basic"
        label="Введите текст"
        variant="outlined"
        value={text}
        style={{ marginBottom: 20 }}
      />
      <Button
        onClick={handleText}
        fullWidth
        variant="contained"
        style={{ marginBottom: 20 }}
      >
        Отобразить текст
      </Button>

      <h4>{printedText}</h4>
      {/* {printedText && <Typography variant="h5"> {text}</Typography>} */}
    </>
  );
}
