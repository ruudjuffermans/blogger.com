import { useState } from "react";

import styles from "./style.module.css";

import Portrait from "../../../../components/Portrait";
import Icon from "../../../../components/Icon/Icon";

const MessengerHeader = ({ showUserlist, setShowUserlist }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__flex}>
        <div className={styles.header__left}>
          <Portrait size={"50px"} />
        </div>
        <div className={styles.header__mid}>
          <h1 className={styles.header__title}>Ruud Juffermans</h1>
          <span>.</span>
        </div>
        <div className={styles.header__right}>
          <button onClick={() => setShowDrawer(true)}>
            {/* <Menu color={"inherit"} size={"24px"} /> */}
          </button>
        </div>
      </div>

      <button
        className={` ${styles.userlistbutton} ${showUserlist && styles.open}`}
        onClick={() => setShowUserlist(!showUserlist)}
      >
        <Icon name={"left-fill"}></Icon>
      </button>
    </header>
  );
};

export default MessengerHeader;
