import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="container footer-content">
                <div className="footer-info">
                    <motion.div
                        className="footer-logo"
                        whileHover={{ scale: 1.1 }}
                    >
                        GSK<span className="dot">.</span>
                    </motion.div>
                    <p>© {new Date().getFullYear()} Gungret Samson Karami. Built with passion and React.</p>
                </div>

                <div className="footer-links">
                    <motion.a
                        href="https://github.com/glitch-samson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{ y: -5, color: "var(--accent-color)" }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        href="mailto:gungret.sk@gmail.com"
                        className="social-link"
                        whileHover={{ y: -5, color: "var(--accent-color)" }}
                    >
                        Email
                    </motion.a>
                    <motion.a
                        href="#"
                        className="social-link"
                        whileHover={{ y: -5, color: "var(--accent-color)" }}
                    >
                        LinkedIn
                    </motion.a>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .footer {
          margin-top: 100px;
          padding: 60px 0;
          border-top: 1px solid var(--glass-border);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .footer-info p {
          font-size: 0.9rem;
          color: var(--text-dim);
        }

        .footer-links {
          display: flex;
          gap: 30px;
        }

        .social-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.3s;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
        }
      `}} />
        </footer>
    );
};

export default Footer;
