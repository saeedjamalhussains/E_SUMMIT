import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className={styles.hero}>
            <motion.div style={{ y, opacity }} className={styles.content}>
                <span className="pill-badge">The Inaugural Edition</span>

                <h1 className={styles.title}>
                    E-Summit 2026
                </h1>

                <p className={styles.subtitle}>
                    Launching the first chapter of a national entrepreneurship summit
                </p>

                <div className={styles.ctaGroup}>
                    <motion.button
                        onClick={() => navigate('/register')}
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register Interest
                    </motion.button>
                </div>
            </motion.div>
            <motion.div
                className="section-divider"
                style={{ marginTop: '-6rem' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "circOut" }}
            />

            <div className="scroll-connector" />

            <motion.div
                className={styles.quoteWrapper}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.5
                        }
                    }
                }}
            >
                <div className="highlight-quote">
                    {"Building the future, one idea at a time".split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            className={styles.word}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <div className="scroll-connector" style={{ position: 'absolute', bottom: '30px', zIndex: 10 }} />
        </section>
    );
};

export default Hero;
