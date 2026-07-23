import { motion } from "motion/react";
import { getImageUrl } from "../data";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-end justify-center md:justify-start md:items-center overflow-hidden bg-bg-deep pt-20 md:pt-0">
      {/* Background Character Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={getImageUrl("hajin/b/2.webp")} />
          <img
            src={getImageUrl("hajin/b/1.webp")}
            alt="하진"
            className="w-full h-full object-cover object-top md:object-right md:object-contain opacity-70"
            loading="eager"
            style={{ objectPosition: '70% 30%' }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/50 to-transparent md:bg-gradient-to-r md:from-bg-deep md:via-bg-deep/80 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-0 md:px-12 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          <span className="text-sm md:text-base tracking-[0.2em] text-text-muted font-medium">
            DAY 0 / THE LAST THREE DAYS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-text-primary leading-[1.2]">
            3일간의 추락
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-light text-paper mt-3 leading-relaxed">
            좀비에게 물린 사실을 숨긴 하진.<br className="hidden sm:block" /> 완전 변이까지 남은 시간은 단 3일.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-lg mt-3 leading-relaxed">
            끝까지 인간으로 남고 싶은 아이와, 그 마지막을 함께하는 당신의 이야기.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-12 w-full sm:w-auto items-center md:items-start">
            <a
              href="#three-days"
              className="px-8 py-4 bg-text-primary text-bg-deep font-medium hover:bg-paper transition-colors duration-300 w-full sm:w-auto text-center"
            >
              3일의 기록 보기
            </a>
            <a
              href="#world"
              className="px-8 py-4 border border-border-line text-text-primary font-medium hover:bg-border-line/20 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              세계관 펼쳐보기
            </a>
          </div>
        </motion.div>
      </div>

      {/* Countdown Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-6 md:right-12 bottom-12 flex flex-col items-end gap-2"
      >
        <span className="font-display text-4xl md:text-6xl text-infection-red/60 font-bold">D-3</span>
      </motion.div>
    </section>
  );
}
