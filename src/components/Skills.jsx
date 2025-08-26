import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Import the helper
import { IconReact, IconNodeJs, IconDatabase, IconTools } from './Icons';

const SkillCard = ({ icon, title, skills }) => (
    <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg border border-pink-100"
        whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)" }}
    >
        <div className="text-pink-500 w-12 h-12 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
        <ul className="text-slate-500 space-y-2">
            {skills.map(skill => <li key={skill} className="flex items-center"><span className="text-pink-400 mr-2">▹</span>{skill}</li>)}
        </ul>
    </motion.div>
);const Skills = () => {
    const skillData = [
        {
            icon: <IconReact />,
            title: 'Frontend',
            skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Framer Motion', 'AngularJS'],
        },
        {
            icon: <IconNodeJs />,
            title: 'Backend',
            skills: ['SpringBoot', 'DjangoREST', 'Node.js', 'Express.js', 'Authentication (JWT)', 'Mongoose']
        },
        {
            icon: <IconDatabase />,
            title: 'Databases',
            skills: ['MongoDB', 'MySQL', 'PostgreSQL']
        },
        {
            icon: <IconTools />,
            title: 'Tools & DevOps',
            skills: ['Git & GitHub', 'AWS', 'GCP', 'Docker', 'Selenium']
        }
    ];

    return (
        <AnimatedSection>
            <div id="skills" className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">My Tech Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillData.map(card => <SkillCard key={card.title} {...card} />)}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Skills;