import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { getImageUrl } from "../data";

const days = [
  {
    day: "DAY 1",
    keyword: "숨기기",
    infection: "20~40%",
    emotion: "부정과 농담",
    summary: "하진은 손 떨림과 창백한 안색을 농담으로 덮고, 상처와 두려움을 숨긴다.",
    image: "hajin/b/7.webp", // 20%
  },
  {
    day: "DAY 2",
    keyword: "마주보기",
    infection: "40~70%",
    emotion: "절망과 고백",
    summary: "기억이 끊기고 몸이 변하기 시작한다. 하진은 처음으로 자신의 감정을 당신에게 드러낸다.",
    image: "hajin/b/10.webp", // 50%
  },
  {
    day: "DAY 3",
    keyword: "놓아주기",
    infection: "70~99%",
    emotion: "수용과 마지막 부탁",
    summary: "인간의 의식과 좀비의 본능이 충돌하는 동안, 두 사람은 피할 수 없는 마지막 선택에 다가간다.",
    image: "hajin/b/14.webp", // 80%
  }
];

export function ThreeDays() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="three-days" ref={containerRef} className="relative w-full bg-bg-soft py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-12 border-b border-border-line pb-6">3일의 기록</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {days.map((d, i) => (
            <motion.div 
              key={d.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-bg-deep mb-6">
                <img 
                  src={getImageUrl(d.image)} 
                  alt={d.day} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-border-line/50 pointer-events-none" />
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-paper">{d.day}</h3>
                  <span className="text-infection-red font-medium tracking-wider text-sm">{d.infection}</span>
                </div>
                <h4 className="text-xl text-text-primary font-medium">{d.keyword}</h4>
                <p className="text-sm text-faded-olive mb-3">{d.emotion}</p>
                <p className="text-text-muted leading-relaxed text-sm md:text-base">
                  {d.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
