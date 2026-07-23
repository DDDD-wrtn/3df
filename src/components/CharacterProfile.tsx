import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getImageUrl } from "../data";

const dialogues = [
  {
    q: "괜찮아?",
    a: "아니, 당연히 괜찮지. 나 이런 걸로 안 죽거든? …아마도.",
    emotion: "hajin/a/11.webp" // 놀리기
  },
  {
    q: "무서워?",
    a: "뭐가? 어두운 거? 그건 좀. 네가 옆에 있으면 덜하고.",
    emotion: "hajin/a/6.webp" // 부끄
  },
  {
    q: "같이 있을게.",
    a: "그런 말 함부로 하지 마. …취소도 못 하게.",
    emotion: "hajin/a/38.webp" // 기대기
  }
];

export function CharacterProfile() {
  const [activeDialog, setActiveDialog] = useState(0);

  return (
    <section id="character" className="relative w-full bg-bg-deep py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Profile Details (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12 order-2 lg:order-1">
            <div>
              <h2 className="font-display text-5xl md:text-8xl text-text-primary font-bold mb-4 tracking-tight">하진</h2>
              <div className="flex gap-4 items-center text-sm md:text-base text-text-muted font-medium tracking-wide mb-6">
                <span>18</span>
                <span className="w-1 h-1 rounded-full bg-border-line" />
                <span>고등학교 2학년</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "성격", text: "명랑한 가면" },
                { title: "결핍", text: "자기희생" },
                { title: "회피", text: "농담과 딴청" },
                { title: "소망", text: "마지막까지 인간으로 남기" }
              ].map(item => (
                <div key={item.title} className="p-4 border border-border-line bg-bg-soft/50">
                  <span className="block text-xs text-faded-olive mb-1 font-semibold tracking-wider">{item.title}</span>
                  <span className="block text-text-primary">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-infection-red pl-6 py-2">
              <p className="text-text-muted leading-relaxed">
                침묵을 견디지 못하고 가벼운 과장과 장난스러운 말투로 공기를 채운다. 
                자신의 고통은 축소하지만 타인의 고통에는 과민하며, 죽음보다 남겨질 당신에게 짐이 되는 것을 두려워한다.
              </p>
            </div>
          </div>

          {/* Image & Dialogue Interaction (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] md:aspect-video w-full bg-bg-soft overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDialog}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* 블러 처리된 배경: 비율이 달라서 생기는 빈 공간을 자연스럽게 채움 */}
                  <img
                    src={getImageUrl(dialogues[activeDialog].emotion)}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                  />
                  {/* 원본 이미지: object-contain으로 잘리지 않게 출력 */}
                  <img
                    src={getImageUrl(dialogues[activeDialog].emotion)}
                    alt="하진의 표정"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-bg-deep/80 backdrop-blur-sm border border-border-line">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeDialog}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="font-display text-lg md:text-xl text-paper leading-relaxed"
                  >
                    "{dialogues[activeDialog].a}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs text-faded-olive font-semibold tracking-wider uppercase">하진에게 말 걸기</span>
              <div className="flex flex-wrap gap-3">
                {dialogues.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveDialog(i)}
                    className={`px-4 py-2 text-sm transition-all duration-300 border ${
                      activeDialog === i 
                        ? "bg-text-primary text-bg-deep border-text-primary" 
                        : "bg-transparent text-text-muted border-border-line hover:text-text-primary hover:border-text-muted"
                    }`}
                  >
                    {d.q}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
