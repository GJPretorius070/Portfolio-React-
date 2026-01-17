import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', marginRight: '20px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '20px' }}>03.</span>
                            Skills & Technologies
                        </h2>
                        <div style={{ height: '1px', flex: 1, background: 'var(--bg-secondary)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                        {skills.map((category, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                whileHover={{ y: -10, boxShadow: '0 20px 30px -15px rgba(2, 12, 27, 0.7)' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--primary-color)', borderBottom: '1px solid rgba(100, 255, 218, 0.1)', paddingBottom: '10px' }}>
                                    {category.category}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                    {category.items.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            style={{
                                                fontSize: '14px',
                                                background: 'rgba(100, 255, 218, 0.05)',
                                                padding: '8px 16px',
                                                borderRadius: '20px',
                                                color: 'var(--text-primary)',
                                                border: '1px solid rgba(100, 255, 218, 0.2)',
                                                cursor: 'default',
                                                display: 'inline-block'
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: 'rgba(100, 255, 218, 0.15)',
                                                borderColor: 'var(--primary-color)'
                                            }}
                                            animate={{
                                                y: [0, -5, 0],
                                            }}
                                            transition={{
                                                duration: 2 + Math.random() * 2,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                ease: "easeInOut",
                                                delay: Math.random() * 2
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
