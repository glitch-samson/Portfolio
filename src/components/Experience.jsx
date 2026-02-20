import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      company: 'nHub Nigeria',
      role: 'Volunteer / Staff',
      description: 'Transitioned from a volunteer to a full-time staff member, contributing to core technical projects and community growth.',
      achievement: 'Hackjos 2025 - 5th Place'
    },
    {
      year: '2023 - 2024',
      company: 'nHub Nigeria',
      role: 'Intern',
      description: 'Gained hands-on experience in frontend development, working on real-world projects and refining technical skills within a fast-paced environment.',
    },
    {
      year: 'Recent',
      company: 'Freelance',
      role: 'Frontend Developer',
      description: 'Successfully delivered multiple freelance projects, focusing on client requirements and modern web standards.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, rotateY: 45 },
    show: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Career <span className="gradient-text sparkle-right">Milestones</span>
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot-wrapper">
                <motion.div
                  className="timeline-dot"
                  whileInView={{ scale: [1, 1.5, 1], backgroundColor: ["#3b82f6", "#a855f7", "#3b82f6"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <motion.div
                className="timeline-content glass"
                whileHover={{
                  x: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "var(--accent-color)"
                }}
              >
                <span className="exp-year">{exp.year}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                {exp.achievement && (
                  <motion.div
                    className="exp-achievement"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  >
                    🚀 <strong>{exp.achievement}</strong>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .text-center { text-align: center; }
        
        .sparkle-right::after {
          content: '🚀';
          position: absolute;
          right: -40px;
          top: 0;
          font-size: 1.5rem;
          animation: fly 4s infinite ease-in-out;
        }

        @keyframes fly {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          50% { transform: translate(15px, -15px) rotate(10deg); }
        }

        .experience {
          position: relative;
          overflow: hidden;
        }

        .experience-timeline {
          position: relative;
          max-width: 900px;
          margin: 80px auto 0;
          padding-left: 60px;
        }

        .timeline-line {
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(to bottom, var(--accent-color), var(--accent-secondary), transparent);
            border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 70px;
          perspective: 1000px;
        }

        .timeline-dot-wrapper {
            position: absolute;
            left: -54px;
            top: 10px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg-primary);
            z-index: 2;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          background: var(--accent-color);
          border-radius: 50%;
        }

        .timeline-content {
          padding: 40px;
          border-radius: 30px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid var(--glass-border);
        }

        .exp-year {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--accent-secondary);
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .timeline-content h3 { margin-bottom: 8px; font-size: 1.8rem; font-weight: 800; }
        .timeline-content h4 { color: var(--text-secondary); margin-bottom: 20px; font-weight: 600; font-size: 1.1rem; }
        .timeline-content p { color: var(--text-dim); font-size: 1.05rem; line-height: 1.7; }

        .exp-achievement {
          margin-top: 25px;
          padding: 15px 25px;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
          border-radius: 12px;
          font-size: 0.95rem;
          color: var(--text-primary);
          border-left: 4px solid var(--accent-color);
        }

        @media (max-width: 768px) {
          .experience-timeline { padding-left: 40px; }
          .timeline-line { left: 10px; }
          .timeline-dot-wrapper { left: -39px; }
          .timeline-content { padding: 30px; }
        }
      `}} />
    </section>
  );
};

export default Experience;
