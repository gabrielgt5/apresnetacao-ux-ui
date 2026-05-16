import { motion } from "framer-motion";

export function SlideThoughtBubble({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative bg-[#f8f9ff]">
      {/* Title Box */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="border-2 border-[#101070]/10 rounded-3xl px-8 py-6 mb-12 shadow-sm max-w-4xl w-full z-10 bg-white">
        <h2 className="text-3xl md:text-5xl font-black text-[#101070] uppercase text-center tracking-wide leading-tight whitespace-pre-line">
          {slide.title}
        </h2>
      </motion.div>

      {/* Illustration */}
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="relative w-full max-w-lg h-[60vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/cidade-digital.png" 
          alt="Pessoa imaginando uma cidade digital" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
