import { motion, AnimatePresence } from "framer-motion";
import { itemVariant } from "@/lib/animations";
import { useState, useEffect } from "react";

export function SlideStatement({ slide }: { slide: any }) {
  // Helper para renderizar texto com negrito (markdown básico)
  const renderText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-black text-foreground underline decoration-blue-500/30 underline-offset-8">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const Icon = slide.icon;
  const bullets: string[] = slide.bullets || [];
  const subtitles: string[] = slide.subtitles || [];
  const totalSteps = bullets.length + subtitles.length;
  
  const [visibleSteps, setVisibleSteps] = useState(0);

  // Intercepta a navegação para revelar os passos um a um
  useEffect(() => {
    const handleRequestNext = (e: Event) => {
      if (totalSteps > 0 && visibleSteps < totalSteps) {
        e.preventDefault();
        setVisibleSteps(c => c + 1);
      }
    };
    
    window.addEventListener("requestNextSlide", handleRequestNext);
    return () => window.removeEventListener("requestNextSlide", handleRequestNext);
  }, [visibleSteps, totalSteps]);

  // Full-image layout: image dominates the slide, title/subtitle float below
  if (slide.imageUrl && slide.imageFull) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-background text-foreground ${slide.imageOnly ? 'p-0' : 'gap-2 p-4'}`}>
        <div className="flex-1 flex items-center justify-center w-full h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.imageUrl}
            alt={slide.title || "Imagem do slide"}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
        {!slide.imageOnly && (
          <div className="text-center pb-4">
            {slide.title && (
              slide.noAnimation ? (
                <h2 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                  {slide.title}
                </h2>
              ) : (
                <motion.h2 className="text-5xl md:text-7xl font-bold leading-tight" variants={itemVariant}>
                  {slide.title}
                </motion.h2>
              )
            )}
            {slide.subtitle && (
              slide.noAnimation ? (
                <p className="text-xl md:text-2xl text-foreground/60 font-medium mt-3">
                  {slide.subtitle}
                </p>
              ) : (
                <motion.p className="text-xl md:text-2xl text-foreground/60 font-medium mt-3" variants={itemVariant}>
                  {slide.subtitle}
                </motion.p>
              )
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`w-full h-full flex flex-col items-center justify-center p-12 bg-background text-foreground ${totalSteps > 0 ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (totalSteps > 0 && visibleSteps < totalSteps) {
          setVisibleSteps(c => c + 1);
        }
      }}
    >
      <div className="flex flex-col items-center text-center max-w-5xl w-full">
        <motion.div 
          className="mb-8"
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          {slide.imageUrl ? (
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={slide.imageUrl} 
                alt="Imagem do slide" 
                className="max-h-64 md:max-h-80 w-auto object-contain drop-shadow-xl"
              />
            </div>
          ) : (
            <Icon size={120} className="text-foreground" />
          )}
        </motion.div>
        
        {slide.title && (
          <motion.h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight w-full whitespace-pre-line" variants={itemVariant}>
            {slide.highlight ? (
              slide.title.split(new RegExp(`(${slide.highlight})`, 'g')).map((part: string, i: number) => 
                part === slide.highlight ? <span key={i} className="text-red-600">{part}</span> : part
              )
            ) : (
              slide.title
            )}
          </motion.h2>
        )}
        
        {/* Renderiza o subtítulo atual se houver múltiplos passos de subtítulo */}
        {subtitles.length > 0 ? (
          <AnimatePresence mode="wait">
            {visibleSteps > 0 && visibleSteps <= subtitles.length && (
              <motion.p 
                key={visibleSteps}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl md:text-4xl text-foreground/70 leading-relaxed font-medium mb-8"
              >
                {renderText(subtitles[visibleSteps - 1])}
              </motion.p>
            )}
          </AnimatePresence>
        ) : slide.subtitle && (
          <motion.p className="text-2xl md:text-4xl text-foreground/70 leading-relaxed font-medium mb-8" variants={itemVariant}>
            {renderText(slide.subtitle)}
          </motion.p>
        )}

        {/* Renderiza os bullets dinamicamente */}
        {bullets.length > 0 && (
          <div className="flex flex-col gap-4 mt-8 w-full max-w-3xl text-left">
            <AnimatePresence>
              {bullets.map((bullet, idx) => {
                const bulletIdx = subtitles.length + idx;
                return (
                  bulletIdx < visibleSteps && (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-foreground/10"
                    >
                      <span className="text-2xl md:text-3xl text-foreground/80 font-medium">
                        {renderText(bullet)}
                      </span>
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
