"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function SlideFlashback({ slide }: { slide: any }) {
  const [showGif, setShowGif] = useState(false);

  // Intercepta a tentativa de passar o slide (seja via teclado, click ou botão do page.tsx)
  useEffect(() => {
    const handleRequestNext = (e: Event) => {
      if (!showGif) {
        e.preventDefault(); // Impede que o page.tsx avance o slide
        setShowGif(true);
      }
    };
    
    window.addEventListener("requestNextSlide", handleRequestNext);
    return () => window.removeEventListener("requestNextSlide", handleRequestNext);
  }, [showGif]);

  const title: string = slide.title || "Antes de falarmos de UX/UI Design....";
  const subtitle: string = slide.subtitle || "Vamos entender alguns conceitos...";
  const gifUrl: string = slide.gifUrl || "/mikonjackson.gif";

  return (
    <div 
      className="w-full h-full flex items-center justify-center relative overflow-hidden bg-background cursor-pointer"
      onClick={() => setShowGif(true)}
    >
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-12 px-12 max-w-6xl w-full h-full">

        {/* Texto principal */}
        <div className="text-center flex flex-col gap-6">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 90 }}
            className="text-foreground font-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontFamily: "Nunito, sans-serif",
              textShadow: "0 0 40px rgba(0,0,0,0.05)"
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 90 }}
            className="text-foreground/70 font-light tracking-wide"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* GIF centralizado revelado sob demanda */}
        <div className="h-[450px] flex items-center justify-center">
          <AnimatePresence>
            {showGif && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="relative"
              >
                <div className="relative p-2 sm:p-4 bg-white/60 backdrop-blur-md border border-foreground/10 rounded-2xl shadow-xl flex items-center justify-center">
                  <img
                    src={gifUrl}
                    alt="Flashback"
                    className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-cover rounded-xl"
                    style={{ imageRendering: "auto" }}
                    onError={(e) => {
                      // Fallback elegante se o GIF não existir
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] flex flex-col items-center justify-center bg-foreground/5 border border-dashed border-foreground/20 text-foreground/40 text-sm font-mono gap-2 rounded-xl text-center p-4";
                        fallback.innerHTML = `<span style="font-size:3rem">🕺</span><span>Adicione o GIF em<br/><strong style="color:var(--foreground)">/public/mikonjackson.gif</strong></span>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
