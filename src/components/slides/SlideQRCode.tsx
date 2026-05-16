"use client";
import { motion } from "framer-motion";
import { staggerContainer, itemVariant } from "@/lib/animations";

export function SlideQRCode({ slide }: { slide: any }) {
  const url = slide.url || "https://play.blooket.com";
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=480x480&margin=20&color=101070&bgcolor=ffffff&data=${encodeURIComponent(url)}`;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col items-center justify-center gap-8 p-12 bg-background text-foreground"
    >
      {/* Label */}
      <motion.p
        variants={itemVariant}
        className="text-sm font-black uppercase tracking-widest text-purple-500"
      >
        {slide.eyebrow || "Quiz Interativo"}
      </motion.p>

      {/* Title */}
      <motion.h2
        variants={itemVariant}
        className="text-5xl md:text-6xl font-black text-foreground text-center leading-tight"
      >
        {slide.title || "Vamos testar o que aprendemos?"}
      </motion.h2>

      {/* QR Code Card */}
      <motion.div
        variants={itemVariant}
        className="flex flex-col items-center gap-4"
      >
        <div className="p-5 bg-white rounded-3xl shadow-2xl border border-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc}
            alt={`QR Code para ${url}`}
            width={260}
            height={260}
            className="rounded-xl"
          />
        </div>

        {/* URL pill */}
        <div className="flex items-center gap-2 bg-[#101070]/10 border border-[#101070]/20 px-6 py-3 rounded-full">
          <span className="text-lg">🔗</span>
          <span className="font-black text-[#101070] text-lg tracking-tight">{url}</span>
        </div>
      </motion.div>

      {/* Subtitle */}
      {slide.subtitle && (
        <motion.p
          variants={itemVariant}
          className="text-xl text-foreground/50 font-medium text-center max-w-xl"
        >
          {slide.subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
