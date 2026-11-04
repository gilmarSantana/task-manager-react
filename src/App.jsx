import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  // O useEffect é um hook que executa uma função quando o valor do segundo parametro é alterado. No nosso caso, o segundo parametro é o array tasks que é um state que armazena as tarefas.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const agora = new Date();
  const dataHoraFormatada = agora.toLocaleString("pt-BR");
  const navigate = useNavigate(); // hook

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
          whenCompleted: dataHoraFormatada,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const taskToExclude = tasks.find((task) => task.id === taskId);

    if (taskToExclude && taskToExclude.isCompleted) {
      alert("Não é possível excluir uma tarefa já concluída");
      return;
    }

    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    let newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    return true;
  }
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); //from hook
    console.log(query);
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
          onSeeDetailsClick={onSeeDetailsClick}
        />
      </div>
    </div>
  );
}

export default App;
