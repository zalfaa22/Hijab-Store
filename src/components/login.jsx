import React from "react";

export default function Login() {
  return (
    <>
      
      <div className="badan px-0 px-md-5 px-lg-0">
        <div className="email mb-4 px-4 py-2 d-flex justify-content-start border-1 w-100 border-0 rounded-3">
          <img src="../assets/login/gmail.svg" alt="" className="me-3" />
          <input
            type="email"
            for="email"
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
            <input type="checkbox" className="check me-2" />
            Remember me
          </label>
          <div className="">Forget password</div>
        </div>

        {/* Login button */}
        <a href="/home" >
        <button type="submit" className="login-button mb-4 w-100 py-2 border-0">
        Login
        </button></a>

        {/* Strip */}
        <div className="login-with w-100 mb-4 d-flex justify-content-between">
          <img src="../assets/login/kanan.svg" alt="" />
          Login with
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
