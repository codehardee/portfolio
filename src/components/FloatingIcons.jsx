import React from 'react';
import { motion } from 'framer-motion';

// Simple SVG Icon Components for the background
const CodeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M928 384H896v-96c0-17.7-14.3-32-32-32H704c-17.7 0-32 14.3-32 32v96h-64v-96c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v96h-64v-96c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v96H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h32v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96h64v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96h64v96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-96h32c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32zM288 736H160V288h128v448zm288 0H416V288h160v448zm288 0H704V288h160v448z"></path>
  </svg>
);

const MusicIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
  </svg>
);

const VSCodeIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.412 4.671L15.35 1.089a2.01 2.01 0 00-2.013.001L7.274 4.672A2.002 2.002 0 006 6.417v11.166a2.002 2.002 0 001.274 1.745l6.063 3.582a2.01 2.01 0 002.013-.001l6.063-3.582a2.002 2.002 0 001.274-1.745V6.417a2.002 2.002 0 00-1.274-1.746zM14.33 2.11l6.063 3.582-4.042 2.39L14.33 2.11zm-4.66 0l-2.02 1.194L11.692 6.09 9.67 2.11zM7.02 5.692l6.063-3.582v19.78l-6.063-3.583V5.692zm8.292 14.098l-1.274.755V2.86l1.274.755v16.175z"></path></svg>
);
const PythonIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 12c0 1.07-.42 2.05-.97 2.62l-3.46 3.46c-1.17 1.17-3.07 1.17-4.24 0L4.41 16.9c-1.17-1.17-1.17-3.07 0-4.24l3.46-3.46C8.42 8.62 9.4 8.2 10.47 8.2c1.77 0 3.21 1.44 3.21 3.21v.59zm-3.78-1.06c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM9.75 12c0-1.07.42-2.05.97-2.62l3.46-3.46c1.17-1.17 3.07-1.17 4.24 0l1.17 1.17c1.17 1.17 1.17 3.07 0 4.24l-3.46 3.46c-.55.58-1.55.97-2.62.97-1.77 0-3.21-1.44-3.21-3.21v-.59zm3.78 1.06c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"></path></svg>
);
const MelodyIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M470.38 1.51L150.41 96A32 32 0 00128 126.51v261.41A139 139 0 0096 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61A139 139 0 00416 320c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V32a32 32 0 00-41.62-30.49z"></path></svg>
);
const DatabaseIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7.03 3 3 5.34 3 8v2c0 2.66 4.03 5 9 5s9-2.34 9-5V8c0-2.66-4.03-5-9-5zm0 2c3.48 0 6.44 1.19 7.75 2.5L12 10.5 4.25 7.5C5.56 6.19 8.52 5 12 5zm0 10c-4.97 0-9-2.34-9-5v2c0 2.66 4.03 5 9 5s9-2.34 9-5v-2c0 2.66-4.03 5-9 5zm0 5c-4.97 0-9-2.34-9-5v2c0 2.66 4.03 5 9 5s9-2.34 9-5v-2c0 2.66-4.03 5-9 5z"></path></svg>
);
const CloudIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>
);
const GitBranchIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3c-1.66 0-3 1.34-3 3v1.5c0 .83.67 1.5 1.5 1.5S6 8.33 6 7.5V6c0-.55.45-1 1-1h1.5c.83 0 1.5-.67 1.5-1.5S9.33 2 8.5 2H7c-.55 0-1 .45-1 1zm12 0c0-.55-.45-1-1-1h-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H17c.55 0 1 .45 1 1v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V6c0-1.66-1.34-3-3-3zm-1 18c-.55 0-1-.45-1-1v-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V20c0 .55-.45 1-1 1h-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H12c1.66 0 3-1.34 3-3v-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V20c0 .55-.45 1-1 1zm-7-18c-.55 0-1-.45-1-1V1.5c0-.83-.67-1.5-1.5-1.5S8.67.67 8.67 1.5V3c0 .55-.45 1-1 1H6c-1.66 0-3 1.34-3 3v1.5c0 .83.67 1.5 1.5 1.5S6 8.33 6 7.5V6c0-.55.45-1 1-1h1.5c.83 0 1.5-.67 1.5-1.5S9.33 2 8.5 2H7c-.55 0-1 .45-1 1z"></path></svg>
);
const CoffeeIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"></path></svg>
);
const GamepadIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></svg>
);
const BookIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>
);

const FloatingIcon = ({ icon, top, left, size, duration, delay }) => {
  return (
    <motion.div
      className="absolute text-pink-400" // Soft, semi-transparent pink
      style={{ top, left, width: size, height: size }}
      animate={{
        y: [0, -20, 0, 20, 0], // Gentle up and down motion
        x: [0, 10, 0, -10, 0], // Gentle side to side motion
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror', // Makes the animation smooth
        delay: delay,
        ease: 'easeInOut',
      }}
    >
      {icon}
    </motion.div>
  );
};

const FloatingIcons = () => {
  const icons = [
    { icon: <PythonIcon />, size: 55, top: '10%', left: '5%' },
    { icon: <CodeIcon />, size: 40, top: '5%', left: '15%' },
    { icon: <MelodyIcon />, size: 30, top: '12%', left: '25%' },
    { icon: <CoffeeIcon />, size: 40, top: '3%', left: '40%' },
    { icon: <VSCodeIcon />, size: 25, top: '2%', left: '60%' },
    { icon: <CloudIcon />, size: 30, top: '8%', left: '70%' },
    { icon: <MusicIcon />, size: 30, top: '10%', left: '90%' },
    { icon: <GamepadIcon />, size: 25, top: '5%', left: '95%' },
    
    // About Me / Experience Area (25-50%) - Denser cluster
    { icon: <GitBranchIcon />, size: 30, top: '25%', left: '85%' },
    { icon: <VSCodeIcon />, size: 35, top: '28%', left: '10%' },
    { icon: <DatabaseIcon />, size: 25, top: '30%', left: '40%' },
    { icon: <MusicIcon />, size: 30, top: '33%', left: '70%' },
    { icon: <CoffeeIcon />, size: 30, top: '38%', left: '20%' },
    { icon: <GitBranchIcon />, size: 30, top: '40%', left: '90%' },
    { icon: <PythonIcon />, size: 45, top: '45%', left: '50%' },
    
    // Skills / Projects Area (50-80%)
    { icon: <VSCodeIcon />, size: 35, top: '52%', left: '16%' },
    { icon: <CoffeeIcon />, size: 42, top: '55%', left: '80%' },
    { icon: <MusicIcon />, size: 35, top: '60%', left: '30%' },
    { icon: <PythonIcon />, size: 25, top: '63%', left: '95%' },
    { icon: <MelodyIcon />, size: 40, top: '70%', left: '5%' },
    { icon: <CodeIcon />, size: 30, top: '75%', left: '60%' },
    
    // Contact / Footer Area (80-100%)
    { icon: <DatabaseIcon />, size: 30, top: '80%', left: '85%' },
    { icon: <CloudIcon />, size: 50, top: '85%', left: '15%' },
    { icon: <GamepadIcon />, size: 44, top: '90%', left: '50%' },
    { icon: <GitBranchIcon />, size: 25, top: '95%', left: '90%' },
    
    // Tech Icons
    // { icon: <CodeIcon />, size: 40, top: '1%', left: '15%' },
    // { icon: <GamepadIcon />, size: 20, top: '1%', left: '94%' },
    // { icon: <VSCodeIcon />, size: 20, top: '2%', left: '59%' },
    // { icon: <CoffeeIcon />, size: 40, top: '3%', left: '40%' },
    // { icon: <CloudIcon />, size: 30, top: '7.5%', left: '60%' },
    // { icon: <MusicIcon />, size: 30, top: '9%', left: '90%' },
    // { icon: <MelodyIcon />, size: 30, top: '9%', left: '25%' },
    // { icon: <PythonIcon />, size: 55, top: '10%', left: '5%' },
    

     
    // { icon: <GitBranchIcon />, size: 30, top: '15%', left: '60%' },
    // { icon: <GitBranchIcon />, size: 30, top: '16%', left: '10%' },
    // { icon: <GitBranchIcon />, size: 30, top: '17%', left: '30%' },
    // { icon: <GitBranchIcon />, size: 30, top: '19%', left: '96%' },
    // { icon: <CoffeeIcon />, size: 30, top: '21%', left: '70%' },
    // { icon: <VSCodeIcon />, size: 30, top: '23%', left: '2%' },
    // { icon: <GitBranchIcon />, size: 30, top: '26%', left: '32%' },
    // // { icon: <GitBranchIcon />, size: 30, top: '27%', left: '70%' },
    // { icon: <VSCodeIcon />, size: 30, top: '28%', left: '10%' },
    // { icon: <CoffeeIcon />, size: 30, top: '29%', left: '88%' },
    // // { icon: <MusicIcon />, size: 30, top: '31%', left: '8%' },
    // { icon: <MusicIcon />, size: 30, top: '33%', left: '29%' },



    // { icon: <VSCodeIcon />, size: 35, top: '48%', left: '16%' },
    // { icon: <CoffeeIcon />, size: 42, top: '50%', left: '70%' },
    // { icon: <MusicIcon />, size: 35, top: '60%', left: '30%' },
    // { icon: <PythonIcon />, size: 20, top: '63%', left: '90%' },
    // { icon: <MelodyIcon />, size: 40, top: '70%', left: '50%' },

    // { icon: <CodeIcon />, size: 30, top: '75%', left: '10%' },
    // { icon: <CloudIcon />, size: 50, top: '80%', left: '90%' },
    // { icon: <DatabaseIcon />, size: 30, top: '80%', left: '59%' },   
    // { icon: <CloudIcon />, size: 30, top: '89%', left: '20%' },

    // { icon: <GamepadIcon />, size: 44, top: '90%', left: '5%' },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
    style={{ paddingTop: '100px' }} >
      {icons.map((item, index) => (
        <FloatingIcon
          key={index}
          icon={item.icon}
          top={item.top}
          left={item.left}
          size={item.size}
          duration={Math.random() * 5 + 10} // Random duration between 10-15s
          delay={Math.random() * 5} // Random delay up to 5s
        />
      ))}
    </div>
  );
};

export default FloatingIcons;