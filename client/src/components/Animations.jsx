import React, { useEffect, useRef, useState } from 'react';

// --- Components ---

export const ScrollReveal = ({
    children,
    delay = 0,
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state based on intersection
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: '50px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    const transitionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        // Use standard easing for both enter and exit
        transition: `opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? delay : 0}s, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? delay : 0}s`,
    };

    return (
        <div ref={ref} style={transitionStyle}>
            {children}
        </div>
    );
};

// --- Shared Variants ---

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const createStagger = (stagger = 0.1, delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: stagger,
            delayChildren: delay
        }
    }
});
