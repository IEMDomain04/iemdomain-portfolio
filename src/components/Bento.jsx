import React from 'react';
import Contacts from '../Cards/Contacts';
import GithubCard from '../Cards/GithubCard';
import TechStack from '../Cards/TechStack';
import Certs from '../Cards/Certs';


function Bento() {
    return (
        <main className="justify-self-center max-w-5xl max-sm:px-10">
            <h1 className="text-h1 font-netron">ABOUT</h1>
            <hr className="my-6 border-gray-300" />

            <section className='grid grid-cols-2 gap-4'>

                <div className='space-y-3'>
                    <div>
                        <TechStack />
                    </div>

                    <div>
                        <div>
                            <Contacts />
                        </div>
                    </div>

                    <div>
                        <div>
                            <Certs />
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>

                    <div>
                        <div className='p-4 bg-dark rounded-xl border border-accent'>
                            <h2 className='text-sm italic'>"To live is to risk it all; otherwise, you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you."</h2>
                        </div>
                    </div>


                    <div>
                        <div>
                            <GithubCard />
                        </div>
                    </div>

                    <div>
                        <div>
                            <button className='w-full p-3 rounded-xl bg-dark border border-accent shadow-inner hover:scale-95 duration-300 hover:shadow-primary'>See Projects..</button>
                        </div>
                    </div>
                </div>



            </section>
        </main>
    );
}

export default Bento;