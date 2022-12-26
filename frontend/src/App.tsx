import RobotList from "./features/robot/RobotList";
import "./app.scss";
import Navbar from "./features/navbar/Navbar";
import CartListModal from "./features/cart/CartList";
import { useAppSelector } from "./app/hooks";
import { isShowCart } from "./features/cart/cartSlice";
import FilterInput from "./components/filter-input/FilterInput";
function App() {
  const showCart = useAppSelector(isShowCart);
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="home-container">
          <FilterInput />
          <RobotList />
        </div>
      </div>
      {showCart && <CartListModal />}
    </>
  );
}

export default App;
