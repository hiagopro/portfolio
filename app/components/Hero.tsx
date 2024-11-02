import React from "react";
import Image from "next/image";
import { ChevronsRight, NotepadText } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className=" py-6 relative  bg-surface-background md:flex md:flex-row md:px-10 md:justify-between lg:justify-center lg:gap-32 lg:py-40" id="Home">
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
          <button className="flex gap-1 py-3 px-4 text-nowrap font-Heebo text-primary-text rounded-lg bg-surface-secondary hover:bg-surface-terciari lg:px-6 lg:py-4">
            <NotepadText /> Meu resumo{" "}
          </button>
          <button className="flex py-3 px-4 text-nowrap font-Heebo text-primary-text rounded-lg bg-primary-color-500 hover:bg-primary-color-400 lg:py-4 lg:px-6">
            Get in touch
            <ChevronsRight />
          </button>
        </div>
      </div>
      <svg
        className="w-20 h-20  text-secondary-color rotate-180 absolute bottom-[-45px] right-10 "
        viewBox="0 0 69 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.563538 86.4441C9.62047 89.2172 16.6734 91.0373 25.3582 87.062C32.131 83.9619 38.9967 80.1472 44.485 75.0561C50.4537 69.5194 57.9022 61.3399 53.1364 53.1378C49.3227 46.5744 43.2597 40.2549 43.2597 32.3089C43.2597 23.5235 48.7541 18.3068 54.9775 12.9941C58.6952 9.82034 63.0893 5.84965 65.693 1.65486C66.8291 -0.175672 57.9801 2.37935 56.7613 2.69535C56.4809 2.76805 57.7534 3.40302 58.0609 3.80379C59.7892 6.05612 60.7498 8.83608 62.4864 11.1169C66.0039 15.7368 66.9283 3.54324 68.4493 1.40005"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Hero;
