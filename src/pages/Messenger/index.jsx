import { useState } from "react";
import Row, { Col } from "../../components/Row";
import Section from "../../components/Section";
import useMediaQuery from "../../hooks/useMediaQuery";
import Menu from "./components/MessengerDrawer";
import MessengerMenu from "./components/MessengerMenu";
import MessengerWindow from "./components/MessengerWindow";
import Icon from "../../components/Icon/Icon";
import Card from "../../components/Card";

const users = [
  {
    name: "User1",
    portrait: "team-4.jpg",
    id: 1,
    lastOnline: "Last online 1 hour ago",
  },
  {
    name: "User2",
    portrait: "team-4.jpg",
    id: 2,
    lastOnline: "Last online 23 hours ago",
  },
  {
    lastOnline: "Last online 3 days ago",
    name: "User3",
    portrait: "team-4.jpg",
    id: 3,
  },
];

const messages = [
  { position: "incoming", text: "Hello", time: "3:14am" },
  { position: "outgoing", text: "Hi there!", time: "3:20am" },
  { position: "incoming", text: "How are you?", time: "3:22am" },
  { position: "outgoing", text: "I'm good, thanks!", time: "3:25am" },
  { position: "incoming", text: "That's great to hear!", time: "3:28am" },
  { position: "outgoing", text: "Yes, it is!", time: "3:30am" },
  {
    position: "incoming",
    text: "What have you been up to?",
    time: "3:35am",
  },
  { position: "outgoing", text: "Not much, just working.", time: "3:40am" },
  { position: "incoming", text: "Same here, busy day.", time: "3:45am" },
  { position: "outgoing", text: "I can imagine!", time: "3:50am" },
  {
    position: "incoming",
    text: "Anyway, have a great day!",
    time: "4:00am",
  },
  {
    position: "outgoing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt distinctio vero necessitatibus fuga deserunt repudiandae sapiente provident consectetur obcaecati at sed blanditiis maiores, eius quo! Fugit voluptatibus illum atque?",
    time: "4:05am",
  },
];

const Messenger = () => {
  const match = useMediaQuery("(min-width: 992px)");
  const [show, setShow] = useState(false);

  if (match) {
    return (
      <Section full>
        <Row>
          <div style={{ width: "300px" }}>
            <Card full>
              <Card.Header>
                <h3>Chats</h3>
              </Card.Header>
              <Card.Body>
                <MessengerMenu users={users} />
              </Card.Body>
            </Card>
          </div>
          <Col>
            <Card full>
              <Card.Header>
                <h3>Window</h3>
              </Card.Header>

              <MessengerWindow messages={messages} />
            </Card>
          </Col>
        </Row>
      </Section>
    );
  } else {
    return (
      <Section full>
        {/* <Card style={{ width: "300px" }}>
            <Card.Header>
              <h3>Chats</h3>
            </Card.Header>
            <Card.Body>
              <MessengerMenu users={users} />
            </Card.Body>
          </Card> */}

        <Card full>
          <Card.Header>
            <div>
              <button onClick={() => setShow(!show)}>
                <Icon name={"menu-fill"} />
              </button>
              <h3>Window</h3>
            </div>
            <Menu show={show} setShow={setShow} users={users} />
          </Card.Header>

          <MessengerWindow messages={messages} />
        </Card>
      </Section>
    );
  }
};

export default Messenger;
