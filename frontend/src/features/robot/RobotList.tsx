import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import {
  fetchRobots,
  IRobot,
  robotsLoadingStatus,
  selectAllRobots,
} from "./robotSlice";
import RobotItem from "../../components/robot-item/RobotItem";

export default function RobotList(): JSX.Element {
  const dispatch = useAppDispatch();
  const robots = useSelector(selectAllRobots);
  const loading = useSelector(robotsLoadingStatus);

  useEffect(() => {
    dispatch(fetchRobots());
  }, []);

  if (loading === "loading") {
    return <div>Loading ...</div>;
  }

  return (
    <div className="row">
      {robots.map((robot: IRobot) => {
        return <RobotItem key={robot.name} robot={robot} />;
      })}
    </div>
  );
}
