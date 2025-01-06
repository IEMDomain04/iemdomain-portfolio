import React from 'react'

const GithubCard = () => {
    return (
        <main>
            <div className="bg-dark border border-accent rounded-xl p-6">
                <img className='my-5 mx-auto cursor-pointer shadow rounded-md hover:scale-95 duration-300 hover:shadow-primary' src="https://github-readme-stats.vercel.app/api?username=IEMDomain04&show_icons=true&theme=dark" alt="GitHub Contribution Graph" />

                <div className='text-left space-y-2'>
                    <h1 className='font-googlebold'>Github Contribution</h1>
                    <p className='text-accent text-sm'> Here is my GitHub activity status. I enjoy using GitHub, especially for collaborating on group projects.</p>
                </div>
            </div>
        </main>
    )
}

export default GithubCard
