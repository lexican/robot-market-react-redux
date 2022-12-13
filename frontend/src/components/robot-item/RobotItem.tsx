import React, { FC } from "react";
import { IRobot } from "../../features/robot/robotSlice";
import { formatDate, formatPrice } from "../../utils";
import "./robot-item.scss";
interface Props {
  robot: IRobot;
}

const RobotItem: FC<Props> = ({ robot }) => {
  const { name, image, price, stock, createdAt, material } = robot;

  return (
    <div className="col-md-3 robot-item">
      <img src={image}></img>
      <div className="info">
        <h3 className="name">{name}</h3>
        <div className="price">{formatPrice(price)}</div>
        <div className="stock">{stock}</div>
        <div className="createdAt">{formatDate(createdAt)}</div>
        <div className="material">{material}</div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary" onClick={() => {}}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RobotItem;
