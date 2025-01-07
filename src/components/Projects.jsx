import React from 'react'
import ProjectCards from '../Cards/Projects/ProjectCards'

function Projects() {
    return (
        <main id='project-section' className='justify-self-center max-w-5xl w-full'>
            <section className='flex justify-between items-center mb-10 max-sm:block max-sm:space-y-5'>

                <div>
                    <div className='flex w-fit items-center rounded-full gap-3 py-2 px-8 border mb-5 bg-black border-accent'>
                        <div className='relative size-3'>
                            <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                            <div className='size-full rounded-full bg-green-400'></div>
                        </div>
                        <h2 className='text-small'> Projects </h2>
                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-h1 font-netron max-sm:text-h2'>
                            LEARNING JOURNEY
                        </h1>
                        <h2 className='text-sm max-w-2xl text-slate-400 max-sm:text-small'>
                            Insights and experiences from my journey as a developer—exploring ideas,
                            overcoming challenges, and sharing lessons learned along the way. </h2>
                    </div>
                </div>

                <div>
                    <button className='px-5 py-3 h-fit border-accent border rounded-lg hover:scale-95 duration-300 hover:bg-dark max-sm:p-3 max-sm:text-small' type="button"> See all projects</button>
                </div>
            </section>

            <ProjectCards />
        </main>
    )
}

export default Projects
