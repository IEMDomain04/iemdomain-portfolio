import React from 'react'

const ProjectPage = () => {
  return (
    <main>
      <div className='flex w-fit items-center rounded-full gap-3 py-2 px-8 border mb-5 bg-black border-accent'>
        <div className='relative size-3'>
          <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
          <div className='size-full rounded-full bg-green-400'></div>
        </div>
        <h2 className='text-small'> Projects </h2>

        <h1>Hellom Wroild!</h1>
      </div>
    </main>
  )
}

export default ProjectPage
