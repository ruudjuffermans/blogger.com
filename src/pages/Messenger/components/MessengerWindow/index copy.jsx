import Card from "../../../components/Card";
import MessengerFooter from "./Footer";
import MessengerHeader from "./Header";
import Message from "./Message";
import styles from "./style.module.css";

const ChatWindow = ({ messages }) => {
  return (
    <Card className={styles.chat__wrapper}>
      <MessengerHeader />

      <div className={styles.chat__window}>
        <ul className={styles.chat__list}>
          {messages.map((x, i) => (
            <Message key={i} message={x} />
          ))}{" "}
        </ul>
      </div>
      <MessengerFooter />
    </Card>
  );
};

export default ChatWindow;
