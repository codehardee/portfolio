import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

import project1 from '../Assets/Projects/project1.png';
import project2 from '../Assets/Projects/project2.png';
import project3 from '../Assets/Projects/project3.png';
import project4 from '../Assets/Projects/project4.png';
import project5 from '../Assets/Projects/project5.png';
import project6 from '../Assets/Projects/project6.png';

const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, githubUrl }) => {
    return (
        <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-pink-100 flex flex-col group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/fdf2f8/475569?text=Project+Image'; }}
                />
                <div className="absolute inset-0 bg-pink-400/40 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
                
                {/* --- THIS IS THE FIX --- */}
                {/* This description will be smaller and truncated to 4 lines on mobile */}
                <p className="text-slate-600 mb-4 flex-grow text-sm line-clamp-4 md:line-clamp-none">
                    {description}
                </p>

                <div className="mb-4">
                    {tags.map(tag => (
                        <span key={tag} className="inline-block bg-pink-100 rounded-full px-3 py-1 text-xs font-semibold text-pink-600 mr-1 mb-1">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex justify-start space-x-4">
                    {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-300">Live Demo</a>}
                    {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-300">GitHub</a>}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projectData = [
        {
            title: 'CodePilot',
            description: 'Built a coding platform using sockets and AI-powered code generation to assist with real-time programming support. Integrated Google’s generative AI API to interpret user prompts and return structured code responses.',
            imageUrl: project6,
            tags: ['Socket.IO', 'Generative-ai', 'React.js', 'Express.js'],
            liveUrl: 'https://ai-collab-frontend.vercel.app/',
            githubUrl: 'https://github.com/codehardee/ai-collab-frontend'
        },
        {
            title: 'CollegeMate',
            description: 'A college-level freelancing platform where senior students can post projects and junior students can bid, collaborate, and build their portfolios. Built with Django, React.js, and PostgreSQL.',
            imageUrl: project4,
            tags: ['ReactJS', 'DjangoREST', 'PostgreSQL'],
            liveUrl: 'https://college-mate-fe.vercel.app/',
            githubUrl: 'https://github.com/codehardee/college-mate'
        },
        {
            title: 'MovieApp',
            description: 'A movie management web application that allows users to explore movies, perform full CRUD operations, and manage a personalized favorites list. Built with React.js and integrated with a movie API.',
            imageUrl: project5,
            tags: ['Vercel', 'React.js', 'Tailwind CSS'],
            liveUrl: 'https://movie-app-u7zm.vercel.app/',
            githubUrl: 'https://github.com/codehardee/movie-app'
        },
        {
            title: 'Business Data ETL Pipeline',
            description: 'Designed a fully automated ETL pipeline to collect and enrich store data across Canada. Built custom Scrapy spiders to extract business names, locations, and categories, and used AI to enrich the data.',
            imageUrl: 'https://placehold.co/600x400/fbe7f3/94a3b8?text=ETL+Pipeline',
            tags: ['Python', 'Scrapy', 'Pandas', 'OpenStreetMap'],
            githubUrl: 'https://github.com/codehardee/BusinessData_Pipeline'
        },
        {
            title: 'UrbanNest',
            description: 'A fully functional e-commerce platform built with vanilla JavaScript, HTML, and CSS. Features a dynamic shopping experience with a persistent cart powered by local storage and category-based filtering.',
            imageUrl: project1,
            tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
            githubUrl: 'https://github.com/codehardee/urban-nest'
        },
        {
            title: 'ReciMe',
            description: 'A collaborative recipe-sharing platform built with Django. Enables users to browse, create, and share their own culinary creations, and engage with the community through likes, bookmarks, and reviews.',
            imageUrl: project2,
            tags: ['Django', 'jQuery', 'AJAX', 'Bootstrap'],
            githubUrl: 'https://github.com/codehardee/recime-project'
        },
        {
            title: 'AirBnb Replica',
            description: 'An Airbnb-inspired web application built with Node.js, Express.js, MongoDB, and EJS templates. The project features backend APIs that serve data from an Airbnb dataset to a dynamic frontend.',
            imageUrl: project3,
            tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
            githubUrl: 'https://github.com/codehardee/airbnb-replica'
        }
    ];
return (
        <AnimatedSection>
            <div id="projects" className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map(project => <ProjectCard key={project.title} {...project} />)}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Projects;
