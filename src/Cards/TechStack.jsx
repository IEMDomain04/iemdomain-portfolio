import React from 'react'

const stacks = [
    {src: "./assets/icons/react.svg", href: "", alt: "React icon"},
    {src: "./assets/icons/astro.svg", href: "", alt: "Astro icon"},
    {src: "./assets/icons/laravel.svg", href: "", alt: "Laravel icon"},
    {src: "./assets/icons/tailwind.svg", href: "", alt: "TailwindCSS icon"},
    {src: "./assets/icons/firebase.svg", href: "", alt: "Firebase icon"},
    {src: "./assets/icons/dart.svg", href: "", alt: "Dart icon"},
]

const TechStack = () => {
    return (
        <main className=''>
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
                        <a className='animate-pulse' href={stack.href}><img className="tech-icon h-auto w-12 cursor-pointer shadow-inner rounded-xl p-1 hover:scale-95 duration-300 hover:shadow-primary" src={stack.src} alt={stack.alt} /></a>
                    ))}
                </div>
                
                <div className='text-left'>
                    <p className='text-accent text-sm'> Primarily focused on the JavaScript ecosystem, but always eager to explore and learn new technologies. </p>
                </div>
            </div>
        </main>
    )
}

export default TechStack
