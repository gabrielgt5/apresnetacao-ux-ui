import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";
import { CaretRight } from "@phosphor-icons/react";

export function SlideTimeline({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-20 bg-slate-50/30">
      <div className="text-center mb-16">
        <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-black mb-4 text-[#101070] tracking-tight">
          {slide.title}
        </motion.h2>
        {slide.subtitle && (
          <motion.p variants={itemVariant} className="text-2xl text-slate-500 font-light italic">
            {slide.subtitle}
          </motion.p>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        {/* Connecting Line - Animated Path */}
        <div className="absolute top-[40%] left-20 right-20 h-1 bg-slate-200 -translate-y-1/2 hidden md:block overflow-hidden rounded-full">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-400"
          />
        </div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="show" 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full z-10"
        >
          {slide.steps.map((step: any, idx: number) => {
            const Icon = step.icon;
            return (
              <motion.div key={idx} variants={itemVariant} className="flex flex-col items-center group">
                {/* Icon & Number Circle */}
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:-translate-y-2">
                    {Icon ? <Icon size={40} weight="duotone" /> : <span className="text-3xl font-black">{idx + 1}</span>}
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#101070] text-white flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                    {idx + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl text-center w-full min-h-[220px] flex flex-col justify-start border border-slate-100 shadow-xl group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-500">
                  <h3 className="text-2xl font-black text-[#101070] mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {/* Arrow between mobile steps (vertical) or decorative element */}
                {idx < slide.steps.length - 1 && (
                  <div className="md:hidden my-4 text-slate-300">
                    <CaretRight size={32} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
