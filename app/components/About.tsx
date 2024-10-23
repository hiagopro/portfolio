import React from "react";
import Image from "next/image";
import {  NotepadText } from "lucide-react";
const About: React.FC = () => {
  return (
    <div className="bg-surface-terciari flex flex-col gap-8">
      <div className="flex flex-col justify-center">
        <Image className="" src="/mancomputer.svg" width="400" height="300" alt="" />

        <div className="flex gap-6 pl-8 mt-0 ">
          <i className="devicon-javascript-plain text-primary-color-400 text-4xl"></i>
          <i className="devicon-react-original  text-primary-color-400 text-4xl"></i>
          <i className="devicon-mysql-original text-primary-color-400 text-4xl"></i>
          <i className="devicon-tailwindcss-original text-primary-color-400 text-4xl"></i>
          <i className="devicon-nodejs-plain-wordmark text-primary-color-400 text-4xl"></i>
        </div>
      </div>
      <div>
        <h2 className="font-kalam text-2xl text-secondary-color pl-8">
          About me
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="pl-8 text-3xl text-primary-text font-Heebo font-bold">
            Eu sou um apaixonado pelo desenvolvimento web a procura de minha primeira experiencia profissional
        </h1>
        <p className="pl-8 text-xl text-secondary-text font-Heebo">alem de codar, sou um amante de esportes, gosto de treinar, jogar futebol e futvolei. gosto de sair com a familia e momentos ao ar livre.</p>
      </div>
      <div className="pl-8"> <button className="flex gap-1 py-4 px-6 text-nowrap font-Heebo text-primary-text rounded-lg bg-primary-color-500 hover:bg-primary-color-400 lg:px-6 lg:py-4">
            <NotepadText /> Meu resumo{" "}
          </button></div>
    </div>
  );
};
export default About;
