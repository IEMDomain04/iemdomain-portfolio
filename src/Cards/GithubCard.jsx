import React from 'react'

const GithubCard = () => {
    return (
        <main>
            <div className="col-span-1 sm:col-span-2 bg-gray-800 border border-accent text-white rounded-lg shadow-md p-6 flex items-center justify-center text-center">
                <img src="https://github-readme-stats.vercel.app/api?username=IEMDomain04&show_icons=true&theme=dark" alt="GitHub Contribution Graph" />
            </div>
        </main>
    )
}

export default GithubCard
