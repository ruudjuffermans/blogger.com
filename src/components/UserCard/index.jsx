import Card from "../Card";
import Icon from "../Icon/Icon";
import { withLink } from "../Link";
import Portrait from "../Portrait";
import Row, { Col } from "../Row";

import styles from "./style.module.css";

const UserCard = ({ user }) => {
  const LinkIcon = withLink(Icon);
  const { general, profile, socials, statistics } = user;
  return (
    <Card className={styles.usercard}>
      <Row>
        <div className={styles.right}>
          <div className={styles.portrait__box}>
            <Portrait size={"auto"} />
          </div>
        </div>
        <Col>
          <div className={styles.user__job}>{profile.job}</div>
          <h4 className={styles.user__name}>
            {general.firstname} {general.lastname}
          </h4>
          <div className={styles.user__bio}>{profile.bio}</div>
          <div className={styles.card__bottom}>
            <div>
              {socials.map((x, i) => (
                <LinkIcon
                  className={styles.social__link}
                  to={x.url}
                  color={"#222"}
                  size={"18px"}
                  name={`${x.name}-fill`}
                  key={i}
                />
              ))}
            </div>
            <div>
              {statistics.map((x, i) => (
                <div className={styles.stat} key={i}>
                  <span className={styles.stat__key}>{x.name}</span>
                  <span className={styles.stat__val}>{x.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
