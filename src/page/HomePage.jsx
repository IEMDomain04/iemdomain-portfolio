import React from 'react'
import Header from "../components/Header";
import Bento from "../components/Bento";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

const HomePage = () => {
    const fadeUpWithBlur = {
        initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: .5 },
        viewport: { once: true, amount: 0.3 } // Adjusted viewport amount for better visibility on smaller screens
    };

    return (
        <>
            <main className="justify-self-center max-w-6xl mt-28 space-y-44 max-sm:-mt-16 max-sm:px-4 max-sm:space-y-32">
                <motion.div id="header-section" initial={fadeUpWithBlur.initial} whileInView={fadeUpWithBlur.whileInView} transition={fadeUpWithBlur.transition} viewport={fadeUpWithBlur.viewport}>
                    <Header />
                </motion.div>

                <motion.div id="bento-section" initial={fadeUpWithBlur.initial} whileInView={fadeUpWithBlur.whileInView} transition={fadeUpWithBlur.transition} viewport={fadeUpWithBlur.viewport}>
                    <Bento />
                </motion.div>

                <motion.div id="project-section" initial={fadeUpWithBlur.initial} whileInView={fadeUpWithBlur.whileInView} transition={fadeUpWithBlur.transition} viewport={fadeUpWithBlur.viewport}>
                    <Projects />
                </motion.div>
            </main>

            <footer className="mt-36">
                <Footer />
            </footer>
        </>
    );
}

export default HomePage
