import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addTask, editTask } from "../features/tasks/task.slice";

export function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const emptyTask = {
    id: uuid(),
    title: "",
    description: "",
  };
  const [task, setTask] = useState(emptyTask);

  useEffect(() => {
    if (params.id) {
      const t = tasks.find((t) => t.id === params.id);
      if (t) {
        setTask(t);
      }
    }
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask(task));
    }
    setTask(emptyTask);
    navigate("/ReactTasksReduxToolkit/");
  };

  return (
    <div className="max-w-md mx-auto bg-slate-600 rounded-b-xl">
      <form onSubmit={handleSubmit} className="p-10 mb-6">
        <h1 className="text-2xl font-bold capitalize mb-3 text-white">
          Create task
        </h1>
        <input
          required
          autoFocus
          placeholder="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="p-3 w-full mb-2"
        />
        <textarea
          required
          placeholder="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          className="p-3 w-full mb-2 border-2"
        />
        <button className="bg-indigo-400 px-3 py-1 text-white hover:bg-indigo-300">
          Save
        </button>
      </form>
    </div>
  );
}
