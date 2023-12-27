import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
// import { useState, useEffect } from "react";
import "./css/header.css";
import About from "./About";
import { Link } from "react-router-dom";
import { auth, signOut } from "../pages/Config";
import { useNavigate } from "react-router-dom"; 

export default function Header() {
  const [activePage, setActivePage] = useState('/home');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCategoryMouseEnter = () => {
    setShowCategoryDropdown(true);
  };

  const handleCategoryMouseLeave = () => {
    setShowCategoryDropdown(false);
  };

  const renderAuthButtons = () => {
    console.log("User:", user);
  
    if (user) {
      console.log("User is logged in");
      const displayName = user.displayName || user.email;
      return (
        <div className="d-flex align-items-center">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: "30px", height: "30px" }}
            />
          )}
          <span className="me-2">{displayName}</span>
          <Button onClick={handleLogout} className="button-1 border-0 me-3">
            Logout
          </Button>
        </div>
      );
    } else {
      console.log("User is not logged in");
      return (
        <>
          <Button href="/" className="button-1 border-0 me-3">
            Login
          </Button>
          <Button href="/daftar" className="button-2 bg-transparent rounded-0">
            Sign up
          </Button>
        </>
      );
    }
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
          <Nav.Link href="/home" >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          {/* <Link to="../home#about">About Us</Link> */}
          <Nav.Link href="#about">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Nav.Link href="#product">New in</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Nav.Link href="/product">All Product</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3">
          <Nav.Link href="/home">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-3" >
        {renderAuthButtons()}
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
              src="../assets/logo.svg"
              alt=""
              className="d-flex w-100 h-100 me-lg-3"
            />
            <span className="fs-3 fw-semibold" style={{color: "#774C29"}}>zada kheir</span>
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
              {renderAuthButtons()}
              {/* <Button href="/" className="button-1 border-0 me-3">Login</Button>
              <Button href="/daftar" className="button-2 bg-transparent rounded-0 ">
                Sign up
              </Button>
              {user && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )} */}
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
          defaultActiveKey="/home"
          className="d-none d-lg-flex navbar-2 d-flex position-relative justify-content-center mx-5 mt-3"
        >
          <Nav.Item className="">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Link to="#about">About us</Link> */}
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#product">New in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/product" >All Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onMouseEnter={handleCategoryMouseEnter}
        onMouseLeave={handleCategoryMouseLeave}>Categories</Nav.Link>
        {/* Category Dropdown */}
        {/* <Dropdown
          show={showCategoryDropdown}
          onMouseEnter={handleCategoryMouseEnter}
          onMouseLeave={handleCategoryMouseLeave}
        >
          <Dropdown.Menu>
            <Dropdown.Item href="/product">Category 1</Dropdown.Item>
            <Dropdown.Item href="#category2">Category 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
