import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import CartIcon from "../../components/cart-icon/CartIcon";
import {
  cartItemsLength,
  isShowCart,
  toggleIsShowCart,
} from "../cart/cartSlice";
import "./navbar.scss";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const showCart = useSelector(isShowCart);
  const cartLength = useSelector(cartItemsLength);

  return (
    <nav className="navbar">
      <h1>Robot Market</h1>
      <button
        className="cart-btn"
        onClick={() => {
          dispatch(toggleIsShowCart(!showCart));
        }}
      >
        Cart
        <span className="badge rounded-pill bg-primary">{cartLength}</span>
        <CartIcon />
      </button>
    </nav>
  );
};

export default Navbar;
