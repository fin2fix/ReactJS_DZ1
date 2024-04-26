import { useContext } from "react";
import { UserContext, ThemeContext } from "../../App";
import classes from "./Profile.module.css";

export default function ContentSite() {
  const userName = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <>
      <section
        className={theme === "light" ? `${classes.light}` : `${classes.dark}`}
      >
        <h2> Hello {userName}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic omnis
          nesciunt rerum, exercitationem voluptatum ex vitae rem at excepturi
          expedita quod voluptatem distinctio id natus maiores iste vero laborum
          architecto.
        </p>
      </section>
    </>
  );
}
