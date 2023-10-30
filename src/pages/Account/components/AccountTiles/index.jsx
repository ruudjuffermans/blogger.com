import Row, { Col } from "../../../../components/Row";
import DisplayTile from "./DisplayTile";
import styles from "./style.module.css";

const AccountTiles = ({ data }) => {
  const { general, address, email, password, profile, socials } = data;
  return (
    <>
      <Row style={{ rowGap: "20px" }}>
        <Col sm={6} md={4} lg={3}>
          <DisplayTile title="general" values={{ ...general }} />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <DisplayTile
            card
            title="login & password"
            editName="change password"
            values={{ email, password }}
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <DisplayTile card title="profile" values={{ ...profile }} />
        </Col>

        <Col sm={6} md={4} lg={3}>
          <DisplayTile card title="socials">
            <div>
              <Row>
                <Col>
                  <span>Twitter:</span>
                </Col>
                <Col width={"fit-content"}>
                  <span>{socials.twitter}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Instagram:</span>
                </Col>
                <Col width={"fit-content"}>
                  <span>{socials.instagram}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Facebook:</span>
                </Col>
                <Col width={"fit-content"}>
                  <span>{socials.facebook}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Linkedin:</span>
                </Col>
                <Col width={"fit-content"}>
                  <span>{socials.linkedin}</span>
                </Col>
              </Row>
            </div>
          </DisplayTile>
        </Col>

        <Col sm={6} md={4} lg={3}>
          <DisplayTile
            card
            title="address"
            values={{
              ...address,
            }}
          >
            <div>
              <div>{address.line1}</div>
              <div>{address.line2}</div>
              <div></div>
              <div>
                <span>{address.city}</span>&nbsp;
                <span>{address.zipcode}</span>
              </div>
              <div>{address.country}</div>
            </div>
          </DisplayTile>
        </Col>
      </Row>
    </>
  );
};

export default AccountTiles;
