import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, removeTask } = useContext(GlobalContext);

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <h2>Task non trovata</h2>;
  }

  const handleDelete = async () => {
    try {
      await removeTask(task.id);
      alert("Task eliminata con successo");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <main className="task-detail-page">
      <h1>Dettaglio Task</h1>
      <p>
        <strong>Nome:</strong> {task.title}
      </p>
      <p>
        <strong>Descrizione:</strong> {task.description}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Data di creazione:</strong>{" "}
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <button onClick={handleDelete}>Elimina task</button>
    </main>
  );
}
