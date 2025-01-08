import React from 'react'

const scrollToBento = () => {
  document.getElementById('bento-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
};

function Header() {
  return (
    <main className='justify-self-center max-w-5xl'>
      <section className='flex flex-col gap-10 sm:justify-center max-sm:pt-32'>
        
        <div className='flex w-fit items-center rounded-full gap-3 py-1.5 pl-3 pr-4 border border-accent'>
          <div className='relative size-3'>
            <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
            <div className='size-full rounded-full bg-green-400'></div>
          </div>
          <h1>Computer Science Student</h1>
        </div>

        <div className='space-y-5'>
          <h1 className='max-w-fit text-transparent bg-clip-text bg-gradient text-h1 text-gradient font-netron font-medium max-sm:text-2xl'>
            I'M EMMAN.
            <br />
            A WEB DEVELOPER.
          </h1>
          <h2 className='text-base text-accent max-sm:text-sm'>
            A Computer Science Student aspiring to become a Full-stack developer and UX Engineer.
            I’m a dedicated problem-solver
            who thrives on learning and building. </h2>
        </div>

        
        <button class=" border border-accent text-sm rounded max-w-40 py-2 px-5 hover:scale-95 hover:bg-dark max-sm:max-w-full duration-200 active:scale-50"
        onClick={scrollToBento}>
            Learn more..
        </button>
      </section>
    </main>
  )
}

export default Header
