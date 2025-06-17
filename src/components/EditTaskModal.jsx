import { useState, useRef, useEffect } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onConfirm }) {
  const [editedTask, setEditedTask] = useState(task);
  const editFormRef = useRef();

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editedTask);
  };

  const changeEditedTask = (key, event) => {
    setEditedTask((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const { title, description, status } = editedTask || {};

  return (
    <Modal
      title={"Modifica task"}
      content={
        <form ref={editFormRef} onSubmit={handleSubmit}>
          <label>
            Nome task:
            <input
              type="text"
              value={title || ""}
              onChange={(e) => changeEditedTask("title", e)}
            />
          </label>
          <label>
            Descrizione:
            <textarea
              value={description || ""}
              onChange={(e) => changeEditedTask("description", e)}
            ></textarea>
          </label>
          <label>
            Status:
            <select
              value={status || ""}
              onChange={(e) => changeEditedTask("status", e)}
            >
              {["To do", "Doing", "Done"].map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" style={{ display: "none" }}>
            Salva
          </button>
        </form>
      }
      confirmText="Salva"
      show={show}
      onClose={onClose}
      onConfirm={() => editFormRef.current.requestSubmit()}
    />
  );
}
