import { Hero } from "./components/Hero";
import { ThreeDays } from "./components/ThreeDays";
import { CharacterProfile } from "./components/CharacterProfile";
import { InfectionTracker } from "./components/InfectionTracker";
import { WorldRules } from "./components/WorldRules";
import { LocationArchive } from "./components/Locations";
import { Endings } from "./components/Endings";
import { Closing } from "./components/Closing";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-bg-deep text-text-primary selection:bg-infection-red selection:text-white">
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-4 flex justify-between items-center pointer-events-none">
        <span className="font-display font-bold tracking-widest text-white text-lg">3일간의 추락</span>
        <div className="hidden md:flex gap-6 text-sm tracking-widest text-white pointer-events-auto">
          <a href="#three-days" className="hover:text-infection-red transition-colors">기록</a>
          <a href="#character" className="hover:text-infection-red transition-colors">하진</a>
          <a href="#infection" className="hover:text-infection-red transition-colors">감염</a>
          <a href="#locations" className="hover:text-infection-red transition-colors">장소</a>
        </div>
      </nav>

      <main>
        <Hero />
        <ThreeDays />
        <CharacterProfile />
        <WorldRules />
        <InfectionTracker />
        <LocationArchive />
        <Endings />
        <Closing />
      </main>

      <footer className="bg-[#030404] py-8 text-center text-xs text-faded-olive border-t border-border-line">
        <p>&copy; 2024 3일간의 추락. All rights reserved.</p>
      </footer>
    </div>
  );
}
