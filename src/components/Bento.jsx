import React from 'react';
import Contacts from '../Cards/Contacts';
import GithubCard from '../Cards/GithubCard';
import TechStack from '../Cards/TechStack';
import Certs from '../Cards/Certs';

const scrollToProjects = () => {
    document.getElementById('project-section').scrollIntoView({ behavior: 'smooth', block: 'center'  });
  };

function Bento() {
    return (
        <main>
            <h1 className="text-h1 my-6 max-w-fit text-transparent bg-clip-text bg-gradient font-netron max-sm:text-h2">ABOUT</h1>
            <section className='grid grid-cols-2 gap-3 max-sm:grid-cols-1'>

                <div className='space-y-3'>
                    <div>
                        <TechStack />
                    </div>

                    <div>
                        <Certs />
                    </div>

                    <div>
                        <button className='w-full p-3 rounded-xl border border-accent hover:scale-95 duration-300 active:scale-50 hover:bg-dark'
                        onClick={scrollToProjects}>See Projects..</button>
                    </div>
                </div>

                <div className='space-y-3'>

                    <div>
                        <Contacts />
                    </div>

                    <div>
                        <GithubCard />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Bento;