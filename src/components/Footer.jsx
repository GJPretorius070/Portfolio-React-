import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '20px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '14px',
            fontFamily: '"Fira Code", monospace'
        }}>
            <p style={{ marginBottom: '10px' }}>
                Designed & Built by GJ Pretorius
            </p>
        </footer>
    );
};

export default Footer;
