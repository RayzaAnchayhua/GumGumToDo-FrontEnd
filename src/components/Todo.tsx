import todo_icon from "../assets/todo_icon.svg";

const Todo = () => {
  return (
    <div className="bg-one-piece-color w-[65%] h-[15%] rounded-full shadow-lg justify-around flex flex-row items-center py-2">
      <h1 className="text-white text-stroke text-stroke-black text-3xl font-medium leading-normal align-baseline">
        Adicione suas tarefas aqui
      </h1>
      <img className="w-12 justify-end" src={todo_icon} alt=" TodoList" />
    </div>
  );
};

export default Todo;
