import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StartProjectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand & Website Design',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', projectType: 'Brand & Website Design', message: '' });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        data-lenis-prevent
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 z-10 overflow-hidden text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#88EA15] flex items-center justify-center shrink-0">
                <span className="text-[13px] font-bold text-black leading-none">K</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A0A0A] leading-tight">
                  Book a call with me
                </h3>
                <p className="text-xs text-[#71717A]">
                  Usually responds within 2 hours
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-neutral-900 text-white mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-7 h-7 text-[#22C55E]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A0A0A]">
                Call Request Sent!
              </h4>
              <p className="text-sm text-[#71717A] max-w-xs mx-auto">
                Thanks, {formData.name || 'there'}! I’ll check my calendar and email you directly to confirm our discussion.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0A0A0A] text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
              <div>
                <label className="text-xs font-semibold text-[#0A0A0A] block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0A0A0A] block mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0A0A0A] block mb-1">
                  Project Focus
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors bg-white"
                >
                  <option>Brand & Website Design</option>
                  <option>Product & Mobile App UI/UX</option>
                  <option>SaaS Scale & Landing Page Redesign</option>
                  <option>Full Creative Partnership</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0A0A0A] block mb-1">
                  Tell me about your timeline & goals
                </label>
                <textarea
                  rows={3}
                  placeholder="What is your biggest current growth bottleneck?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#0A0A0A] text-white text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Booking...' : 'Confirm Call Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
