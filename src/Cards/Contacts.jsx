import React from 'react'

const Contacts = () => {
    return (
        <main>
            <div className="flex justify-between bg-gray-800 text-white rounded-xl">
                <a target='_blank' href="https://github.com/IEMDomain04"><img className="py-7 px-8 max-sm:p-3 h-auto max-sm:w-12 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="./assets/github.svg" alt="github icon" /></a>
                <a target='_blank' href="https://www.facebook.com/emman.manduriaga.7"><img className="py-7 px-8 max-sm:p-3 h-auto max-sm:w-12 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/linkedin.svg" alt="linkedin icon" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/emman-manduriaga0044/"><img className="py-7 px-8 max-sm:p-3 h-auto max-sm:w-12 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/facebook.svg" alt="facebook icon" /></a>
                <a target='_blank' href="emmanmanduriaga@gmail.com"><img className="py-7 px-8 max-sm:p-3 h-auto max-sm:w-12 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/email.svg" alt="email icon" /></a>
                <a target='_blank' href="http://iememman.notion.site"><img className="py-7 px-8 max-sm:p-3 h-auto max-sm:w-12 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary" src="/assets/notion.svg" alt="notion icon" /></a>
            </div>
        </main>
    )
}

export default Contacts
