import Container from "react-bootstrap/Container";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import { IconContext } from "react-icons";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <footer>
    <div className={`${styles.bg_footer} py-5 text-center`}>
      <Container>
        <div className="row align-items-center gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="item text-white">
              <h4 className={styles.fs_30}>LOCATION</h4>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-white">
              <h4 className={styles.fs_30}>AROUND THE WEB</h4>
              <div className="row mt-3 g-2">
                <div className="col d-flex justify-content-center">
                  <IconContext.Provider
                    value={{ className: "footer_icons", size: "1.5em" }}
                  >
                    <div className={styles.footer_icons}>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="col d-flex justify-content-center">
                  <IconContext.Provider
                    value={{ className: "footer_icons", size: "1.5em" }}
                  >
                    <div className={styles.footer_icons}>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="col d-flex justify-content-center">
                  <IconContext.Provider
                    value={{ className: "footer_icons", size: "1.5em" }}
                  >
                    <div className={styles.footer_icons}>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="col d-flex justify-content-center">
                  <IconContext.Provider
                    value={{ className: "footer_icons", size: "1.5em" }}
                  >
                    <div className={styles.footer_icons}>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-white">
              <h4 className={styles.fs_30}>ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Start Bootstrap
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
      <FooterCopyRight/>
    </footer>
  );
};

export default Footer;
