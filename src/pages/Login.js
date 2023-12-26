import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (email.trim() === '' || password.trim() === '') {
      alert('Email dan password tidak boleh kosong');
    } else if (!email.includes('@')) {
      alert('Email harus mengandung karakter "@"');
    } else {
      console.log('Email yang valid:', email);
      console.log('Password yang valid:', password);
      navigate('/Home');
    }
  };

  return (
    <>
      <header className="login-page masuk w-100 min-vh-100 d-flex align-items-center pt-5">
        <Container className="">
          <Row className="">
            <Col className="login col-12 col-lg-6 m-0 mx-md-0">
              <div className="kepala mb-5 text-center">
                <img src="../assets/logo.svg" alt="" />
                <h3>zada khair</h3>
                <p>Elegance in modesty.</p>
              </div>
              {/* <Login /> */}
              <div className="badan">
                <div className="email mb-4 px-4 py-2 d-flex justify-content-start border-1 w-100 border-0 rounded-3">
                  <img
                    src="../assets/login/gmail.svg"
                    alt=""
                    className="me-3"
                  />
                  <input
                    type="email"
                    placeholder="@gmail.com"
                    className="border-0 bg-transparent"
                    style={{
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                    }}
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                {/* Password */}
                <div className="email mb-4 px-4 py-2 d-flex justify-content-between align-items-center border-1 w-100 border-0 rounded-3">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/login/lock.svg"
                      alt=""
                      className="me-3"
                    />
                    <input
                      type="password"
                      placeholder="input your name"
                      className="border-0 bg-transparent"
                      style={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <img src="../assets/login/eye.svg" alt="" className="eye" />
                </div>

                {/* Remember me */}
                <div className="rememberme w-100 mb-4 d-flex justify-content-between align-items-center">
                  <label className="d-flex align-items-center">
                    <input type="checkbox" className="check me-2" />
                    <p className="m-0">Remember me</p>
                  </label>
                  <a href="/daftar" style={{ textDecoration: "none" }}>
                    <p className="m-0">Forget password</p>
                  </a>
                </div>

                {/* Login button */}
                <a href="/Home">
                  <button
                    type="submit"
                    className="login-button mb-4 w-100 py-2 border-0"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </a>

                {/* Strip */}
                <div className="login-with w-100 mb-4 d-flex justify-content-between">
                  <img src="../assets/login/kanan.svg" alt="" />
                  <p className="m-0 fw-semibold">Login with</p>
                  <img src="../assets/login/kanan.svg" alt="" />
                </div>

                {/* Google akun */}
                <div className="akun mb-4 border-1 w-100 py-2 rounded-3">
                  <img
                    src="../assets/login/google.svg"
                    alt=""
                    className="me-3"
                  />
                  <button className="apple border-0 bg-transparent fw-lighter">Log in with Google Account</button>
                </div>

                {/* Apple akun */}
                <div className="akun mb-4 border-1 w-100 py-2 rounded-3">
                  <img
                    src="../assets/login/apple.svg"
                    alt=""
                    className="me-3"
                  />
                  <button className="apple border-0 bg-transparent fw-lighter">Log in with Apple Account</button>
                </div>
              </div>
            </Col>
            <Col className="kolom2 col-6 px-md-0 mx-md-0 d-none d-lg-flex">
              <img
                src="../assets/login/orang.png"
                alt=""
                className="w-100 h-100 orang img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
