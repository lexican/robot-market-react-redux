import RobotList from "./features/robot/RobotList";
import "./app.scss";
import Navbar from "./features/navbar/Navbar";
import CartListModal from "./features/cart/CartList";
import { useAppSelector } from "./app/hooks";
import { isShowCart } from "./features/cart/cartSlice";
function App() {
  const showCart = useAppSelector(isShowCart);
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="home-container">
          <RobotList />
        </div>
      </div>
      {showCart && <CartListModal />}
    </>
  );
}

export default App;
