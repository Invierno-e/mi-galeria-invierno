import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  Mail, 
  Github, 
  Instagram, 
  Twitter,
  Plus,
  ArrowUpRight,
  X
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  description: string;
  color: string;
}

// --- Context for Modal ---

interface ModalContextType {
  openModal: (project: Project) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};

// --- Global Noise Overlay ---
const NoiseOverlay = () => <div className="fixed inset-0 noise z-[9999] pointer-events-none" />;

// --- Components ---

const Modal = ({ project, onClose }: { project: Project | null, onClose: () => void }) => (
  <AnimatePresence>
    {project && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className={cn("relative w-full max-w-5xl brutal-border overflow-hidden grid grid-cols-1 md:grid-cols-2", project.color)}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black text-white brutal-shadow hover:bg-brutal-pink transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="aspect-square md:aspect-auto border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="font-mono text-sm font-bold uppercase mb-4 opacity-60">{project.category}</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-8">
              {project.title}
            </h2>
            <p className="font-mono text-lg font-bold uppercase leading-relaxed mb-12">
              {project.description}
            </p>
            <div className="flex gap-4">
              <button className="brutal-border bg-black text-white px-8 py-4 font-display text-xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
                Ver Proyecto
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Experimentos', path: '/experimentos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b-4 border-black bg-white">
      <div className="flex items-stretch h-16 md:h-20">
        <Link to="/" className="flex items-center px-6 border-r-4 border-black bg-brutal-green hover:bg-black hover:text-brutal-green transition-colors group">
          <Wind className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
          <span className="ml-3 font-display text-2xl md:text-3xl uppercase tracking-tighter">
            Círculo Invierno
          </span>
        </Link>

        <div className="hidden md:flex flex-1 items-stretch">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "flex items-center px-8 border-r-4 border-black font-display text-lg uppercase tracking-tighter transition-all",
                location.pathname === link.path ? "bg-black text-white" : "hover:bg-brutal-pink hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-end px-6 md:hidden">
          <Link to="/contacto" className="p-2 border-4 border-black bg-brutal-pink">
            <Mail />
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Marquee = ({ text, color = "bg-brutal-green" }: { text: string, color?: string }) => (
  <div className={cn("border-y-4 border-black py-4 overflow-hidden", color)}>
    <div className="marquee flex gap-8">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="font-display text-4xl md:text-6xl uppercase tracking-tighter flex items-center gap-8">
          {text} <Plus className="w-12 h-12" />
        </span>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="border-t-4 border-black bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-black bg-brutal-pink">
        <h2 className="font-display text-6xl uppercase tracking-tighter leading-none mb-8">
          Círculo <br /> Invierno
        </h2>
        <p className="font-mono text-sm font-bold uppercase">
          Ilustraciones y experimentos. <br />
          Santiago, Chile. 2026.
        </p>
      </div>
      
      <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-black">
        <h3 className="font-mono text-xs font-bold uppercase mb-6 opacity-50">Navegación</h3>
        <ul className="space-y-4 font-display text-2xl uppercase tracking-tighter">
          <li><Link to="/" className="hover:underline">Inicio</Link></li>
          <li><Link to="/galeria" className="hover:underline">Galería</Link></li>
          <li><Link to="/experimentos" className="hover:underline">Experimentos</Link></li>
          <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
        </ul>
      </div>

      <div className="p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-brutal-yellow">
        <h3 className="font-mono text-xs font-bold uppercase mb-6 opacity-50">Social</h3>
        <div className="grid grid-cols-2 gap-4 font-display text-xl uppercase tracking-tighter">
          <a href="#" className="flex items-center gap-2 hover:underline"><Instagram size={20} /> IG</a>
          <a href="#" className="flex items-center gap-2 hover:underline"><Twitter size={20} /> TW</a>
          <a href="#" className="flex items-center gap-2 hover:underline"><Github size={20} /> GH</a>
        </div>
      </div>

      <div className="p-10 flex flex-col justify-between bg-brutal-celeste">
        <p className="font-mono text-xs font-bold uppercase leading-relaxed">
          Este sitio es un experimento visual. <br />
          No se aceptan devoluciones.
        </p>
        <div className="mt-8 pt-8 border-t-2 border-black/10">
          <p className="font-mono text-[10px] opacity-50">© 2026 CIRCULO INVIERNO</p>
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  const { openModal } = useModal();

  const featured = [
    { id: 101, title: "Sombras Digitales", category: "Digital", img: "https://picsum.photos/seed/brutal1/800/800", description: "Exploración de la luz y la oscuridad en entornos virtuales.", color: "bg-brutal-green" },
    { id: 102, title: "Caos Generativo", category: "Destacados", img: "https://picsum.photos/seed/brutal2/800/800", description: "Algoritmos que crean belleza a partir del desorden.", color: "bg-black text-white" },
    { id: 103, title: "Colaboraciones", category: "Varios", img: "https://picsum.photos/seed/brutal3/800/800", description: "La persistencia de la imagen en la memoria digital.", color: "bg-brutal-yellow" },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black">
        <div className="lg:col-span-8 p-10 md:p-20 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-brutal-white">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-display text-[15vw] md:text-[12vw] leading-[0.8] uppercase tracking-tighter mb-12"
          >
            Ilustraciones <br />
            <span className="text-brutal-pink">&</span> Experimentos
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="font-mono text-lg md:text-xl font-bold uppercase max-w-md">
              Explorando los límites de la estética digital a través del caos controlado.
            </p>
            <Link 
              to="/galeria" 
              className="brutal-border bg-brutal-green px-10 py-5 font-display text-2xl uppercase tracking-tighter hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Explorar
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 bg-brutal-yellow flex items-center justify-center p-10 relative overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full aspect-square border-8 border-black rounded-full flex items-center justify-center"
          >
            <div className="w-1/2 h-1/2 bg-black rounded-full" />
          </motion.div>
          <div className="absolute top-10 right-10 font-display text-4xl uppercase tracking-tighter">
            01/26
          </div>
        </div>
      </section>

      <Marquee text="Círculo Invierno" color="bg-brutal-pink" />

      {/* Featured Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-4 border-black">
        {featured.map((item, i) => (
          <div 
            key={item.id} 
            onClick={() => openModal(item)}
            className={cn(
              "p-10 border-b-4 md:border-b-0 border-black flex flex-col justify-between group cursor-pointer",
              item.color,
              i !== 2 && "md:border-r-4"
            )}
          >
            <div>
              <span className="font-mono text-xs font-bold uppercase mb-4 block">Proyecto {i + 1}</span>
              <h3 className="font-display text-5xl uppercase tracking-tighter mb-8 leading-none">
                {item.title}
              </h3>
            </div>
            <div className="aspect-square brutal-border overflow-hidden mb-8 bg-white">
              <img 
                src={item.img} 
                alt="Featured" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between font-display text-2xl uppercase tracking-tighter group-hover:underline">
              Ver más <ArrowUpRight size={32} />
            </div>
          </div>
        ))}
      </section>

      <section className="p-10 md:p-20 bg-brutal-celeste border-b-4 border-black text-center">
        <h2 className="font-display text-7xl md:text-9xl uppercase tracking-tighter leading-none mb-12">
          ¿Listo para <br /> experimentar?
        </h2>
        <Link 
          to="/contacto" 
          className="inline-block brutal-border bg-white px-16 py-8 font-display text-4xl uppercase tracking-tighter hover:bg-black hover:text-white transition-all"
        >
          Contáctanos
        </Link>
      </section>
    </div>
  );
};

const GalleryPage = () => {
  const { openModal } = useModal();
  const categories = ['Todo', 'Destacados', 'Digital', 'Colaboraciones', 'Varios'];
  const [activeTab, setActiveTab] = useState('Todo');

  const items: Project[] = [
    { id: 1, title: 'Fragmento 01', category: 'Digital', color: 'bg-brutal-green', img: 'https://picsum.photos/seed/gal1/800/800', description: 'Una deconstrucción de la forma humana en píxeles.' },
    { id: 2, title: 'Ruido Blanco', category: 'Destacados', color: 'bg-brutal-pink', img: 'https://picsum.photos/seed/gal2/800/800', description: 'Visualización de datos estáticos capturados de señales de radio.' },
    { id: 3, title: 'Tinta Negra', category: 'Colaboraciones', color: 'bg-brutal-white', img: 'https://picsum.photos/seed/gal3/800/800', description: 'Trazos manuales digitalizados para preservar la imperfección.' },
    { id: 4, title: 'Algoritmo A', category: 'Varios', color: 'bg-brutal-yellow', img: 'https://picsum.photos/seed/gal4/800/800', description: 'Patrones matemáticos aplicados a la generación de texturas.' },
    { id: 5, title: 'Sombra 22', category: 'Digital', color: 'bg-brutal-celeste', img: 'https://picsum.photos/seed/gal5/800/800', description: 'Estudio de iluminación volumétrica en entornos abstractos.' },
    { id: 6, title: 'Textura 09', category: 'Colaboraciones', color: 'bg-brutal-pink', img: 'https://picsum.photos/seed/gal6/800/800', description: 'Captura macro de superficies orgánicas procesadas digitalmente.' },
  ];

  const filteredItems = activeTab === 'Todo' ? items : items.filter(i => i.category === activeTab);

  return (
    <div className="pt-20">
      <div className="p-10 md:p-20 border-b-4 border-black bg-brutal-green">
        <h1 className="font-display text-[15vw] leading-none uppercase tracking-tighter">Galería</h1>
        <div className="mt-12 flex flex-wrap gap-4">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-8 py-4 brutal-shadow font-display text-xl uppercase tracking-tighter transition-all",
                activeTab === cat ? "bg-black text-white" : "bg-white hover:bg-brutal-pink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => openModal(item)}
            className={cn(
              "p-10 border-b-4 border-black flex flex-col group cursor-pointer",
              idx % 3 !== 2 && "lg:border-r-4",
              idx % 2 !== 1 && "md:border-r-4 lg:border-r-4",
              item.color
            )}
          >
            <div className="aspect-square brutal-border overflow-hidden mb-8 bg-white">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase opacity-50">{item.category}</span>
                <h3 className="font-display text-4xl uppercase tracking-tighter">{item.title}</h3>
              </div>
              <ArrowUpRight size={40} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ExperimentsPage = () => {
  const fanzines = [
    { id: 1, title: "Fanzine #01", img: "https://picsum.photos/seed/fz1/600/800", link: "#" },
    { id: 2, title: "Fanzine #02", img: "https://picsum.photos/seed/fz2/600/800", link: "#" },
    { id: 3, title: "Fanzine #03", img: "https://picsum.photos/seed/fz3/600/800", link: "#" },
    { id: 4, title: "Fanzine #04", img: "https://picsum.photos/seed/fz4/600/800", link: "#" },
    { id: 5, title: "Fanzine #05", img: "https://picsum.photos/seed/fz5/600/800", link: "#" },
    { id: 6, title: "Fanzine #06", img: "https://picsum.photos/seed/fz6/600/800", link: "#" },
  ];

  const analogExperiments = [
    { id: 1, title: "Collage Analógico", description: "Recortes y texturas físicas.", img: "https://picsum.photos/seed/an1/800/800", color: "bg-brutal-pink" },
    { id: 2, title: "Grabado Experimental", description: "Técnicas mixtas sobre papel.", img: "https://picsum.photos/seed/an2/800/800", color: "bg-brutal-celeste" },
  ];

  return (
    <div className="pt-20">
      {/* Fanzines Section */}
      <div className="p-10 md:p-20 border-b-4 border-black bg-brutal-yellow">
        <h1 className="font-display text-[12vw] leading-none uppercase tracking-tighter">Fanzines</h1>
        <p className="font-mono text-xl font-bold uppercase mt-8 max-w-2xl">
          Publicaciones independientes y autoeditadas. Una colección de 6 fanzines realizados hasta la fecha.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-4 border-black">
        {fanzines.map((fz, idx) => (
          <a 
            key={fz.id} 
            href={fz.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-8 border-b-4 border-black group hover:bg-black hover:text-white transition-all",
              idx % 3 !== 2 && "lg:border-r-4",
              idx % 2 !== 1 && "md:border-r-4 lg:border-r-4"
            )}
          >
            <div className="aspect-[3/4] brutal-border overflow-hidden mb-6 bg-white">
              <img 
                src={fz.img} 
                alt={fz.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-3xl uppercase tracking-tighter">{fz.title}</h3>
              <ArrowUpRight size={32} />
            </div>
          </a>
        ))}
      </div>

      {/* Analog Experiments Section */}
      <div className="p-10 md:p-20 border-b-4 border-black bg-brutal-green">
        <h1 className="font-display text-[12vw] leading-none uppercase tracking-tighter">Experimentos</h1>
        <p className="font-mono text-xl font-bold uppercase mt-8 max-w-2xl">
          Trabajos análogos y exploraciones físicas de la forma y el color.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {analogExperiments.map((exp, idx) => (
          <div 
            key={exp.id}
            className={cn(
              "p-10 md:p-20 border-b-4 lg:border-b-0 border-black flex flex-col justify-between",
              idx === 0 && "lg:border-r-4",
              exp.color
            )}
          >
            <div>
              <span className="font-mono text-xl font-bold uppercase mb-8 block">Exp #00{exp.id}</span>
              <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-12">
                {exp.title}
              </h2>
              <p className="font-mono text-lg font-bold uppercase max-w-md mb-12">
                {exp.description}
              </p>
            </div>
            <div className="aspect-video brutal-border overflow-hidden bg-white">
              <img 
                src={exp.img} 
                alt={exp.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>

      <Marquee text="Círculo Invierno" color="bg-black text-white" />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="p-10 md:p-20 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center bg-brutal-white">
          <h1 className="font-display text-[10vw] leading-none uppercase tracking-tighter mb-12">
            Hablemos <br /> de Caos
          </h1>
          <div className="space-y-8 font-mono text-xl font-bold uppercase">
            <p>hola@circuloinvierno.com</p>
            <p>+56 9 1234 5678</p>
            <p>Santiago, CL</p>
          </div>
        </div>

        <div className="p-10 md:p-20 bg-brutal-yellow flex flex-col justify-center">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs font-bold uppercase">Nombre</label>
              <input type="text" className="w-full bg-white border-4 border-black p-4 font-mono outline-none focus:bg-brutal-pink transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs font-bold uppercase">Email</label>
              <input type="email" className="w-full bg-white border-4 border-black p-4 font-mono outline-none focus:bg-brutal-pink transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs font-bold uppercase">Mensaje</label>
              <textarea rows={4} className="w-full bg-white border-4 border-black p-4 font-mono outline-none focus:bg-brutal-pink transition-colors resize-none" />
            </div>
            <button className="w-full brutal-border bg-black text-white py-6 font-display text-3xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Router>
        <div className="min-h-screen relative">
          <NoiseOverlay />
          <Navbar />
          <main className="bg-white">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/galeria" element={<GalleryPage />} />
              <Route path="/experimentos" element={<ExperimentsPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Modal project={selectedProject} onClose={closeModal} />
        </div>
      </Router>
    </ModalContext.Provider>
  );
}
