import Todo from "./Todo";
import TodoItems from "./TodoItems";

const ListTodo = () => {
  return (
    <div className="flex justify-center items-center mt-4 gap-4 flex-col">
      <Todo />
      <TodoItems/>
    </div>
  );
};

export default ListTodo;
