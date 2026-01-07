import { motion } from 'framer-motion';
import styles from './Vision.module.css';

const Vision = () => {
    const quote = "Every unicorn begins as a whisper";
    const words = quote.split(" ");

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className={styles.visionPage} id="vision">
            <div className={styles.container}>
                <div className={styles.quoteWrapper}>
                    <motion.h2
                        className={styles.quote}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {words.map((word, i) => (
                            <motion.span key={i} variants={item} className={styles.word}>
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>
                </div>

                <motion.div
                    className="pill-badge"
                    style={{ margin: '0 auto 4rem', display: 'block', width: 'fit-content' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} /* removed 0.8 opacity */
                    transition={{ delay: 0.5 }}
                >
                    Inaugural Edition · 2026
                </motion.div>

                <motion.div
                    className="section-divider"
                    style={{ marginBottom: '4rem' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                />

                <div className="scroll-connector" style={{ marginTop: '-2rem' }} />

                <motion.div
                    className="highlight-quote"
                    style={{ marginBottom: '6rem', marginTop: '6rem' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    "Clarity before scale"
                </motion.div>

                <motion.div
                    className="scroll-connector"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                />

                <motion.div
                    className={`stripe-box ${styles.audienceCtx}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="stripe-box-title">Target Audience</h3>
                    <p className="stripe-box-text">
                        Students from E-cells
                        <br />
                        Early-stage Founders
                        <br />
                        Builders at the Beginning of their Journey
                    </p>
                </motion.div>

                <div className={styles.contentGrid}>
                    <motion.div
                        className={`stripe-box ${styles.column}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="stripe-box-title">The Platform</h3>
                        <p className="stripe-box-text">
                            A new platform for ideas at their earliest stage. Where conversations begin before scale, before funding, before noise. The inaugural E-Summit marks the first step of a long-term ecosystem.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`stripe-box ${styles.column}`}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h3 className="stripe-box-title">The Legacy</h3>
                        <p className="stripe-box-text">
                            Beyond the summit, we are building a legacy. Our mission is to ignite entrepreneurship cells across regional campuses, turning isolated sparks into a connected network of innovators.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`stripe-box ${styles.column}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3 className="stripe-box-title">Why Now ?</h3>
                        <p className="stripe-box-text">
                            The ecosystem is expanding but access remains uneven. Ideas emerge everywhere opportunities do not. E-Summit begins where the gap is widest.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`stripe-box ${styles.column}`}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <h3 className="stripe-box-title">Why to Participate ?</h3>
                        <p className="stripe-box-text">
                            Connect with investors, learn from founders, and find your co-founder. Whether you're building or just beginning, this is where your next step becomes clear.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`stripe-box ${styles.column}`}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <h3 className="stripe-box-title">The Outcome</h3>
                        <p className="stripe-box-text">
                            Actionable clarity. You walk away not just with inspiration, but with a refined roadmap, a validated network, and the specific next steps needed to build your venture.
                        </p>
                    </motion.div>

                    <motion.div
                        className={`stripe-box ${styles.column}`}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        style={{ minHeight: '200px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Vision;
