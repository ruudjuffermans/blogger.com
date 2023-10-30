import { useState } from "react";
import Icon from "../../../../components/Icon/Icon";
import Link from "../../../../components/Link";

import styles from "./style.module.css";
import Modal from "../../../../components/Modal";
import MessengerMenu from "../MessengerMenu";
import Section from "../../../../components/Section";

const data = [
  { name: "Login", to: "/login" },
  { name: "Register", to: "/register" },
  { name: "Forgot Password", to: "/forgot-password" },
  { name: "Profile", to: "/profile" },
  { name: "Chat", to: "/chat" },
  { name: "Account", to: "/account" },
  { name: "Create Blog", to: "/create-blog" },
  { name: "Blog Post", to: "/post" },
  { name: "Logout", to: "/login" },
];

const Menu = ({ show, setShow, users }) => {
  return (
    <Modal show={show} setShow={setShow}>
      {({ state }) => (
        <div className={[styles.drawer, styles[`drawer--${state}`]].join(" ")}>
          <Section>
            <button onClick={() => setShow(false)}>
              <Icon name={"close-fill"} size={"32px"} color="white" />
            </button>
            <MessengerMenu users={users} />
          </Section>
        </div>
      )}
    </Modal>
  );
};

export default Menu;
