import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    { name: "About", href: ""},
    { name: "Project", href: ""},
]

const updates = [
    { date: "January 6", time: "12:32"},
]

const Footer = () => {
    return (
        <footer className='flex justify-around bg-footer p-10 border-t-4 border-dark mt-20 max-sm:flex-col-reverse'>
            <section className='space-y-20'>
                <div className='space-y-3'>
                    <h1 className='font-netron'>EMMAN MANDURIAGA</h1>
                    <h2 className='text-small text-accent w-60'>A dedicated problem-solver who thrives on learning and building.</h2>
                </div>

                <div className='space-y-5'>
                <div className='flex flex-wrap gap-5'>
                    <a target='_blank' href="https://github.com/IEMDomain04"><img className="h-auto w-5 max-sm:w-6 duration-300 hover:scale-90" src="./assets/github.svg" alt="github icon" /></a>
                    <a target='_blank' href="https://www.facebook.com/emman.manduriaga.7"><img className="h-auto w-5 max-sm:w-6 duration-300 hover:scale-90" src="/assets/linkedin.svg" alt="linkedin icon" /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/emman-manduriaga0044/"><img className="h-auto w-5 max-sm:w-6 duration-300 hover:scale-90" src="/assets/facebook.svg" alt="facebook icon" /></a>
                    <a target='_blank' href="emmanmanduriaga@gmail.com"><img className="h-auto w-5 max-sm:w-6 duration-300 hover:scale-90" src="/assets/email.svg" alt="email icon" /></a>
                    <a target='_blank' href="http://iememman.notion.site"><img className="h-auto w-5 max-sm:w-6 duration-300 hover:scale-90" src="/assets/notion.svg" alt="notion icon" /></a>
                </div>
                <h2 className='text-small text-accent'>© 2025 EMMAN. All rights reserved.</h2>
                </div>
            </section>

            <section className='space-y-24 max-sm:space-y-0 max-sm:mb-20 max-sm:flex max-sm:flex-col-reverse'>

                <div className='space-y-3'>
                    <h1 className='max-sm:mt-10'>Me</h1>
                    <div className='space-y-2'>
                    {links.map((link, index) => (
                        <a className='block text-accent text-small hover:text-white' key={index} href={link.href}>{link.name}</a>
                    ))}
                    </div>
                    </div>
                    
                    {updates.map((update, index) => (
                        <h2 className='text-small text-accent' key={index}>Last updated by Emman on {update.date}, 2025 at {update.time} AM</h2>
                    ))}
                    
            </section>
        </footer>
    )
}

export default Footer