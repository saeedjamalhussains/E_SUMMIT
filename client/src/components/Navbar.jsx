import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                E-Summit '26
            </NavLink>

            <div className={styles.links}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/vision"
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                >
                    Vision
                </NavLink>

                <NavLink
                    to="/register"
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}
                >
                    Register
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
