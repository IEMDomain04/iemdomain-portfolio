import React from 'react'

const TechStack = () => {
    return (
        <main className=''>
            <div className="p-5 bg-dark border border-accent duration-300 hover:shadow-primary">
                <div className="flex justify-center grid-cols-6 space-x-14 my-5">
                    <img className="tech-icon h-auto w-12" src="./assets/icons/react.svg" alt="React" />
                    <img className="tech-icon h-auto w-12" src="./assets/icons/astro.svg" alt="Astro" />
                    <img className="tech-icon h-auto w-12" src="./assets/icons/laravel.svg" alt="Laravel" />
                    <img className="tech-icon h-auto w-12" src="./assets/icons/tailwind.svg" alt="Tailwind" />
                    <img className="tech-icon h-auto w-12" src="./assets/icons/firebase.svg" alt="Firebase" />
                    <img className="tech-icon h-auto w-12" src="./assets/icons/dart.svg" alt="Dart" />
                </div>
                <div className='text-left space-y-2'>
                    <h1 className='font-googlebold'>My Tech Stacks</h1>
                    <p className='text-accent'> Primarily focused on the JavaScript ecosystem, but always eager to explore and learn new technologies. </p>
                </div>
            </div>
        </main>
    )
}

export default TechStack
