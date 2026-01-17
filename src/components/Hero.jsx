import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { name, title, bio } = portfolioData.personalInfo;

    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '0'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h4
                        style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '20px', fontFamily: '"Fira Code", monospace' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hi, my name is
                    </motion.h4>

                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        fontWeight: 'bold',
                        color: 'var(--text-primary)',
                        lineHeight: '1.1',
                        marginBottom: '10px'
                    }}>
                        {name.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.05, type: "spring", stiffness: 100 }}
                                style={{ display: 'inline-block' }}
                                whileHover={{
                                    scale: 1.2,
                                    color: 'var(--primary-color)',
                                    rotate: Math.random() * 20 - 10,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.h2
                        style={{
                            fontSize: 'clamp(30px, 5vw, 60px)',
                            fontWeight: 'bold',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.1',
                            marginBottom: '30px'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        I craft exceptional digital experiences.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, perspective: 1000 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        style={{ marginBottom: '50px', transformStyle: 'preserve-3d' }}
                    >
                        <p style={{
                            maxWidth: '600px',
                            fontSize: '18px',
                            color: 'var(--text-secondary)'
                        }}>
                            {bio}
                        </p>
                    </motion.div>

                    <motion.a
                        href="#experience"
                        className="btn-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Check out my work
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
