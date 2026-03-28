import React, { useState } from "react";
import { apiCall } from "../utils/apiCall";

function AddAndEditTaskModal({
  isOpen,
  onClose,
  isEdit = false,
  details,
  onSuccess,
}) {
  const { title, description, status, id } = details || {
    title: "",
    description: "",
    status: "pending",
    id: null,
  };

  const [formData, setFormData] = useState({ title, description, status });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.title || !formData.description || !formData.status) {
      setError("All fields are required.");
      return;
    }
    try {
      setLoading(true);
      if (isEdit) {
        await apiCall({
          url: `api/task/update/${id}`,
          method: "PUT",
          body: formData,
        });
      } else {
        await apiCall({ url: "api/task/add", method: "POST", body: formData });
      }
      if (onSuccess) onSuccess();
      onClose();
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: "1000",
        width: "50%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {isEdit ? "Edit Task" : "Add Task"}
        </p>
        <button
          onClick={onClose}
          style={{
            padding: "2px 5px",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#e21818ff",
            color: "white",
            border: "none",
          }}
        >
          X
        </button>
      </div>

      {error && (
        <p style={{ color: "red", fontSize: "14px", margin: "5px 10px" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "10px",
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            style={{ padding: "5px", width: "100%", color: "black" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "10px",
          }}
        >
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            style={{ padding: "5px", width: "100%", color: "black" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "10px",
          }}
        >
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            style={{ padding: "5px", width: "100%", color: "black" }}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "10px",
          }}
        >
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "5px",
              width: "100%",
              color: "white",
              backgroundColor: loading ? "#aaa" : "#2661b9ff",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Saving..." : isEdit ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAndEditTaskModal;
