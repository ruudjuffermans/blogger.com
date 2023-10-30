import Card from "../../../../components/Card";
import Link from "../../../../components/Link";
import styles from "./style.module.css";

const LeaveCommentCard = () => {
  return (
    <Link to={"/create"}>
      <Card className={styles.nocard}>
        <h3>Create a new Story</h3>
      </Card>
    </Link>
  );
};

export default LeaveCommentCard;
