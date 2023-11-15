import { Container, Form } from "react-bootstrap";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className="text-center py-5">
      <Container>
        <h1 className={`text-uppercase ${styles.text_color} fw-bold`}>
          Contact me
        </h1>
        <section className="w-50 m-auto mt-3 py-3">
          <div>
            <input
              type="text"
              placeholder="Name"
              className={`w-100 ${styles.input}`}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Email Address"
              className={`w-100 ${styles.input}`}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Phone Number"
              className={`w-100 ${styles.input}`}
            />
          </div>
          <div className="mt-4">
            <textarea placeholder="Message" className={`w-100 ${styles.input}`} rows="3"></textarea>
          </div>
          <div className="d-flex mt-3">
            <button className={` ${styles.btnColor}`}>Submit</button>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Contact;
