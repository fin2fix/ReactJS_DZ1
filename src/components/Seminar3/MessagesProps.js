import { PropTypes } from "prop-types";
import "./Message.css";

export default function MessagesProps({ text, time, authorID, themeColor }) {
  return (
    <>
      <h4 className={themeColor === "light" ? "light" : "dark"}>
        Author № {authorID}
      </h4>
      <p className={themeColor === "light" ? "light" : "dark"}>{text}</p>
      <p className={themeColor === "light" ? "light" : "dark"}>
        Post time: {time}
      </p>
    </>
  );
}

MessagesProps.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  authorID: PropTypes.number.isRequired,
  themeColor: PropTypes.string.isRequired,
};
