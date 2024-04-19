import { messages } from "./MessagesData";
import MessageProps from "./MessagesProps";
import { PropTypes } from "prop-types";

export default function MessagesList({ themeColor }) {
  return (
    <>
      {messages.map((message) => (
        <MessageProps themeColor={themeColor} key={message.id} {...message} />
      ))}
    </>
  );
}

MessagesList.propTypes = {
  themeColor: PropTypes.string,
};
