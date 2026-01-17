import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', marginRight: '20px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '20px' }}>02.</span>
                            Where I've Worked
                        </h2>
                        <div style={{ height: '1px', flex: 1, background: 'var(--bg-secondary)' }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', position: 'relative', paddingLeft: '20px' }}>
                        {/* Animated Timeline Line */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                background: 'var(--bg-secondary)',
                                transformOrigin: 'top'
                            }}
                        >
                            <motion.div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'var(--primary-color)',
                                    transformOrigin: 'top'
                                }}
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {experience.map((job, index) => (
                            <motion.div
                                key={job.id}
                                className="glass-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                whileHover={{ x: 10, backgroundColor: 'rgba(30, 30, 40, 0.9)' }}
                                style={{
                                    position: 'relative',
                                    borderLeft: '4px solid var(--primary-color)',
                                    marginLeft: '20px'
                                }}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-46px',
                                    top: '0',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    border: '2px solid var(--primary-color)',
                                    zIndex: 10
                                }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '10px' }}>
                                    <h3 style={{ fontSize: '22px', margin: 0 }}>
                                        {job.role} <span style={{ color: 'var(--primary-color)' }}>@ {job.company}</span>
                                    </h3>
                                    <span style={{ fontSize: '14px', fontFamily: '"Fira Code", monospace', color: 'var(--text-secondary)' }}>
                                        {job.period}
                                    </span>
                                </div>

                                <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>{job.description}</p>

                                <ul style={{ listStyle: 'none' }}>
                                    {job.achievements.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                                            <span style={{ color: 'var(--primary-color)', marginRight: '10px', lineHeight: '1.6' }}>▹</span>
                                            <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{item}</span>
                                        </li>
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

export default Experience;
