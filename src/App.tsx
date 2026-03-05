import { useState, useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Featured from '@/sections/Featured';
import Gallery from '@/sections/Gallery';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import ArtworkDetail from '@/sections/ArtworkDetail';

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (selectedArtwork) {
        setSelectedArtwork(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedArtwork]);

  // Update URL when artwork is selected
  const handleArtworkClick = (id: string) => {
    setSelectedArtwork(id);
    window.history.pushState({ artworkId: id }, '', `#obra/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to portfolio
  const handleBack = () => {
    setSelectedArtwork(null);
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check URL on mount for direct links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#obra/')) {
      const artworkId = hash.replace('#obra/', '');
      setSelectedArtwork(artworkId);
    }
  }, []);

  return (
    <LanguageProvider>
      {selectedArtwork ? (
        <ArtworkDetail artworkId={selectedArtwork} onBack={handleBack} />
      ) : (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <Featured onArtworkClick={handleArtworkClick} />
            <Gallery onArtworkClick={handleArtworkClick} />
            <About />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
