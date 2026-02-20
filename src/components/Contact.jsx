import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xpqjjoje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-box glass"
          initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          style={{ perspective: 1000 }}
        >
          <div className="contact-header">
            <motion.h2
              className="section-title text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Start a <span className="gradient-text">Conversation</span>
            </motion.h2>
            <p className="text-center">
              Have a vision? Let's turn it into a high-octane reality. <br />
              Reach me directly at <a href="mailto:gungret.sk@gmail.com" className="contact-link">gungret.sk@gmail.com</a>
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="success-icon">✨</div>
                <h3>Message Sent Successfully!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="form-group"
                  whileFocusWithin={{ x: 10, borderColor: "var(--accent-color)" }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div
                  className="form-group"
                  whileFocusWithin={{ x: 10, borderColor: "var(--accent-color)" }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div
                  className="form-group"
                  whileFocusWithin={{ x: 10, borderColor: "var(--accent-color)" }}
                >
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary w-full"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px var(--accent-color)",
                    letterSpacing: "4px"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transition: "letter-spacing 0.3s" }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Floating Particles */}
          <div className="contact-particles">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact {
          position: relative;
          overflow: hidden;
        }

        .contact-box {
          max-width: 800px;
          margin: 0 auto;
          padding: 80px;
          border-radius: 40px;
          position: relative;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--glass-border);
          transform-style: preserve-3d;
        }

        .contact-header { margin-bottom: 50px; }
        .contact-header p { color: var(--text-secondary); font-size: 1.1rem; }

        .contact-form { display: flex; flex-direction: column; gap: 25px; }

        .form-group {
            transition: all 0.3s;
            border-radius: 15px;
            border: 1px solid transparent;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 18px 25px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 15px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.07);
        }

        .w-full { width: 100%; border-radius: 15px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }

        .contact-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: -1;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 50%;
            filter: blur(2px);
        }

        .particle:nth-child(1) { top: 10%; left: 10%; }
        .particle:nth-child(2) { top: 20%; right: 10%; }
        .particle:nth-child(3) { bottom: 20%; left: 5%; }
        .particle:nth-child(4) { bottom: 10%; right: 15%; }
        .particle:nth-child(5) { top: 50%; left: -20px; width: 100px; height: 100px; opacity: 0.1 !important; }
        .particle:nth-child(6) { bottom: 50%; right: -20px; width: 150px; height: 150px; opacity: 0.1 !important; }

        .success-message {
          text-align: center;
          padding: 40px 0;
        }
        .success-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          animation: bounce 1s infinite;
        }
        .success-message h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .success-message p {
          color: var(--text-secondary);
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(1.1); }
          50% { transform: translateY(-10px) scale(1); }
        }

        @media (max-width: 600px) {
          .contact-box { padding: 40px 20px; }
        }
      `}} />
    </section>
  );
};

export default Contact;
