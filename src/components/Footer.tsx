const Footer = () => {
  return (
    <footer className=" bg-one-piece-color">
      <div
        className="bg-one-piece-color rounded-full absolute z-3 bottom-0 left-0 right-0
      py-2 flex flex-row items-center justify-center w-80"
      >
        <h1 className="text-white">
          Criação e Desenvolvimento:{" "}
          <a
            className="underline"
            href="https://github.com/RayzaAnchayhua"
            title="Visite meu Github!"
            target="_blank"
          >
            Rayza Luana®
          </a>
          2024
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
