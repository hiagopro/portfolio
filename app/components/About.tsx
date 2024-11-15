import React from "react";
import Image from "next/image";
import { NotepadText } from "lucide-react";
import Link from "next/link";
const About: React.FC = () => {
  return (
    <div className="bg-surface-background  md:py-4" id="About">
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
              Sobre mim
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="pl-8 text-xl text-primary-text font-Heebo font-bold md:text-2xl">
              Eu sou um apaixonado pelo desenvolvimento web a procura de minha
              primeira experiência profissional
            </h1>
            <p className="pl-8 text-sm text-secondary-text font-Heebo md:text-sm">
              Sou uma pessoa super dedicada aos estudos, e amo estudar
              programação
            </p>
          </div>
          <div className="pl-8">
            {" "}
            <button
              className="flex  py-4 px-6 text-nowrap text-sm justify-center items-center
      font-Heebo text-primary-text rounded-lg bg-primary-color-500 hover:bg-primary-color-400 md:px-6 md:py-4 "
            >
              <Link
                href="/curriculo_hiago_gentil2024.pdf"
                className="flex items-center gap-1 "
                target="_blank"
              >
                <NotepadText /> Meu resumo{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
