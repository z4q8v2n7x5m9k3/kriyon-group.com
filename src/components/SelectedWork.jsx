import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectCard({ project, index, onSelect }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: '-10% 0px -10% 0px', once: false });
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article
      ref={cardRef}
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer border-b border-[#090909]/15 pb-16 sm:pb-24 pt-8 transition-colors"
    >
      {/* Top Meta Header: Index, Name, Industry */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 sm:mb-8 gap-3">
        <div className="flex items-baseline space-x-4 sm:space-x-6">
          <span className="font-mono text-sm sm:text-base font-semibold text-[#5A5A58]">
            {project.id}
          </span>
          <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-[#090909] group-hover:text-black transition-colors">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#5A5A58] uppercase tracking-[0.16em]">
          <span>{project.industry}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
      </div>

      {/* Cinematic Media Container (Occupies most of viewport width/height) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#E7E7E2] rounded-none border border-[#090909]/10">
        {project.heroMedia.type === 'video' ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={project.heroMedia.src}
              poster={project.heroMedia.poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Play/Pause subtle control */}
            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-[#090909]/70 text-[#F5F5F2] backdrop-blur-md flex items-center justify-center hover:bg-[#090909] transition-all opacity-0 group-hover:opacity-100"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
            </button>
          </div>
        ) : (
          <img
            src={project.heroMedia.src}
            alt={project.heroMedia.alt || project.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            loading="lazy"
          />
        )}

        {/* View Project Floating Badge on Hover */}
        <div className="absolute inset-0 bg-[#090909]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="px-6 py-3 rounded-full bg-[#F5F5F2] text-[#090909] font-semibold text-xs uppercase tracking-[0.2em] shadow-xl flex items-center space-x-2 transform scale-95 group-hover:scale-100 transition-transform duration-300">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Tags & Action Button */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.capabilities.map((cap) => (
            <span
              key={cap}
              className="text-[11px] uppercase tracking-[0.16em] px-3 py-1 bg-transparent border border-[#090909]/20 text-[#090909] font-medium"
            >
              {cap}
            </span>
          ))}
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#5A5A58] ml-2 hidden md:inline">
            Delivered via {project.venture}
          </span>
        </div>

        <button
          onClick={() => onSelect(project)}
          className="group/btn inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-[#090909] border-b border-[#090909] pb-0.5 hover:text-black transition-colors"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}

export default function SelectedWork({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'BRAND', 'TECHNOLOGY', 'PRODUCTION', 'DIGITAL EXPERIENCE'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ALL') return true;
    return p.capabilities.some((c) => c.toUpperCase().includes(filter));
  });

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#F5F5F2] film-grain border-b border-[#090909]/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 sm:pb-16 border-b border-[#090909]/15 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] mb-3 block">
              Selected Work 2024–2026
            </span>
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter text-[#090909] leading-none">
              Work
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg text-[#090909] font-normal leading-relaxed">
              Selected work across brand, technology, production and digital experience.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#5A5A58] mt-2">
              The project comes first. Specialized capability delivered seamlessly.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="py-6 border-b border-[#090909]/10 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#5A5A58] mr-3 font-semibold">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all focus:outline-none ${
                filter === cat
                  ? 'bg-[#090909] text-[#F5F5F2] font-semibold'
                  : 'bg-transparent text-[#090909] border border-[#090909]/15 hover:border-[#090909]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Projects List */}
        <div className="space-y-4">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
