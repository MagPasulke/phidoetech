import { useEffect, useState } from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pillars from './components/Pillars.jsx';
import Stations from './components/Stations.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Impressum from './components/Impressum.jsx';
import Footer from './components/Footer.jsx';

// Nur Hashes mit führendem Slash sind Routen (#/impressum). Ankerlinks wie
// #career bleiben davon unberührt – sonst würde jeder Nav-Klick die Seite neu
// rendern und den nativen Ankersprung des Browsers abbrechen.
function readRoute() {
    const hash = window.location.hash.replace('#', '');
    return hash.startsWith('/') ? hash : '';
}

function useRoute() {
    const [route, setRoute] = useState(readRoute);

    useEffect(() => {
        const onHashChange = () => setRoute(readRoute());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return route;
}

export default function App() {
    const route = useRoute();
    const isImpressum = route === '/impressum';

    useEffect(() => {
        // Beim Direktaufruf eines Ankerlinks (z. B. /#career) den Sprung nicht überschreiben.
        if (window.location.hash && !window.location.hash.startsWith('#/')) return;
        window.scrollTo(0, 0);
    }, [isImpressum]);

    return (
        <ThemeProvider>
            <Header />
            {isImpressum ? (
                <Impressum />
            ) : (
                <main>
                    <Hero />
                    <Pillars />
                    <Stations />
                    <Blogs />
                    <Contact />
                </main>
            )}
            <Footer />
        </ThemeProvider>
    );
}
