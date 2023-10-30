import Container from "../../../Container";
import Icon from "../../../Icon/Icon";
import styles from "./style.module.css";

const FooterBase = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.divider}>
          <div>Copyright © 2024 blogger.com</div>

          <div className={styles.socials}>
            {socials.map((item, i) => (
              <a href={item.url} className={styles.social__item} key={i}>
                <Icon name={item.icon} size={"20px"} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBase;
