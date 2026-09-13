/**
 * @file About.tsx
 * @description Full brand story page. All copy comes from
 * dataService which fetches from siteContent.ts (or API in future).
 */
import React, { memo, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { dataService } from "@/services/dataService";
import type { AboutContent } from "@/types/siteContent";

const About: React.FC = memo(() => {
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    dataService.getSiteContent().then((data) => setContent(data));
  }, []);

  if (!content) return <div className="min-h-screen pt-28">Loading...</div>;

  return (
    <main className="min-h-screen pt-28 pb-20" id="about-page">
      <div className="container mx-auto px-6">
        {/* Story */}
        <section
          ref={storyRef}
          className="scroll-animate grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              {content.subtitle}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              {content.titleLines.map((line, idx) => (
                <React.Fragment key={line}>
                  {idx === content.titleLines.length - 1 ? (
                    <span className="text-primary">{line}</span>
                  ) : (
                    line
                  )}
                  {idx < content.titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {content.storyParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden max-h-[600px]">
              <img
                src={content.heroImage}
                alt="Our craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 right-24 w-24 h-24 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-xl">
              <img
                src={content.overlayImage}
                alt="Detail of our work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="scroll-animate mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.values.map((value) => (
              <div key={value.title} className="luxury-card p-8 text-center">
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section
          ref={statsRef}
          className="scroll-animate silk-bg rounded-2xl py-12 px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
});

About.displayName = "AboutPage";

export default About;
