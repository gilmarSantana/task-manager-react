import { ChevronRightIcon, Trash } from "lucide-react";
import { PropTypes } from "prop-types";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick, onSeeDetailsClick }) {

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

// PropTypes é uma biblioteca que ajuda a validar os props que são passados para o componente.
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onSeeDetailsClick: PropTypes.func.isRequired,
}
export default Tasks;
