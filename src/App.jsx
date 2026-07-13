import { ThemeProvider } from '@ui5/webcomponents-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pillars from './components/Pillars.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    return (
        <ThemeProvider>
            <Header />
            <main>
                <Hero />
                <Pillars />
                <About />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
}
