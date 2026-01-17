import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaCopy, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const { email, phone } = portfolioData.personalInfo;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '100px' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p style={{ color: 'var(--primary-color)', fontFamily: '"Fira Code", monospace', marginBottom: '20px' }}>05. What's Next?</p>
                <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', marginBottom: '20px', color: 'var(--text-primary)' }}>Get In Touch</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '50px' }}>
                    Although I'm currently not looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <a href={`mailto:${email}`} className="btn-primary" style={{ padding: '20px 30px', fontSize: '18px', marginRight: '20px' }}>
                        Say Hello
                    </a>

                    <motion.button
                        onClick={handleCopy}
                        className="btn-primary"
                        style={{ padding: '20px', fontSize: '18px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title="Copy Email"
                    >
                        {copied ? <FaCheck /> : <FaCopy />}
                        {copied && <span style={{ fontSize: '14px' }}>Copied!</span>}
                    </motion.button>
                </div>

                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <motion.a
                        href={portfolioData.personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: 'var(--primary-color)' }}
                        style={{ fontSize: '24px', color: 'var(--text-secondary)' }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href={portfolioData.personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: 'var(--primary-color)' }}
                        style={{ fontSize: '24px', color: 'var(--text-secondary)' }}
                    >
                        <FaLinkedin />
                    </motion.a>
                </div>

                <div style={{ marginTop: '50px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Or call me at: <a href={`tel:${phone}`} style={{ color: 'var(--primary-color)' }}>{phone}</a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
