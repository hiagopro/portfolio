"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_wf2nbfc",
        "template_j2dq18c",
        templateParams,
        "MoI40Jgq7x6iaXpRd"
      )
      .then(
        (response) => {
          console.log(response)
            setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log(err);
        }
      );
  }
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
            <div className="flex flex-col ">
              <p className=" font-kalam text-secondary-color text-xl">
                Contato
              </p>
              <h1 className="font-Heebo text-primary-text text-2xl py-3">
                Se interessou no meu trabalho? Vamos trabalhar juntos!
              </h1>
              <div className="flex flex-col">
                <p className="font-Heebo text-secondary-text text-sm flex flex-col">
                  Sempre estou livre pra conversar. Me envie um email
                </p>
                <p className="text-secondary-color underline decoration-solid decoration-secondary-color text-sm font-Heebo">
                  <a href="">hiagogentilbusiness@gmail.com</a>
                </p>
                <p className="font-Heebo text-secondary-text text-sm flex flex-col">
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
                    <i className="devicon-github-original text-3xl px-2 py-2 text-secondary-text"></i>
                  </a>
                </div>
                <div className=" bg-surface-secondary rounded-lg flex">
                  <a
                    href="https://www.linkedin.com/in/hiago-gentil-28a5b6270/"
                    target="_blank"
                    className="flex"
                  >
                    <i className="devicon-linkedin-plain text-3xl px-2 py-2 text-secondary-text"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  md:w-1/3 md:mt-8">
            <form
              className="flex flex-col gap-5 py-10 w-full"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                className="bg-surface-background rounded-lg h-16 pl-5 text-xl font-Heebo text-secondary-text focus:outline-secondary-color md:w-full"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                className="bg-surface-background rounded-lg h-16 pl-5 text-xl font-Heebo text-secondary-text focus:outline-secondary-color"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <textarea
                className="bg-surface-background rounded-lg pb-32 pt-4 pl-5 text-xl font-Heebo text-secondary-text focus:outline-secondary-color"
                placeholder="Menssagem"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="flex py-2 md:py-0">
                <button
                  className="flex gap-1 py-5 px-4 text-nowrap  justify-center items-center
      font-Heebo text-primary-text rounded-lg bg-primary-color-400  md:py-3 text-sm"
                >
                  Enviar Mensagem <ArrowRight size={28} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
