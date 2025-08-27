import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; 
import profilePic from '../Assets/pink_avatar.png';


const About = () => {
    return (
        <AnimatedSection>
            <div id="about" className="container mx-auto">
                {/* <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">About Me</h2> */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div 
                        className="md:w-1/3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img 
                            src={profilePic}
                            alt="Hardee" 
                            className="rounded-full shadow-2xl mx-auto border-4 border-pink-200"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/fdf2f8/475569?text=Image+Error'; }}
                        />
                    </motion.div>
                    <div className="md:w-2/3 text-lg text-slate-600 text-center md:text-left">
                        <p className="mb-4">
                            I'm a full stack software developer with experience in building test-driven web applications which is scalable. I’ve worked with technologies like Django REST, Node.js, ExpressJS, Java, and SQL-based databases, and I enjoy designing backend systems that is efficient.

                        </p>
                        {/* <p className="mb-4">
                            I'm comfortable working across the stack- whether it's writing API logic, building UIs with React, or integrating cloud services.
                        </p> */}
                        <p className="mb-4">
                            In my past roles, I’ve developed RESTful APIs, worked with serverless AWS tools like Lambda and S3, and written unit/integration tests using Jest and Pytest to ensure stability. I’ve also contributed to frontend projects in AngularJS and React, and I’m confident working with tools like Git, Docker, Postman, and CI/CD pipelines.
                        </p>
                        <p className="mb-4">
                            Beyond just writing code, I care about and have learned from my BTech and PostGrad school - that writing code in clean architecture, meaningful collaboration, and delivering solutions that should work well in production.
                        </p>
                        <p className="mb-4">
                             My work has spanned domains like fintech, student freelancing platforms, and AI-powered dev tools. I’m always looking to grow by learning new technologies and solving real-world problems through software.
                        </p>
                        <p className="mb-4">
                            Thank you for your time - let's connect for next development!
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;