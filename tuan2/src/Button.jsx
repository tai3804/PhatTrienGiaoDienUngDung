import React from "react";

function CustomButton({ text, color, bgColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: "5px",
        padding: "4px 8px",
        border: "1px solid #333",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default CustomButton;
