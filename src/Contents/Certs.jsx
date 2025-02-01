import React from 'react'

const Certs = () => {
    return (

        <main className='h-fit w-full bg-dark rounded-xl border border-accent text-center p-5 max-sm:p-4'>
            <div className='flex w-fit items-center rounded-full gap-3 py-2 px-4 border mb-5 bg-black border-accent'>
                <div className='relative size-3'>
                    <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                    <div className='size-full rounded-full bg-green-400'></div>
                </div>
                <h2 className='text-small'> Certifications </h2>
            </div>
            <section className='flex justify-around max-sm:justify-between'>
                <div className="duration-300 cursor-pointer shadow-primary hover:scale-105">
                    <a target='_blank' href="https://www.credly.com/badges/2726eaae-061f-4930-bf3b-c5b5e361a0ff/public_url">
                        <img loading='lazy' className='flex items-center justify-self-center mb-3' src="./assets/meta-fed.svg" alt="Meta Front-end Developer" />
                    </a>
                    <h2 className='text-accent text-xs'>Meta Front-End Developer</h2>
                </div>
                <div className="duration-300 cursor-pointer shadow-primary hover:scale-105">
                    <a target='_blank' href="https://www.credly.com/badges/be5be992-9c81-4624-a977-e1bc85d6a251/public_url">
                        <img loading='lazy' className='flex items-center justify-self-center mb-3' src="./assets/google-ux.svg" alt="Google UX Designer" />
                    </a>
                    <h2 className='text-accent text-xs'>Google UX Designer</h2>
                </div>
            </section>
        </main>
    )
}

export default Certs
