import React from 'react'

const socials = [
    {src:"./assets/github.svg", href:"https://github.com/IEMDomain04"},
    {src:"./assets/linkedin.svg", href:"https://www.linkedin.com/in/emman-manduriaga0044/"},
    {src:"./assets/facebook.svg", href:"https://www.facebook.com/emman.manduriaga.7"},
    {src:"./assets/email.svg", href:"emmanmanduriaga@gmail.com"},
    {src:"./assets/notion.svg", href:"http://iememman.notion.site"},
]

const Contacts = () => {
    return (
        <main>
            <div className="flex justify-between bg-gray-800 text-white rounded-xl">
                {socials.map((social, index) => (
                    <a key={index} target='_blank' href={social.href}><img className="py-7 px-8 max-sm:p-3 h-auto max-sm:w-12 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src={social.src} alt="github icon" /></a>
                ))}
            </div>
        </main>
    )
}

export default Contacts
