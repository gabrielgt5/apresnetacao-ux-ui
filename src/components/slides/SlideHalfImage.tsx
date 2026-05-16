import { motion } from "framer-motion";
import { itemVariant } from "@/lib/animations";

export function SlideHalfImage({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-[#f8f9ff] overflow-hidden">
      {/* Imagem Recortada (Inteira, sem cortes, ocupando o máximo de espaço possível) */}
      <motion.div 
        variants={itemVariant}
        className="w-full h-full p-12 flex items-center justify-center relative z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={slide.imageUrl} 
          alt={slide.title || "Ilustração"} 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Texto Sobreposto (Posicionado na área direita/superior onde há espaço) */}
      <div className="absolute inset-0 p-12 md:p-24 flex flex-col justify-start items-end z-20 pointer-events-none">
        <div className="w-[45%] mt-12 md:mt-24">
          <motion.h2 
            variants={itemVariant} 
            className="text-5xl md:text-7xl font-black mb-8 text-[#101070] text-center leading-tight uppercase tracking-tight drop-shadow-md"
          >
            {slide.title}
          </motion.h2>
          
          {slide.content && (
            <motion.p 
              variants={itemVariant} 
              className="text-3xl md:text-4xl text-[#101070]/80 leading-relaxed text-center font-bold uppercase drop-shadow-sm"
            >
              {slide.content}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
