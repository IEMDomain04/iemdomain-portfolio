import React from 'react'

const projects = [
    {
        src: "./assets/mockups/btw-cover.svg", title: "Beyond the Walls", year: "2024",
        description: "A Progressive Web App (PWA) designed to guide you through Intramuros.",
        href: "",
        alt: "Beyond the Walls cover"
    },

    {
        src: "./assets/mockups/rapid-cover.svg", title: "RAPID", year: "2024",
        description: "A website for our business proposal in the subject The Entrepreneurial Mind.",
        href: "",
        alt: "RAPID cover"
    },
]

const ProjectCards = () => {
    return (
        <main>
            <section className='grid grid-cols-2'>
                {projects.map((project, index) => (

                    <section>
                        <img className='rounded-lg mb-5 h-auto w-3/5' src={project.src} alt={project.alt} />

                        <div className='grid gap-3'>
                            <h2>{project.year}</h2>

                            <h1 className='font-netron'>{project.title}</h1>
                            <h2 className='max-w-xs text-sm text-accent'>{project.description}</h2>

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
    )
}

export default ProjectCards
