"use client";

import { motion } from "framer-motion";
import { itemVariant } from "@/lib/animations";

export function SlideVideoEmbed({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12">
      {slide.title && (
        <motion.h2 
          variants={itemVariant} 
          className="text-4xl md:text-5xl font-black text-[#101070] uppercase text-center tracking-wide leading-tight mb-8"
        >
          {slide.title}
        </motion.h2>
      )}

      <motion.div 
        variants={itemVariant} 
        className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-black"
      >
        <iframe 
          className="absolute inset-0 w-full h-full"
          src={slide.embedUrl} 
          title={slide.title || "YouTube video player"} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </motion.div>
      
      {slide.subtitle && (
        <motion.p 
          variants={itemVariant} 
          className="mt-6 text-xl text-slate-500 text-center max-w-4xl"
        >
          {slide.subtitle}
        </motion.p>
      )}
    </div>
  );
}
