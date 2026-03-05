import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Instagram, Twitter, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/circuloinvierno',
    handle: '@circuloinvierno'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/circuloinvierno',
    handle: '@circuloinvierno'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:hola@circuloinvierno.art',
    handle: 'hola@circuloinvierno.art'
  }
];

export default function Contact() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-wider mb-4">
            {t('CONTACTO', 'CONTACT')}
          </h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`max-w-2xl transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-800 mb-12">
            {t(
              '¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.',
              'Have a project in mind? I would love to hear about it.'
            )}
          </p>

          <p className="text-gray-600 mb-12">
            {t(
              'Estoy disponible para colaboraciones, comisiones y proyectos interesantes. No dudes en escribirme.',
              'I am available for collaborations, commissions, and interesting projects. Feel free to reach out.'
            )}
          </p>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-widest uppercase text-gray-500">
              {t('Conecta conmigo', 'Connect with me')}
            </h3>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 px-6 py-4 bg-gray-50 hover:bg-black transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  <span className="text-sm group-hover:text-white transition-colors">
                    {link.handle}
                  </span>
                  {link.name !== 'Email' && (
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white/70 transition-colors" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 border border-green-300 bg-green-50">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-800">
              {t('Disponible para proyectos', 'Available for projects')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
