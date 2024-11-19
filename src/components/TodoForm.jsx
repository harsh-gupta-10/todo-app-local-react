import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <div className="">
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write a todo"
          className="w-full border border-black/10
            rounded-l-lg px-3 outline-none duration-200
             focus:bg-gray-300
            bg-green-200 text-white py-3"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          type="submit"
          className="bg-yellow-500 text-white px-3 py-1 rounded-r-lg 
            shrink-0"
        >
          ✔️
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
