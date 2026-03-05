import type { Artwork, Service } from '@/types';

export const artworks: Artwork[] = [
  // Featured artworks (6)
  {
    id: 'featured-1',
    title: {
      es: 'Eflorescencia',
      en: 'Efflorescence'
    },
    description: {
      es: 'Una exploración de la conexión entre la naturaleza y el ser humano. Esta pieza representa el crecimiento interior y la belleza que emerge de la vulnerabilidad.',
      en: 'An exploration of the connection between nature and the human being. This piece represents inner growth and the beauty that emerges from vulnerability.'
    },
    image: '/artworks/featured-1.jpg',
    category: 'surrealismo',
    year: '2024',
    tools: ['Procreate', 'Photoshop'],
    featured: true
  },
  {
    id: 'featured-2',
    title: {
      es: 'Neón Solitario',
      en: 'Neon Solitary'
    },
    description: {
      es: 'Una visión del futuro urbano donde la soledad se mezcla con la tecnología. La ciudad nunca duerme, pero sus habitantes a veces se pierden en ella.',
      en: 'A vision of the urban future where loneliness blends with technology. The city never sleeps, but its inhabitants sometimes get lost in it.'
    },
    image: '/artworks/featured-2.jpg',
    category: 'cyberpunk',
    year: '2024',
    tools: ['Procreate', 'Cinema 4D'],
    featured: true
  },
  {
    id: 'featured-3',
    title: {
      es: 'Quimera Geométrica',
      en: 'Geometric Chimera'
    },
    description: {
      es: 'La fusión de formas orgánicas y geométricas para crear criaturas mitológicas contemporáneas. Una reinterpretación de los bestiarios antiguos.',
      en: 'The fusion of organic and geometric forms to create contemporary mythological creatures. A reinterpretation of ancient bestiaries.'
    },
    image: '/artworks/featured-3.jpg',
    category: 'mitologia',
    year: '2023',
    tools: ['Illustrator', 'Procreate'],
    featured: true
  },
  {
    id: 'featured-4',
    title: {
      es: 'El Guardián de Estrellas',
      en: 'The Star Keeper'
    },
    description: {
      es: 'Un retrato poético de la sabiduría ancestral. Los ojos que han visto el paso del tiempo y la barba que guarda los secretos del universo.',
      en: 'A poetic portrait of ancestral wisdom. Eyes that have seen the passage of time and a beard that keeps the secrets of the universe.'
    },
    image: '/artworks/featured-4.jpg',
    category: 'fantasia',
    year: '2023',
    tools: ['Photoshop', 'Procreate'],
    featured: true
  },
  {
    id: 'featured-5',
    title: {
      es: 'Simbiosis',
      en: 'Symbiosis'
    },
    description: {
      es: '¿Qué sucede cuando la naturaleza y la tecnología dejan de oponerse? Una naturaleza muerta del futuro donde lo orgánico y lo mecánico coexisten.',
      en: 'What happens when nature and technology stop opposing each other? A still life from the future where the organic and mechanical coexist.'
    },
    image: '/artworks/featured-5.jpg',
    category: 'futurista',
    year: '2024',
    tools: ['Blender', 'Photoshop'],
    featured: true
  },
  {
    id: 'featured-6',
    title: {
      es: 'Vuelo de Ensueño',
      en: 'Dream Flight'
    },
    description: {
      es: 'Una invitación a soñar despierto. Donde los límites de la realidad se disuelven y la imaginación puede navegar por cielos infinitos.',
      en: 'An invitation to daydream. Where the limits of reality dissolve and imagination can navigate infinite skies.'
    },
    image: '/artworks/featured-6.jpg',
    category: 'onirico',
    year: '2023',
    tools: ['Procreate'],
    featured: true
  },
  // Archive artworks
  {
    id: 'archive-1',
    title: { es: 'Bosque Encantado', en: 'Enchanted Forest' },
    description: { es: 'Magia en cada rincón del bosque.', en: 'Magic in every corner of the forest.' },
    image: '/artworks/archive-1.jpg',
    category: 'fantasia',
    year: '2023',
    tools: ['Procreate']
  },
  {
    id: 'archive-2',
    title: { es: 'Fragmentos', en: 'Fragments' },
    description: { es: 'Retrato abstracto geométrico.', en: 'Geometric abstract portrait.' },
    image: '/artworks/archive-2.jpg',
    category: 'abstracto',
    year: '2023',
    tools: ['Illustrator']
  },
  {
    id: 'archive-3',
    title: { es: 'Dragón Oriental', en: 'Oriental Dragon' },
    description: { es: 'Dragón estilizado en tradición asiática.', en: 'Stylized dragon in Asian tradition.' },
    image: '/artworks/archive-3.jpg',
    category: 'mitologia',
    year: '2022',
    tools: ['Procreate']
  },
  {
    id: 'archive-4',
    title: { es: 'Profundidades', en: 'Depths' },
    description: { es: 'Vida bioluminiscente en el océano.', en: 'Bioluminescent life in the ocean.' },
    image: '/artworks/archive-4.jpg',
    category: 'naturaleza',
    year: '2023',
    tools: ['Photoshop']
  },
  {
    id: 'archive-5',
    title: { es: 'Ciudad Flotante', en: 'Floating City' },
    description: { es: 'Arquitectura de ensueño en las nubes.', en: 'Dream architecture in the clouds.' },
    image: '/artworks/archive-5.jpg',
    category: 'fantasia',
    year: '2022',
    tools: ['Blender']
  },
  {
    id: 'archive-6',
    title: { es: 'Aullido Cósmico', en: 'Cosmic Howl' },
    description: { es: 'El lobo y el universo.', en: 'The wolf and the universe.' },
    image: '/artworks/archive-6.jpg',
    category: 'naturaleza',
    year: '2023',
    tools: ['Illustrator']
  },
  {
    id: 'archive-7',
    title: { es: 'Jardín Zen', en: 'Zen Garden' },
    description: { es: 'Serenidad en forma de arte.', en: 'Serenity in art form.' },
    image: '/artworks/archive-7.jpg',
    category: 'naturaleza',
    year: '2022',
    tools: ['Procreate']
  },
  {
    id: 'archive-8',
    title: { es: 'Vagabundo Espacial', en: 'Space Wanderer' },
    description: { es: 'Explorando el cosmos infinito.', en: 'Exploring the infinite cosmos.' },
    image: '/artworks/archive-8.jpg',
    category: 'futurista',
    year: '2024',
    tools: ['Photoshop', 'Blender']
  },
  {
    id: 'archive-9',
    title: { es: 'Cisne Negro', en: 'Black Swan' },
    description: { es: 'Elegancia en la oscuridad.', en: 'Elegance in darkness.' },
    image: '/artworks/archive-9.jpg',
    category: 'naturaleza',
    year: '2023',
    tools: ['Procreate']
  },
  {
    id: 'archive-10',
    title: { es: 'Día de Muertos', en: 'Day of the Dead' },
    description: { es: 'Celebración de la vida y la muerte.', en: 'Celebration of life and death.' },
    image: '/artworks/archive-10.jpg',
    category: 'cultural',
    year: '2022',
    tools: ['Illustrator']
  },
  {
    id: 'archive-11',
    title: { es: 'Kitsune', en: 'Kitsune' },
    description: { es: 'El zorro de nueve colas.', en: 'The nine-tailed fox.' },
    image: '/artworks/archive-11.jpg',
    category: 'mitologia',
    year: '2023',
    tools: ['Procreate']
  },
  {
    id: 'archive-12',
    title: { es: 'La Puerta', en: 'The Door' },
    description: { es: '¿A dónde conducirá?', en: 'Where will it lead?' },
    image: '/artworks/archive-12.jpg',
    category: 'fantasia',
    year: '2024',
    tools: ['Photoshop']
  }
];

export const services: Service[] = [
  {
    id: 'illustration',
    title: {
      es: 'Ilustración Personalizada',
      en: 'Custom Illustration'
    },
    description: {
      es: 'Creación de ilustraciones únicas para proyectos editoriales, publicitarios o personales. Cada pieza es diseñada desde cero según tus necesidades.',
      en: 'Creation of unique illustrations for editorial, advertising, or personal projects. Each piece is designed from scratch according to your needs.'
    },
    icon: 'Palette'
  },
  {
    id: 'concept',
    title: {
      es: 'Concept Art',
      en: 'Concept Art'
    },
    description: {
      es: 'Desarrollo visual de personajes, escenarios y elementos para videojuegos, películas o animaciones. Transformo ideas en imágenes.',
      en: 'Visual development of characters, environments, and elements for video games, films, or animations. I transform ideas into images.'
    },
    icon: 'Lightbulb'
  },
  {
    id: 'portrait',
    title: {
      es: 'Retratos Digitales',
      en: 'Digital Portraits'
    },
    description: {
      es: 'Retratos personalizados con estilo artístico único. Desde retratos realistas hasta interpretaciones más estilizadas y surrealistas.',
      en: 'Custom portraits with a unique artistic style. From realistic portraits to more stylized and surreal interpretations.'
    },
    icon: 'User'
  },
  {
    id: 'cover',
    title: {
      es: 'Portadas y Packaging',
      en: 'Covers & Packaging'
    },
    description: {
      es: 'Diseño de portadas para libros, álbumes musicales y packaging de productos. Arte que cuenta historias antes de abrir.',
      en: 'Cover design for books, music albums, and product packaging. Art that tells stories before opening.'
    },
    icon: 'BookOpen'
  }
];

export const categories = [
  { id: 'all', label: { es: 'Todo', en: 'All' } },
  { id: 'surrealismo', label: { es: 'Surrealismo', en: 'Surrealism' } },
  { id: 'cyberpunk', label: { es: 'Cyberpunk', en: 'Cyberpunk' } },
  { id: 'fantasia', label: { es: 'Fantasía', en: 'Fantasy' } },
  { id: 'mitologia', label: { es: 'Mitología', en: 'Mythology' } },
  { id: 'futurista', label: { es: 'Futurista', en: 'Futuristic' } },
  { id: 'onirico', label: { es: 'Onírico', en: 'Dreamlike' } },
  { id: 'naturaleza', label: { es: 'Naturaleza', en: 'Nature' } },
  { id: 'abstracto', label: { es: 'Abstracto', en: 'Abstract' } },
  { id: 'cultural', label: { es: 'Cultural', en: 'Cultural' } }
];
