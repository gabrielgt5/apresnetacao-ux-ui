import { motion } from "framer-motion";
import { itemVariant } from "@/lib/animations";

export function SlideSplit({ slide }: { slide: any }) {
  const Icon = slide.icon;
  
  // Animação de dúvida (tremidinha / coçar a cabeça)
  const doubtAnimation = {
    rotate: [0, -5, 5, -5, 5, 0],
    y: [0, -10, 0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      repeatDelay: 1
    }
  };

  // Animação flutuante padrão
  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const getAnimation = () => {
    if (slide.imageAnimation === "doubt") return doubtAnimation;
    if (slide.imageAnimation === "none") return {};
    return floatAnimation;
  };

  // Helper para renderizar texto com negrito (markdown básico)
  const renderText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-black text-[#101070] underline decoration-blue-500/30 underline-offset-4">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center p-12 md:p-24 gap-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="flex-1 flex flex-col justify-center">
        {Icon && (
          <motion.div variants={itemVariant} className="mb-6 inline-flex p-4 glass-panel rounded-2xl w-max">
            <Icon size={48} className="text-blue-600" />
          </motion.div>
        )}
        <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-black mb-8 text-[#101070] leading-tight uppercase tracking-tight">{slide.title}</motion.h2>
        <motion.p variants={itemVariant} className="text-3xl md:text-4xl text-[#101070]/80 leading-relaxed font-bold">{renderText(slide.content)}</motion.p>
      </div>
      <motion.div variants={itemVariant} className="flex-1 w-full h-full flex items-center justify-center">
        {slide.videoUrl ? (
          <motion.div animate={getAnimation()} className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 bg-black/5">
             <video 
              src={slide.videoUrl} 
              controls
              loop 
              playsInline
              className="w-full h-full object-contain"
            />
          </motion.div>
        ) : slide.imageUrl ? (
          <motion.div animate={getAnimation()} className="relative w-full h-[60vh] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={slide.imageUrl} 
              alt="Ilustração" 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-10 glass-panel rounded-3xl border-l-4 border-l-blue-500 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#101070] leading-snug text-center z-10">"{renderText(slide.highlight)}"</h3>
          </div>
        )}
      </motion.div>
    </div>
  );
}
