import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className=" bg-surface-background flex justify-center">
      <div
        className="bg-surface-primary py-8 md:rounded-lg w-full md:w-11/12 "
        id="Contact"
      >
        <div className="flex flex-col px-6 md:flex-row  md:justify-between md:px-16 md:gap-3">
          <div>
            {" "}
            <div className="py-10">
              {" "}
              <Image
                className=" "
                src="/preview.svg"
                width="200"
                height="200"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className=" font-kalam text-secondary-color text-xl">
                Contact
              </p>
              <h1 className="font-Heebo text-primary-text text-2xl">
                Se interessou no meu trabalho? Vamos trabalhar juntos!
              </h1>
              <div className="flex flex-col">
                <p className="font-Heebo text-secondary-text text-xl flex flex-col">
                  Sempre estou livre pra conversar. Me envie um email
                </p>
                <p className="text-secondary-color underline decoration-solid decoration-secondary-color text-xl font-Heebo">
                  <a href="">hiagogentilbusiness@gmail.com</a>
                </p>
                <p className="font-Heebo text-secondary-text text-xl flex flex-col">
                  ou me mande uma mensagem nas redes sociais.
                </p>
              </div>
              <div className=" flex gap-4 py-5">
                <div className=" bg-surface-secondary rounded-lg flex">
                  <a
                    href="https://github.com/hiagopro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <i className="devicon-github-original text-4xl px-2 py-2 text-secondary-text"></i>
                  </a>
                </div>
                <div className=" bg-surface-secondary rounded-lg flex">
                  <a
                    href="https://www.linkedin.com/in/hiago-gentil-28a5b6270/"
                    target="_blank"
                    className="flex"
                  >
                    <i className="devicon-linkedin-plain text-4xl px-2 py-2 text-secondary-text"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 py-10 md:w-1/3 md:mt-8">
            <input
              type="text"
              className="bg-surface-background rounded-lg h-16 pl-5 text-xl font-Heebo text-secondary-text focus:outline-secondary-color md:w-full"
              placeholder="Nome"
            />
            <input
              type="text"
              className="bg-surface-background rounded-lg h-16 pl-5 text-xl font-Heebo text-secondary-text focus:outline-secondary-color"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="bg-surface-background rounded-lg pb-32 pt-4 pl-5 text-xl font-Heebo text-secondary-text focus:outline-secondary-color"
              placeholder="Menssagem"
            />
            <div className="flex py-2 md:py-0">
              <button
                className="flex gap-1 py-5 px-4 text-nowrap  justify-center items-center
      font-Heebo text-primary-text rounded-lg bg-primary-color-400 text-xl md:py-3 md:text-sm"
              >
                Enviar Mensagem <ArrowRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
