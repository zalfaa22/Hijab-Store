import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login'
import Daftar from './pages/SignUp'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Login} />
        <Route path="/daftar" Component={Daftar} />
      </Routes>
    </div>
  );
}

export default App;
