import Header from "../Contents/homePage/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <main className="max-w-5xl ml-40 mt-28 space-y-44 max-sm:ml-0 max-sm:-mt-16 max-sm:px-4 max-sm:space-y-32">
                <div id="header-section">
                    <Header />
                </div>

                <div id="project-section">
                    <Projects />
                </div>

                {/* THIS IS A SIMPLE BLOGGING SECTION, FEEL FREE TO DELETE */}
                <section className='flex justify-between items-center mb-10 max-sm:block max-sm:space-y-5'>
                    <div>
                        <div className='flex w-fit items-center rounded-full gap-3 py-2 px-8 border mb-5 bg-black border-accent'>
                            <div className='relative size-3'>
                                <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                                <div className='size-full rounded-full bg-green-400'></div>
                            </div>
                            <h2 className='text-small'> Blog </h2>
                        </div>
                        <div className='space-y-5'>
                            <h1 className='max-w-fit text-transparent bg-clip-text bg-gradient text-h1 font-netron max-sm:text-h2'>
                                Writing a Story
                            </h1>
                            <h2 className='text-sm max-w-2xl text-slate-400 max-sm:text-small'>
                                The urge to tell a story and writing a blog starts to kick in.<br />
                                I don't want to be just good in tech, I want to deliver and tell stories and insights as well.. </h2>
                        </div>
                    </div>
                    <div>
                        <button
                            className='px-5 py-3 h-fit border-accent border rounded-lg hover:scale-95 duration-300 active:scale-50 hover:bg-dark max-sm:p-3 max-sm:text-small'
                            type="button"
                            onClick={() => window.open("https://astro-blogging.vercel.app/", "_blank")}
                        >
                            See Blog Website
                        </button>
                    </div>
                </section>
            </main>

            <footer className="mt-36">
                <Footer />
            </footer>
        </>
    );
}

export default HomePage
