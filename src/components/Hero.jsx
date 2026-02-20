import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const title = "Gungret Samson Karami";

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const techIcons = [
    { icon: '⚛️', color: '#61DAFB', delay: 0 },
    { icon: 'JS', color: '#F7DF1E', delay: 2 },
    { icon: 'CSS', color: '#1572B6', delay: 4 },
    { icon: '🚀', color: '#FF4154', delay: 1 },
    { icon: '⚡', color: '#FFD700', delay: 3 },
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse"></span> Available
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm <br />
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === " " ? "space" : "gradient-text"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            Frontend Specialist crafting <span className="highlight">pixel-perfect</span>,
            high-definition web experiences with artistic precision.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2, ease: "backOut" }}
          >
            <a href="#projects" className="btn btn-primary">Discover My Work</a>
            <a href="#contact" className="btn secondary-btn">Let's Talk</a>
          </motion.div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="tech-floaters">
        {techIcons.map((item, i) => (
          <motion.div
            key={i}
            className="tech-icon glass"
            style={{ color: item.color }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Intense Background Blobs */}
      <motion.div
        className="blob blob-1"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="blob blob-2"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="blob blob-3"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 30px;
          border: 1px solid var(--glass-border);
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-title {
          font-size: clamp(3rem, 10vw, 5.5rem);
          line-height: 1;
          margin-bottom: 25px;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .hero-title span {
          display: inline-block;
        }

        .hero-title .space {
          width: 0.3em;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin-bottom: 45px;
          font-weight: 400;
        }

        .highlight {
          color: var(--text-primary);
          font-weight: 700;
          border-bottom: 2px solid var(--accent-color);
        }

        .tech-floaters {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: -1;
        }

        .tech-icon {
          position: absolute;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 1.5rem;
          font-weight: 800;
          border: 1px solid var(--glass-border);
        }

        .tech-icon:nth-child(1) { top: 20%; left: 15%; }
        .tech-icon:nth-child(2) { top: 60%; right: 15%; }
        .tech-icon:nth-child(3) { bottom: 20%; left: 25%; }
        .tech-icon:nth-child(4) { top: 40%; right: 25%; }
        .tech-icon:nth-child(5) { top: 15%; right: 35%; }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -2;
        }

        .blob-1 { width: 600px; height: 600px; background: rgba(59, 130, 246, 0.15); top: -200px; right: -100px; }
        .blob-2 { width: 500px; height: 500px; background: rgba(168, 85, 247, 0.1); bottom: -100px; left: -100px; }
        .blob-3 { width: 400px; height: 400px; background: rgba(59, 130, 246, 0.1); top: 30%; left: 10%; }

        @media (max-width: 768px) {
          .hero-badge { margin-bottom: 20px; }
          .hero-subtitle { font-size: 1.1rem; }
          .tech-icon { width: 45px; height: 45px; font-size: 1.1rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
