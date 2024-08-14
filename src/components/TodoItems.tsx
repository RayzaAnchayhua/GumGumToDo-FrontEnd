import tick from "../assets/tick.svg";
import not_tick from "../assets/not_tick.svg";

const TodoItems = () => {
  return (
    <div className=" flex items-center my-3 gap-4">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={tick} alt="" className="w-7" />
        <p className="text-slate-700 ml-4 text-[35px]">Learn Code</p>
      </div>
    </div>
  );
};

export default TodoItems;
