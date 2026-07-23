import { motion } from "motion/react";
import { getImageUrl } from "../data";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-end overflow-hidden bg-bg-deep">
      {/* Background Character Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={getImageUrl("hajin/b/0.webp")}
          alt="하진"
          className="w-full h-full object-cover object-center opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 w-full md:w-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#three-days"
              className="px-8 py-4 bg-text-primary text-bg-deep font-medium hover:bg-paper transition-colors duration-300 w-full sm:w-auto text-center"
            >
              3일의 기록 보기
            </a>
            <a
              href="#world"
              className="px-8 py-4 border border-border-line text-text-primary font-medium hover:bg-border-line/20 transition-colors duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
            >
              세계관 펼쳐보기
            </a>
          </div>
        </motion.div>

        {/* Countdown Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-end gap-2 w-full md:w-auto"
        >
          <span className="font-display text-4xl md:text-6xl text-infection-red/80 font-bold tracking-wider text-right w-full">D-3</span>
        </motion.div>
      </div>
    </section>
  );
}
