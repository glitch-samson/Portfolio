import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const tags = ['Problem Solver', 'Design Enthusiast', 'Coffee Fueled', 'Tech Volunteer', 'Clean Coder', 'Open Source'];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div
              className="about-image glass"
              whileHover={{ scale: 1.02 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
            >
              <img
                src="/images/Glitchportfolioic.jpeg"
                alt="Gungret Samson Karami"
                className="profile-img"
              />
              <motion.div
                className="image-accent-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: 360
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div className="drag-hint">Drag me!</div>
          </motion.div>

          <div className="about-text">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">The <span className="gradient-text">Creator</span></h2>
              <div className="about-tags">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="fun-tag glass"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color)", color: "white" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              I am Gungret Samson Karami, a dedicated Frontend Developer with a flair for creating elegant,
              intuitive, and interactive digital experiences. I hold a degree in <strong>Computer Science</strong> from
              the <strong>African University of Benin, Cotonou</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              My journey is driven by a passion for bridging the gap between complex functionality and seamless user interfaces.
              I specialize in building responsive applications that not only work perfectly but also look stunning on any device.
            </motion.p>

            <motion.div
              className="about-signature"
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              GS Karami<span className="dot">.</span>
            </motion.div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .about-image-container {
            position: relative;
            z-index: 10;
        }

        .about-image {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          padding: 15px;
          cursor: grab;
          z-index: 2;
        }

        .about-image:active { cursor: grabbing; }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
          pointer-events: none;
        }

        .drag-hint {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.8rem;
            color: var(--text-dim);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .image-accent-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent-gradient);
          border-radius: 50%;
          filter: blur(80px);
          z-index: -1;
          top: -50px;
          right: -50px;
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 25px;
          font-size: 1.15rem;
          line-height: 1.8;
        }

        .about-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 40px;
            margin-top: 20px;
        }

        .fun-tag {
            padding: 8px 18px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--accent-color);
            border: 1px solid var(--glass-border);
            cursor: move;
            user-select: none;
        }

        .about-signature {
            font-family: 'Outfit', sans-serif;
            font-size: 2.5rem;
            font-weight: 800;
            margin-top: 40px;
            color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; text-align: center; gap: 60px; }
          .about-image { max-width: 450px; margin: 0 auto; }
          .about-tags { justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default About;
