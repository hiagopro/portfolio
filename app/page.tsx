import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"; // Font Awesome
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Simple Icons

export default function Home() {
  return (
    <div className="bg-blue-200 ">
      <header className="bg-blue-200 h-screen flex-col justify-center items-center ">
        <div className="h-80 flex flex-col justify-center items-center   w-auto">
          <h1 className="font-bold text-black flex justify-center  text-9xl align-middle   ">
            OLÁ
          </h1>
          <p className="font-bold text-black flex justify-center  text-3xl text-center w-auto">
            Seja Bem Vindo{" "}
          </p>
        </div>
        <div className=" flex   justify-center items-center  m-auto">
          <h1 className="font-bold flex justify-center text-center align-middle text-5xl md:text-5xl lg:text-5xl  ">
            Me Chamo Hiago e sou
          </h1>
        </div>
        <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  max-w-max m-auto mt-5 md:mt-0">
          <h1 className=" font-bold text-5xl md:text-5xl lg:text-5xl text-center px-4  ">
            Full-Stack Develooper.
          </h1>
        </div>
        <div className="h-52 flex  justify-center items-center mt-5 ">
          <ul className="flex flex-col justify-center items-center gap-2 lg:flex-row md:flex-row lg:gap-8 md:gap-8">
            <li className="font-medium text-neutral-600 text-3xl md:text-3xl lg:text-3xl ">
              <a
                href="#sobre"
                className="relative inline-block    transition duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                Sobre mim
              </a>
            </li>
            <li className="font-medium text-neutral-600 text-3xl md:text-3xl lg:text-3xl ">
              <a
                href="#projetos"
                className="relative inline-block   transition duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                Projetos
              </a>
            </li>
            <li className="font-medium text-neutral-600 text-3xl md:text-3xl lg:text-3xl ">
              <a
                href="#habilidades"
                className="relative inline-block    transition duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                Habilidades
              </a>
            </li>
            <li className="font-medium text-neutral-600 text-3xl md:text-3xl lg:text-3xl ">
              <a
                href="#contato"
                className="relative inline-block    transition duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="mt-8">
        <h1
          id="sobre"
          className=" font-bold text-5xl md:text-5xl lg:text-5xl text-center px-4"
        >
          Sobre mim
        </h1>
        <p className="font-mono text-gray-800 text-2xl mt-14 ml-3 md:w-2/5 md:ml-6">
          Minha carreira na programação iniciou em março de 2023, estudando
          atraves do curso Discover da Rocketseat, onde pude aprender de forma
          superficial html, css, git, banco de dados e node, logo em seguida
          resolvi me aprofundar no front e aprender a utilizar ReactJs,
          realizando alguns projetos pessoais, e em sequencia estudei sobre
          nodeJs, mysql, encriptamento, hospedagem de uma aplicação com banco de
          dados para conseguir realizar meu projeto completo e coloca-lo no ar,
          como vera abaixo, e então estudei NextJs e tailwindcss para construir
          este portfolio.
        </p>
      </div>
      <div className="mt-8">
        <h1
          id="projetos"
          className=" font-bold text-5xl md:text-5xl lg:text-5xl text-center px-4"
        >
          Projetos
        </h1>
        <div className="w-auto h-auto">
          <p className="font-mono text-gray-800 text-2xl mt-14 ml-3 md:w-2/5 md:ml-6">
            Este é um projeto com o intuito de gerenciar suas despesas, podendo
            ser colocadas como despesas simples(apenas daqueles mes), despesas
            fixas(para todos meses e anos) e despesas parceladas.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h1
          id="habilidades"
          className=" font-bold text-5xl md:text-5xl lg:text-5xl text-center px-4"
        >
          Habilidades
        </h1>
        <div className="flex flex-row">
          <p className="font-mono text-gray-800 text-2xl mt-14 ml-3 w-72 md:w-2/5 md:ml-6">
            Ao longo da minha trajetoria no Desenvolvimento Web consegui
            contruir conhecimentos solidos em html, css, javascript, nodeJs,
            reactJs, NextJs, mySQL, hospedagem tanto de site quanto de banco de
            dados. Atraves da realização de projetos reais com essas
            tecnologias.
          </p>
          <div className="flex flex-col mt-40 md:mt-24 ml-3 gap-2 md:flex-row md:ml-44 md:transition-transform transform hover:scale-125">
            <FaHtml5
              className=" text-orange-600 text-4xl md:text-7xl md:mt-20 md:transition-transform transform hover:scale-125"
              title="HTML5"
            />
            <FaCss3Alt
              className=" text-blue-600 text-4xl md:text-7xl md:transition-transform transform hover:scale-125"
              title="CSS3"
            />
            <FaReact
              className=" text-blue-400 text-4xl md:text-7xl md:mt-20 md:transition-transform transform hover:scale-125"
              title="React"
            />
            <SiNextdotjs
              className=" text-black text-4xl md:text-7xl md:transition-transform transform hover:scale-125"
              title="Next.js"
            />
            <SiTailwindcss
              className="text-sky-400 text-4xl  md:text-7xl md:mt-20 md:transition-transform transform hover:scale-125"
              title="Tailwind CSS"
            />
            <FaNodeJs
              className="text-green-600 text-4xl  md:text-7xl md:transition-transform transform hover:scale-125"
              title="Node.js"
            />
          </div>
        </div>
      </div>

      <div className=" mt-8">
        <h1
          id="contato"
          className=" font-bold text-5xl md:text-5xl lg:text-5xl text-center px-4"
        >
          Contate-me
        </h1>

        <div className="flex flex-row ">
          <p className="font-mono text-gray-800 text-2xl mt-14 ml-3 md:w-2/5 md:ml-6">
            você pode me encontrar em minhas redes sociais profissionais.
          </p>
          <div className="flex flex-row gap-6 ml-3 mr-4 mt-20 md:mt-8 md:ml-20">
            <a
              href="https://github.com/hiagopro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-16 md:transition-transform transform hover:scale-125 "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hiago-gentil-28a5b6270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-16 text-blue-700 md:transition-transform transform hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
