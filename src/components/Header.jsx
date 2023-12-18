import React from "react";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./css/header.css";
import About from "./About";
import { Link } from "react-router-dom";

export default function Header() {
  const [activePage, setActivePage] = useState('/home');

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  const navItems = (
    <>
      <div
        className={`navbar-items ${isNavOpen ? "open" : ""}`}
        style={{
          position: "absolute",
          right: "40px",
          top: "100px",
          background: "#fafafa",
          padding: "10px",
          width: "200px",
          zIndex: "1000",
        }}
      >
        <Nav.Item className="my-3">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          {/* <Link to="../home#about">About Us</Link> */}
          <Nav.Link href="#about">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Nav.Link href="#about">New in</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Nav.Link href="#about">All Product</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Nav.Link href="#about">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Button href="/" className="button-1 border-0">Login</Button>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Button href="/daftar" className="button-2 bg-transparent rounded-0">Sign up</Button>
        </Nav.Item>
      </div>
    </>
  );

  return (
    <>
      <div className="double-nav py-4 bg-transparent w-100">
        <Nav
          className="w-100 px-3 d-flex justify-content-between"
          activeKey="/"
        >
          {/* NAVBAR 1 */}
          <Nav className="">
            <Nav.Item className="me-3">
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="drop"
                >
                  IDR
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">US Dollar</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Euro</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Ringgit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <div className="bahasa d-flex px-2 py-1 rounded-pill">
                <div className="bendera p-1 align-items-center rounded-circle me-2">
                  <img
                    src="../assets/hero/flag.svg"
                    alt=""
                    className="w-100 h-100"
                  />
                </div>
                <div className="">
                  <p className="">Eng</p>
                </div>
              </div>
            </Nav.Item>
          </Nav>

          <Navbar.Brand
            href="#home"
            className="logo ms-lg-5 ms-0 d-none d-md-flex align-items-center"
          >
            <img
              src="./assets/logo.svg"
              alt=""
              className="d-flex w-100 h-100 me-lg-3"
            />
            <span className="fs-3 fw-bold">zada kheir</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Nav.Item className="d-flex">
              <div className="kanan rounded-circle d-none d-md-flex p-2 me-3">
                <img src="../assets/hero/search.svg" alt="" />
              </div>
              <div className="kanan rounded-circle p-2 me-md-3 me-0">
                <img src="../assets/hero/bag.svg" alt="" />
              </div>
            </Nav.Item>
            <div className="d-none d-lg-flex">
              <Button href="/" className="button-1 border-0 me-3">Login</Button>
              <Button href="/daftar" className="button-2 bg-transparent rounded-0 ">
                Sign up
              </Button>
            </div>
            <div
              className={`navbar-toggle ms-lg-4 d-none d-md-flex d-lg-none ${isNavOpen ? "open" : ""}`}
              onClick={handleToggleClick}
            >
              ☰
            </div>
          </div>
        </Nav>

        {/* NAVBAR 2 */}
        <div className="navbar-container d-lg-none d-md-flex px-4 mt-3 d-flex align-items-center justify-content-between">
          <div className={`navbar-2 ${isNavOpen ? "open" : ""}`}>
            {isNavOpen ? navItems : null}
            <p>{isNavOpen ? "" : ""}</p>
          </div>

          <div className="d-flex d-md-none w-100 align-items-center justify-content-start">
            <div className="logo-mobile me-4">
              <img src="../assets/logo.svg" alt="" className="w-100" />
            </div>
            <div className="search w-100 rounded-pill mx-auto p-2 d-flex justify-content-start">
              <img src="../assets/hero/search.svg" alt="" className="me-2" />
              <input
                type="text"
                className="input-search w-100 border-0 bg-transparent"
                placeholder="pashmina"
              />
            </div>

            <div
              className={`navbar-toggle ms-4 ${isNavOpen ? "open" : ""}`}
              onClick={handleToggleClick}
            >
              ☰
            </div>
          </div>
        </div>

        <Nav
          variant="tabs"
          defaultActiveKey="/"
          className="d-none d-lg-flex navbar-2 d-flex position-relative justify-content-center mx-5 mt-3"
        >
          <Nav.Item className="">
            <Nav.Link href="#hero">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Link to="#about">About us</Link> */}
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">New in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">All Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Categories</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
