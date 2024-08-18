const Footer = () => {
  return (
    <footer className="items-center justify-center flex flex-1 w-full align-baseline z-10 text-3xl">
      <div
        className="bg-one-piece-color rounded-lg absolute bottom-4 
      py-2 w-[30%] border text-center"
      >
        <h1 className="text-white">
          Criação e Desenvolvimento:
          <a
            className="underline underline-offset-8  text-white outline-0"
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
