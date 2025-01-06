import React from 'react'

const TechStack = () => {
    return (
        <main className=''>
            <div className="p-5 rounded-xl bg-dark border border-accent duration-300 hover:shadow-primary">
                <div className='flex w-fit items-center rounded-full gap-3 py-2 px-4 border mb-5 bg-black border-accent'>
                    <div className='relative size-3'>
                        <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                        <div className='size-full rounded-full bg-green-400'></div>
                    </div>
                    <h2 className='text-small'> Tech Stack </h2>
                </div>
                <div className="flex justify-center flex-wrap gap-8 mb-5 max-sm:gap-4">
                    <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src="./assets/icons/react.svg" alt="React" />
                    <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src="./assets/icons/astro.svg" alt="Astro" />
                    <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src="./assets/icons/laravel.svg" alt="Laravel" />
                    <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src="./assets/icons/tailwind.svg" alt="Tailwind" />
                    <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src="./assets/icons/firebase.svg" alt="Firebase" />
                    <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src="./assets/icons/dart.svg" alt="Dart" />
                </div>
                <div className='text-left'>
                    <p className='text-accent text-sm'> Primarily focused on the JavaScript ecosystem, but always eager to explore and learn new technologies. </p>
                </div>
            </div>
        </main>
    )
}

export default TechStack
