import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToAboutPage = () => {
    navigate("/aboutme");
  };

  const gotToProjectsPage = () => {
    navigate("/projects");
  };

  const navs = [
    { name: "Home", src: "", onClick: goToHomePage },
    { name: "About", src: "", onClick: goToAboutPage },
    { name: "Projects", src: "", onClick: gotToProjectsPage },
  ];


  return (
    <>
      <main className="fixed top-0 z-30 flex w-full justify-center border-b-[1px] border-white/20" style={{ opacity: 1, transform: "none", backdropFilter: "blur(10px)" }}>
        <nav className="z-2 flex w-full max-w-[1200px] items-center justify-center gap-10 py-[30px] max-xl:px-[16px] max-sm:border-b-[1px] max-sm:border-white/20 max-sm:py-[11px]">
            {navs.map((nav, index) => (
                <button key={index} onClick={nav.onClick} className="text-xs font-bold tracking-widest rounded duration-200 hover:bg-slate-800 hover:p-2"> {nav.name} </button>
            ))}
        </nav>
      </main>
    </>
  );
};

export default Navbar;
