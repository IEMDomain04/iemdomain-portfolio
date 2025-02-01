import React from 'react';
import GithubCard from '../Contents/GithubCard';
import TechStack from '../Contents/TechStack';
import Certs from '../Contents/Certs';
import Exp from '../Contents/Experiences/Exp';

function About() {
    return (
        <main>
            <section className='justify-self-center space-y-10'>
                <div className='space-y-5'>
                    <h1 className='max-w-fit text-transparent bg-clip-text bg-gradient text-h1 font-netron max-sm:text-h2'>
                        LEARNING JOURNEY
                    </h1>
                    <h2 className='text-sm max-w-2xl text-slate-400 max-sm:text-small'>
                        Just a simple about me page that contains about myself.</h2>
                </div>

                <div>
                    <TechStack />
                </div>

                <div>
                    <GithubCard />
                </div>

                <div>
                    <Exp />
                </div>

                <div>
                    <Certs />
                </div>
            </section>
        </main>
    );
}

export default About;