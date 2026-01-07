import { motion } from 'framer-motion';
import styles from './Teaser.module.css';

const items = [
    {
        title: 'Conversations',
        desc: 'Founder talks, fireside chats, and panel discussions focused on real journeys, real challenges, and real decisions.'
    },
    {
        title: 'Sectors',
        desc: 'Focused discussions across AI, FinTech, Climate & Sustainability, HealthTech, EdTech, and emerging domains.'
    },
    {
        title: 'Showcases',
        desc: 'A curated startup and innovation expo featuring student teams, early-stage ventures, and working prototypes.'
    },
    {
        title: 'Mentorship',
        desc: 'Direct mentor connect sessions with founders, investors, and domain experts offering actionable guidance.'
    },
    {
        title: 'Networking',
        desc: 'Founder–investor interactions, peer networking, and ecosystem conversations designed to build long-term connections.'
    },
    {
        title: 'Workshops',
        desc: 'Expert-led sessions on startup fundamentals, business models, validation, and building for scale.'
    }
];

const Teaser = () => {
    return (
        <section className={styles.teaser}>
            <div className={styles.header}>
                <span className="pill-badge" style={{ marginBottom: '1.5rem' }}>The Experience</span>
                <h2 className={styles.headline}>What takes shape here.</h2>
                <p className={styles.subhead}>A sneak peek into the summit experience.</p>
                <div className={styles.touchHint}>Tap to view the cards</div>
            </div>

            <div className={styles.grid}>
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`stripe-box ${styles.card}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <h3 className={`stripe-box-title ${styles.cardTitle}`}>{item.title}</h3>
                            <p className={`stripe-box-text ${styles.cardDesc}`}>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Teaser;
