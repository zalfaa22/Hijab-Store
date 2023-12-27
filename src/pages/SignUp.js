import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { Container, Row, Col } from "react-bootstrap";
import { auth, googleAuthProvider } from "./Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

export default function Daftar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  // Menampilkan PopUp login with google
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.acsessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header className="login-page masuk w-100 min-vh-100 d-flex align-items-center pt-5">
        <Container>
          <Row className="">
            <Col className="login col-12 col-lg-6 m-0 mx-md-0 text-center">
              <div className="kepala mb-5">
                <img src="../assets/logo.svg" alt="" />
                <h3>zada khair</h3>
                <p>Elegance in modesty.</p>
              </div>
              {/* <Daftar /> */}
              <div
                className="badan px-0 px-md-5 px-lg-0"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div className="email mb-4 px-4 py-2 d-flex justify-content-start border-1 w-100 border-0 rounded-3">
                  <img
                    src="../assets/login/profile.svg"
                    alt=""
                    className="me-3"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-0 bg-transparent"
                    style={{
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="email mb-4 px-4 py-2 d-flex justify-content-start border-1 w-100 border-0 rounded-3">
                  <img
                    src="../assets/login/gmail.svg"
                    alt=""
                    className="me-3"
                  />
                  <input
                    type="text"
                    placeholder="@gmail.com"
                    className="border-0 bg-transparent"
                    style={{
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      type="text"
                      placeholder="input your name"
                      className="border-0 bg-transparent"
                      style={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <img src="../assets/login/eye.svg" alt="" className="eye" />
                </div>

                {/* Remember me */}
                <div className="w-100 mb-4 rememberme d-flex justify-content-between align-items-center">
                  <label className="d-flex align-items-center">
                    <input type="checkbox" className="text-nowrap check me-2" />
                    <p className="mb-0"> Remember me</p>
                  </label>
                  <p className="forget text-nowrap mb-0">Forget password</p>
                </div>

                {/* Login button */}
                <a href="/">
                  <button
                    type="submit"
                    className="login-button mb-4 w-100 py-2 border-0"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                </a>

                {/* Strip */}
                <div className="login-with w-100 mb-4 d-flex justify-content-between">
                  <img src="../assets/login/kanan.svg" alt="" />
                  <p className="m-0 fw-semibold">Login with</p>
                  <img src="../assets/login/kanan.svg" alt="" />
                </div>

                {/* Google akun */}
                <div
                  className="akun mb-4 border-1 w-100 py-2 rounded-3 text-center"
                  onClick={handleSignInWithGoogle}
                >
                  <img
                    src="../assets/login/google.svg"
                    alt=""
                    className="me-3"
                  />
                  <button className="apple border-0 bg-transparent fw-lighter">
                    Log in with Google Account
                  </button>
                </div>

                {/* Apple akun */}
                <div className="akun mb-4 border-1 w-100 py-2 rounded-3">
                  <img
                    src="../assets/login/apple.svg"
                    alt=""
                    className="me-3"
                  />
                  <input
                    type="text"
                    placeholder="Log in with Apple Account"
                    className="border-0 bg-transparent"
                  />
                </div>
              </div>
            </Col>
            <Col className="kolom2 col-6 px-md-0 mx-md-0 d-none d-lg-flex">
              <img
                src="../assets/login/orang.png"
                alt=""
                className="w-100 h-100 orang-signup img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
