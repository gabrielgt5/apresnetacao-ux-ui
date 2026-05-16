import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

export function SlideTV({ slide }: { slide: any }) {
  const Icon = slide.icon || User;
  
  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative">
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-[100px] opacity-30"></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="relative max-w-5xl w-full aspect-[16/10] bg-gray-300 border-2 border-gray-400 rounded-[2rem] shadow-[20px_20px_0px_#101070] flex p-4 sm:p-6 gap-4 sm:gap-6 z-10"
      >
        <div className="absolute -top-16 left-24 w-1.5 h-20 bg-gray-400 -rotate-12 origin-bottom rounded-t-full"></div>
        <div className="absolute -top-20 left-28 w-1.5 h-24 bg-gray-400 rotate-12 origin-bottom rounded-t-full"></div>

        {/* Tela da TV — overflow-visible para o texto curvado não ser cortado */}
        <div className="flex-1 bg-black rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 relative overflow-visible flex items-center justify-center border-[8px] sm:border-[16px] border-gray-800 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 pointer-events-none rounded-[1.5rem] sm:rounded-[2rem]"></div>
          
          <div className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)" }}></div>
          
          {/* Container do ícone + texto curvado — ocupa tudo sem clip */}
          <div className="relative z-30 w-full h-full flex items-center justify-center">
            {/* Ícone centrado */}
            <Icon weight="duotone" className="text-white/80 w-[45%] h-[45%] drop-shadow-2xl" />

            {/* SVG com texto curvado posicionado como overlay — sem overflow:hidden acima */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none"
              overflow="visible"
            >
              <defs>
                <path id="arcPath" d="M 40,260 A 160,160 0 0,1 360,260" />
              </defs>
              <text
                fontWeight="900"
                fontSize="28"
                fill="white"
                style={{ fontFamily: "Nunito, sans-serif", letterSpacing: "4px" }}
              >
                <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
                  {slide.title}
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="w-24 sm:w-48 flex flex-col gap-6 bg-gray-200 rounded-xl p-4 border border-gray-300 shadow-inner">
          <div className="flex flex-col gap-6 items-center mt-6">
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gray-300 shadow-[inset_0_-4px_6px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.3)] border border-gray-400 relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-700 absolute top-2"></div>
            </div>
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gray-300 shadow-[inset_0_-4px_6px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.3)] border border-gray-400 relative flex items-center justify-center rotate-45">
              <div className="w-3 h-3 rounded-full bg-gray-700 absolute top-2 right-2"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="w-8 h-3 sm:w-10 sm:h-5 bg-gray-300 rounded shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.2)] border border-gray-400"></div>
            ))}
          </div>

          <div className="flex-1 mt-8 grid grid-cols-5 gap-2 px-3 overflow-hidden opacity-60">
            {Array.from({length: 40}).map((_, i) => (
              <div key={i} className="w-full h-1 sm:h-2 bg-gray-800 rounded-full mix-blend-multiply"></div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
