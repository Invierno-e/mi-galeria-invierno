import { useLanguage } from '@/context/LanguageContext';
import { artworks } from '@/data/artworks';
import { ArrowLeft, Calendar, Layers } from 'lucide-react';

interface ArtworkDetailProps {
  artworkId: string;
  onBack: () => void;
}

export default function ArtworkDetail({ artworkId, onBack }: ArtworkDetailProps) {
  const { language, t } = useLanguage();
  
  const artwork = artworks.find(a => a.id === artworkId);
  
  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {t('Obra no encontrada', 'Artwork not found')}
          </p>
          <button
            onClick={onBack}
            className="text-black underline hover:no-underline"
          >
            {t('Volver', 'Go back')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="w-full px-6 lg:px-12 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('Volver al portfolio', 'Back to portfolio')}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="order-1">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="order-2 lg:pt-12">
              {/* Category & Year */}
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="uppercase tracking-wider">{artwork.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {artwork.year}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-light tracking-wider mb-8">
                {artwork.title[language]}
              </h1>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed">
                  {artwork.description[language]}
                </p>
              </div>

              {/* Tools */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {t('Herramientas utilizadas', 'Tools used')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artwork.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gray-100 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  {t(
                    '¿Te interesa una pieza similar?',
                    'Interested in a similar piece?'
                  )}
                </p>
                <a
                  href="mailto:hola@circuloinvierno.art"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
                >
                  {t('Hablemos', 'Let\'s talk')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
