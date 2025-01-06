import React from 'react';
import Contacts from '../Cards/Contacts';
import GithubCard from '../Cards/GithubCard';
import TechStack from '../Cards/TechStack';
import Certs from '../Cards/Certs';


function Bento() {
    return (
        <main className="justify-self-center max-w-5xl max-sm:px-10">
            <h1 className="text-h1 font-netron max-sm:text-h2">ABOUT</h1>
            <hr className="my-6 border-dark" />

            <section className='grid grid-cols-2 gap-5 max-sm:grid-cols-1'>

                <div className='space-y-5'>
                    <div>
                        <TechStack />
                    </div>

                    <div>
                        <Certs />
                    </div>

                    <div>
                        <button className='w-full p-3 rounded-xl bg-dark border border-accent shadow-inner hover:scale-95 duration-300 hover:shadow-primary'>See Projects..</button>
                    </div>
                </div>

                <div className='space-y-6'>

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