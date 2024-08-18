import Todo from "./Todo";
import TodoItems from "./TodoItems";

const ListTodo = () => {
  const todoList = [
    {
      text: "tarefa1",
    },
    {
      text: "tarefe2",
    },
    {
      text: "tarefa3",
    },
  ];
  return (
    <div className="flex justify-center items-center mt-8 gap-1 flex-col">
      <Todo />
      {todoList.map((item, index) => {
        return <TodoItems key={index} text={item.text} />;
      })}
    </div>
  );
};

export default ListTodo;
