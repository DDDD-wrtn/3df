import { CHAT_URL } from "../data";

export function Closing() {
  return (
    <section className="w-full bg-bg-deep py-24 md:py-40 border-t border-border-line flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-text-primary mb-8 md:mb-12 leading-tight">
        남은 건 사흘.<br/>
        끝을 정하는 건 당신.
      </h2>
      
      <a
        href={CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-5 md:px-12 md:py-6 w-full max-w-sm bg-paper text-bg-deep font-semibold text-lg md:text-xl hover:bg-white transition-colors duration-300 tracking-wide text-center"
      >
        하진을 만나러 가기
      </a>
    </section>
  );
}
