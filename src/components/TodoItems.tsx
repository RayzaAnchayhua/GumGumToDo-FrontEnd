import tick from "../assets/tick.svg";
import yesdelete from "../assets/delete_icon.svg";
import edit from "../assets/edit.svg";

const TodoItems = ({text}) => {
  return (
    <div className="bg-gradient-to-t bg-secundary flex items-center my-3 gap-4 text-white rounded-full w-full">
      <div className="flex flex-1 items-center cursor-pointer ">
        <img src={tick} alt="tick" className="w-20" />
        <p className=" ml-4 text-[35px]">{text}</p>
      </div>

      <img src={edit} alt="edit"  className="w-10 cursor-pointer"/>
      <img src={yesdelete} alt="delete"  className="w-10 cursor-pointer"/>
      
    </div>
  );
};

export default TodoItems;
