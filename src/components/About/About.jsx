import { Container } from "react-bootstrap";
import styles from "./About.module.css";
const About = () => {
  return <section className={`text-white text-center py-5 ${styles.bg_color}`}>
    <Container>

    <h3 className="fw-bold fs-1 mt-5">About</h3>
    <section className="w-75 m-auto mt-3 py-5">
      <p className="fs-5">Creative Front-End Developer skilled at creating a unique customer experience that highlights brand messaging. Having a Good Communication Skills, Good Problem Solver and a Team Player.</p>
      <p className="fs-5 mt-5">I am a Front-End & mobile Cross Platform Developer based in Alexandria Egypt.</p>
    </section>
    </Container>
  </section>;
};

export default About;
