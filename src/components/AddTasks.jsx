import { useState } from "react";
import { PropTypes } from "prop-types";

function AddTasks({ onAddTaskClick }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        id="input_title"
        autoFocus
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!title || !description) {
            return alert("Preencha os campos corretamente.");
          }

          if (onAddTaskClick(title, description)) {
            setTitle("");
            setDescription("");
            document.getElementById("input_title").focus();
          }
        }}
      >
        Adicionar {title}
      </button>
    </div>
  );
}

// PropTypes é uma biblioteca que ajuda a validar os props que são passados para o componente.
AddTasks.propTypes = {
  onAddTaskClick: PropTypes.func.isRequired,
};

export default AddTasks;
