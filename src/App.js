// import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pagelist from "./components/Pagelist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/pagelist" element={<Pagelist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
