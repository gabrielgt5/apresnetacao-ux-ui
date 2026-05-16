"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, ArrowClockwise, Play, Pause } from "@phosphor-icons/react";
import { itemVariant } from "@/lib/animations";

export function SlideTimer({ slide }: { slide: any }) {
  const initialSeconds = slide.seconds || 30;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sincroniza o tempo quando o slide mudar
  useEffect(() => {
    setTimeLeft(initialSeconds);
    setIsActive(false);
  }, [initialSeconds]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev: number) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialSeconds);
  };

  // Calcula a porcentagem para o círculo de progresso
  const progress = (timeLeft / initialSeconds) * 100;

  // Formata o tempo como MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 md:p-24 bg-background text-foreground">
      
      {/* Título e Prompt */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-black mb-6 text-foreground tracking-tight"
        >
          {slide.title || "Vamos fazer um teste com o simulador de vocês?"}
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-foreground/60 font-medium"
        >
          {slide.prompt}
        </motion.p>
      </div>

      {/* Timer Quadrado Arredondado */}
      <div className="relative flex items-center justify-center mb-12">
        <svg className="w-72 h-72 md:w-96 md:h-96">
          <rect
            x="5%"
            y="5%"
            width="90%"
            height="90%"
            rx="48"
            className="stroke-foreground/10 fill-none"
            strokeWidth="12"
          />
          <motion.rect
            x="5%"
            y="5%"
            width="90%"
            height="90%"
            rx="48"
            className="stroke-foreground fill-none"
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className={`text-7xl md:text-[130px] font-black tabular-nums tracking-tighter ${timeLeft <= 10 && timeLeft > 0 ? 'text-red-500 animate-pulse' : 'text-foreground'}`}
          >
            {formatTime(timeLeft)}
          </motion.span>
          <span className="text-xl font-bold tracking-widest text-foreground/40 uppercase mt-2">Minutos : Segundos</span>
        </div>
      </div>

      {/* Controles */}
      <div className="flex gap-6 items-center">
        <button 
          onClick={toggleTimer}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105 active:scale-95 ${isActive ? 'bg-red-500 text-white' : 'bg-foreground text-background'}`}
        >
          {isActive ? <><Pause weight="bold" /> Pausar</> : <><Play weight="bold" /> Iniciar</>}
        </button>
        
        <button 
          onClick={resetTimer}
          className="p-4 bg-foreground/10 text-foreground rounded-full hover:bg-foreground/20 transition-all active:rotate-180 duration-500"
          title="Resetar"
        >
          <ArrowClockwise size={32} weight="bold" />
        </button>
      </div>

      {/* Alerta de Tempo Esgotado */}
      <AnimatePresence>
        {timeLeft === 0 && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-12 bg-red-500 text-white px-8 py-4 rounded-2xl shadow-2xl font-black text-2xl tracking-tighter"
          >
            TEMPO ESGOTADO! 🚲
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
