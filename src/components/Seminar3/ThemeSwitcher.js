import { useState } from "react";
import MessagesList from "./MessagesList";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("body").style.backgroundColor = "black";
    } else {
      setTheme("light");
      document.querySelector("body").style.backgroundColor = "white";
    }
  }

  return (
    <>
      <button onClick={switchTheme}>Switch Theme</button>
      <MessagesList themeColor={theme} />
    </>
  );
}
