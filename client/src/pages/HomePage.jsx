import Hero from '../components/Hero';
import Teaser from '../components/Teaser';
import { ScrollReveal } from '../components/Animations';

const HomePage = () => {
    return (
        <>
            <Hero />
            <ScrollReveal>
                <Teaser />
            </ScrollReveal>
        </>
    );
};

export default HomePage;
