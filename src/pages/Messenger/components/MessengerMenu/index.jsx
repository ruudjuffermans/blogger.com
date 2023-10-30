import Card from "../../../../components/Card";
import Portrait from "../../../../components/Portrait";
import styles from "./style.module.css";

const UserItem = ({ user }) => {
  const { lastOnline, name, online } = user;
  return (
    <a
      href="/#"
      onClick={(e) => {
        e.preventDefault();
        console.log("hit");
      }}
      className={styles.useritem}
    >
      <Portrait size="50px" />
      <div>
        <h4 className={styles.title}>{name}</h4>

        <span
          className={styles[`status--${online ? "online" : "offline"}`]}
        ></span>
        <span className={styles.subtitle}>{lastOnline}</span>
      </div>
    </a>
  );
};

const MessengerMenu = ({ users = [] }) => {
  return (
    <ul className={styles.list}>
      {users.map((x, i) => (
        <li key={i}>
          <UserItem user={x} />
        </li>
      ))}
    </ul>
  );
};

export default MessengerMenu;
