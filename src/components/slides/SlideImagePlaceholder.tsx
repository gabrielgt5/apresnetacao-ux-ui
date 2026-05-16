import { motion } from "framer-motion";
import { ImageIcon } from "@phosphor-icons/react";
import { itemVariant } from "@/lib/animations";

export function SlideImagePlaceholder({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24">
      <motion.div variants={itemVariant} className="mb-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#101070]">{slide.title}</h2>
        <p className="text-2xl text-slate-500">{slide.subtitle}</p>
      </motion.div>
      
      <motion.div 
        variants={itemVariant}
        className="flex-1 w-full h-full rounded-3xl border-2 border-dashed border-[#101070]/20 bg-[#101070]/5 flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-500/50 transition-colors"
      >
        <ImageIcon size={80} className="text-[#101070]/20 mb-6 group-hover:text-blue-600/50 transition-colors group-hover:scale-110 duration-300" />
        <h3 className="text-3xl font-bold text-[#101070]/50 mb-2">Espaço para Imagem</h3>
        <p className="text-xl text-[#101070]/30 text-center max-w-md">Substitua este componente no código pela tag <code>&lt;img /&gt;</code> ou <code>&lt;Image /&gt;</code> correspondente.</p>
      </motion.div>
    </div>
  );
}
