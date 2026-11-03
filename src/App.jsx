import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      title: "Estudar Python",
      description: "Estudar Python focado em análise de dados",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Fazer atividade da faculdade",
      description: "Responder questionário das disciplinas",
      isCompleted: false,
    },
  ]);

  const agora = new Date();
  const dataHoraFormatada = agora.toLocaleString("pt-BR");

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
      id: v4,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    return true;
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
        />
      </div>
    </div>
  );
}

export default App;
