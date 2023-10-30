import Card from "../../../../components/Card";
import Icon from "../../../../components/Icon/Icon";
import Link from "../../../../components/Link";
import styles from "./style.module.css";

const CreateStoryCard = () => {
  return (
    <Link to={"/create"}>
      <Card className={styles.nocard}>
        <Icon name={"quill-pen-line"} size={"40px"} />
        <h3>Create a new Story</h3>
        <p>If you feel inspired!</p>
      </Card>
    </Link>
  );
};

export default CreateStoryCard;
