"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretRight as ChevronRight, CaretLeft as ChevronLeft, List, X, IconContext } from "@phosphor-icons/react";

import { SLIDES } from "@/data/slides";
import { pageVariants, pageTransition } from "@/lib/animations";

// Components
import { SlideCover } from "@/components/slides/SlideCover";
import { SlideThoughtBubble } from "@/components/slides/SlideThoughtBubble";
import { SlideStatement } from "@/components/slides/SlideStatement";
import { SlideSplit } from "@/components/slides/SlideSplit";
import { SlideCards } from "@/components/slides/SlideCards";
import { SlideBullets } from "@/components/slides/SlideBullets";
import { SlideInteractive } from "@/components/slides/SlideInteractive";
import { SlideGrid } from "@/components/slides/SlideGrid";
import { SlideTimeline } from "@/components/slides/SlideTimeline";
import { SlideImagePlaceholder } from "@/components/slides/SlideImagePlaceholder";
import { SlideWhiteboard } from "@/components/slides/SlideWhiteboard";
import { SlideImage } from "@/components/slides/SlideImage";
import { SlideHalfImage } from "@/components/slides/SlideHalfImage";
import { SlideFullImage } from "@/components/slides/SlideFullImage";
import { SlideTV } from "@/components/slides/SlideTV";
import { SlideFlashback } from "@/components/slides/SlideFlashback";
import { SlideTimer } from "@/components/slides/SlideTimer";
import { SlideVideoEmbed } from "@/components/slides/SlideVideoEmbed";
import { SlideDiagram } from "@/components/slides/SlideDiagram";
import { SlideFullVideo } from "@/components/slides/SlideFullVideo";
import { SlidePrincipleSimulator } from "@/components/slides/SlidePrincipleSimulator";
import { SlideUIComponents } from "@/components/slides/SlideUIComponents";
import { SlideUXvsUI } from "@/components/slides/SlideUXvsUI";
import { SlideQRCode } from "@/components/slides/SlideQRCode";

// --- MAIN PRESENTATION COMPONENT ---
export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  // Table of contents sections
  const TOC_SECTIONS = [
    { label: "Introdução",          emoji: "🏙️",  slideIndex: 0 },
    { label: "O Usuário",           emoji: "🧍",  slideIndex: 6 },
    { label: "Modelo Conceitual",   emoji: "🧠",  slideIndex: 10 },
    { label: "O que é Design?",     emoji: "✏️",  slideIndex: 15 },
    { label: "UX Design",           emoji: "🗺️",  slideIndex: 22 },
    { label: "Princípios de UX",    emoji: "✅",  slideIndex: 25 },
    { label: "Os 4 Processos",      emoji: "🔄",  slideIndex: 31 },
    { label: "Dinâmica",            emoji: "⚡",  slideIndex: 32 },
    { label: "UI Design",           emoji: "🎨",  slideIndex: 34 },
    { label: "UI na Prática",       emoji: "🖥️",  slideIndex: 37 },
    { label: "UX vs UI",            emoji: "⚖️",  slideIndex: 38 },
    { label: "Gestalt",             emoji: "👁️",  slideIndex: 39 },
    { label: "Heurísticas",         emoji: "📐",  slideIndex: 47 },
    { label: "Quiz Blooket",        emoji: "🎮",  slideIndex: 58 },
  ];

  // Sync state with URL hash on mount and listen for back/forward navigation
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '');
      const slideIndex = parseInt(hash, 10);
      if (!isNaN(slideIndex) && slideIndex > 0 && slideIndex <= SLIDES.length) {
        setCurrentSlide(slideIndex - 1);
      }
    };
    
    // Initial sync
    syncHash();

    // Listen for manual hash changes (e.g. back/forward buttons)
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  // Update hash when slide changes
  useEffect(() => {
    const newHash = (currentSlide + 1).toString();
    if (window.location.hash.replace('#', '') !== newHash) {
      window.location.hash = newHash;
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    // Permite que o slide atual intercepte e previna a navegação (ex: para mostrar uma animação/step interno)
    const event = new CustomEvent("requestNextSlide", { cancelable: true });
    window.dispatchEvent(event);
    
    if (event.defaultPrevented) return;

    setCurrentSlide(c => Math.min(c + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(c => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if user is drawing (mouse might be pressed, but just in case)
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = SLIDES[currentSlide];

  const renderSlide = (slideData?: any) => {
    const s = slideData ?? slide;
    switch (s.type) {
      case "cover": return <SlideCover slide={s} />;
      case "thought_bubble": return <SlideThoughtBubble slide={s} />;
      case "statement": return <SlideStatement slide={s} />;
      case "split": return <SlideSplit slide={s} />;
      case "cards": return <SlideCards slide={s} />;
      case "bullets": return <SlideBullets slide={s} />;
      case "interactive": return <SlideInteractive slide={s} />;
      case "grid": return <SlideGrid slide={s} />;
      case "timeline": return <SlideTimeline slide={s} />;
      case "image_placeholder": return <SlideImagePlaceholder slide={s} />;
      case "whiteboard": return <SlideWhiteboard slide={s} />;
      case "image": return <SlideImage slide={s} />;
      case "half_image": return <SlideHalfImage slide={s} />;
      case "full_image": return <SlideFullImage slide={s} />;
      case "tv": return <SlideTV slide={s} />;
      case "flashback": return <SlideFlashback slide={s} />;
      case "timer": return <SlideTimer slide={s} />;
      case "video_embed": return <SlideVideoEmbed slide={s} />;
      case "principle_simulator": return <SlidePrincipleSimulator slide={s} />;
      case "diagram": return <SlideDiagram slide={s} />;
      case "full_video": return <SlideFullVideo slide={s} />;
      case "ui_components": return <SlideUIComponents slide={s} />;
      case "ux_vs_ui": return <SlideUXvsUI slide={s} />;
      case "qr_code": return <SlideQRCode slide={s} />;
      default: return <div className="text-foreground text-4xl">Slide Type Not Found: {s.type}</div>;
    }
  };

  // Miniatura CSS-scaled de um slide
  const SlideThumbnail = ({ slideData }: { slideData: any }) => (
    <div
      className="relative overflow-hidden rounded-md border border-foreground/10 flex-shrink-0 bg-background"
      style={{ width: 96, height: 54 }}
    >
      <div
        style={{
          width: 1280,
          height: 720,
          transform: "scale(0.075)",
          transformOrigin: "top left",
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {renderSlide(slideData)}
      </div>
    </div>
  );

  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <IconContext.Provider value={{ weight: "duotone" }}>
      <main className="w-screen h-screen overflow-hidden bg-background flex flex-col relative select-none font-sans">
        
        {/* Barra de Progresso no Topo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-foreground/10 z-[60]">
          <motion.div 
            className="h-full bg-foreground shadow-[0_0_10px_var(--foreground)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <div className="flex-1 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="absolute inset-0 w-full h-full"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 z-50 flex items-center justify-between pointer-events-none">
          <div className="glass-panel px-4 py-2 rounded-full text-foreground/60 font-mono text-sm tracking-widest pointer-events-auto">
            {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </div>

          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 glass-panel rounded-full text-foreground hover:bg-foreground/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              aria-label="Slide Anterior"
            >
              <ChevronLeft size={24} weight="bold" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === SLIDES.length - 1}
              className="p-3 glass-panel rounded-full text-foreground hover:bg-foreground/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              aria-label="Próximo Slide"
            >
              <ChevronRight size={24} weight="bold" />
            </button>
          </div>
        </div>
        {/* ── TOC Button — Top Left ───────────────────────────── */}
        <button
          onClick={() => setTocOpen(o => !o)}
          className="absolute top-4 left-4 z-[70] p-3 glass-panel rounded-full text-foreground hover:bg-foreground/10 transition-all shadow-lg"
          aria-label="Abrir Sumário"
        >
          {tocOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>

        {/* ── TOC Panel ───────────────────────────────────────── */}
        <AnimatePresence>
          {tocOpen && (
            <motion.div
              key="toc"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="absolute top-0 left-0 h-full w-80 z-[65] flex flex-col glass-panel border-r border-foreground/10 shadow-2xl"
            >
              {/* Header */}
              <div className="px-6 pt-14 pb-4 border-b border-foreground/10">
                <p className="text-xs font-black uppercase tracking-widest text-foreground/40">Sumário</p>
                <h3 className="text-xl font-black text-foreground mt-1">UX/UI Design</h3>
              </div>

              {/* Sections */}
              <div className="flex-1 overflow-y-auto py-3">
                {TOC_SECTIONS.map((section) => {
                  const isActive = currentSlide === section.slideIndex;
                  const sectionSlide = SLIDES[section.slideIndex];
                  return (
                    <button
                      key={section.label}
                      onClick={() => { setCurrentSlide(section.slideIndex); setTocOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all hover:bg-foreground/5 ${
                        isActive ? "bg-foreground/10 border-l-4 border-foreground" : "border-l-4 border-transparent"
                      }`}
                    >
                      {/* Miniatura do slide */}
                      <div className={`flex-shrink-0 rounded-md overflow-hidden ring-2 transition-all ${
                        isActive ? "ring-foreground" : "ring-transparent"
                      }`}>
                        <SlideThumbnail slideData={sectionSlide} />
                      </div>
                      {/* Label */}
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm font-semibold block truncate ${
                          isActive ? "text-foreground" : "text-foreground/60"
                        }`}>
                          {section.emoji} {section.label}
                        </span>
                        <span className="text-xs text-foreground/30">slide {section.slideIndex + 1}</span>
                      </div>
                      {isActive && <span className="flex-shrink-0 w-2 h-2 rounded-full bg-foreground" />}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-foreground/10">
                <p className="text-xs text-foreground/30 font-mono">
                  Slide {currentSlide + 1} / {SLIDES.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </IconContext.Provider>
  );
}
