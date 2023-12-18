import React from "react";
import "./css/about.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function about() {
  return (
    <>
      <div className="about-section py-5 w-100">
        <h1 className="fs-1 fw-bold text-uppercase">About Us</h1>
        <Container className="mt-5 px-5 px-md-3 px-lg-5">
          <Row>
            <Col className="col-12 col-md-5 col-lg-6 px-0 m-0" data-aos="zoom-in"  data-aos-duration="2000">
              <Row className="d-flex w-100 justify-content-between p-0 m-0">
                <Col className="foto-besar p-0 m-0 w-100 mx-auto">
                  <img
                    src="../assets/about/besar.svg"
                    alt=""
                    className="img-fluid h-100"
                  />
                </Col>

                <Col className="foto-kecil p-0 ms-2 d-flex flex-column justify-content-between w-100 mx-auto">
                  <img
                    src="../assets/about/kecil-1.svg"
                    alt=""
                    className="mb-3 img-fluid"
                  />
                  <img
                    src="../assets/about/kecil-2.svg"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="kanan col-12 col-md-7 col-lg-6 px-0 ps-md-4 m-0 mt-4 mt-md-0" data-aos="fade-up"  data-aos-duration="2000">
              <div className="logo-container d-flex ps-lg-4 justify-content-center justify-content-md-start align-items-center">
                <img
                  src="./assets/logo.svg"
                  alt=""
                  className="logo img-fluid me-3"
                />
                <p className="fs-3 mb-0">zada kheir</p>
              </div>
              <p className="text-md-start mt-3 ps-lg-4">
                Tidak hanya dibuat untuk menutupi kita. Kami memakainya untuk
                menunjukkan bagaimana perasaan kami, siapa kami sebagai pribadi.
                Untuk mengekspresikan nilai-nilai batin kita.
              </p>
              <p className="text-md-start ps-lg-4">
                Bagi para muslimah di Indonesia, menemukan gaya yang pas bisa
                membuat frustasi, padahal yang kita inginkan hanyalah nyaman dan
                percaya diri.
              </p>
              <p className="text-md-start ps-lg-4">
                Kami ingin Anda menunjukkan selera gaya Anda, identitas asli
                Anda. Zada Kheir lebih dari sekedar merek, ini adalah surat
                cinta kami untuk kalian semua yang berjiwa chic.
              </p>
              <Button className="d-flex ms-lg-4 justify-content-center mx-auto mx-md-0 justify-content-md-start border-0 p-2 px-lg-5 py-lg-3 mt-4 mt-md-2 mt-lg-3">
                Read More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
