import { ChevronRightIcon, Check, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick }) {
  const navigate = useNavigate(); // hook

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); //from hook
    console.log(query);
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 text-white text-left w-full p-2 rounded-md hover:bg-slate-300 ${task.isCompleted ? "line-through text-black bg-green-200 hover:bg-green-200" : ""}`}
            onClick={() => {
              onTaskClick(task.id);
            }}
            disabled={task.isCompleted}
          >
            {task.title}{" "}
            {task.isCompleted ? <p>Completado em {task.whenCompleted}</p> : ""}
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => {
              onSeeDetailsClick(task);
            }}
          >
            <ChevronRightIcon />
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => {
              onDeleteTaskClick(task.id);
            }}
            disabled={task.isCompleted}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
