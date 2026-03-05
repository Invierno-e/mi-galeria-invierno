import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { artworks, categories } from '@/data/artworks';
import { ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface GalleryProps {
  onArtworkClick: (id: string) => void;
}

export default function Gallery({ onArtworkClick }: GalleryProps) {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const archiveArtworks = artworks.filter(a => !a.featured);
  
  const filteredArtworks = activeFilter === 'all'
    ? archiveArtworks
    : archiveArtworks.filter(a => a.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-wider mb-4">
            {t('ARCHIVO', 'ARCHIVE')}
          </h2>
          <p className="text-gray-600 max-w-xl">
            {t(
              'Una colección de trabajos explorando diferentes estilos y temáticas.',
              'A collection of works exploring different styles and themes.'
            )}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t(category.label.es, category.label.en)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredArtworks.map((artwork, index) => (
            <GalleryItem
              key={artwork.id}
              artwork={artwork}
              index={index}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            {t('No hay obras en esta categoría', 'No artworks in this category')}
          </div>
        )}
      </div>

      {/* Modal for image preview */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-white overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title[language]}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-light tracking-wide mb-2">
                  {selectedImage.title[language]}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {selectedImage.description[language]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {selectedImage.category} • {selectedImage.year}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      onArtworkClick(selectedImage.id);
                    }}
                    className="text-sm text-black underline hover:no-underline"
                  >
                    {t('Ver detalles', 'View details')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface GalleryItemProps {
  artwork: typeof artworks[0];
  index: number;
  onImageClick: (artwork: typeof artworks[0]) => void;
}

function GalleryItem({ artwork, index, onImageClick }: GalleryItemProps) {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative aspect-square overflow-hidden bg-gray-200 cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={() => onImageClick(artwork)}
    >
      <img
        src={artwork.image}
        alt={artwork.title[language]}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Title on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xs truncate">{artwork.title[language]}</p>
      </div>
    </div>
  );
}
