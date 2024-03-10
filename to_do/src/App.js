import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCounter] = useState(1);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    setTask([...task, { id: count, text: newTask }]);
    setNewTask("");
    setCounter(count + 1);
  };

  const remove = (id) => {
    const updated = task.filter((t) => t.id !== id);
    setTask(updated);
  };

  return (
    <div>
      <h1>Todo list</h1>

      <div>
        <input
          placeholder="new task"
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        ></input>
        <button onClick={addTask}>Add</button>
        <div>
          {newTask !== "" && (
            <h3>
              {count}:{newTask}
            </h3>
          )}
        </div>

        <h1>Tasks</h1>
        <ul>
          {task.map((t) => (
            <li key={t.id}>
              ({t.id}){t.text}{" "}
              <button onClick={() => remove(t.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
