import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";

export function SlideCards({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-blue-900/20 to-transparent -z-10"></div>
      <motion.div variants={itemVariant} className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#101070]">{slide.title}</h2>
        <p className="text-2xl text-slate-500 max-w-4xl">{slide.subtitle}</p>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className={`flex-1 grid grid-cols-1 ${slide.cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-12 w-full max-w-none`}>
        {slide.cards.map((card: any, idx: number) => {
          const CardIcon = card.icon;
          return (
            <motion.div key={idx} variants={itemVariant} whileHover={{ y: -10, scale: 1.02 }} className="glass-panel p-10 rounded-3xl flex flex-col h-full border border-[#101070]/15 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#101070]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
              <div className="p-4 bg-[#101070]/5 rounded-2xl w-max mb-8 text-blue-600 group-hover:text-blue-700 transition-colors">
                <CardIcon size={40} />
              </div>
              <h3 className="text-3xl font-bold text-[#101070] mb-4">{card.title}</h3>
              <p className="text-xl text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
