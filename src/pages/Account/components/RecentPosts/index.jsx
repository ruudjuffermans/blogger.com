import Container from "../../../../components/Container";
import Card2 from "../../../../components/PostCards/Card2";
import Section from "../../../../components/Section";
import CreateStoryCard from "../CreateStoryCard";
import styles from "./style.module.css";

const RecentPosts = ({ items }) => {
  const story1 = items[0];
  const story2 = items[1];
  return (
    <Section centerTitle title={"My Recent Posts"}>
      <div className={styles.grid}>
        <Card2 story={story1} />
        <Card2 story={story2} />
        <CreateStoryCard />
      </div>
    </Section>
  );
};

export default RecentPosts;
