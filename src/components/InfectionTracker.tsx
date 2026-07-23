import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { infectionStages, getImageUrl } from "../data";
import { cn } from "../lib/utils";

export function InfectionTracker() {
  const stages = infectionStages.filter(s => s.percent !== "사건");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSpoiler, setShowSpoiler] = useState(false);

  const activeStage = stages[activeIndex];

  const handleSelect = (index: number) => {
    if (stages[index].isSpoiler && !showSpoiler) return;
    setActiveIndex(index);
  };

  return (
    <section id="infection" className="w-full bg-bg-soft py-16 md:py-32 border-t border-border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border-line pb-6">
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-2">감염 기록</h2>
            <p className="text-text-muted text-sm md:text-base">완전 변이까지 남은 시간, 신체의 악화와 감정의 변화</p>
          </div>
          {!showSpoiler && (
            <button
              onClick={() => setShowSpoiler(true)}
              className="text-sm px-4 py-3 md:py-2 w-full md:w-auto border border-infection-red/50 text-infection-red hover:bg-infection-red/10 transition-colors"
            >
              변이 직전 보기 (스포일러)
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Timeline / Selectors */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 hide-scrollbar snap-x snap-mandatory">
              {stages.map((stage, idx) => {
                const isLocked = stage.isSpoiler && !showSpoiler;
                const isActive = idx === activeIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={isLocked}
                    className={cn(
                      "flex-shrink-0 snap-start text-left px-4 py-3 border transition-all duration-300 min-w-[100px] lg:min-w-0",
                      isActive
                        ? "bg-bg-deep border-text-primary text-text-primary"
                        : "bg-transparent border-border-line text-text-muted",
                      isLocked ? "opacity-30 cursor-not-allowed" : "hover:border-text-muted hover:text-paper"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{stage.percent}</span>
                      {isLocked && <span className="text-xs">🔒</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image & Detail View */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="relative aspect-[4/3] md:aspect-video w-full bg-bg-deep border border-border-line overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStage.path}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  src={getImageUrl(activeStage.path)}
                  alt={`감염도 ${activeStage.percent}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-center border-b border-border-line pb-4">
              <h3 className="text-2xl font-display text-paper">{activeStage.label}</h3>
              <span className="text-infection-red font-display text-4xl">{activeStage.percent}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
