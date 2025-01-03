import React from 'react'

function Header() {
  const Github = "https://github.com/IEMDomain04"
  const LinkedIn = "https://www.linkedin.com/in/emman-manduriaga0044/"
  const Facebook = "https://www.facebook.com/emman.manduriaga.7"
  const Email = "emmanmanduriaga@gmail.com"

  return (
    <main className='flex flex-col justify-self-center max-sm:px-10'>
      <section className='flex h-screen flex-col gap-8 sm:justify-center max-sm:pt-32'>
        <div className='flex w-fit items-center rounded-full gap-3 py-1.5 pl-3 pr-4 border border-zinc-600/75 bg-slate-950/25 enter-animation'>
          <div className='relative size-3'>
            <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
            <div className='drop-shadow-green size-full rounded-full bg-green-400'></div>
          </div>
          <h1>Computer Science Student</h1>
        </div>

        <div className='space-y-5'>
          <h1 className='text-h1 font-medium max-sm:text-h2'>
            Hi, I'm Emman.
            <br />
            A Web Developer.
          </h1>
          <h2 className='text-h2 max-w-4xl text-slate-400 max-sm:text-small'>
            A Computer Science Student aspiring to become a Full-stack developer and UX Engineer.
            I’m a dedicated problem-solver
            who thrives on learning and building. </h2>
        </div>

        <div className='flex space-x-10'>
          <a href={Github}>
            <img className='h-auto w-10 duration-300 hover:-rotate-12' src="/assets/github.svg" alt="github-icon" />
          </a>

          <a href={LinkedIn}>
            <img className='h-auto w-10 duration-300 hover:-rotate-12' src="/assets/linkedin.svg" alt="linkedin-icon" />
          </a>

          <a href={Facebook}>
            <img className='h-auto w-10 duration-300 hover:-rotate-12' src="/assets/facebook.svg" alt="facebook-icon" />
          </a>

          <a href={Email}>
            <img className='h-auto w-10 duration-300 hover:-rotate-12' src="/assets/email.svg" alt="email-icon" />
          </a>
        </div>
        <button class="bg-dark border-gray border-2 border-b-4 border-r-4 rounded max-w-48 font-bold py-2 px-5 max-sm:max-w-full hover:border-b-2 hover:border-r-2 hover:translate-y-1 hover:translate-x-1 transition-all duration-200 active:bg-black">
            Learn more..
          </button>

      </section>
    </main>
  )
}

export default Header
