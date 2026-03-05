import { useLanguage } from '@/context/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Palette, PenTool, Monitor, BookOpen } from 'lucide-react';

const tools = [
  { name: 'Procreate', icon: Palette },
  { name: 'Photoshop', icon: PenTool },
  { name: 'Illustrator', icon: Monitor },
  { name: 'Blender', icon: BookOpen },
  { name: 'Cinema 4D', icon: Monitor },
];

const experiences = [
  {
    year: '2022 - Presente',
    yearEn: '2022 - Present',
    title: { es: 'Ilustrador Digital Freelance', en: 'Freelance Digital Illustrator' },
    description: {
      es: 'Trabajando con clientes internacionales en proyectos de ilustración, concept art y diseño visual.',
      en: 'Working with international clients on illustration, concept art, and visual design projects.'
    }
  },
  {
    year: '2020 - 2022',
    yearEn: '2020 - 2022',
    title: { es: 'Artista Visual en Estudio Creativo', en: 'Visual Artist at Creative Studio' },
    description: {
      es: 'Colaboración en proyectos de branding, ilustración editorial y animación.',
      en: 'Collaboration on branding, editorial illustration, and animation projects.'
    }
  },
  {
    year: '2018 - 2020',
    yearEn: '2018 - 2020',
    title: { es: 'Diseñador Gráfico Junior', en: 'Junior Graphic Designer' },
    description: {
      es: 'Inicio de carrera en diseño digital y descubrimiento de la pasión por la ilustración.',
      en: 'Start of career in digital design and discovery of passion for illustration.'
    }
  }
];

export default function About() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-wider mb-4">
            {t('SOBRE MÍ', 'ABOUT ME')}
          </h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                {t(
                  'Soy Círculo Invierno, ilustrador digital con pasión por crear mundos que no existen pero que sienten reales. Mi trabajo explora el territorio donde lo onírico se encuentra con lo cotidiano, donde la naturaleza dialoga con la tecnología.',
                  'I am Círculo Invierno, a digital illustrator with a passion for creating worlds that don\'t exist but feel real. My work explores the territory where the dreamlike meets the everyday, where nature dialogues with technology.'
                )}
              </p>
              <p>
                {t(
                  'Cada pieza es una invitación a detenerse, a mirar más allá de lo evidente, a encontrar belleza en lo inesperado. Me inspiran los mitos antiguos, el futuro especulativo, y esa luz particular del atardecer de invierno.',
                  'Each piece is an invitation to pause, to look beyond the obvious, to find beauty in the unexpected. I am inspired by ancient myths, speculative futures, and that particular light of the winter sunset.'
                )}
              </p>
              <p>
                {t(
                  'Mi nombre artístico nace de esa contradicción poética: el círculo, figura perfecta y eterna, y el invierno, estación de quietud y transformación. Juntos representan mi búsqueda constante de equilibrio entre lo eterno y lo efímero.',
                  'My artistic name comes from that poetic contradiction: the circle, perfect and eternal figure, and winter, season of stillness and transformation. Together they represent my constant search for balance between the eternal and the ephemeral.'
                )}
              </p>
            </div>

            {/* Tools */}
            <div
              ref={toolsRef}
              className={`pt-8 border-t border-gray-200 transition-all duration-1000 delay-300 ${
                toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-6">
                {t('Herramientas', 'Tools')}
              </h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
                  >
                    <tool.icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-6">
              {t('Experiencia', 'Experience')}
            </h3>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  experience: typeof experiences[0];
  index: number;
}

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`relative pl-8 border-l border-gray-200 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Dot */}
      <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black rounded-full" />
      
      <span className="text-sm text-gray-500 mb-2 block">
        {t(experience.year, experience.yearEn)}
      </span>
      <h4 className="text-lg font-medium mb-2">
        {t(experience.title.es, experience.title.en)}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {t(experience.description.es, experience.description.en)}
      </p>
    </div>
  );
}
