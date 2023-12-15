import React from "react";
import Login from "../components/login";
import "./css/login.css";
import { Container, Row, Col, Card, Nav, Button } from "react-bootstrap";

export default function login() {
  return (
    <>
      <header className="login-page masuk w-100 min-vh-100 d-flex align-items-center pt-5">
        <Container>
            <Row className="">
              <Col className="login col-12 col-lg-4 px-0">
                <div className="kepala mb-5">
                  <img src="../assets/logo.svg" alt="" />
                  <h3>zada khair</h3>
                  <p>Elegance in modesty.</p>
                </div>
                <Login />
              </Col>
              <Col className="col-12 col-lg-8 me-0">
                <img
                  src="../assets/login/orang.png"
                  alt=""
                  className="h-100 w-100 orang img-fluid"
                />
              </Col>
            </Row>
        </Container>
      </header>
    </>
  );
}
