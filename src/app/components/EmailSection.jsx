"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className=" my-12 md:my-12 py-24 gap-4 relative justify-center items-center"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 flex flex-col justify-center items-center text-center">
        <h5 className="text-xl font-bold text-white my-2">Vamos Conectar</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Atualmente, estou em busca da minha primeira oportunidade profissional e estou aberto a novas conexões. Se você tiver alguma dúvida ou quiser discutir possíveis colaborações, ficarei feliz em responder e aprender mais sobre como posso contribuir.
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Email: josevictorcaravantealves10@hotmail.com
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/JVictor5" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Ícone do Github" />
          </a>
          <a href="https://www.linkedin.com/in/josé-victor-428b7026a/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Ícone do Linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
