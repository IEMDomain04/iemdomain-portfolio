import React from 'react'
import Experiences from './ExpList'

const Exp = () => {
    return (
        <main>
            <div className="p-5 rounded-xl bg-dark border border-accent duration-300 hover:shadow-primary">
                <div className='flex w-fit items-center rounded-full gap-3 py-2 px-4 border mb-5 bg-black border-accent'>
                    <div className='relative size-3'>
                        <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                        <div className='size-full rounded-full bg-green-400'></div>
                    </div>
                    <h2 className='text-small'> Experiences </h2>
                </div>

                {Experiences.map((exp, index) => (
                    <section className='mb-10'>
                        <div className='text-left space-y-1'>
                            <div className='flex items-center justify-between'>
                                <h1 className='max-sm:text-xs'>{exp.exp}</h1>
                                <p className='text-accent text-xs'>{exp.date}</p>
                            </div>
                            <h2 className='text-primary max-sm:text-small'>@ {exp.from}</h2>
                        </div>
                    </section>
                ))}

            </div>
        </main>
    )
}

export default Exp
