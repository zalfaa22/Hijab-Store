import React from "react";
import "./css/about.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function about() {
  return (
    <>
      <div className="about-section py-5 w-100 min-vh-100 ">
        <h1 className="fs-1 fw-bold text-uppercase">About Us</h1>
        <Container className="mt-5">
          <Row>
            <Col className="col-12 col-md-4 col-lg-6 px-5 px-md-0 px-lg-2">
              <Row className="d-flex align-items-stretch">
                <Col className="foto-besar p-0 me-4">
                  <img
                    src="../assets/about/besar.svg"
                    alt=""
                    className="img-fluid h-100"
                  />
                </Col>
                <Col className="foto-kecil p-0 d-flex flex-column justify-content-between">
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
            <Col className="kanan col-12 col-md-8 col-lg-6 px-5 px-lg-2 mt-4 mt-lg-0">
              <div className="logo-container d-flex ps-lg-4 justify-content-center justify-content-md-start align-items-center">
                <img
                  src="./assets/logo.svg"
                  alt=""
                  className="logo img-fluid me-3"
                />
                <p className="fs-3 mb-0">zada kheir</p>
              </div>
              <p className="text-md-start fs-6 mt-3 ps-lg-4">
                Tidak hanya dibuat untuk menutupi kita. Kami memakainya untuk
                menunjukkan bagaimana perasaan kami, siapa kami sebagai pribadi.
                Untuk mengekspresikan nilai-nilai batin kita.
              </p>
              <p className="text-md-start fs-6 ps-lg-4">
                Bagi para muslimah di Indonesia, menemukan gaya yang pas bisa
                membuat frustasi, padahal yang kita inginkan hanyalah nyaman dan
                percaya diri.
              </p>
              <p className="text-md-start fs-6 ps-lg-4">
                Kami ingin Anda menunjukkan selera gaya Anda, identitas asli
                Anda. Zada Kheir lebih dari sekedar merek, ini adalah surat
                cinta kami untuk kalian semua yang berjiwa chic.
              </p>
              <Button className="d-flex ms-lg-4 justify-content-center mx-auto mx-md-0 justify-content-md-start border-0 px-5 py-3 mt-5 mt-md-4 mt-lg-3">
                Read More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
