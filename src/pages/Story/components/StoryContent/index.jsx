import styles from "./style.module.css";

const StoryContent = ({ content }) => {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default StoryContent;
