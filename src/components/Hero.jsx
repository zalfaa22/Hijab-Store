import React from "react";
import "./css/hero.css";
import { Button } from "react-bootstrap";

export default function hero() {
  return (
    <>
      <section
        className="hero-section pt-md-0 img-fluid w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: "url(./assets/hero/orang.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-container text-center" data-aos="zoom-in" data-aos-duration="2000">
          <h1 className="fw-semibold">
            Wrap{" "}
            <span className="urself">
              {" "}
              yourself in <br /> elegance{" "}
            </span>{" "}
            <span className="with"> with our hijabs</span>
          </h1>
        </div>
        <div className="button-container text-center mt-5">
          <Button className="border-0 px-5 py-3 fw-bold">Shop now</Button>
        </div>

        <div className="side-love" data-aos="fade-up" data-aos-duration="3000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="134"
            viewBox="0 0 68 134"
            fill="none"
          >
            <path
              d="M24 103C10.7452 103 3.59681e-06 92.2548 4.17619e-06 79L5.22527e-06 55C5.80466e-06 41.7452 10.7452 31 24 31L34 31C52.7777 31 68 17.5685 68 1L68 133C68 116.431 52.7777 103 34 103L24 103Z"
              fill="#F2E3D5"
            />
            <path
              d="M67.9909 134C67.9857 134 67.9816 133.996 67.9818 133.991C67.9939 133.662 68 133.331 68 133L68 133.991C68 133.996 67.9959 134 67.9909 134Z"
              fill="#F2E3D5"
            />
            <path
              d="M68 1C68 0.668527 67.9939 0.33831 67.9818 0.00943128C67.9816 0.00427968 67.9858 -6.22873e-10 67.9909 -3.97537e-10C67.9959 -1.77983e-10 68 0.0040718 68 0.00909459L68 1Z"
              fill="#F2E3D5"
            />
          </svg>

          <img src="../assets/hero/heart.svg" alt="" className="love " />
        </div>

        <div
          className="side-ticket"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="260"
            viewBox="0 0 68 260"
            fill="none"
          >
            <path
              d="M34 34.8215C15.1935 34.9202 -2.50191e-06 50.1937 -2.27765e-06 69.0005L-8.22822e-07 191C-5.98554e-07 209.806 15.1935 225.08 34 225.179C52.7777 225.179 68 240.769 68 260L68 0C68 19.2314 52.7777 34.8215 34 34.8215Z"
              fill="#F2E3D5"
            />
          </svg>
          <div>
            <img className="ticket" src="../assets/hero/ticket.svg" alt="" />
            <p className="tulisan-vertikal">Reward</p>
          </div>
        </div>

        {/* Love dan ticket Mobile */}
        <div
          className="fitur-mobile d-md-none"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* Love */}
          <div className="fitur-container p-3 rounded-circle mb-3">
            <img src="../assets/hero/heart.svg" alt="" />
          </div>
          {/* Ticket */}
          <div className="fitur-container p-3 rounded-circle mb-3">
            <img src="../assets/hero/ticket.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
