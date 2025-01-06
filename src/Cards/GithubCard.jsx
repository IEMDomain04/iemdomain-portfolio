import React from 'react'

const GithubCard = () => {
    return (
        <main>
            <div className="bg-dark border border-accent rounded-xl p-5">

                <div className='flex w-fit items-center rounded-full gap-3 py-2 px-4 border mb-5 bg-black border-accent'>
                    <div className='relative size-3'>
                        <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                        <div className='size-full rounded-full bg-green-400'></div>
                    </div>
                    <h2 className='text-small'> Github Activity </h2>
                </div>

                <img className='mb-5 mx-auto cursor-pointer shadow rounded-md hover:scale-95 duration-300 hover:shadow-primary max-sm:rounded-sm' src="https://github-readme-stats.vercel.app/api?username=IEMDomain04&show_icons=true&theme=dark" alt="GitHub Contribution Graph" />

                <div className='text-left'>
                    <p className='text-accent text-sm'> Here is my GitHub activity status. I enjoy using GitHub, especially for collaborating on group projects.</p>
                </div>
            </div>
        </main>
    )
}

export default GithubCard
