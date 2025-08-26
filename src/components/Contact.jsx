import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Replace these with your actual IDs from your EmailJS account
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                setStatus('Message sent successfully!');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
            }, (error) => {
                setStatus('Failed to send message. Please try again.');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <AnimatedSection>
            <div id="contact" className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Get In Touch</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-center text-slate-600 mb-8">
                        I'm currently open to new opportunities and collaborations. Feel free to send me a message about anything you want to discuss, or just to say hi!
                    </p>
                    {/* The ref={form} and onSubmit={sendEmail} are the key changes here */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                            {/* The "name" attribute is important for EmailJS */}
                            <input type="text" name="name" id="name" className="mt-1 block w-full bg-white border-pink-200 rounded-md shadow-sm py-2 px-3 text-slate-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" name="email" id="email" className="mt-1 block w-full bg-white border-pink-200 rounded-md shadow-sm py-2 px-3 text-slate-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                            <textarea name="message" id="message" rows="4" className="mt-1 block w-full bg-white border-pink-200 rounded-md shadow-sm py-2 px-3 text-slate-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500" required></textarea>
                        </div>
                        <div className="text-center">
                            <motion.button 
                                type="submit" 
                                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-pink-50"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                        {status && <p className="text-center mt-4 text-pink-600">{status}</p>}
                    </form>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;


// import React, {useState} from 'react';
// import { motion } from 'framer-motion';
// import AnimatedSection from './AnimatedSection'; // Import the helper
// // import { IconReact, IconNodeJs, IconDatabase, IconTools } from './Icons';
// const Contact = () => {
//     const [status, setStatus] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         if(form.name.value && form.email.value && form.message.value) {
//             setStatus('Sending...');
//             setTimeout(() => {
//                 setStatus('Message sent successfully!');
//                 form.reset();
//                 setTimeout(() => setStatus(''), 3000);
//             }, 1500);
//         } else {
//             setStatus('Please fill out all fields.');
//             setTimeout(() => setStatus(''), 3000);
//         }
//     };

//     return (
//         <AnimatedSection>
//             <div id="contact" className="container mx-auto">
//                 <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Get In Touch</h2>
//                 <div className="max-w-2xl mx-auto">
//                     <p className="text-center text-slate-600 mb-8">
//                         I'm currently open to new opportunities and collaborations. Feel free to send me a message about anything you want to discuss, or just to say hi!
//                     </p>
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
//                             <input type="text" name="name" id="name" className="mt-1 block w-full bg-white border-pink-200 rounded-md shadow-sm py-2 px-3 text-slate-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500" required />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
//                             <input type="email" name="email" id="email" className="mt-1 block w-full bg-white border-pink-200 rounded-md shadow-sm py-2 px-3 text-slate-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500" required />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
//                             <textarea name="message" id="message" rows="4" className="mt-1 block w-full bg-white border-pink-200 rounded-md shadow-sm py-2 px-3 text-slate-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500" required></textarea>
//                         </div>
//                         <div className="text-center">
//                             <motion.button 
//                                 type="submit" 
//                                 className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-pink-50"
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 Send Message
//                             </motion.button>
//                         </div>
//                         {status && <p className="text-center mt-4 text-pink-600">{status}</p>}
//                     </form>
//                 </div>
//             </div>
//         </AnimatedSection>
//     );
// };

// export default Contact;