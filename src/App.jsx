import React, { useState, useEffect } from "react";

// Social links data
const socials = [
  { platform: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
  { platform: "GitHub", url: "https://github.com", icon: "fab fa-github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
];

// Sections data
const greeting = "Hello, I'm IEMDOMAIN!";
const bio1 = "An aspiring Full-Stack Developer.";
const bio2 = "I specialize in front-end development and UI/UX.";

const projects = [
  {
    title: "Project 1",
    description: "A web app built using React and Tailwind CSS",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A portfolio website built with React",
    link: "#",
  },
];

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="font-sans bg-stone-100">
      {/* Header Section */}
      <header
        className={`fixed w-full bg-black text-white transition-transform duration-300 ${
          isHeaderVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between p-5">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <i className={`${social.icon} text-2xl`} />
              </a>
            ))}
          </div>

          {/* Internal Links */}
          <div className="flex space-x-4">
            <a
              href="#projects-section"
              onClick={() => handleClick("projects-section")}
              className="hover:text-gray-400"
            >
              Projects
            </a>
            <a
              href="#contactme-section"
              onClick={() => handleClick("contactme-section")}
              className="hover:text-gray-400"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </header>

      {/* Landing Section */}
      <section className="pt-32 text-center" id="landing-section">
        <img
          src="https://i.namu.wiki/i/nk-jUcgZgB5t2nAEbyEbYMQg1sQiu_toyU6-vLHqA_d2E_pd0c67dxWJfmfM41UcW4iyE_wTpo0nTg9KZn-nQw.webp"
          alt="Avatar"
          className="mx-auto rounded-full w-40 h-40"
        />
        <h1 className="text-3xl mt-4">{greeting}</h1>
        <p className="text-lg mt-2">{bio1}</p>
        <p className="text-lg">{bio2}</p>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 px-10 bg-gray-200">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 mt-4 inline-block hover:text-blue-800"
              >
                <i className="fas fa-arrow-right mr-2" />
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contactme-section" className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-lg">
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-lg">
              Type of Enquiry
            </label>
            <select
              id="type"
              name="type"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            >
              <option value="hireMe">Hire Me</option>
              <option value="openSource">Open Source</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-lg">
              Message
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
              minLength="25"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
