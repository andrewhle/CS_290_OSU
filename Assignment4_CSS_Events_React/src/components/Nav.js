import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Available services</h3>
      <ul className="navbar">
        <Link to="/" className="button">
          {" "}
          Home{" "}
        </Link>
        <Link to="/OrderPage" className="button">
          {" "}
          Order{" "}
        </Link>
        <Link to="/StoresPage" className="button">
          {" "}
          Stores{" "}
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
