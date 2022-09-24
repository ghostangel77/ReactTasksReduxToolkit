import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/taskForm.component";
import { TaskList } from "./components/taskList.component";

function App() {
  return (
    <main className="h-screen bg-zinc-900">
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/ReactTasksReduxToolkit/" element={<TaskList />} />
            <Route
              path="/ReactTasksReduxToolkit/create"
              element={<TaskForm />}
            />
            <Route
              path="/ReactTasksReduxToolkit/edit/:id"
              element={<TaskForm />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
