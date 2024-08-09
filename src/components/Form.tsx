import React from "react";
import { useState } from "react";

interface FormType {
  createTodo: (todo: string) => void;
}

const Form = ({ createTodo }: FormType) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form className="mb-4 front-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border 
            border-black p-4 w-[300px] text-black mb-8 rounded placeholder:text-black-300"
        placeholder="Qual são suas tarefas hoje?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        className="bg-red-600 border-black p-4 
            text-white cursor-poiter rounded ml-2"
      >
        Adicionar tarefa
      </button>
    </form>
  );
};

export default Form;
