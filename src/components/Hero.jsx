import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
    return (
        <section id="home" className="min-h-screen flex items-center justify-centers text-slate-800 relative overflow-hidden">
        
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            </div>
            <div className="container mx-auto text-center px-4">
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm <span className="text-pink-500">Hardee</span>
                </motion.h1>
                <motion.p 
                    className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    A versatile full-stack developer bridging the gap between backend architecture and responsive, user-friendly frontends to create powerful, cohesive digital experiences.
                    </motion.p>
                <motion.a
                    href="#experience"
                    className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(236, 72, 153, 0.3)" }}
                >
                    View My Work
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;