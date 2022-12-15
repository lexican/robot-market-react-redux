import RobotList from "./features/robot/RobotList";
import "./app.scss";
import Navbar from "./features/navbar/Navbar";
function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <RobotList />
      </div>
    </div>
  );
}

export default App;
