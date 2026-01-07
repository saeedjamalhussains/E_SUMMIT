import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';

import RegisterPage from './pages/RegisterPage';
import styles from './App.module.css';

// Page transition wrapper component? 
// Or just apply AnimatePresence here.

function App() {
    const location = useLocation();


    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main>
            <Navbar />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/vision" element={<VisionPage />} />

                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </AnimatePresence>

            <footer className={styles.footer}>
                <div className={`container ${styles.inner}`}>
                    <div className={styles.brand}>E-Summit · Inaugural Edition · 2026</div>
                    <div className={styles.orgs}>
                        <span className={styles.org}>Organized by MD&IE</span>
                        <span className={styles.org}>In association with KL-CIIE</span>
                    </div>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/klu_ciie/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
                        <a href="https://www.linkedin.com/company/kl-ciie/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                    </div>

                </div>
            </footer>
        </main>
    );
}

export default App;
