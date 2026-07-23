import { motion } from "motion/react";

export function WorldRules() {
  return (
    <section id="world" className="w-full bg-bg-deep py-16 md:py-32 border-t border-border-line relative overflow-hidden">
      <div className="absolute -left-32 top-0 text-[30rem] font-display font-bold text-bg-soft select-none pointer-events-none leading-none z-0">
        03
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-12">세계와 규칙</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-lg md:text-2xl font-light text-paper leading-relaxed">
              좀비 바이러스는 예외 없이 육체와 정신을 잠식한다.
              <br/>감염된 순간부터 남은 시간은 단 3일.
            </p>
            <p className="text-text-muted leading-relaxed">
              신체가 죽어갈수록 역설적으로 마지막 순간의 감정은 더욱 짙어진다.
              살아남기 위해 발버둥 치는 자들과, 조용히 끝을 준비하는 자들이 뒤섞인 낡은 생존의 기록.
            </p>
          </div>
          
          <div className="flex flex-col gap-0 border-l border-border-line">
            {[
              { phase: "DAY 1", name: "초기", range: "20~40%", desc: "미세한 손 떨림과 피로. 외형 변화는 미미하나 밤새 고열에 시달린다." },
              { phase: "DAY 2", name: "중기", range: "40~70%", desc: "피멍 같은 자국과 창백한 피부. 정신이 혼미해지며 기억이 단편적으로 끊긴다." },
              { phase: "DAY 3", name: "말기", range: "70~90%", desc: "회색빛 피부와 마른 핏자국. 인간의 이성과 본능이 강하게 충돌하는 시기." },
              { phase: "THE END", name: "변이 직전", range: "90~99%", desc: "검게 변한 혈관. 남은 이성은 오직 한 사람을 향한 미련뿐." }
            ].map((rule, i) => (
              <div key={i} className="relative pl-8 py-6 border-b border-border-line/50 last:border-0 group hover:bg-bg-soft/30 transition-colors">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-text-muted group-hover:bg-infection-red -translate-x-[4px] transition-colors" />
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-display font-semibold text-lg text-text-primary">{rule.phase}</span>
                  <span className="text-sm text-infection-red font-medium">{rule.range}</span>
                  <span className="text-sm text-faded-olive ml-auto">{rule.name}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
