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

const Contacts = () => {
  return (
    <main>
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
    </main>
  );
};

export default Contacts;
