import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/task.slice";

export function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="bg-gray-700 text-white p-4 rounded-md capitalize">
      <h1 className="text-xl font-bold">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-400 hover:bg-red-300 px-2 py-1 rounded-md m-2 mt-4"
        onClick={handleDelete}
      >
        Delete
      </button>
      <Link
        to={`/edit/${task.id}`}
        className="bg-indigo-400 hover:bg-indigo-300 px-2 py-1 rounded-md mt-4 m-2"
      >
        Edit
      </Link>
    </div>
  );
}
