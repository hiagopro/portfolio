import { ArrowUp } from "lucide-react";
import React from "react";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <div className="bg-surface-background py-10  flex ">
      <div className="flex flex-col gap-5 m-auto">
        <p className="font-Heebo text-secondary-text text-sm">
          Portfolio hiago gentil 2024. Creditos LinaLevi
        </p>
        <div className="flex gap-5">
          <p className="font-Heebo text-secondary-text text-xl">
            <a href="https://github.com/hiagopro" target="_blank">GitHub</a>
          </p>
          <p className="font-Heebo text-secondary-text text-xl">
            <a href="https://www.linkedin.com/in/hiago-gentil-28a5b6270/" target="_blank">Linkedin</a>
          </p>
          <p className="font-Heebo text-secondary-text text-xl">
            <a href="https://www.instagram.com/hiagogcq/" target="_blank">Instagram</a>
          </p>
          <a href="#Header"><ArrowUp size={32} className="text-secondary-text"  /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
