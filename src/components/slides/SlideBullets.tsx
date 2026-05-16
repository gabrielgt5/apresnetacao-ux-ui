import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";

export function SlideBullets({ slide }: { slide: any }) {
  const Icon = slide.icon;
  // Helper para renderizar texto com negrito (markdown básico)
  const renderText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-black text-[#101070] underline decoration-purple-500/30 underline-offset-4">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row p-12 md:p-24 gap-16">
      <div className="flex-1 flex flex-col justify-center">
        <motion.div variants={itemVariant} className="mb-6 inline-flex p-4 bg-purple-500/10 rounded-2xl w-max text-purple-600">
          <Icon size={64} />
        </motion.div>
        <motion.h2 variants={itemVariant} className="text-5xl md:text-7xl font-bold mb-6 text-[#101070] tracking-tight">{slide.title}</motion.h2>
        <motion.p variants={itemVariant} className="text-2xl text-slate-600 mb-10 max-w-2xl font-light leading-relaxed">{renderText(slide.subtitle)}</motion.p>
      </div>
      <div className="flex-[1.5] flex flex-col justify-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-6">
          {slide.bullets.map((bullet: string, idx: number) => (
            <motion.div key={idx} variants={itemVariant} className="glass-panel p-6 rounded-2xl flex items-start gap-6 group hover:bg-[#101070]/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-600 group-hover:bg-purple-500 group-hover:text-[#101070] transition-colors">
                <span className="font-bold text-lg">{idx + 1}</span>
              </div>
              <p className="text-2xl text-slate-600 leading-snug pt-2">{renderText(bullet)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
