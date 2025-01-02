import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};


export default TodoList;