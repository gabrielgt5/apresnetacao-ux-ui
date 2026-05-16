import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariant } from "@/lib/animations";

export function SlideInteractive({ slide }: { slide: any }) {
  const Icon = slide.icon;
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setRevealed(false); }, [slide.id]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 md:p-24 text-center relative">
      <motion.div variants={itemVariant} className="mb-6 p-6 glass-panel rounded-full text-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
        <Icon size={64} />
      </motion.div>
      <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-bold mb-8 text-[#101070]">{slide.title}</motion.h2>
      <motion.div variants={itemVariant} className="glass-panel p-10 rounded-3xl border border-cyan-600/30 max-w-4xl w-full mb-12 shadow-2xl bg-gradient-to-b from-cyan-950/40 to-transparent">
        <p className="text-3xl text-slate-700 font-medium leading-relaxed">{slide.prompt}</p>
      </motion.div>
      <motion.button variants={itemVariant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setRevealed(!revealed)} className="px-8 py-4 bg-[#101070] text-white rounded-full font-bold text-xl flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow">
        {revealed ? "Esconder Resposta" : "Revelar o Conceito"}
      </motion.button>
      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0, height: 0, y: 20 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -20 }} className="mt-12 p-8 glass-panel rounded-2xl max-w-4xl text-left border-l-4 border-l-green-400">
            <p className="text-2xl text-slate-600 leading-relaxed italic">"{slide.explanation}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
