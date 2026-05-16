import { motion } from "framer-motion";
import { itemVariant } from "@/lib/animations";

export function SlideImage({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 relative z-10">
      {slide.title && (
        <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl font-black text-[#101070] uppercase text-center tracking-wide leading-tight mb-8">
          {slide.title}
        </motion.h2>
      )}

      <motion.div variants={itemVariant} className="relative w-full flex-1 max-h-[75vh] flex items-center justify-center bg-white/50 rounded-3xl border-2 border-[#101070]/10 shadow-sm p-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={slide.imageUrl} 
          alt={slide.title || "Imagem do slide"} 
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </motion.div>

      {slide.caption && (
        <motion.p variants={itemVariant} className="mt-4 text-xs md:text-sm text-slate-400 text-center max-w-5xl italic leading-tight">
          {slide.caption}
        </motion.p>
      )}
    </div>
  );
}
