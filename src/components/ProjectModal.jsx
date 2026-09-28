import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onStartProject }) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080808]/80 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-over Drawer / Modal Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl h-full bg-[#F5F5F2] text-[#090909] shadow-2xl flex flex-col z-10 overflow-y-auto"
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-20 bg-[#F5F5F2]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-[#090909]/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-sm font-semibold text-[#5A5A58]">{project.id}</span>
              <span className="font-display font-bold text-lg sm:text-xl uppercase tracking-tight text-[#090909]">
                {project.name}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-[#090909]/20 hover:border-[#090909] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5 text-[#090909]" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="px-6 sm:px-10 py-8 space-y-12">
            {/* Project Hero Media */}
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#E7E7E2] border border-[#090909]/10">
              {project.heroMedia.type === 'video' ? (
                <video
                  src={project.heroMedia.src}
                  poster={project.heroMedia.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.heroMedia.src}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Title & Metadata Breakdown */}
            <div className="border-b border-[#090909]/10 pb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {project.capabilities.map((c) => (
                  <span
                    key={c}
                    className="text-xs uppercase tracking-[0.18em] px-3 py-1 border border-[#090909]/20 text-[#090909] font-medium"
                  >
                    {c}
                  </span>
                ))}
                <span className="text-xs uppercase tracking-[0.18em] px-3 py-1 bg-[#090909] text-[#F5F5F2] font-medium">
                  {project.venture}
                </span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#090909]">
                {project.name}
              </h2>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#090909] mt-3">
                {project.industry}
              </p>
              <p className="text-base sm:text-lg text-[#090909] mt-4 leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>

            {/* The Challenge & The Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#090909]/10 pb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] block mb-2">
                  01 / The Challenge
                </span>
                <p className="text-sm sm:text-base text-[#090909] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] block mb-2">
                  02 / The Solution
                </span>
                <p className="text-sm sm:text-base text-[#090909] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="border-b border-[#090909]/10 pb-8">
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] block mb-4">
                Scope & Key Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-[#090909]">
                    <CheckCircle2 className="w-4 h-4 text-[#090909] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curated Gallery / Production Imagery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#5A5A58] block">
                  Production Imagery & Documentation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((media, idx) => (
                    <figure key={idx} className="space-y-2">
                      <div className="aspect-[4/3] bg-[#E7E7E2] overflow-hidden border border-[#090909]/10">
                        <img
                          src={media.src}
                          alt={media.caption}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="text-xs text-[#5A5A58] uppercase tracking-[0.14em]">
                        {media.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Venture Accountability & Call to Action */}
            <div className="bg-[#080808] text-[#F5F5F2] p-8 sm:p-10 space-y-6">
              <span className="text-xs uppercase tracking-[0.24em] text-[#9E9E9C] block">
                Venture Attribution
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-2xl uppercase tracking-tight text-[#F5F5F2]">
                    {project.venture}
                  </h4>
                  <p className="text-xs text-[#9E9E9C] uppercase tracking-[0.16em] mt-1">
                    Operated under Kriyon Group Private Limited
                  </p>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onStartProject();
                  }}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold bg-[#F5F5F2] text-[#080808] px-6 py-3.5 rounded-full hover:bg-white transition-all shadow-lg active:scale-95 shrink-0"
                >
                  <span>Build With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
