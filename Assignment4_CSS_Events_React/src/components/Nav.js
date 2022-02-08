import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/OrderPage"> Order </Link>
        <Link to="/StoresPage"> Stores </Link>
      </ul>
    </nav>
  );
}

export default Nav;
