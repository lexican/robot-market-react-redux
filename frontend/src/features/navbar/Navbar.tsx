import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import CartIcon from "../../components/cart-icon/CartIcon";
import { isShowCart, toggleIsShowCart } from "../cart/cartSlice";
import "./navbar.scss";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const showCart = useSelector(isShowCart);

  return (
    <nav className="navbar">
      <h1>Robot Market</h1>
      <button
        className="btn cart-btn"
        onClick={() => {
          console.log("Clicked");
          dispatch(toggleIsShowCart(!showCart));
        }}
      >
        Cart <CartIcon />
      </button>
    </nav>
  );
};

export default Navbar;
