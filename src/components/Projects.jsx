import React from 'react'

function Projects() {
    return (
        <main className='flex justify-items-center px-60'>
            <section className='flex flex-col justify-self-start gap-8 sm:justify-center'>

                <div className='bg-green-800 px-3 py-1 rounded-xl border max-w-36 text-center border-green-600'>
                    <h1>&lt;/&gt; Projects</h1>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-h1 font-medium max-sm:text-h2'>
                        Projects in the 
                        <br />
                        Learning Journey
                    </h1>
                    <h2 className='text-h2 max-w-xl text-slate-400 max-sm:text-small'>
                    Insights and experiences from my journey as a developer—exploring ideas,
                    overcoming challenges, and sharing lessons learned along the way. </h2>
                </div>
            </section>

            <button className='border border-secondary text-secondary px-4 py-2 rounded-2xl' type="button">
                View projects
            </button>
        </main>
    )
}

export default Projects
