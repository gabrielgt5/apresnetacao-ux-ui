import { useRef } from "react";
import { motion } from "framer-motion";
import { PaintBrush, Trash, PenNib } from "@phosphor-icons/react";
import SignatureCanvas from "react-signature-canvas";
import { itemVariant } from "@/lib/animations";

export function SlideWhiteboard({ slide }: { slide: any }) {
  const sigCanvas = useRef<any>(null);

  const clearCanvas = () => {
    sigCanvas.current?.clear();
  };

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-24">
      <motion.div variants={itemVariant} className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-bold mb-3 text-[#101070] flex items-center gap-4">
            {slide.title} <PaintBrush className="text-blue-600" />
          </h2>
          <p className="text-2xl text-slate-500">{slide.prompt}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={clearCanvas} className="flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/40 transition-colors">
            <Trash size={20} /> Limpar
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariant} className="flex-1 w-full h-full bg-[#101070] rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden border-4 border-blue-500/30 relative cursor-crosshair">
        <SignatureCanvas 
          ref={sigCanvas}
          penColor="black"
          canvasProps={{ className: 'w-full h-full absolute inset-0' }}
        />
        <div className="absolute bottom-6 right-6 pointer-events-none opacity-50 text-gray-500 flex items-center gap-2">
          <PenNib size={20} /> Desenhe aqui...
        </div>
      </motion.div>
      
      {slide.explanation && (
        <motion.p variants={itemVariant} className="mt-6 text-xl text-center text-blue-700 font-light italic">
          {slide.explanation}
        </motion.p>
      )}
    </div>
  );
}
