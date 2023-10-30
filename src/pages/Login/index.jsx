import Card from "../../components/Card";
import Container from "../../components/Container";
import Link from "../../components/Link";
import Section from "../../components/Section";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <Container>
      <Card full style={{ maxHeight: "fit-content", width: "600px" }}>
        <Card.Header>
          <h1 style={{ margin: 0, fontWeight: 700 }}>Login</h1>
        </Card.Header>
        <Card.Body>
          <LoginForm />
        </Card.Body>
        <Card.Footer>
          <span>
            <Link underline bold to="/forgot-password">
              Forgot your password?
            </Link>
          </span>
          <span>
            Not a member yet?{" "}
            <Link underline bold to="/register">
              Register Now
            </Link>
          </span>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Login;
