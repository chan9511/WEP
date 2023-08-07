import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aris-currents="page"
                  to="/board"
                >
                  Board
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
