import Icon from "../../../../components/Icon/Icon";
import styles from "./style.module.css";

const Message = ({ message }) => {
  const { position, text, time } = message;
  return (
    <div className={`${styles.message__wrap} ${styles[position]}`}>
      <div className={styles.message}>{text}</div>

      <span className={styles.time}>
        <Icon name={"time-fill"} color={"grey"} size="16px" />
        {time}
      </span>
    </div>
  );
};

export default Message;
