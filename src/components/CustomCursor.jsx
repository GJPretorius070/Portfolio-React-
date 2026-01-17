import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/global.css'; // Ensure we have styles

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
            setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setCursorVariant("button");
            } else {
                setCursorVariant("default");
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            backgroundColor: "rgba(100, 255, 218, 0.3)",
            border: "2px solid #64ffda",
            mixBlendMode: "screen",
            opacity: isVisible ? 1 : 0
        },
        button: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            height: 40,
            width: 40,
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            border: "2px solid #64ffda",
            mixBlendMode: "screen",
            opacity: isVisible ? 1 : 0
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            opacity: isVisible ? 1 : 0
        },
        button: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            opacity: isVisible ? 0 : 0
        }
    };

    return (
        <>
            {/* Main large circle */}
            <motion.div
                className="cursor-main"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
            />
            {/* Small center dot */}
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={cursorVariant}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#64ffda',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000
                }}
            />
        </>
    );
};

export default CustomCursor;
