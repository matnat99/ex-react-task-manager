import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);

  console.log(tasks);

  return (
    <div>
      <h1>Lista delle task</h1>
    </div>
  );
}
