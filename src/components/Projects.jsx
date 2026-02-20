import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Tutor Match",
      description: "Tutor–student matching platform enabling seamless discovery, booking, and collaboration.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Ffaf6d5421f7c45c3bc03b00f64b7e662%2F2e57cf6fd0144961ac971e4739b916b4?format=webp&width=800",
      technologies: ["React", "Tailwind", "Node.js"],
      features: [
        "Real-time tutor availability",
        "Profile reviews and ratings",
        "Secure booking and messaging"
      ],
      github: "https://github.com/glitch-samson",
      demo: "https://github.com/glitch-samson",
      status: "Completed"
    },
    {
      title: "Neyma",
      description: "Modern e-commerce web app with smooth browsing and checkout experiences.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Ffaf6d5421f7c45c3bc03b00f64b7e662%2F387278d742f445c881d5110bedfc5314?format=webp&width=800",
      technologies: ["Next.js", "Tailwind", "Stripe"],
      features: [
        "Product search and filtering",
        "Cart and secure payments",
        "Admin dashboard"
      ],
      github: "https://github.com/glitch-samson",
      demo: "https://github.com/glitch-samson",
      status: "Completed"
    },
    {
      title: "TicketDorm",
      description: "Digital ticketing solution for events with QR validation and analytics.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Ffaf6d5421f7c45c3bc03b00f64b7e662%2F7692c8cad76f4fc69c1517759e7a3e82?format=webp&width=800",
      technologies: ["React", "Tailwind", "Node.js"],
      features: [
        "E-ticket generation and scanning",
        "Sales analytics",
        "Promoter tools"
      ],
      github: "https://github.com/glitch-samson",
      demo: "https://github.com/glitch-samson",
      status: "Completed"
    },
    {
      title: "BolaCash",
      description: "Trash pickup management system",
      image: "https://cdn.builder.io/api/v1/image/assets%2Ffaf6d5421f7c45c3bc03b00f64b7e662%2Fc6a9e0d296d543debd6505e6187913b4?format=webp&width=800",
      technologies: ["React", "Tailwind", "REST APIs"],
      features: [
        "Trash schedule and pickup",
        "Stepend withdrawal",
      ],
      github: "https://github.com/glitch-samson",
      demo: "https://github.com/glitch-samson",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Featured <span className="gradient-text sparkle-left">Inspirations</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)"
              }}
              style={{ perspective: 1000 }}
            >
              <div className="project-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="image-overlay"></div>
                <div className="status-badge glass">{project.status}</div>
                <motion.div
                  className="view-badge glass"
                  whileHover={{ scale: 1.1 }}
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </motion.div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {project.technologies.map(tech => (
                    <motion.span
                      key={tech}
                      className="tag"
                      whileHover={{ backgroundColor: "var(--accent-color)", color: "white" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ gap: "10px" }}
                  >
                    GitHub <span>↗</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                    whileHover={{ gap: "10px" }}
                  >
                    Demo <span>↗</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .sparkle-left::before {
          content: '✨';
          position: absolute;
          left: -30px;
          top: 0;
          font-size: 1.5rem;
          animation: float-mini 3s infinite ease-in-out;
        }

        @keyframes float-mini {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .project-card {
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
        }

        .project-image {
          height: 220px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5));
        }

        .status-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .view-badge {
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            color: white;
            opacity: 0;
            transition: opacity 0.3s;
            cursor: pointer;
            z-index: 2;
        }

        .view-badge a {
          color: inherit;
          text-decoration: none;
        }

        .project-card:hover .view-badge {
            opacity: 1;
        }

        .project-info { 
          padding: 30px; 
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .project-info h3 { margin-bottom: 10px; font-size: 1.5rem; font-weight: 700; }
        .project-info p { color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5; font-size: 0.95rem; }

        .project-features {
          margin-bottom: 20px;
        }
        .project-features ul {
          list-style: none;
          padding: 0;
        }
        .project-features li {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .project-features li::before {
          content: '•';
          color: var(--accent-color);
          font-weight: bold;
        }

        .project-tags { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 8px; 
          margin-bottom: 25px; 
          margin-top: auto;
        }
        .tag {
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50px;
          font-size: 0.7rem;
          color: var(--text-dim);
          border: 1px solid var(--glass-border);
          transition: all 0.3s;
        }

        .project-links {
          display: flex;
          gap: 20px;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.75rem;
          transition: gap 0.3s;
          text-decoration: none;
        }

        .demo-link {
          color: white;
          opacity: 0.8;
        }
        .demo-link:hover {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default Projects;
