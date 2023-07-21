import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Update from "./Upadte";
import About from "./About";

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav class="navbar bg-dark border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a href="/" className="navbar-nbrand">
            Home
          </a>
          <div className="navbar-nav me-auto">
            <a href="/" className="nav-link active">
              About
            </a>
          </div>
        </div>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
