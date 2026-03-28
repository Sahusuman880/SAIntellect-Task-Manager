import React, { useEffect, useState } from "react";
import TaskLisingCards from "./TaskLisingCards";
import { apiCall } from "../utils/apiCall";
import AddAndEditTaskModal from "./AddAndEditTaskModal";

function TaskListing() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTasks = async () => {
    const response = await apiCall({ url: "api/task/all", method: "GET" });
    setTasks(response);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          paddingTop: "20px",
          width: "100%",
        }}
      >
        <h1 style={{ color: "#02132cff" }}>All Tasks</h1>
        <div>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#2661b9ff",
              borderRadius: "10px",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Create Task
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {tasks.map((task) => (
            <TaskLisingCards key={task.id} task={task} callback={fetchTasks} />
          ))}
        </div>
        {tasks.length === 0 && <p style={{ color: "blue" }}>No tasks found</p>}
      </div>
      {isModalOpen && (
        <AddAndEditTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isEdit={false}
          details={null}
          onSuccess={() => {
            setIsModalOpen(false);
            fetchTasks();
          }}
        />
      )}
    </>
  );
}

export default TaskListing;
