import React, { useState } from "react";

const initialState = { title: "", content: "" };

export default function InputArea({ onAddItem }) {
  const [input, setInput] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(input.title, input.content);
    setInput(initialState);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          value={input.title}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={input.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
