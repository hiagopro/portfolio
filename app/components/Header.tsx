"use client";
import { AlignJustify, Github, Linkedin, X } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  function handleShowPopup() {
    setShowPopup(true);
  }
  function handleClosePopup() {
    setShowPopup(false);
  }
  return (
    <header className="bg-surface-background h-20 border-b-2 shadow-2xl shadow-black" id="Header">
      <nav className="flex justify-between items-center ml-10 mr-5 h-full">
        <div className="flex">
          <p className="text-primary-text font-kalam font-thin text-xl"> 
            Hiago
          </p>
          <p className="text-primary-text font-kalam text-xl">Gentil</p>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleShowPopup}
            className={showPopup ? "hidden" : "block"}
          >
            <AlignJustify className="text-primary-text " />
          </button>
          <button
            onClick={handleClosePopup}
            className={showPopup ? "block" : "hidden"}
          >
            <X className="text-primary-text " />
          </button>
        </div>
        <div className="hidden gap-8 px-5 sm:flex ">
          {" "}
          <Link
            href="#Home"
            className="text-primary-text font-Heebo font-light hover:font-normal "
          >
            início
          </Link>{" "}
          <Link
            href="#About"
            className="text-primary-text font-Heebo font-light hover:font-normal"
          >
            Sobre
          </Link>{" "}
          <Link
            href="#Projects"
            className="text-primary-text font-Heebo font-light hover:font-normal"
          >
            Projetos
          </Link>{" "}
          <Link
            href="#Contact"
            className="text-primary-text font-Heebo font-light hover:font-normal"
          >
            Contato
          </Link>{" "}
        </div>
      </nav>
      <div
        className={
          showPopup
            ? "flex flex-col bg-surface-primary h-screen w-2/3 absolute right-0  items-end px-6 z-50  "
            : "hidden"
        }
      >
        <div className="flex flex-col gap-8 h-1/4 w-full   items-end    py-6">
          <Link href="#Home" className="text-primary-text " onClick={handleClosePopup}>
            Home
          </Link>
          <Link href="#About" className="text-primary-text " onClick={handleClosePopup}>
            Sobre
          </Link>
          <Link href="#Projects" className="text-primary-text " onClick={handleClosePopup}>
            Projetos
          </Link>
          <Link href="#Contact" className="text-primary-text  " onClick={handleClosePopup}>
            Contato
          </Link>
          <hr className=" bg-surface-secondary border-surface-secondary h-[0.5px]  w-full  " />
          <div className="flex  gap-3">
            <a
              href="https://github.com/hiagopro"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClosePopup}
            >
              <Github className="text-primary-text" />
            </a>
            <a
              href="https://www.linkedin.com/in/hiago-gentil-28a5b6270/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClosePopup}
            >
              <Linkedin className="text-primary-text" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
