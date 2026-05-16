"use client";

import { motion } from "framer-motion";

export function SlideFullVideo({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
      <motion.video 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src={slide.videoUrl} 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted={false}
        controls
      />
      
      {/* Overlay opcional para título se o usuário mudar de ideia, mas por enquanto limpo */}
      {slide.title && (
        <div className="absolute top-0 left-0 w-full p-12 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
          <h2 className="text-white text-4xl font-bold opacity-50">{slide.title}</h2>
        </div>
      )}
    </div>
  );
}
