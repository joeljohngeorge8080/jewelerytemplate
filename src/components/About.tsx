import React, { useState, useCallback, KeyboardEvent, memo } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";

// Assets (lazy loaded where possible for performance)
import pearlNecklace from "@/assets/pearl-necklace.webp";
import rubyPendant from "@/assets/ruby-pendant.webp";

/**
 * About Section Component
 * Displays company heritage information with animated scroll effects,
 * supporting video playback and responsive imagery.
 *
 * @component
 * @returns {JSX.Element} About section markup
 */
const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Scroll animation refs
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const visualRef = useScrollAnimation();

  /** Handles video play state via click or keyboard */
  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  /** Handles keyboard activation for accessibility */
  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsPlaying(true);
    }
  }, []);

  return (
    <section id="about" className="about-section py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div ref={titleRef} className="scroll-animate">
              <p className="about-section__subtitle text-accent text-sm font-medium tracking-widest uppercase mb-4">
                OUR STORY
              </p>
              <h2 className="about-section__title font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                TRADITION
                <br />
                CARED FOR
                <br />
                SINCE <span className="text-primary">1998</span>
              </h2>

              <div
                ref={contentRef}
                className="scroll-animate stagger-2 space-y-6 text-lg text-muted-foreground leading-relaxed mb-8"
              >
                <p>
                  Nam porttitor et felis ut dictum. Donec sapien ante, ultrices
                  nec urna ut, tempor tempus erat. Curabitur pharetra non libero
                  nec auctor.
                </p>
                <p>Sed quis molestie mauris.</p>
              </div>
              <Link
                to="#"
                className="btn-gold text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                READ MORE
              </Link>
            </div>

            {/* Video and Image Section */}
            <div ref={visualRef} className="scroll-animate stagger-4 relative">
              <div className="relative">
                {/* Main Video Area */}
                <div
                  className="about-section__video relative aspect-[4/5] bg-accent/10 rounded-lg overflow-hidden group cursor-pointer max-h-[600px]"
                  onClick={handlePlay}
                  role="button"
                  tabIndex={0}
                  onKeyDown={handleKeyDown}
                  aria-label="Play heritage video"
                >
                  {!isPlaying ? (
                    <>
                      <img
                        src={pearlNecklace}
                        alt="Heritage video thumbnail showing a pearl necklace"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play
                            className="w-6 h-6 text-foreground ml-1"
                            fill="currentColor"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={pearlNecklace}
                        alt="Heritage video thumbnail showing a pearl necklace"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play
                            className="w-6 h-6 text-foreground ml-1"
                            fill="currentColor"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </>

                    //uncomment this if u want to ushow video here
                    // <video
                    //   src={videoSrc}
                    //   autoPlay
                    //   controls
                    //   muted
                    //   className="w-full h-full object-cover rounded-lg"
                    //   onEnded={() => setIsPlaying(false)}
                    // />
                  )}
                </div>

                {/* Overlay Image */}
                <div className="about-section__overlay-image absolute -top-4 right-24 w-24 h-24 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={rubyPendant}
                    alt="Ruby pendant representing heritage craftsmanship"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant divider */}
      <div className="mt-20">
        <div className="divider-gold max-w-xs mx-auto" aria-hidden="true" />
      </div>
    </section>
  );
};

export default memo(About);
