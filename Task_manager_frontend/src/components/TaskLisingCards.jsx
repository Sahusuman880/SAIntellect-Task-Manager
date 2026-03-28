import React, { useState } from "react";
import AddAndEditTaskModal from "./AddAndEditTaskModal";
import ConfirmationModal from "./ConfirmationModal";
import { apiCall } from "../utils/apiCall";

function TaskLisingCards({ task, callback }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await apiCall({ url: `api/task/delete/${task.id}`, method: "DELETE" });
      setIsDeleteModalOpen(false);
      callback();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <>
      <div
        style={{
          width: "90%",
          backgroundColor: "#02132cff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "70%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <p>
            <strong>Title:</strong> {task.title}
          </p>
          <p>
            <strong>Description:</strong> {task.description}
          </p>
          <p>
            <strong>Status:</strong> {task.status}
          </p>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>

      {isEditModalOpen && (
        <AddAndEditTaskModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          isEdit={true}
          details={task}
          onSuccess={() => {
            setIsEditModalOpen(false);
            callback();
          }}
        />
      )}

      {isDeleteModalOpen && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onYesClick={handleDelete}
        />
      )}
    </>
  );
}

export default TaskLisingCards;
