import React from 'react';
import GithubCard from '../Contents/GithubCard';
import TechStack from '../Contents/TechStack';
import Certs from '../Contents/Certs';
import Exp from '../Contents/Experiences/Exp';

function About() {
    return (
        <main>
            <section className='justify-self-center space-y-10 w-full max-w-5xl'>
                <div className='space-y-5'>
                    <h1 className='text-transparent bg-clip-text bg-gradient text-h1 font-netron max-sm:text-h2'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-sm text-slate-400 max-sm:text-small'>
                        I am committed to continuously learning new technologies and enhancing my skills.
                        Collaboration and creativity inspire me to develop impactful solutions through design and development.
                    </h2>
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