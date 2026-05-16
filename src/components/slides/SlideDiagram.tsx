"use client";

import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";

export function SlideDiagram({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-background">
      {/* Root Node */}
      <motion.div 
        variants={itemVariant}
        initial="hidden"
        animate="show"
        className="bg-[#121262] text-white px-12 py-6 rounded-2xl shadow-2xl z-20 mb-4 min-w-[300px] md:min-w-[400px] text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          {slide.rootTitle || "Processo de pensamento"}
        </h2>
      </motion.div>

      {/* SVG Connections - Properly nested to align with grid */}
      <div className="relative w-full max-w-6xl h-32 z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            d="M 50 0 L 16.6 100 M 50 0 L 50 100 M 50 0 L 83.4 100"
            fill="none"
            stroke="#121262"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Child Nodes */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl px-4 z-20"
      >
        {slide.nodes.map((node: any, idx: number) => (
          <motion.div 
            key={idx}
            variants={itemVariant}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#f8faff] border-[3px] border-[#121262] rounded-[2.5rem] p-10 shadow-lg flex flex-col items-center justify-center text-center group transition-all duration-300 hover:shadow-2xl hover:bg-white min-h-[160px]"
          >
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#121262]">
              {node.title}
            </h3>
            {node.desc && (
              <p className="mt-6 text-xl text-[#121262]/70 font-semibold leading-relaxed">
                {node.desc}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
