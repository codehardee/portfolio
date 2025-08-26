import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Import the helper
import {IconGithub, IconLinkedin, IconTwitter, IconEnvelope } from './Icons';

const Footer = () => {
    const socialLinks = [
        { icon: <IconGithub />, href: 'https://github.com/codehardee' },
        { icon: <IconLinkedin />, href: 'https://www.linkedin.com/in/hardee-raval/' },
        { icon: <IconTwitter />, href: 'https://x.com/hardee_raval26?t=F25azU2JsDBM3Sbg7sLQrA&s=09' },
        { icon: <IconEnvelope />, href: 'mailto:hardeeraval2002@gmail.com' },
    ];

    return (
        <footer className="bg-white border-t border-pink-100">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((link, index) => (
                        <motion.a 
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 text-slate-500 hover:text-pink-500 transition-colors duration-300"
                            whileHover={{ y: -3, scale: 1.1 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Hardee. Made with Love 💗</p>
                {/* <p className="text-sm mt-2">Built with React & Tailwind CSS</p> */}
            </div>
        </footer>
    );
};

export default Footer;