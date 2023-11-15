import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import styles from "./Portfolio.module.css";
import {
  movieLand,
  Yummy,
  bookMarker,
  daniels,
  party,
  whether,
} from "../../assets/images";
// import PortFolioCard from "./PortFolioCard";
import { IconContext } from "react-icons/lib";
import { IoExpandOutline } from "react-icons/io5";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const handelClose = () => setShow(false);

  const handelShow = () => setShow(true);

  return (
    <section className="py-5">
      <Container>
        <h1 className={`text-center fw-bold ${styles.text} mb-3`}>Fancy Projects</h1>
        <section className="row g-3">
          <div className="col-lg-4 col-md-6">
          <figure className="position-relative">
                <img src={movieLand} alt=" project image" className="w-100 rounded" height={"250px"}/>
                <figcaption className={`d-flex align-items-center justify-content-center position-absolute top-0 end-0 start-0 bottom-0 ${styles.bg_main} ${styles.pointer} rounded`} onClick={() => { setImgSrc(movieLand);handelShow()}}>
                 <i className={`fas fa-maximize fa-3x text-white `} ></i>
                </figcaption>
              </figure>
          </div>
          <div className="col-lg-4 col-md-6">
          <figure className="position-relative">
                <img src={Yummy} alt=" project image" className="w-100 rounded" height={"250px"}/>
                <figcaption className={`d-flex align-items-center justify-content-center position-absolute top-0 end-0 start-0 bottom-0 ${styles.bg_main} ${styles.pointer} rounded`} onClick={() => { setImgSrc(Yummy);handelShow()}}>
                 <i className={`fas fa-maximize fa-3x text-white `} ></i>
                </figcaption>
              </figure>
          </div>
          <div className="col-lg-4 col-md-6">
          <figure className="position-relative">
                <img src={whether} alt=" project image" className="w-100 rounded" height={"250px"}/>
                <figcaption className={`d-flex align-items-center justify-content-center position-absolute top-0 end-0 start-0 bottom-0 ${styles.bg_main} ${styles.pointer} rounded`} onClick={() => { setImgSrc(whether);handelShow()}}>
                 <i className={`fas fa-maximize fa-3x text-white `} ></i>
                </figcaption>
              </figure>
          </div>
          <div className="col-lg-4 col-md-6">
          <figure className="position-relative">
                <img src={party} alt=" project image" className="w-100 rounded" height={"250px"}/>
                <figcaption className={`d-flex align-items-center justify-content-center position-absolute top-0 end-0 start-0 bottom-0 ${styles.bg_main} ${styles.pointer} rounded`} onClick={() => { setImgSrc(party);handelShow()}}>
                 <i className={`fas fa-maximize fa-3x text-white `} ></i>
                </figcaption>
              </figure>
          </div>
          <div className="col-lg-4 col-md-6">
          <figure className="position-relative">
                <img src={daniels} alt=" project image" className="w-100 rounded" height={"250px"}/>
                <figcaption className={`d-flex align-items-center justify-content-center position-absolute top-0 end-0 start-0 bottom-0 ${styles.bg_main} ${styles.pointer} rounded`} onClick={() => { setImgSrc(daniels);handelShow()}}>
                 <i className={`fas fa-maximize fa-3x text-white `} ></i>
                </figcaption>
              </figure>
          </div>
          <div className="col-lg-4 col-md-6">
          <figure className="position-relative">
                <img src={bookMarker} alt=" project image" className="w-100 rounded" height={"250px"}/>
                <figcaption className={`d-flex align-items-center justify-content-center position-absolute top-0 end-0 start-0 bottom-0 ${styles.bg_main} ${styles.pointer} rounded`} onClick={() => { setImgSrc(bookMarker);handelShow()}}>
                 <i className={`fas fa-maximize fa-3x text-white `} ></i>
                </figcaption>
              </figure>
          </div>
        </section>
      </Container>
      <Modal size="lg" fullscreen={"md-down"} centered show={show} onHide={handelClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <picture>
            <img src={imgSrc} alt="project image" className="w-100 object-fit-cover h-100"/>
          </picture>
          </Modal.Body>
      </Modal>
    </section>
  );
};

export default Portfolio;
