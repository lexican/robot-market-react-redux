import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { IRobot } from "../robot/robotSlice";
import CartItem from "./cart-item/CartItem";
import "./cart-list.scss";
import { cartItems, toggleIsShowCart } from "./cartSlice";
const CartListModal = () => {
  const dispatch = useAppDispatch();
  const modalRoot = document.getElementById("overlay-portal")!;

  const el = useRef(document.createElement("div"));
  const carts = useSelector(cartItems);

  useEffect(() => {
    modalRoot.appendChild(el.current);

    return () => {
      modalRoot.removeChild(el.current);
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(
    <div
      className="cart-list-modal"
      onClick={() => {
        dispatch(toggleIsShowCart(false));
      }}
    >
      <div className="cart-list">
        <button className="close-btn">&times;</button>
        <div className="cart-container">
          {carts.length > 0 ? (
            carts.map((cartItem: IRobot) => (
              <CartItem robot={cartItem} key={cartItem.name} />
            ))
          ) : (
            <div className="empty-cart">Your cart is currently empty</div>
          )}
        </div>
      </div>
    </div>,
    el.current
  );
};

export default CartListModal;
