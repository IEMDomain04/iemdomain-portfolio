import React from 'react'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSeeAbout = () => {
    navigate("/aboutme");
  };

  const socials = [
    {
      src: "/assets/github.svg",
      href: "https://github.com/IEMDomain04",
      alt: "Github icon",
    },
    {
      src: "/assets/linkedin.svg",
      href: "https://www.linkedin.com/in/emman-manduriaga0044/",
      alt: "Linkedin icon",
    },
    {
      src: "/assets/facebook.svg",
      href: "https://www.facebook.com/emman.manduriaga.7",
      alt: "Facebook icon",
    },
    {
      src: "/assets/email.svg",
      href: "emmanmanduriaga@gmail.com",
      alt: "Email icon",
    },
    {
      src: "/assets/notion.svg",
      href: "http://iememman.notion.site",
      alt: "Notion icon",
    },
  ];

  return (
    <main>
      <section className="flex flex-col gap-10 sm:justify-center max-sm:pt-32">
        {/* Header Text */}
        <div className="flex w-fit items-center rounded-full gap-3 py-1.5 pl-3 pr-4 border border-accent">
          <div className="relative size-3">
            <div className="absolute size-full animate-ping rounded-full bg-green-300 opacity-65"></div>
            <div className="size-full rounded-full bg-green-400"></div>
          </div>
          <h1>Computer Science Student</h1>
        </div>

        {/* Title and subtitle */}
        <div className="space-y-5">
          <h1 className="max-w-fit text-transparent bg-clip-text bg-gradient text-h1 text-gradient font-netron font-medium max-sm:text-2xl">
            I'M EMMAN.
            <br />
            Aspiring UX Engineer.
          </h1>
          <h2 className="text-base max-w-3xl text-accent max-sm:text-sm">
            A Computer Science Student aspiring to become a Full-stack developer
            and UX Engineer. I’m a dedicated problem-solver who thrives on
            learning and building.{" "}
          </h2>
        </div>


        {/* Socials */}
        <div className="flex space-x-5 bg-gray-800 text-white rounded-xl">
          {socials.map((social, index) => (
            <a
              className="py-3 px-4 max-sm:p-3.5 max-sm:w-14 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary"
              key={index}
              target="_blank"
              href={social.href}
            >
              <img
                loading="lazy"
                width={20}
                height={20}
                src={social.src}
                alt={social.alt}
              />
            </a>
          ))}
        </div>


        {/* Button */}
        <button class=" border border-accent text-sm rounded max-w-40 py-2 px-5 hover:scale-95 hover:bg-dark max-sm:max-w-full duration-200 active:scale-50" onClick={handleSeeAbout}>
          Learn more..
        </button>
      </section>
    </main>
  );
}

export default Header;
