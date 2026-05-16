import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";

export function SlideGrid({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 relative">
      <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#101070]">{slide.title}</motion.h2>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 content-center">
        {slide.items.map((item: any, idx: number) => {
          const ItemIcon = item.icon;
          return (
            <motion.div key={idx} variants={itemVariant} whileHover={{ y: -15 }} className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center group border border-[#101070]/10 hover:border-emerald-500/50 transition-colors">
              <div className="p-5 bg-[#101070]/5 rounded-full mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 transition-colors group-hover:scale-110 duration-300">
                <ItemIcon size={48} className="text-slate-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#101070] mb-3">{item.title}</h3>
              <p className="text-slate-500 text-lg">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
