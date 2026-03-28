import React from "react";

function ConfirmationModal({ isOpen, onClose, onYesClick }) {
  if (!isOpen) return null;
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
      <p>Are you sure you want to delete this task?</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={onYesClick}
        >
          Yes
        </button>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
