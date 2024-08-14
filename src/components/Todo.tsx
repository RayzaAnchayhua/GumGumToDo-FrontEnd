import todo_icon from "../assets/todo_icon.svg";
import not_tick from "../assets/not_tick.svg";

const Todo = () => {
  return (
    <div className="bg-one-piece-color w-[65%] h-[15%] rounded-full shadow-lg justify-around flex flex-row items-center py-2">
      <img src={not_tick} alt="not_tick" />
      <div
        className="bg-one-piece-color text-black border rounded-full px-3 py-2 
       focus:ring-black "
      >
        <input
          type="text"
          placeholder="Adicione suas tarefas aqui...  "
          className="bg-one-piece-color text-white rounded-md px-4 py-3 focus:outline-none
           focus:ring-white focus:ring-2 text-stroke-black"
        />
      </div>
      <button className="border-none rounded-full bg-black w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
      <img className="w-12 justify-end" src={todo_icon} alt=" TodoList" />
    </div>
  );
};

export default Todo;
