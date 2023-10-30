import Card from "../../../../components/Card";
import MessengerFooter from "./Footer";
import MessengerHeader from "./Header";
import Message from "./Message";
import styles from "./style.module.css";

const MessengerWindow = ({ messages = [] }) => {
  return (
    <div className={styles.chat__window}>
      <ul className={styles.chat__list}>
        {messages.map((x, i) => (
          <Message key={i} message={x} />
        ))}{" "}
      </ul>
    </div>
  );
};

export default MessengerWindow;
