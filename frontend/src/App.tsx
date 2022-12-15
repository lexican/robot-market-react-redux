import RobotList from "./features/robot/RobotList";
import "./app.scss";
import Navbar from "./features/navbar/Navbar";
import CartList from "./features/cart/CartList";
function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <RobotList />
      </div>
      <CartList />
    </div>
  );
}

export default App;
