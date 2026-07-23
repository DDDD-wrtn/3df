import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { endings, getImageUrl } from "../data";

export function Endings() {
  const [revealed, setRevealed] = useState(false);
  const endingOptions = endings.filter(e => e.isEnding);

  return (
    <section className="w-full bg-[#050606] py-16 md:py-32 border-t border-border-line relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-paper mb-4 md:mb-6">마지막 부탁</h2>
        <p className="text-text-muted text-base md:text-lg mb-12 md:mb-16">
          선택하지 않아도 시간은 흐른다.
        </p>

        {!revealed ? (
          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full opacity-30 pointer-events-none grayscale">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-[3/4] bg-bg-soft border border-border-line flex items-center justify-center">
                  <span className="text-4xl">?</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setRevealed(true)}
              className="px-8 py-4 border border-infection-red text-infection-red hover:bg-infection-red hover:text-white transition-colors duration-500 tracking-wider"
            >
              결말 구조 보기 (스포일러)
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full text-left"
          >
            {endingOptions.map((ending, i) => (
              <motion.div 
                key={ending.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="flex flex-col gap-4 group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-bg-deep border border-border-line relative">
                  <img 
                    src={getImageUrl(ending.path)} 
                    alt={ending.label} 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050606] to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl text-paper mb-2">{ending.label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
