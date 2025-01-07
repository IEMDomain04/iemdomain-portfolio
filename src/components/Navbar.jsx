import React from 'react'

const navs = [
    { name: "Home", src: "", href: "" },
    { name: "About", src: "", href: "" },
    { name: "Projects", src: "", href: "" },
]

const Navbar = () => {
    return (
        <main className='top-3 z-50 sticky justify-items-center'>
            <section className='w-fit h-fit mt-5 space-x-5 py-3 px-5 rounded-lg border bg-black border-slate-700 '>
            {navs.map((nav, index) => (
                <a className='text-xs rounded duration-300 hover:bg-slate-800 hover:p-2' href={nav.href}>{nav.name}</a>
            ))}
            </section>
        </main>
    )
}

export default Navbar
