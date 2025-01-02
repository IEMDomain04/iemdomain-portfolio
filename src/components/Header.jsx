import React from 'react'

function Header() {
  return (
    <main className='px-12 pb-16'>
      <section className='flex h-screen flex-col gap-8 pb-32 pt-24 sm:justify-center'>
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
          <h2 className='text-h2 max-w-5xl text-slate-400 max-sm:text-small'>
            A Computer Science Student aspiring to become a Full-stack developer and UX Engineer.
            I’m a dedicated problem-solver
            who thrives on learning and building. </h2>
        </div>


        <div>
          <button class="bg-dark border-gray border-2 border-b-4 border-r-4 rounded font-bold py-3 px-8 hover:border-b-2 hover:border-r-2 hover:translate-y-1 hover:translate-x-1 transition-all duration-200 active:bg-black">
            <a href=""><img src="http://www.w3.org/2000/svg" alt="" /></a>
          </button>
        </div>

      </section>
    </main>
  )
}

export default Header
