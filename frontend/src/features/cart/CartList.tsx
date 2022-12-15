import { useSelector } from "react-redux";
import { IRobot } from "../robot/robotSlice";
import CartItem from "./cart-item/CartItem";
import "./cart-list.scss";
import { cartItems } from "./cartSlice";
const CartList = () => {
  const carts = useSelector(cartItems);
  return (
    <div className="cart-list">
      {carts.length > 0 ? (
        carts.map((cartItem: IRobot) => (
          <CartItem robot={cartItem} key={cartItem.name} />
        ))
      ) : (
        <div className="empty-cart">Your cart is currently empty</div>
      )}
    </div>
  );
};

export default CartList;
