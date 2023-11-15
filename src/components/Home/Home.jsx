import { IconContext } from "react-icons";
import { avatar } from "../../assets/images";
import { FaLaptop, FaStar } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import styles from "./Home.module.css";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <section
      className={`d-flex justify-content-center align-items-center text-white py-5 ${styles.home_bg}`}
    >
      <section className="text-center w-100 py-3">
        <picture className="w-50">
          <img
            src={avatar}
            alt="avatar picture"
            className={`rounded-circle ${styles.img}`}
          />
        </picture>
        <h1 className="d-flex flex-column my-3">
          <span>Hello 👋, </span>
          <span> I&apos;m Abdullah Kamel</span>
        </h1>
        <Container className="w-75">
          <div className="row gy-2 justify-content-center">
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <p className={`mb-0 ${styles.fonstSize}`}>Front End Developer</p>
                <FaLaptop size={"20px"} color="#000" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <p className={`mb-0 ${styles.fonstSize}`}>React Developer</p>
                <TbBrandReact size={"20px"} color="blue" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                <p className={`mb-0 ${styles.fonstSize}`}>React Native Developer</p>
                <TbBrandReact size={"20px"} color="blue" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Home;
