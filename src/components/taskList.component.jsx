import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TaskCard } from "./taskCard.component";

export function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  if (tasks.length === 0) {
    return (
      <h1 className="text-4xl font-bold text-center text-white p-10">
        No Tasks
      </h1>
    );
  }
  return (
    <div>
      <header>
        <h1 className="text-4xl font-bold text-center text-white p-10">
          Tasks: {tasks.length}
        </h1>
        <Link
          to="/ReactTasksReduxToolkit/create"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-1 rounded-sm ml-10"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-4 gap-2 p-10">
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </div>
    </div>
  );
}
