import { FC } from "react";
import { formatPrice } from "../../../utils";
import { IRobot } from "../../robot/robotSlice";
import "./cart-item.scss";

interface IProp {
  robot: IRobot;
}

const CartItem: FC<IProp> = ({ robot }) => {
  const { name, image, price, quantity } = robot;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={image}></img>
      <div className="info">
        <h3 className="name">{name}</h3>
        <div className="price">{formatPrice(price)}</div>
        <div className="d-flex mt-3">
          <button onClick={() => {}}>-</button>
          <span className="m-2">{quantity}</span>
          <button onClick={() => {}}>+</button>
        </div>
        <div className="total-price">{formatPrice(totalPrice)}</div>
      </div>
    </div>
  );
};

export default CartItem;
