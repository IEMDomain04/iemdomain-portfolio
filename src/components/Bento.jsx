import React from 'react';
import Contacts from '../Cards/Contacts';
import GithubCard from '../Cards/GithubCard';
import TechStack from '../Cards/TechStack';
import Certs from '../Cards/Certs';


function Bento() {
    return (
        <main className="justify-self-center max-w-4xl max-sm:px-10">
            <section className=''>

                <h1 className="text-h1 font-netron">ABOUT</h1>
                <hr className="my-6 border-gray-300" />

                <section className="">
                    {/* Tech Stacks */}
                    <TechStack />

                </section>

            </section>
        </main>
    );
}

export default Bento;
