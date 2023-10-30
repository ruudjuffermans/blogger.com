import Card from "../../components/Card";
import Link from "../../components/Link";
import Section from "../../components/Section";
import LoginForm from "./components/ForgotPassworForm";

const ForgotPassword = () => {
  return (
    <>
      <Section>
        <Card style={{ margin: "auto", maxWidth: "400px" }}>
          <Card.Header>
            <h1 style={{ margin: 0, fontWeight: 700 }}>Forgot Password</h1>
          </Card.Header>
          <Card.Body>
            <LoginForm />
          </Card.Body>
          <Card.Footer>
            <Link bold underline to="/login">
              Return to Login
            </Link>
          </Card.Footer>
        </Card>
      </Section>
    </>
  );
};

export default ForgotPassword;
