import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="scroll-bar"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-container">
          <motion.a
            href="#hero"
            className="logo"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            GSK<span className="dot">.</span>
          </motion.a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Work</a></li>
            <li>
              <motion.a
                href="#contact"
                className="nav-cta"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </li>
          </ul>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
            .scroll-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: var(--accent-gradient);
                z-index: 2000;
            }

            .navbar {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              padding: 30px 0;
              z-index: 1000;
              transition: padding var(--transition-fast), background var(--transition-fast);
            }

            .navbar.scrolled {
              padding: 15px 0;
              border-bottom: 1px solid var(--glass-border);
            }

            .nav-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .logo {
              font-size: 1.5rem;
              font-weight: 800;
              letter-spacing: -1px;
              cursor: pointer;
            }

            .dot {
              color: var(--accent-color);
            }

            .nav-links {
              display: flex;
              gap: 40px;
              align-items: center;
            }

            .nav-links a {
              font-size: 0.9rem;
              font-weight: 500;
              color: var(--text-secondary);
              transition: color var(--transition-fast);
            }

            .nav-links a:hover {
              color: var(--text-primary);
            }

            .nav-cta {
              padding: 10px 25px;
              background: var(--accent-gradient);
              color: white !important;
              border-radius: 50px;
              display: inline-block;
            }

            @media (max-width: 768px) {
              .nav-links {
                display: none;
              }
            }
          `}} />
      </nav>
    </>
  );
};

export default Navbar;
