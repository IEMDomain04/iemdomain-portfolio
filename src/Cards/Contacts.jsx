import React from 'react';
import { socials } from './Props'

const Contacts = () => {
    return (
        <main>
            <div className="flex justify-between bg-gray-800 text-white rounded-xl">
                {socials.map((social, index) => (
                    <a className='py-7 px-9 max-sm:p-3 h-auto max-sm:w-14 bg-dark rounded-xl border shadow-inner border-accent duration-300 hover:scale-95 hover:shadow-primary' key={index} target='_blank' href={social.href}>
                        <img loading='lazy' src={social.src} alt={social.alt} />
                    </a>
                    
                ))}
            </div>
        </main>
    );
};

export default Contacts;