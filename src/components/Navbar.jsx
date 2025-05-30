import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    };

    const goToAboutPage = () => {
        navigate('/aboutme');
    }

    const gotToProjectsPage = () => {
        navigate('/projects')
    }
    // NAV PROPS
    const navs = [
        { name: "Home", src: "", onClick: goToHomePage },
        { name: "About", src: "", onClick: goToAboutPage },
        { name: "Projects", src: "", onClick: gotToProjectsPage },
    ]
    return (
        <main className='top-3 z-50 sticky justify-items-center'>
            <section className='w-fit h-fit mt-5 space-x-5 py-3 px-5 rounded-lg border bg-black border-slate-700 '>
                {navs.map((nav, index) => (
                    <button onClick={nav.onClick} className='text-xs rounded duration-200 hover:bg-slate-800 hover:p-2' type="button">
                        {nav.name}
                    </button>
                ))}
            </section>
        </main>
    )
}

export default Navbar
