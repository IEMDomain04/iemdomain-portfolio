import React from 'react'
import ProjectCards from '../Cards/Projects/ProjectCards'

const ProjectPage = () => {
  return (
    <main className="justify-self-center max-w-6xl my-20 max-sm:-mt-16 max-sm:px-4 max-sm:space-y-10">
      <div className='mb-10'>
        <div className='flex w-fit items-center rounded-full gap-3 py-2 px-8 border mb-5 bg-black border-accent'>
          <div className='relative size-3'>
            <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
            <div className='size-full rounded-full bg-green-400'></div>
          </div>
          <h2 className='text-small'> Projects </h2>
        </div>
        <div className='space-y-5'>
          <h1 className='max-w-fit text-transparent bg-clip-text bg-gradient text-h1 font-netron max-sm:text-h2'>
            LEARNING JOURNEY
          </h1>
          <h2 className='text-sm max-w-2xl text-slate-400 max-sm:text-small'>
            Insights and experiences from my journey as a developer—exploring ideas,
            overcoming challenges, and sharing lessons learned along the way. </h2>
        </div>
      </div>

      <ProjectCards />
    </main>
  )
}

export default ProjectPage
