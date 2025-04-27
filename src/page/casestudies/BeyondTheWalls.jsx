import React from 'react'

const BeyondTheWalls = () => {
    return (
        <div className='justify-self-center space-y-10 w-full max-w-5xl'>


            <div className='flex flex-col space-y-4 mb-20'>


                <img className='my-10 mx-auto rounded-lg' width={820} height={820} src="./assets/mockups/btw-cover.svg" alt="Beyond the walls image" />
                <h1 className='font-netron text-h1 text-center'>UI Case Study: Beyond the Walls </h1>

                <div className='flex justify-center space-x-10'>
                    <p>Dec 1 - Dec 24, 2024</p>
                    <p> | </p>
                    <p>UI/UX Designer and Researcher</p>
                </div>


            </div>

            <div>

                <div className='space-y-5'>

                    <h1 className='text-transparent bg-clip-text bg-gradient text-h1 font-netron max-sm:text-h2'>
                        LEARNING JOURNEY
                    </h1>

                    <h2 className='text-sm text-slate-400 max-sm:text-small'>
                    Beyond the Walls is a PWA (Progressive Web App)  that helps tourists and students explore Intramuros, discover historical landmarks, find food stalls, and locate hangout spots by providing directions through Google Maps.</h2>
                </div>


            </div>
        </div>
    )
}

export default BeyondTheWalls
