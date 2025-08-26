import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pink-50/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.a 
                        href="#" 
                        className="text-2xl font-bold text-pink-500"
                        whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(236, 72, 153, 0.5)"}}
                    >
                        HARDEE
                    </motion.a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-slate-600 hover:text-pink-500 transition-colors duration-300 font-medium"
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-pink-50/90 backdrop-blur-sm"
                >
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-600 hover:text-pink-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    );
};
export default Header;