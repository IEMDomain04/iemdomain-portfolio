import React from 'react'
import { certificates } from './Props'

const Certs = () => {
    return (

        <main className='h-fit w-full bg-dark rounded-xl border border-accent text-center p-5 max-sm:p-4'>
            <div className='flex w-fit items-center rounded-full gap-3 py-2 px-4 border mb-5 bg-black border-accent'>
                <div className='relative size-3'>
                    <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                    <div className='size-full rounded-full bg-green-400'></div>
                </div>
                <h2 className='text-small'> Certifications | Badges </h2>
            </div>
            
            <section className='flex justify-around max-sm:justify-between'>
                {certificates.map((certs, index) => (
                    <div key={index} className="duration-300 cursor-pointer shadow-primary hover:scale-105">
                        <a target='_blank' href={certs.link}>
                            <img loading='lazy' className='flex items-center justify-self-center mb-3' width={120} height={120} src={certs.src} alt={certs.alt} />
                        </a>
                        <h2 className='text-accent text-xs'>{certs.name}</h2>
                    </div>
                ))}

            </section>
        </main>
    )
}

export default Certs
