import todo_icon from "../assets/todo_icon.svg";

const Todo = () => {
  return (
    <div className="bg-one-piece-color w-96 h-16 flex-shrink-0 rounded-full shadow-lg ">
      <div className="bg-one-piece-color w-96 h-16 flex-shrink-0 rounded-full shadow-lg place-self-center gap-2">
        <img className="w-12" src={todo_icon} alt="" />
        <h1 className="text-white text-stroke text-stroke-black text-3xl font-medium leading-normal">
          Adicione suas tarefas aqui
        </h1>
      </div>
    </div>
  );
};

export default Todo;
