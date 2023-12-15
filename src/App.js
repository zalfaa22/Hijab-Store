import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home from './pages/Home'
import Login from './pages/Login'
import Daftar from './pages/SignUp'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Login} />
        <Route path="/daftar" Component={Daftar} />
      </Routes>
    </div>
  );
}

export default App;
