import Icon from "../../../../components/Icon/Icon";
import { withLink } from "../../../../components/Link";
import styles from "./style.module.css";

const StoryFoot = ({ tags, socials }) => {
  const LinkIcon = withLink(Icon);
  return (
    <div className={styles.content__foot}>
      <div className={styles.tag__wrapper}>
        <h5>Tags:</h5>
        <ul className={styles.tag__list}>
          {tags.map((tag, i) => (
            <li className={styles.tag__item} key={i}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.share__wrapper}>
        <h5>Share</h5>
        <div>
          {socials.map((x, i) => (
            <LinkIcon
              className={styles.social__link}
              to={x.url}
              name={`${x.name}-fill`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryFoot;
