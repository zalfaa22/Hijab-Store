import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { auth, googleAuthProvider, signInWithEmailAndPassword } from "./Config";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Jika user belum logout akan langsung di arahkan ke home
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        navigate("/home");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

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

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
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
      alert("Login failed. Please check your email and password.");
    }
  };

  // if (email.trim() === '' || password.trim() === '') {
  //   alert('Email dan password tidak boleh kosong');
  // } else if (!email.includes('@')) {
  //   alert('Email harus mengandung karakter "@"');
  // } else {
  //   console.log('Email yang valid:', email);
  //   console.log('Password yang valid:', password);
  //   navigate('/Home');
  // }

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
                      type="password"
                      placeholder="input your password"
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
                <div className="akun mb-4 border-1 w-100 py-2 rounded-3 text-center">
                  <img
                    src="../assets/login/apple.svg"
                    alt=""
                    className="me-3"
                  />
                  <button className="apple border-0 bg-transparent fw-lighter">
                    Log in with Apple Account
                  </button>
                </div>
                {/* Go to SignUp */}

                <div className="text-center mb-4" style={{ fontSize: "13px" }}>
                  Don't have an account yet? <a href="/Daftar">SignUp now</a>
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
