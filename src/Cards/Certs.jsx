import React from 'react'

const Certs = () => {
    return (

        <main className='h-fit w-full bg-dark rounded-xl border border-accent text-center p-6'>
            <section className='flex justify-around'>
                <div className="duration-300 cursor-pointer shadow-primary hover:scale-105">
                    <img className='flex h-auto items-center justify-self-center mb-3' src="./assets/meta-fed.svg" alt="Meta Front-end Developer" />
                    <h2 className='text-accent text-xs'>Meta Front-End Developer</h2>
                </div>
                <div className="duration-300 cursor-pointer shadow-primary hover:scale-105">
                    <img className='flex h-auto items-center justify-self-center mb-3' src="./assets/google-ux.svg" alt="Google UX Designer" />
                    <h2 className='text-accent text-xs'>Google UX Designer</h2>
                </div>
            </section>
        </main>
    )
}

export default Certs
