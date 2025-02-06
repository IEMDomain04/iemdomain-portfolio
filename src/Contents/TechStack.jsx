import React from 'react'
import { stacks } from './Props'

const TechStack = () => {
    return (
        <main>
            <div className="p-5 rounded-xl bg-dark border border-accent duration-300 hover:shadow-primary">
                <div className='flex w-fit items-center rounded-full gap-3 py-2 px-4 border mb-5 bg-black border-accent'>
                    <div className='relative size-3'>
                        <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                        <div className='size-full rounded-full bg-green-400'></div>
                    </div>
                    <h2 className='text-small'> Tech Stack </h2>
                </div>

                <div className="flex justify-center flex-wrap gap-8 mb-5 max-sm:gap-4">
                    {stacks.map((stack, index) => (
                        <a key={index} className='animate-pulse' target='_blank'
                            href={stack.href}>
                            <img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary"
                                src={stack.src}
                                alt={stack.alt}
                                loading='lazy' /></a>
                    ))}
                </div>

                <div className='text-left'>
                    <p className='text-accent text-sm'> Primarily focused on the JavaScript ecosystem when developing.<br /> 
                    Figma, Photoshop, and Davinci Resolve for creative editing, but always eager to explore and learn new technologies. </p>
                </div>
            </div>
        </main>
    )
}

export default TechStack
