import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Import the helper
// import { IconReact, IconNodeJs, IconDatabase, IconTools } from './Icons';
import project1 from "../Assets/Projects/project1.png";
import project2 from "../Assets/Projects/project2.png";
import project3 from "../Assets/Projects/project3.png";
import project4 from "../Assets/Projects/project4.png";
import project5 from "../Assets/Projects/project5.png";
import project6 from "../Assets/Projects/project6.png";




const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, githubUrl }) => {
    return (
        <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-pink-100 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-56 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/fdf2f8/475569?text=Project+Image'; }}
            />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{description}</p>
                <div className="mb-4">
                    {tags.map(tag => (
                        <span key={tag} className="inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-pink-600 mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex justify-start space-x-4">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-300">Live Demo</a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors duration-300">GitHub</a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projectData = [
        {
            title: 'CodePilot',
            description: 'Built a coding platform using sockets and AI-powered code generation to assist with real-time programming support. Integrated Google’s generative AI API to interpret user prompts and return structured code responses. Enabled a terminal-like environment with real-time chat using Socket.IO between frontend and backend. Implemented a code file tree UI and JSON-based data handling for an organized and user-friendly developer experience. Deployed frontend on Vercel and backend on Render for rapid prototyping and scalable hosting.',
            imageUrl: project6,
            tags: [' Socket.IO,', 'Generative-ai', 'Render', 'MongoDB', 'React.js', 'Tailwind CSS', 'Express.js'],
            liveUrl: 'https://ai-collab-frontend.vercel.app/',
            githubUrl: 'https://github.com/codehardee/ai-collab-frontend'
        },
        {
            title: 'CollegeMate',
            description: 'A college-level freelancing platform where senior students can post projects and junior students can bid, collaborate, and build their portfolios. Built with Django (backend), React.js (frontend), and PostgreSQL (database). Features include secure authentication, dynamic project posting, bidding workflows, user profile management, and blog integration to foster a student-driven marketplace.',
            imageUrl: project4,
            tags: ['ReactJS', 'Render', 'DjangoREST', 'Pytest', 'Integration Testing', 'PostgreSQL'],
            liveUrl: 'https://college-mate-fe.vercel.app/',
            githubUrl: 'https://github.com/codehardee/college-mate'
        },
        {
            title: 'MovieApp',
            description: 'A movie management web application that allows users to explore movies, perform full CRUD operations (Create, Read, Update, Delete), and manage a personalized favorites list. Built with React.js on the frontend and integrated with a movie API for dynamic data handling. Features include intuitive UI, seamless API interaction, adding and removing movies from favorites, and efficient state management, making it a practical project for mastering React development fundamentals.',
            imageUrl: project5,
            tags: ['Vercel', 'React.js', 'Tailwind CSS'],
            liveUrl: 'https://movie-app-u7zm.vercel.app/',
            githubUrl: 'https://github.com/codehardee/movie-app'
        },
        {
            title: 'Business Data ETL Pipeline',
            description: 'Designed a fully automated ETL pipeline to collect and enrich store data across Canada. Built custom Scrapy spiders to extract business names, locations, and categories. Used OpenStreetMap and low-cost API services to derive coordinates and location metadata. Integrated AI APIs to fetch missing store websites and brand logos based on business names. Transformed data using Pandas and exported the final report as an Excel file. Optimized the pipeline to eliminate reliance on costly services like Google Maps API.',
            imageUrl: 'https://placehold.co/600x400/fbe7f3/94a3b8?text=Business Data ETL',
            tags: ['Python', 'Scrapy', 'Pandas', 'OpenStreetMap', 'Geolocation APIs Integration'],
            // liveUrl: '#',
            githubUrl: 'https://github.com/codehardee/BusinessData_Pipeline'
        },
        {
            title: 'UrbanNest',
            description: 'Urban Nest is a fully functional e-commerce platform developed as part of the CSD2103 course project. Built with JavaScript, HTML, CSS, and Bootstrap, the application features a dynamic shopping experience with a persistent cart powered by local storage, category-based product filtering, real-time search functionality, and session-based authentication for secure user management. It showcases essential e-commerce workflows, including product browsing, cart management, and user login, making it a robust project for demonstrating front-end development skills.',
            imageUrl: project1,
            tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
            // liveUrl: '#',
            githubUrl: 'https://github.com/codehardee/urban-nest'
        },
        {
            title: 'ReciMe',
            description: 'ReciMe is a collaborative recipe-sharing platform developed as part of the CSD4523 course project. Built with Django, HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX, the application enables users to browse a wide variety of step-by-step recipes, create and share their own culinary creations, and engage with the community through likes, bookmarks, and reviews. A unique “Chef Mode” highlights expert-contributed content, making ReciMe more than just a recipe site—it’s an interactive hub for cooking enthusiasts. The project uses SQLite3 for data management and showcases both backend and frontend integration.',
            imageUrl: project2,
            tags: ['JavaScript', 'jQuery', 'AJAX'],
            // liveUrl: '#',
            githubUrl: 'https://github.com/codehardee/recime-project'
        },
        {
            title: 'AirBnb Replica',
            description: 'An Airbnb-inspired web application built with Node.js, Express.js, MongoDB, and EJS templates. The project features backend APIs that fetch and serve data from an Airbnb dataset, along with a dynamic frontend built using EJS for rendering listings. It includes core functionalities such as basic pagination for smooth browsing, seamless API integration, and data-driven page rendering, making it a solid full-stack project that demonstrates RESTful API design, database interaction, and server-side templating.',
            imageUrl: project3,
            tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS templates'],
            // liveUrl: '#',
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