import React from 'react'

const scrollToBento = () => {
    document.getElementById('bento-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const scrollToProjects = () => {
    document.getElementById('project-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const navs = [
    { name: "Home", src: "", onClick: "" },
    { name: "About", src: "", onClick: scrollToBento },
    { name: "Projects", src: "", onClick: scrollToProjects },
]

const Navbar = () => {
    return (
        <main className='top-3 z-50 sticky justify-items-center'>
            <section className='w-fit h-fit mt-5 space-x-5 py-3 px-5 rounded-lg border bg-black border-slate-700 '>
                {navs.map((nav, index) => (
                    <a href={nav.href}><button onClick={nav.onClick} className='text-xs rounded duration-300 hover:bg-slate-800 hover:p-2' type="button">{nav.name}</button></a>
                ))}
            </section>
        </main>
    )
}

export default Navbar
