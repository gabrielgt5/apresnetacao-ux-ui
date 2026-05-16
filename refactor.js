const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
const dataDir = path.join(__dirname, 'src', 'data');
const libDir = path.join(__dirname, 'src', 'lib');
const componentsDir = path.join(__dirname, 'src', 'components', 'slides');

// Ensure directories exist
[dataDir, libDir, componentsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const content = fs.readFileSync(pagePath, 'utf8');

// Extract SLIDES
const slidesRegex = /\/\/ --- SLIDE DATA ---\nconst SLIDES = \[([\s\S]*?)\];\n/m;
const slidesMatch = content.match(slidesRegex);
if (slidesMatch) {
  const slidesContent = `import { 
  Buildings as Building2, UserCircle as UserCircle2, Lightbulb, 
  PenNib as PenTool, Devices as MonitorSmartphone, Brain as BrainCircuit, Users, CornersOut as Maximize, 
  Eye, CursorClick as MousePointerClick, Lightning as Zap, MagnifyingGlass as Search, Layout as LayoutTemplate, CheckCircle, 
  Target, Image as ImageIcon, PaintBrush as Paintbrush, Eraser, Trash as Trash2, GlobeHemisphereWest
} from "@phosphor-icons/react";

export const SLIDES = [${slidesMatch[1]}];
`;
  fs.writeFileSync(path.join(dataDir, 'slides.ts'), slidesContent);
}

// Extract ANIMATIONS
const animRegex = /\/\/ --- ANIMATION VARIANTS ---\nconst pageVariants = ([\s\S]*?)const itemVariant = ([\s\S]*?);\n/m;
const animMatch = content.match(animRegex);
if (animMatch) {
  const animContent = `export const pageVariants = ${animMatch[1]}export const itemVariant = ${animMatch[2]};\n`;
  fs.writeFileSync(path.join(libDir, 'animations.ts'), animContent);
}

// Extract components
const componentNames = [
  'SlideCover', 'SlideStatement', 'SlideSplit', 'SlideCards', 'SlideBullets', 
  'SlideInteractive', 'SlideGrid', 'SlideTimeline', 'SlideImagePlaceholder', 
  'SlideWhiteboard', 'SlideThoughtBubble'
];

componentNames.forEach(comp => {
  const compRegex = new RegExp(`function ${comp}\\(\\{ slide \\}: \\{ slide: any \\}\\) \\{([\\s\\S]*?)\\n\\}\\n`, 'm');
  const match = content.match(compRegex);
  if (match) {
    let compContent = `import React, { useState, useEffect, useRef } from "react";\nimport { motion, AnimatePresence } from "framer-motion";\nimport { itemVariant, staggerContainer } from "@/lib/animations";\nimport { \n  GlobeHemisphereWest, BrainCircuit, Users, Eye, MousePointerClick, Zap, LayoutTemplate, \n  CheckCircle, Target, ImageIcon, Paintbrush, Trash2, PenTool, MonitorSmartphone \n} from "@phosphor-icons/react";\nimport SignatureCanvas from "react-signature-canvas";\n\nexport function ${comp}({ slide }: { slide: any }) {${match[1]}\n}\n`;
    fs.writeFileSync(path.join(componentsDir, `${comp}.tsx`), compContent);
  }
});

// Create new page.tsx
const newPageContent = `"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretRight as ChevronRight, CaretLeft as ChevronLeft, IconContext } from "@phosphor-icons/react";
import { SLIDES } from "@/data/slides";
import { pageVariants, pageTransition } from "@/lib/animations";
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

// --- MAIN PRESENTATION COMPONENT ---
export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    setCurrentSlide(c => Math.min(c + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(c => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  const renderSlide = () => {
    switch (slide.type) {
      case "cover": return <SlideCover slide={slide} />;
      case "thought_bubble": return <SlideThoughtBubble slide={slide} />;
      case "statement": return <SlideStatement slide={slide} />;
      case "split": return <SlideSplit slide={slide} />;
      case "cards": return <SlideCards slide={slide} />;
      case "bullets": return <SlideBullets slide={slide} />;
      case "interactive": return <SlideInteractive slide={slide} />;
      case "grid": return <SlideGrid slide={slide} />;
      case "timeline": return <SlideTimeline slide={slide} />;
      case "image_placeholder": return <SlideImagePlaceholder slide={slide} />;
      case "whiteboard": return <SlideWhiteboard slide={slide} />;
      default: return <div className="text-[#101070] text-4xl">Slide Type Not Found: {slide.type}</div>;
    }
  };

  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <IconContext.Provider value={{ weight: "duotone" }}>
      <main className="w-screen h-screen overflow-hidden bg-[#d8e2e2] flex flex-col relative select-none font-sans">
        
        {/* Barra de Progresso no Topo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#101070]/10 z-[60]">
          <motion.div 
            className="h-full bg-[#101070] shadow-[0_0_10px_#101070]"
            initial={{ width: 0 }}
            animate={{ width: \`\${progress}%\` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/40 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300/40 blur-[120px]"></div>
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
          <div className="glass-panel px-4 py-2 rounded-full text-[#101070]/60 font-mono text-sm tracking-widest pointer-events-auto">
            {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </div>

          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 glass-panel rounded-full text-[#101070] hover:bg-[#101070]/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              aria-label="Slide Anterior"
            >
              <ChevronLeft size={24} weight="bold" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === SLIDES.length - 1}
              className="p-3 glass-panel rounded-full text-[#101070] hover:bg-[#101070]/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              aria-label="Próximo Slide"
            >
              <ChevronRight size={24} weight="bold" />
            </button>
          </div>
        </div>
      </main>
    </IconContext.Provider>
  );
}
`;

fs.writeFileSync(pagePath, newPageContent);
console.log('Refactoring complete!');
