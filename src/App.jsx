import { useEffect, useState } from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Pillars from './components/Pillars.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Impressum from './components/Impressum.jsx';
import Footer from './components/Footer.jsx';

function useRoute() {
    const [route, setRoute] = useState(() => window.location.hash.replace('#', ''));

    useEffect(() => {
        const onHashChange = () => setRoute(window.location.hash.replace('#', ''));
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return route;
}

export default function App() {
    const route = useRoute();
    const isImpressum = route === '/impressum';

    useEffect(() => {
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
                    <Blogs />
                    <Contact />
                </main>
            )}
            <Footer />
        </ThemeProvider>
    );
}
