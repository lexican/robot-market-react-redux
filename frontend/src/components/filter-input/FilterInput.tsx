import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { filterRobots } from "../../features/robot/robotSlice";
import "./filter-input.scss";

export default function FilterInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterRobots(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className="filter-container">
      <input
        type="text"
        className="form-control"
        placeholder="Filter Robots"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
}
