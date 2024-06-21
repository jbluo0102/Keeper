import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note({ id, title, content, onDeleteItem }) {
  function handleClick() {
    onDeleteItem(id);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}
