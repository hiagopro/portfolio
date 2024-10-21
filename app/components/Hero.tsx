import React from "react";
import Image from "next/image";
import { ChevronsRight, NotepadText } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-surface-background md:flex md:flex-row md:px-10 md:justify-between lg:justify-center lg:gap-32 lg:py-24">
      <div className=" flex  justify-center md:order-2 md:justify-center">
        <Image src="/computer.svg" width="300" height="300" alt="" />
      </div>
      <div className="md:order-1 md:w-1/2 lg:">
        <div className=" px-12 py-6 bg-gradient-to-r from-primary-color-500 via-primary-color-400 to-secondary-color inline-block bg-clip-text  ">
          <h1 className="    bg-gradient-to-r from-primary-color-500 via-primary-color-400 to-secondary-color bg-clip-text text-transparent text-3xl font-kalam lg:text-5xl">
            OI, Me Chamo Hiago
          </h1>
        </div>
        <div className="px-12 flex flex-col gap-4">
          <h1 className="text-2xl font-Heebo text-primary-text">
            Full-stack develooper & Entusiasta de inovação
          </h1>
          <p className="text-sm font-Heebo text-secondary-text">
            Minha Caminhada no Desenvolvimento Web começou em março de 2023. Eu
            me especializei apartir de meus projetos pessoais na construção do
            Front-end, Back-end, Banco de dados e suas respectivas hospedagens.
          </p>
        </div>
        <div className="px-12 flex gap-5 py-6 ">
          <button className="flex gap-1 py-3 px-4 text-nowrap font-Heebo text-primary-text rounded-lg bg-surface-secondary hover:bg-surface-terciari lg:px-6 lg:py-4"><NotepadText /> Meu resumo </button>
          <button className="flex py-3 px-4 text-nowrap font-Heebo text-primary-text rounded-lg bg-primary-color-500 hover:bg-primary-color-400 lg:py-4 lg:px-6" >Get in touch<ChevronsRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
