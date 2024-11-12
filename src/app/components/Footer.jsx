import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="flex flex-col md:flex-row space-x-8 mb-6 justify-center items-center w-full">
          <a href="#about" className="hover:text-red-500 transition duration-300">
            Sobre Mim
          </a>
          <a href="#projects" className="hover:text-red-500 transition duration-300">
            Projetos
          </a>
          <a href="#contact" className="hover:text-red-500 transition duration-300">
            Contato
          </a>
        </div>

        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com/seunome"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/seunome"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
