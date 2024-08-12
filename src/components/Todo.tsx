import todo_icon from "../assets/todo_icon.svg";
import not_tick from "../assets/not_tick.svg";

const Todo = () => {
  return (
    <div className="bg-one-piece-color w-[65%] h-[15%] rounded-full shadow-lg justify-around flex flex-row items-center py-2">
      <img src={not_tick} alt="not_tick" />
      <h1 className="text-white text-2xl flex">
        Adicione suas tarefas aqui..
      </h1>
      <img className="w-12 justify-end" src={todo_icon} alt=" TodoList" />
    </div>
  );
};

export default Todo;
