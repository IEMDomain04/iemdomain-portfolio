const updates = [
  {
    date: "January 1",
    time: "12:00 PM",
  },
];

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

const links = [
  {
    name: "About Me",
    href: "/aboutme",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Case Study",
    href: "/casestudy",
  },
]

const Footer = () => {
  return (
    <footer className="flex justify-around bg-footer p-10 border-t-4 mt-10 border-dark max-sm:flex-col-reverse">
      <section className="space-y-10">
        <div className="space-y-3">
          <h1 className="font-netron">EMMAN MANDURIAGA</h1>
          <h2 className="text-small text-accent w-60">
            A dedicated problem-solver who thrives on learning and building.
          </h2>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-5">
            {socials.map((social, index) => (
              <a className="h-auto w-5 max-sm:w-6 duration-300 hover:scale-90" key={index} target="_blank" href={social.href}>
                <img src={social.src} alt={social.alt} loading="lazy" />
              </a>
            ))}
          </div>
          <h2 className="text-small text-accent">
            © 2025 EMMAN. All rights reserved.
          </h2>
        </div>
      </section>

      <section className="space-y-10 max-sm:space-y-0 max-sm:mb-20 max-sm:flex max-sm:flex-col-reverse">
        <div className="space-y-3 max-w-fit">
          <h1 className="max-sm:mt-10">Me</h1>
          <div className="space-y-2">
            {links.map((link, index) => (
              <a className="block text-accent text-small hover:text-white" key={index} href={link.href}> {link.name} </a>
            ))}
          </div>
        </div>

        {updates.map((update, index) => (
          <h2 className="text-small text-accent" key={index}>
            Last updated by Emman on {update.date}, 2025 at {update.time}
          </h2>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
