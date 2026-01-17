import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', marginRight: '20px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '20px' }}>04.</span>
                            Education
                        </h2>
                        <div style={{ height: '1px', flex: 1, background: 'var(--bg-secondary)' }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                className="glass-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                                    <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{edu.degree}</h3>
                                    <span style={{ fontFamily: '"Fira Code", monospace', color: 'var(--primary-color)' }}>{edu.year}</span>
                                </div>
                                <h4 style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '15px' }}>{edu.institution}</h4>

                                <ul style={{ paddingLeft: '20px', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                    {edu.details.map((detail, i) => (
                                        <li key={i} style={{ marginBottom: '5px' }}>{detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
