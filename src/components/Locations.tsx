import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { locations, featuredLocations, zones, getImageUrl } from "../data";
import { cn } from "../lib/utils";

export function LocationArchive() {
  const [filter, setFilter] = useState("전체");
  const [selectedLocId, setSelectedLocId] = useState<number | null>(null);

  const filteredLocations = locations.filter(
    loc => filter === "전체" || loc.zone === filter
  );

  const featured = locations.filter(loc => featuredLocations.includes(loc.id));
  const selectedLoc = locations.find(l => l.id === selectedLocId);

  return (
    <section id="locations" className="w-full bg-bg-deep py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-12">장소 아카이브</h2>
        
        {/* Featured Locations */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-sm text-faded-olive font-semibold tracking-wider uppercase mb-6">주요 거점</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featured.map((loc) => (
              <button 
                key={loc.id}
                onClick={() => setSelectedLocId(loc.id)}
                className="group relative aspect-square md:aspect-[3/4] overflow-hidden bg-bg-soft border border-border-line text-left flex items-end p-4 hover:border-text-muted transition-colors"
              >
                <img 
                  src={getImageUrl(loc.path)} 
                  alt={loc.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
                <div className="relative z-10">
                  <span className="block text-xs text-text-muted mb-1">{loc.id.toString().padStart(2, '0')}</span>
                  <span className="font-display text-lg text-paper group-hover:text-white transition-colors">{loc.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All Locations Archive */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-border-line pb-4">
            <h3 className="text-sm text-faded-olive font-semibold tracking-wider uppercase">전체 기록</h3>
            <div className="flex flex-wrap gap-2">
              {zones.map(zone => (
                <button
                  key={zone}
                  onClick={() => setFilter(zone)}
                  className={cn(
                    "px-3 py-1 text-sm border transition-colors",
                    filter === zone 
                      ? "bg-text-primary text-bg-deep border-text-primary" 
                      : "bg-transparent text-text-muted border-border-line hover:text-paper"
                  )}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
            {filteredLocations.map(loc => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocId(loc.id)}
                className="flex items-center justify-between py-3 border-b border-border-line/30 hover:border-text-muted group text-left"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-xs text-faded-olive font-mono">{loc.id.toString().padStart(2, '0')}</span>
                  <span className="text-text-primary group-hover:text-white transition-colors">{loc.name}</span>
                </div>
                <span className="text-xs text-bg-deep bg-text-muted/20 px-2 py-0.5 rounded-none">{loc.zone}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Drawer/Modal */}
      <AnimatePresence>
        {selectedLoc && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocId(null)}
              className="fixed inset-0 bg-bg-deep/80 backdrop-blur-sm z-40 cursor-pointer"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-bg-soft border-t border-border-line z-50 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-[600px] md:h-auto md:border overflow-y-auto"
            >
              <div className="relative aspect-video bg-bg-deep">
                <img 
                  src={getImageUrl(selectedLoc.path)} 
                  alt={selectedLoc.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedLocId(null)}
                  className="absolute top-4 right-4 bg-bg-deep/80 text-white p-2 rounded-full hover:bg-infection-red transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-end mb-4">
                  <h4 className="font-display text-3xl text-paper">{selectedLoc.name}</h4>
                  <span className="text-sm text-infection-red border border-infection-red/30 px-2 py-1">{selectedLoc.zone}</span>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {selectedLoc.desc || "버려진 세계의 고요한 침묵만이 남은 장소."}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
