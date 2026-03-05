import { useLanguage } from '@/context/LanguageContext';
import { services } from '@/data/artworks';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Palette, Lightbulb, User, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Lightbulb,
  User,
  BookOpen
};

export default function Services() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-wider mb-4">
            {t('SERVICIOS', 'SERVICES')}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t(
              'Colaboro en proyectos que buscan arte con significado. Cada trabajo es una oportunidad de crear algo único.',
              'I collaborate on projects seeking art with meaning. Each job is an opportunity to create something unique.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = iconMap[service.icon] || Palette;

  return (
    <div
      ref={ref}
      className={`group p-8 bg-white border border-gray-200 hover:border-black transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-300 group-hover:border-black group-hover:bg-black transition-all duration-300">
          <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-light tracking-wide mb-4 group-hover:translate-x-2 transition-transform duration-300">
        {t(service.title.es, service.title.en)}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {t(service.description.es, service.description.en)}
      </p>
    </div>
  );
}
