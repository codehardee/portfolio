import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ExperienceItem = ({ date, title, company, description, index }) => (
  // This outer div now uses flex-col on mobile and flex-row on medium screens (md) and up
  <div className={`mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
    
    {/* This spacer is hidden on mobile */}
    <div className="hidden md:block w-5/12"></div>
    
    {/* The timeline dot is positioned absolutely relative to the vertical line on mobile */}
    <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-8 h-8 rounded-full absolute left-4 -ml-4 md:relative md:left-auto md:ml-0">
      <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
    </div>
    
    {/* The content card takes up the full width on mobile and half the width on desktop */}
    <motion.div 
      className="order-1 bg-white rounded-lg shadow-xl w-full ml-10 md:w-5/12 md:ml-0"
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`px-6 py-4 text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <p className="text-sm text-pink-500 font-semibold">{date}</p>
        <h3 className="mb-3 font-bold text-slate-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-slate-600 text-opacity-100 mb-2">{company}</p>
        <div className="mt-2 text-slate-500">
          {description.map((point, i) => (
            <p key={i} className="text-sm">
              {point}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);


const Experience = () => {
    const experienceData = [
      {
        title: "Software Developer",
        company: "Research & Innovation Lambton College",
        description: [
          "Built a full-stack seat map editor and booking system using React.js, delivering a high-performance and interactive UI with a scalable component architecture. Designed and implemented backend APIs using Node.js with Hono/Express-style services and PostgreSQL (Drizzle ORM) to manage seat maps, sections, and booking workflows. Engineered JSON-driven data pipelines and UUID-based seat persistence to ensure reliable synchronization between frontend state and normalized backend storage. Improved overall performance and reliability by optimizing React hooks, building reusable components, and implementing automated testing with Jest and React Testing Library."
        ]
      },
      {
        title: "Full Stack Software developer Intern (MEAN Stack)",
        company: "RewardsX",
        description: [
          "Developed and maintained backend REST APIs using Express.js to manage rewards, merchants, and user operations. I also wrote unit and integration tests with Jest and Supertest to ensure robust API functionality and handle edge cases effectively. On the frontend, I identified and fixed critical bugs in an AngularJS application, which significantly improved its stability and cross-browser compatibility. Throughout the development process, I actively collaborated in agile sprints to deliver full-stack features across both backend services and UI components."
        ]
      },
      {
        title: "Backend Developer",
        company: "Elixir Techne",
        description: [
        "Worked on “Money Circle”, a collaborative savings platform built with a Django REST backend. Deployed and managed serverless backend services using AWS Lambda with request routing handled through AWS API Gateway. Implemented scalable file storage and data handling using Amazon S3, integrating cloud services to ensure reliable processing. Monitored system performance using AWS CloudWatch, tested APIs with Postman, and developed Python utility modules with automated testing using PyTest."  
        ]
      },
      {
        title: "Web Designer",
        company: "CodePoets Pvt Ltd.",
        description: [
          "Designed and developed responsive websites using WordPress, Shopify, and custom HTML/CSS, delivering tailored solutions for a variety of businesses. To enhance user experience and align with client branding, I created UI/UX mockups in Figma that translated effectively across digital platforms. Additionally, I contributed to production-level React.js applications by identifying and resolving bugs, conducting manual testing, and ensuring smooth integration between frontend components and backend services."
        ]
      }
    ];

    return (
        <AnimatedSection>
            <div id="experience" className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 md:mb-20 text-pink-500">Work Experience</h2>
                <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                    {/* The vertical line is positioned to the left on mobile and in the center on desktop */}
                    <div className="absolute border-opacity-20 border-pink-300 h-full border-2 left-4 md:left-1/2"></div>
                    {experienceData.map((item, index) => (
                        <ExperienceItem key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Experience;
