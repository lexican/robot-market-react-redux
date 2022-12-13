import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { fetchRobots, IRobot, selectAllRobots } from "./robotSlice";
import RobotItem from "../../components/robot-item/RobotItem";

export default function RobotList(): JSX.Element {
  const dispatch = useAppDispatch();
  const robots = useSelector(selectAllRobots);

  useEffect(() => {
    dispatch(fetchRobots());
  }, []);

  return (
    <div className="row">
      {robots.length > 0
        ? robots.map((robot: IRobot) => {
            return <RobotItem key={robot.name} robot={robot} />;
          })
        : null}
    </div>
  );
}
