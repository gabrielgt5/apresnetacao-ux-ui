import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";

export function SlideUXvsUI({ slide }: { slide: any }) {
  const uxItems = [
    { label: "Sentimento", desc: "a sensação geral da experiência com o uso do produto" },
    { label: "Prototipação", desc: "criação de wireframes e protótipos testáveis que formam a base do fluxo de usuários de um site ou serviço" },
    { label: "Visão Geral", desc: "tem uma visão geral de um produto, garantindo que o fluxo do usuário seja totalmente funcional consistente" }
  ];

  const uiItems = [
    { label: "Aparência", desc: "como as interfaces do produto se parecem e funcionam" },
    { label: "Design Visual", desc: "finaliza produtos e interfaces para a utilização do usuário" },
    { label: "Detalhes", desc: "verifica páginas, botões e interações individuais, garantindo que sejam polidos e funcionais" }
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-20 bg-white">
      <motion.h2 
        variants={itemVariant} 
        className="text-4xl md:text-5xl font-black mb-12 text-center text-[#101070] leading-tight"
      >
        Principais diferenças entre<br />UX e UI Design
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex-1 max-w-6xl mx-auto w-full grid grid-cols-2 gap-4"
      >
        {/* Headers */}
        <motion.div 
          variants={itemVariant}
          className="bg-[#38bdf8] text-white py-4 rounded-xl text-center text-2xl font-bold shadow-md"
        >
          UX Design
        </motion.div>
        <motion.div 
          variants={itemVariant}
          className="bg-[#6d28d9] text-white py-4 rounded-xl text-center text-2xl font-bold shadow-md"
        >
          UI Design
        </motion.div>

        {/* Comparison Rows */}
        {uxItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <motion.div 
              variants={itemVariant}
              className="bg-slate-100/80 p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-blue-50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-[#101070] mb-2">{item.label}</h3>
              <p className="text-slate-600 text-lg leading-snug">{item.desc}</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariant}
              className="bg-slate-200/50 p-8 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-purple-50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-[#101070] mb-2">{uiItems[idx].label}</h3>
              <p className="text-slate-600 text-lg leading-snug">{uiItems[idx].desc}</p>
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

import React from "react";
