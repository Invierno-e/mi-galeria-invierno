import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black text-white">
      <div className="w-full px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-light tracking-wider">
            CÍRCULO INVIERNO
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center">
            <p>© {currentYear} Círculo Invierno</p>
            <p className="mt-1">
              {t('Todos los derechos reservados', 'All rights reserved')}
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span className="uppercase tracking-wider">
              {t('Volver arriba', 'Back to top')}
            </span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
