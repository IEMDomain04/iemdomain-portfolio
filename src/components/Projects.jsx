import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCards from '../Contents/Projects/ProjectCards';

function Projects() {
    const navigate = useNavigate();

    const handleSeeAllProjectsClick = () => {
        navigate('/projects');
    };

    return (
        <main>
            <section className='flex justify-between items-center mb-10 max-sm:block max-sm:space-y-5'>
                <div>
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
                        Each project reflects my growth as a developer. Here are some works from my university years<br /> 
                        though not all are shown due to space constraints, but believe me I made most of these... 🙂 </h2>
                    </div>
                </div>
                <div>
                    <button
                        className='px-5 py-3 h-fit border-accent border rounded-lg hover:scale-95 duration-300 active:scale-50 hover:bg-dark max-sm:p-3 max-sm:text-small'
                        type="button"
                        onClick={handleSeeAllProjectsClick}
                    >
                        See all projects
                    </button>
                </div>
            </section>
            <ProjectCards sliceCount={8} />
        </main>
    );
}

export default Projects;