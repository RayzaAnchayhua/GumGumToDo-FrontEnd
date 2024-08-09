import { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  task: string;
  isEditing: boolean;
}

const TodoList = () => {
  const [todoValue, setTodo] = useState<Todo[]>([]);

  const createTodo = (todo: string) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  return (
    <div
      className="container bg-yellow-400 mt-20 p-8
        rounded-md"
    >
      <Form createTodo={createTodo} />
    </div>
  );
};

export default TodoList;
