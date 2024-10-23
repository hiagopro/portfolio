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
    <header className="bg-surface-background h-20 border-b-2 shadow-2xl shadow-black">
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
            href=""
            className="text-primary-text font-Heebo font-light hover:font-normal "
          >
            Home
          </Link>{" "}
          <Link
            href=""
            className="text-primary-text font-Heebo font-light hover:font-normal"
          >
            Sobre
          </Link>{" "}
          <Link
            href=""
            className="text-primary-text font-Heebo font-light hover:font-normal"
          >
            Projetos
          </Link>{" "}
          <Link
            href=""
            className="text-primary-text font-Heebo font-light hover:font-normal"
          >
            Contact
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
          <Link href="" className="text-primary-text ">
            Home
          </Link>
          <Link href="" className="text-primary-text ">
            Sobre
          </Link>
          <Link href="" className="text-primary-text ">
            Projetos
          </Link>
          <Link href="" className="text-primary-text  ">
            Contato
          </Link>
          <hr className=" bg-surface-secondary border-surface-secondary h-[0.5px]  w-full  " />
          <div className="flex  gap-3">
            <Github className="text-primary-text" />
            <Linkedin className="text-primary-text" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
