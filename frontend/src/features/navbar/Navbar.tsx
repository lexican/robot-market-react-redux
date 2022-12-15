import CartIcon from "../../components/cart-icon/CartIcon";
import "./navbar.scss";
const Navbar = () => (
  <nav className="navbar">
    <h1>Robot Market</h1>
    <button className="btn cart-btn">
      Cart <CartIcon />
    </button>
  </nav>
);

export default Navbar;
