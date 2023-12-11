import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import hello from "./pages/hello";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={hello} />
      </Routes>
    </div>
  );
}

export default App;
