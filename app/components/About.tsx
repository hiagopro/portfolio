import React from "react";
import Image from "next/image";
import { NotepadText } from "lucide-react";
const About: React.FC = () => {
  return (
    <div className="bg-surface-background lg:pb-6" id="About">
      <div className="bg-surface-terciari flex flex-col pb-8 md:flex-row  md:rounded-lg md:w-11/12 md:m-auto md:pb-0 md:py-4">
        <div className="flex flex-col justify-center  md:w-1/2 lg:px-12 lg:pb-4">
          <Image
            className="lg:hidden"
            src="/mancomputer.svg"
            width="400"
            height="300"
            alt=""
          />
          <Image
            className="hidden lg:flex"
            src="/mancomputer.svg"
            width="500"
            height="400"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 md:justify-center pr-5 md:gap-6 md:py-6">
          <div className="flex gap-6 pl-8 mt-0 ">
            <i className="devicon-javascript-plain text-primary-color-400 text-4xl md:text-3xl"></i>
            <i className="devicon-react-original  text-primary-color-400 text-4xl md:text-3xl"></i>
            <i className="devicon-mysql-original text-primary-color-400 text-4xl md:text-3xl"></i>
            <i className="devicon-tailwindcss-original text-primary-color-400 text-4xl md:text-3xl"></i>
            <i className="devicon-nodejs-plain-wordmark text-primary-color-400 text-4xl md:text-3xl"></i>
          </div>
          <div>
            <h2 className="font-kalam text-2xl text-secondary-color pl-8 md:text-xl">
              About me
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="pl-8 text-3xl text-primary-text font-Heebo font-bold md:text-2xl">
              Eu sou um apaixonado pelo desenvolvimento web a procura de minha
              primeira experiencia profissional
            </h1>
            <p className="pl-8 text-xl text-secondary-text font-Heebo md:text-sm">
              alem de codar, sou um amante de esportes, gosto de treinar, jogar
              futebol e futvolei. gosto de sair com a familia e momentos ao ar
              livre.
            </p>
          </div>
          <div className="pl-8">
            {" "}
            <button
              className="flex gap-1 py-4 px-6 text-nowrap text-sm
      font-Heebo text-primary-text rounded-lg bg-primary-color-500 hover:bg-primary-color-400 md:px-6 md:py-4 "
            >
              <NotepadText /> Meu resumo{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
