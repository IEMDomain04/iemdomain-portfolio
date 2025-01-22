import React from 'react';
import projects from './ListProject';

// Study this nag props ng slideCount.. Then ginamit yung function as map, pero yung list nasa params.
const ProjectCards = ({ sliceCount }) => {
    const displayedProjects = sliceCount ? projects.slice(0, sliceCount) : projects;

    return (
        <main>
            <section className='flex flex-wrap gap-20'>
                {displayedProjects.map((project, index) => (
                    <section key={index}>
                        <img className='rounded-lg mb-5 max-sm:justify-self-center' loading='lazy' src={project.src} height={480} width={300} alt={project.alt} />
                        <div className='grid gap-3 max-w-xs'>
                            <h2>{project.year}</h2>
                            <h1 className='font-netron'>{project.title}</h1>
                            <h2 className='text-sm text-accent'>{project.description}</h2>
                            <a
                                className="relative text-primary max-w-fit duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-width after:duration-300"
                                href={project.href}
                            >
                                Learn more..
                            </a>
                        </div>
                    </section>
                ))}
            </section>
        </main>
    );
};

export default ProjectCards;