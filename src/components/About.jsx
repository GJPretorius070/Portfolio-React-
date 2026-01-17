import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    const { bio } = portfolioData.personalInfo;

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', marginRight: '20px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--primary-color)', marginRight: '10px', fontSize: '20px' }}>01.</span>
                            About Me
                        </h2>
                        <div style={{ height: '1px', flex: 1, background: 'var(--bg-secondary)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                        <div className="about-text">
                            <p style={{ marginBottom: '15px' }}>
                                {bio}
                            </p>
                            <p>
                                My journey involves a strong foundation in C#, Java, Python, and modern web technologies. I am constantly learning and adapting to new tools and methodologies to deliver high-quality software solutions.
                            </p>
                        </div>

                        <div className="about-img" style={{ position: 'relative' }}>
                            {/* Image placeholder or stylized box */}
                            <div style={{
                                width: '100%',
                                maxWidth: '300px',
                                height: '300px',
                                background: 'var(--bg-secondary)',
                                borderRadius: 'var(--border-radius)',
                                position: 'relative',
                                margin: '0 auto',
                                border: '2px solid var(--primary-color)'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    right: '-20px',
                                    bottom: '-20px',
                                    border: '2px solid var(--text-secondary)',
                                    borderRadius: 'var(--border-radius)',
                                    zIndex: -1
                                }}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
