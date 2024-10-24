import React from "react";

// import { Container } from './styles';

const Projects: React.FC = () => {
  return (
    <div className="bg-surface-background flex flex-col  h-screen">
      <div className="flex flex-col py-6 gap-5 ">
        <h2 className="font-kalam text-secondary-color text-xl m-auto">
          Projetos
        </h2>
        <h1 className="font-Heebo text-primary-text text-2xl m-auto">
          Olhe meus melhores projetos
        </h1>
      </div>
      <div className=" w-10/12 h-1/3 flex  justify-center m-auto">
        <div className="bg-surface-terciari w-full h-full  rounded-lg">
          <div className="flex flex-col ">
            {" "}
            <div className="flex  justify-between w-full px-4 m-auto py-4">
              {" "}
              <p className="text-primary-text text-xl font-Heebo">23-10-2024</p>
              <i className="devicon-react-original  text-primary-color-400 text-4xl"></i>
            </div>
            <div className="flex flex-col gap-4 px-4">
                <h1 className="text-primary-text text-xl font-Heebo">Lista de Despesas</h1> 
                <p className="text-primary-text text-xl font-Heebo">Com esse projeto voce pode gerenciar suas despesas mensais de forma facilitada.</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
