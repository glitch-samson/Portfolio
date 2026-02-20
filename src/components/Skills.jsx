import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Core',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5 / Semantic UI', 'CSS3 / Scss']
    },
    {
      title: 'Modern Stack',
      skills: ['TypeScript', 'Next.js', 'Redux Toolkit / Context API', 'Tailwind CSS']
    },
    {
      title: 'Tools & Workflow',
      skills: ['Git / GitHub', 'Vite / Webpack', 'NPM / Yarn', 'Firebase / Supabase']
    },
    {
      title: 'Software Standards',
      skills: ['Responsive Design', 'Web Performance', 'RESTful APIs', 'Agile / Team Collaboration']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="skills" className="skills glass">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            Technical <span className="gradient-text sparkle">Proficiency</span>
          </h2>
        </motion.div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category glass"
              variants={itemVariants}
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              style={{ perspective: 1000 }}
            >
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map(skill => (
                  <motion.li
                    key={skill}
                    className="skill-item"
                    whileHover={{ x: 5, color: "var(--text-primary)" }}
                  >
                    <span className="skill-dot"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .text-center { text-align: center; }

        .sparkle { position: relative; }
        .sparkle::after {
          content: '✦';
          position: absolute;
          top: -10px;
          right: -20px;
          color: var(--accent-secondary);
          font-size: 1.2rem;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .skills {
          position: relative;
          overflow: hidden;
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .skill-category {
          padding: 40px 30px;
          border-radius: 25px;
          transition: border-color var(--transition-fast);
          transform-style: preserve-3d;
        }

        .skill-category:hover {
          border-color: var(--accent-color);
        }

        .skill-category h3 {
          margin-bottom: 25px;
          font-size: 1.4rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          color: var(--text-secondary);
          cursor: default;
        }

        .skill-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-gradient);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-color);
        }

        @media (max-width: 600px) {
          .skills-container { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default Skills;
