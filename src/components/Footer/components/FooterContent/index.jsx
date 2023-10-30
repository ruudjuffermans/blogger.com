import { Formik, Form } from "formik";
import Container from "../../../Container";
import Logo from "../../../Logo";
import styles from "./style.module.css";
import Button from "../../../Button";
import Link from "../../../Link";

const FooterContent = ({ links, socials, address }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.footer__grid}>
          <div className={styles.left}>
            <Logo size={"24px"}></Logo>
            <h3 className={styles.newsletter}>Newsletter</h3>
            <div>want to know what we are up to?</div>
            <Formik
            // validationSchema={validationSchema}
            // initialValues={initialValues}
            // onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className={styles.subscribe__wrap}>
                      <input
                        type="email"
                        id="subscribe"
                        name="subscribe"
                        className={styles.subscribe__input}
                        {...formik.getFieldProps("subscribe")}
                      />

                      <Button
                        className={styles.subscribe__button}
                        type="submit"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className={styles.links}>
            <div className={styles.box__content}>
              <h5>Links</h5>
              <ul>
                {links.map((item, i) => (
                  <li className={styles.footer__item} key={i}>
                    <Link
                      className={styles.footer__link}
                      underline
                      to={item.to}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.follow}>
            <div className={styles.box__content}>
              <h5>Follow Us</h5>
              <ul>
                {socials.map((item, i) => (
                  <li className={styles.footer__item} key={i}>
                    <Link
                      className={styles.footer__link}
                      underline
                      to={item.url}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.address}>
            {" "}
            <div className={styles.box__content}>
              <h5>Address</h5>
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
            </div>
          </div>
          <div className={styles.contact}>
            {" "}
            <div className={styles.box__content}>
              <h5>Contact</h5>
              <ul>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;
