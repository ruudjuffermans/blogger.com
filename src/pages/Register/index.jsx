import Card from "../../components/Card";
import Section from "../../components/Section";
import RegisterForm from "./components/RegisterForm";
import Link from "../../components/Link";

const Register = () => {
  return (
    <>
      <Section>
        <Card style={{ margin: "auto", maxWidth: "700px" }}>
          <Card.Header>
            <h1 style={{ margin: 0, fontWeight: 700 }}>Register</h1>
          </Card.Header>
          <Card.Body>
            <RegisterForm />
          </Card.Body>
          <Card.Footer style={{ flexDirection: "column" }}>
            {/* <p>
              By clicking Register, you agree to the{" "}
              <Link bold to="#">
                User Agreement
              </Link>
              ,{" "}
              <Link bold to="#">
                Privacy Policy
              </Link>
              , and{" "}
              <Link bold to="#">
                Cookies Policy.
              </Link>
            </p> */}

            <span>
              Already have an account?{" "}
              <Link bold underline to="/login">
                Sign in
              </Link>
            </span>
          </Card.Footer>
        </Card>
      </Section>
    </>
  );
};

export default Register;
