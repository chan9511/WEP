import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/board" element={<Board />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
    );
}

export default App;
