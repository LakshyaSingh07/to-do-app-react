import React from "react";

const TodoItem = ({ todo, onDelete, onComplete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onComplete(todo._id)}
        />
        {todo.text}
      </div>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;