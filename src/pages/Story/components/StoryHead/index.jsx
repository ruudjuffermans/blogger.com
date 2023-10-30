import styles from "./style.module.css";

const StoryHead = ({ title, introduction, author, date, image }) => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <h1 className={styles.title}>{title}</h1>
      <div>
        <p className={styles.introduction}>{introduction}</p>
      </div>
      <div>
        <p className={styles.undertitle}>
          by
          <span> {author}</span> - <span>{date}</span>
        </p>
      </div>
      <div>
        <img alt="story thumbnail" src={image} />
      </div>
    </div>
  );
};

export default StoryHead;
