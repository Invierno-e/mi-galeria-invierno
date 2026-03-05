import { useLanguage } from '@/context/LanguageContext';
import { artworks } from '@/data/artworks';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FeaturedProps {
  onArtworkClick: (id: string) => void;
}

export default function Featured({ onArtworkClick }: FeaturedProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const featuredArtworks = artworks.filter(a => a.featured);

  return (
    <section id="featured" className="py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-wider mb-4">
            {t('OBRAS DESTACADAS', 'FEATURED WORKS')}
          </h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredArtworks.map((artwork, index) => (
            <FeaturedCard
              key={artwork.id}
              artwork={artwork}
              index={index}
              onClick={() => onArtworkClick(artwork.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeaturedCardProps {
  artwork: typeof artworks[0];
  index: number;
  onClick: () => void;
}

function FeaturedCard({ artwork, index, onClick }: FeaturedCardProps) {
  const { language, t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
        <img
          src={artwork.image}
          alt={artwork.title[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* View button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm tracking-wider">
            {t('Ver Proyecto', 'View Project')}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <span className="text-xs tracking-widest text-gray-500 uppercase">
          {artwork.category}
        </span>
        <h3 className="text-xl font-light tracking-wide group-hover:opacity-70 transition-opacity">
          {artwork.title[language]}
        </h3>
        <p className="text-sm text-gray-500">{artwork.year}</p>
      </div>
    </div>
  );
}
