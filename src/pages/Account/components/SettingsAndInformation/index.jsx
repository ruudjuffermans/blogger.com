import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import Icon from "../../../../components/Icon/Icon";
import Link from "../../../../components/Link";
import ProgressBar from "../../../../components/ProgressBars/Bar";
import ProgressCircle from "../../../../components/ProgressBars/Circle";
import Row, { Col } from "../../../../components/Row";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import styles from "./style.module.css";

const SettingsAndInformation = ({ user }) => {
  const match = useMediaQuery("(min-width: 576px)");
  return (
    <div className={styles.grid}>
      <Card full className={[styles.todo, styles.card].join(" ")}>
        <div className={styles.card__title}>Complete your profile</div>
        <div className={styles.card__subtitle}>
          Enhance Your Online Presence: Complete Your Profile Now!
        </div>
        <div className={styles.card__body}>
          <Row>
            {match && (
              <Col>
                <div className={styles.progress__circle}>
                  <ProgressCircle size={"200"} width={"15"} percentage={0} />
                </div>
              </Col>
            )}

            <Col style={{ float: "left" }} className={styles.todo_list}>
              {!match && (
                <div className={styles.progress__bar}>
                  <ProgressBar size={"auto"} percentage={30} />
                </div>
              )}
              <ul className={styles.todo__list}>
                <li>
                  <button className={styles.account__todo}>
                    <Icon size="20px" name={"checkbox-blank-line"} />
                    <div className={styles.todo__desc}>
                      Add your general info
                    </div>
                    <Icon size="20px" name={"arrow-right-line"} />
                  </button>
                </li>
                <li>
                  <button className={styles.account__todo}>
                    <Icon size="20px" name={"checkbox-blank-line"} />
                    <div className={styles.todo__desc}>Upload a portrait</div>
                    <Icon size="20px" name={"arrow-right-line"} />
                  </button>
                </li>
                <li>
                  <button className={styles.account__todo}>
                    <Icon size="20px" name={"checkbox-blank-line"} />
                    <div className={styles.todo__desc}>Add your address</div>
                    <Icon size="20px" name={"arrow-right-line"} />
                  </button>
                </li>
                <li>
                  <button className={styles.account__todo}>
                    <Icon size="20px" name={"checkbox-line"} />
                    <div className={styles.todo__desc}>
                      Complete Profile info
                    </div>
                    <Icon size="20px" name={"arrow-right-line"} />
                  </button>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Card>
      <Card full className={[styles.profile, styles.card].join(" ")}>
        <div className={styles.card__title}>Profile</div>
        <div className={styles.card__subtitle}>Let's Get Personal</div>
        <div className={styles.card__body}>
          <table>
            <tbody>
              <tr>
                <td className={styles.body__key}>job</td>
                <td className={styles.body__val}>ruudjuf@gmail.com</td>
              </tr>
              <tr>
                <td className={styles.body__key}>bio</td>
                <td className={styles.body__val}>{user.profile.bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link
          className={styles.card__edit}
          underline
          small
          button
          onClick={() => {
            console.log("hit");
          }}
        >
          edit
        </Link>
      </Card>
      <Card full className={[styles.general, styles.card].join(" ")}>
        <div className={styles.card__title}>General</div>
        <div className={styles.card__subtitle}>
          You're Not Just a Number you know!
        </div>
        <div className={styles.card__body}>
          <table>
            <tbody>
              <tr>
                <td className={styles.body__key}>firstname</td>
                <td className={styles.body__val}>Ruud</td>
              </tr>
              <tr>
                <td className={styles.body__key}>lastname</td>
                <td className={styles.body__val}>Juffermans</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link
          className={styles.card__edit}
          underline
          small
          button
          onClick={() => {
            console.log("hit");
          }}
        >
          edit
        </Link>
      </Card>
      <Card full className={[styles.general, styles.nocard].join(" ")}>
        <div className={styles.card__title}>General</div>
        <div className={styles.card__subtitle}>
          You're Not Just a Number you know!
        </div>
        <div
          style={{ margin: "auto", textAlign: "center" }}
          className={styles.card__body}
        >
          <Button nocard round>
            add information
          </Button>
        </div>
      </Card>
      <Card full className={[styles.account, styles.card].join(" ")}>
        <div className={styles.card__title}>Login & Password</div>
        <div className={styles.card__subtitle}>Secure Your Access</div>

        <div className={styles.card__body}>
          <table>
            <tbody>
              <tr>
                <td className={styles.body__key}>email</td>
                <td className={styles.body__val}>ruudjuf@gmail.com</td>
              </tr>
              <tr>
                <td className={styles.body__key}>password</td>
                <td className={styles.body__val}>••••••••••••••••••</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link
          className={styles.card__edit}
          underline
          small
          button
          onClick={() => {
            console.log("hit");
          }}
        >
          change password
        </Link>
      </Card>

      <Card full className={[styles.socials, styles.card].join(" ")}>
        <div className={styles.card__title}>Connect Your Accounts</div>
        <div className={styles.card__subtitle}>Expand Your Social Reach</div>
        <div className={styles.card__body}>
          <table>
            <tbody>
              <tr>
                <td className={styles.body__key}>twitter</td>
                <td className={styles.body__val}>
                  <a
                    className={styles.body__link}
                    href="https://www.twitter.com/my-handle"
                  >
                    https://www.twitter.com/my-handle
                  </a>
                </td>
              </tr>
              <tr>
                <td className={styles.body__key}>instagram</td>
                <td className={styles.body__val}>
                  <a
                    className={styles.body__link}
                    href="https://www.twitter.com/my-handle"
                  >
                    https://www.twitter.com/my-handle
                  </a>
                </td>
              </tr>
              <tr>
                <td className={styles.body__key}>facebook</td>
                <td className={styles.body__val}>
                  <a
                    className={styles.body__link}
                    href="https://www.twitter.com/my-handle"
                  >
                    https://www.twitter.com/my-handle
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link
          className={styles.card__edit}
          underline
          small
          button
          onClick={() => {
            console.log("hit");
          }}
        >
          edit
        </Link>
      </Card>
      <Card full className={[styles.address, styles.card].join(" ")}>
        <div className={styles.card__title}>Address</div>
        <div className={styles.card__subtitle}>
          Don't Worry, We Won't Show Up Unannounced
        </div>
        <div className={styles.card__body}>
          <div>Chestnut Avenue 88</div>
          <div></div>
          <div>
            <span>Zwanenburg</span>&nbsp;
            <span>1161VD</span>
          </div>
          <div>Netherlands</div>
        </div>
        <Link
          className={styles.card__edit}
          underline
          small
          button
          onClick={() => {
            console.log("hit");
          }}
        >
          edit
        </Link>
      </Card>

      <Card full className={[styles.delete, styles.card].join(" ")}>
        <div className={styles.card__title}>Delete Account</div>
        <div className={styles.card__subtitle}>We're Sorry to See You Go</div>
        <div
          style={{ margin: "auto", textAlign: "center" }}
          className={styles.card__body}
        >
          <div className={styles.card__icon}>
            <Icon name={"error-warning-line"} color={"#00000028"} size="70px" />
          </div>

          <Button small round>
            Delete Account &nbsp;{" "}
            <Icon name={"error-warning-line"} size="20px" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsAndInformation;
