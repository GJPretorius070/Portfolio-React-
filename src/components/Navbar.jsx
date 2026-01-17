import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '15px 0' : '25px 0',
                background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="logo"
                >
                    <a href="#" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        GJ<span style={{ color: 'var(--text-primary)' }}>Pretorius</span>.
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md-flex" style={{ display: 'none', gap: '30px' }}>
                    {/* Note: In a real CSS module or Tailwind setup this would be easier. 
              I'm adding inline styles for simplicity here as I don't have Tailwind configured yet 
              based on the "Vanilla CSS" instruction unless requested. 
              Wait, I can use the global CSS for utility classes. 
              I'll assume desktop view is managed via media queries in variables/global. 
          */}
                </div>

                <ul className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a
                                href={link.href}
                                style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{ display: 'flex', gap: '15px', marginLeft: '20px' }}
                    >
                        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '20px' }}>
                            <FaGithub />
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '20px' }}>
                            <FaLinkedin />
                        </a>
                    </motion.li>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', color: 'var(--text-primary)', fontSize: '24px', cursor: 'pointer' }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Overlay - Implementation needed with proper CSS media queries. 
          For now, I'll stick to a simple responsive structure in CSS.
          I will add a style block to global.css later to handle .desktop-menu vs .mobile-toggle 
      */}
        </nav>
    );
};

export default Navbar;
