import gumGum from "../assets/gumGum.svg";

const Header = () => {
  return (
    <nav className="w-full p-6 bg-one-piece-color">
      <div className="flex items-center justify-center gap-4 ">
        <img width={65} height={65} src={gumGum} alt="Logo GumGum" />
        <h1 className="font-normal text-6xl text-white mt-2 outline-4">
          GumGum To Do List
        </h1>
      </div>
    </nav>
  );
};

export default Header;
