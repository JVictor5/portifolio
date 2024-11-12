"use client";
import React, { useTransition, useState } from "react";
import { FaCode } from "react-icons/fa";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
   content: (
  <div className="flex justify-between space-x-10">
    <div>
      <h3 className="font-bold text-lg mb-2">Front-end</h3>
      <ul className="list-disc pl-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Angular</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">Back-end</h3>
      <ul className="list-disc pl-5">
        <li>Python</li>
        <li>C#</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Next.js</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-2">Banco de Dados</h3>
      <ul className="list-disc pl-5">
        <li>Firebase</li>
        <li>MySQL</li>
      </ul>
    </div>
  </div>
)

  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Cursando Análise e Desenvolvimento de Sistemas - Fatec</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
       <div className="flex justify-center items-center w-full h-full">
          <FaCode className="text-5xl text-white" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Sou iniciante na área de desenvolvimento e ainda não tive experiência profissional, mas sou extremamente apaixonado por aprender e criar soluções inovadoras. Estou focado em adquirir e aprimorar minhas habilidades tanto no desenvolvimento front-end quanto no back-end, sempre buscando me atualizar com as últimas tecnologias e boas práticas do mercado.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Curso/Faculdade{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
