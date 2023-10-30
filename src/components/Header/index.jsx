import { useState } from "react";
import Container from "../Container";
import Icon from "../Icon/Icon";
import Link from "../Link";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./style.module.css";

const navigationLinks = [
  { name: "Home", to: "/" },
  { name: "Account", to: "/account" },
  { name: "Create", to: "/create" },
  { name: "Chat", to: "/chat" },
  { name: "Profile", to: "/profile" },
  { name: "Story", to: "/story" },
];

const Header = ({ navigation = [...navigationLinks] }) => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__flex}>
          <a href="/">
            <Logo size={"24px"} color={"inherit"} />
          </a>

          <nav className={styles.nav}>
            {navigation.map(({ name, to }, i) => (
              <Link underline nav key={i} to={to}>
                {name}
              </Link>
            ))}
          </nav>
          <Menu show={show} setShow={setShow} />
          <button onClick={() => setShow(!show)}>
            <Icon name={"menu-fill"} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
