import React from "react";
export default function Daftar() {
  return (
    <>
      <div className="badan px-0 px-md-5 px-lg-0">
        {/* Name */}
        <div className="email mb-4 px-4 py-2 d-flex justify-content-start border-1 w-100 border-0 rounded-3">
          <img src="../assets/login/profile.svg" alt="" className="me-3" />
          <input
            type="text"
            placeholder="Full Name"
            className="border-0 bg-transparent"
          />
        </div>

        {/* Email */}
        <div className="email mb-4 px-4 py-2 d-flex justify-content-start border-1 w-100 border-0 rounded-3">
          <img src="../assets/login/gmail.svg" alt="" className="me-3" />
          <input
            type="text"
            placeholder="@gmail.com"
            className="border-0 bg-transparent"
          />
        </div>

        {/* Password */}
        <div className="email mb-4 px-4 py-2 d-flex justify-content-between align-items-center border-1 w-100 border-0 rounded-3">
          <div className="d-flex align-items-center">
            <img src="../assets/login/lock.svg" alt="" className="me-3" />
            <input
              type="text"
              placeholder="input your name"
              className="border-0 bg-transparent"
            />
          </div>
          <img src="../assets/login/eye.svg" alt="" className="eye" />
        </div>

        {/* Remember me */}
        <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
          <label className="d-flex align-items-center">
            <input type="checkbox" className="text-nowrap check me-2" />
            <p className="mb-0"> Remember me</p>
          </label>
          <p className="forget text-nowrap mb-0">Forget password</p>
        </div>

        {/* Login button */}
        <a href="/" >
        <button type="submit" className="login-button mb-4 w-100 py-2 border-0">
        Sign up
        </button></a>

        {/* Strip */}
        <div className="login-with w-100 mb-4 d-flex justify-content-between">
          <img src="../assets/login/kanan.svg" alt="" />
          <p className="m-0 fw-semibold">Login with</p>
          <img src="../assets/login/kanan.svg" alt="" />
        </div>

        {/* Google akun */}
        <div className="akun mb-4 border-1 w-100 py-2 rounded-3">
          <img src="../assets/login/google.svg" alt="" className="me-3" />
          <input
            type="text"
            placeholder="Log in with Google"
            className="border-0 bg-transparent"
          />
        </div>

        {/* Apple akun */}
        <div className="akun mb-4 border-1 w-100 py-2 rounded-3">
          <img src="../assets/login/apple.svg" alt="" className="me-3" />
          <input
            type="text"
            placeholder="Log in with Apple Account"
            className="border-0 bg-transparent"
          />
        </div>
      </div>
    </>
  );
}
