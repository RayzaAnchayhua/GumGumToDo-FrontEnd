// import todo_icon from "../assets/todo_icon.svg";
import not_tick from "../assets/not_tick.svg";

const Todo = () => {
  return (
    <div className="bg-one-piece-color w-[70%] h-[15%] rounded-full  flex flex-row items-center py-3 px-9">
      <img src={not_tick} alt="not_tick" />
      <div
        className="bg-one-piece-color text-black border rounded-full px-3 py-2 
       focus:ring-black w-full h-full"
      >
        <input
          type="text"
          placeholder="Adicione suas tarefas aqui...  "
          className="bg-one-piece-color  text-2xl rounded-md px-4 py-3 focus:outline-none
           focus:ring-white focus:ring-2 text-stroke-black w-full h-full "
        />
      </div>
      <button className="rounded-full bg-black w-48 h-14 text-white text-2xl cursor-pointer px-2">
        Nova Tarefa
      </button>
      {/* <img className="w-12 justify-end" src={todo_icon} alt=" TodoList" /> */}
    </div>
  );
};

export default Todo;
