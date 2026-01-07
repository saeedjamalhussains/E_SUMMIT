import { useState } from 'react';
import { motion } from 'framer-motion';
import { createStagger, fadeInUp } from './Animations';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        role: 'Student'
    });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [focusedField, setFocusedField] = useState(null);

    console.log('Render: status =', status);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    const handleFocus = (field) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Basic client-side validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            setTimeout(() => {
                setStatus('idle');
                setErrorMessage('');
            }, 3000);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', organization: '', role: 'Student' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
    };

    const containerVariants = createStagger(0.1, 0.3);
    const itemVariants = fadeInUp;

    return (
        <section className={styles.registerPage} id="register">
            {/* Background Elements */}
            <div className={styles.bgNoise}></div>
            <div className={styles.bgGlow}></div>

            <motion.div
                className={styles.inner}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className={styles.header}>
                    <motion.span className="pill-badge" variants={itemVariants} style={{ marginBottom: '1rem' }}>Join the Summit</motion.span>
                    <motion.h2 className={styles.headline} variants={itemVariants}>Show Up Interest</motion.h2>
                    <motion.p className={styles.subtext} variants={itemVariants}>
                        Register your interest for the inaugural E-Summit 2026
                    </motion.p>
                </div>

                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={styles.successMessage}
                    >
                        <div className={styles.successIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3>Interest Registered</h3>
                        <p>We'll keep you posted on the journey ahead</p>
                        <motion.button
                            type="button"
                            className={styles.buttonOutline}
                            onClick={() => {
                                console.log('Resetting form...');
                                setFormData({
                                    name: '',
                                    email: '',
                                    organization: '',
                                    role: 'Student'
                                });
                                setStatus('idle');
                                setErrorMessage('');
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Register Another Interest
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        className={styles.form}
                        onSubmit={handleSubmit}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className={styles.field} variants={itemVariants}>
                            <label className={styles.fieldLabel} htmlFor="name">Full Name</label>
                            <div className={`${styles.inputWrapper} ${focusedField === 'name' ? styles.focused : ''}`}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={handleBlur}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </motion.div>

                        <motion.div className={styles.field} variants={itemVariants}>
                            <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
                            <div className={`${styles.inputWrapper} ${focusedField === 'email' ? styles.focused : ''}`}>
                                <input
                                    className={styles.input}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="abc@abc.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={handleBlur}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </motion.div>

                        <motion.div className={styles.field} variants={itemVariants}>
                            <label className={styles.fieldLabel} htmlFor="organization">Organization</label>
                            <div className={`${styles.inputWrapper} ${focusedField === 'organization' ? styles.focused : ''}`}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    placeholder="University/Company Name"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('organization')}
                                    onBlur={handleBlur}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </motion.div>

                        <motion.div className={styles.field} variants={itemVariants}>
                            <label className={styles.fieldLabel} htmlFor="role">I am a</label>
                            <div className={`${styles.inputWrapper} ${focusedField === 'role' ? styles.focused : ''}`}>
                                <select
                                    className={styles.select}
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('role')}
                                    onBlur={handleBlur}
                                    disabled={status === 'loading'}
                                >
                                    <option value="Student">Student</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Founder">Founder</option>
                                    <option value="Investor">Investor</option>
                                </select>
                            </div>
                        </motion.div>

                        <motion.div className={styles.actions} variants={itemVariants}>
                            <motion.button
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                {status === 'loading' ? (
                                    <span className={styles.loader}></span>
                                ) : (
                                    <>
                                        Register the Interest
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className={styles.errorMessage}
                            >
                                {errorMessage || "Unable to submit form. Please verify your details."}
                            </motion.div>
                        )}
                    </motion.form>
                )}
            </motion.div>
        </section >
    );
};

export default RegistrationForm;
