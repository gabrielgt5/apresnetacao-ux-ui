import { motion } from "framer-motion";
import { itemVariant } from "@/lib/animations";

export function SlideFullImage({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 bg-[#f8f9ff]">
      <motion.div variants={itemVariant} className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={slide.imageUrl} 
          alt={slide.title || "Slide Image"} 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
