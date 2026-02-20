import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Hire Me', href: '#contact', isCta: true },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
          {/* Desktop Menu */}
          <ul className="nav-links desktop-only">
            {navLinks.map((link, i) => (
              <li key={i}>
                <motion.a
                  href={link.href}
                  className={link.isCta ? 'nav-cta' : ''}
                  whileHover={link.isCta ? { scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" } : { color: "var(--text-primary)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Hamburger Toggle */}
          <div className="hamburger" onClick={toggleMenu}>
            <motion.div
              className="bar"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className="bar"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className="bar"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mobile-menu-header container">
                <a href="#hero" className="logo" onClick={() => setIsMenuOpen(false)}>
                  GSK<span className="dot">.</span>
                </a>
                <div className="close-menu" onClick={toggleMenu}>
                  <div className="bar" style={{ transform: 'rotate(45deg)', position: 'absolute' }}></div>
                  <div className="bar" style={{ transform: 'rotate(-45deg)' }}></div>
                </div>
              </div>
              <ul className="mobile-nav-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={link.isCta ? 'mobile-nav-cta' : ''}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

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
              z-index: 1100;
              position: relative;
            }

            .dot {
              color: var(--accent-color);
            }

            .nav-links {
              display: flex;
              gap: 40px;
              align-items: center;
            }

            .desktop-only {
                display: flex;
            }

            .nav-links a {
              font-size: 0.9rem;
              font-weight: 500;
              color: var(--text-secondary);
              transition: color var(--transition-fast);
            }

            .nav-cta {
              padding: 10px 25px;
              background: var(--accent-gradient);
              color: white !important;
              border-radius: 50px;
              display: inline-block;
            }

            /* Hamburger Menu */
            .hamburger {
                display: none;
                flex-direction: column;
                gap: 6px;
                cursor: pointer;
                z-index: 1100;
                position: relative;
                padding: 10px;
            }

            .bar {
                width: 25px;
                height: 2px;
                background: white;
                border-radius: 2px;
            }

            /* Mobile Menu Overlay */
            .mobile-menu {
                position: fixed;
                inset: 0;
                width: 100%;
                height: 100vh;
                background: #000000;
                display: flex;
                flex-direction: column;
                z-index: 2000;
            }

            .mobile-menu-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 30px 20px;
                width: 100%;
            }

            .close-menu {
                width: 30px;
                height: 30px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .mobile-nav-links {
                list-style: none;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 40px;
                padding-bottom: 80px;
            }

            .mobile-nav-links a {
                font-size: 2.5rem;
                font-weight: 800;
                color: white;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: -1px;
            }

            .mobile-nav-cta {
                padding: 15px 45px;
                background: var(--accent-gradient);
                border-radius: 50px;
                display: inline-block;
                font-size: 1.5rem !important;
            }

            @media (max-width: 768px) {
              .desktop-only {
                display: none;
              }
              .hamburger {
                display: flex;
              }
            }
          `}} />
      </nav>
    </>
  );
};

export default Navbar;
