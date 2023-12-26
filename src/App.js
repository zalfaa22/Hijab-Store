import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Daftar from "./pages/SignUp";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  // const navigate = useNavigate();
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    // Di sini, Anda dapat menanggapi respons Google dan mengarahkan pengguna ke halaman home.
    // if (response && response.credential) {
    //   Pengguna berhasil login, arahkan ke halaman home
    //   navigate('/home');
    // }
  }
  // }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "896543292277-0bpjqpijr2veo31ah9625ope28i167eg.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div className="App">
      <div id="signInDiv">
      </div>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Login} />
        <Route path="/daftar" Component={Daftar} />
      </Routes>
    </div>
  );
}

export default App;
