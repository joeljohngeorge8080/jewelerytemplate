// File: Home.tsx
import React, { memo, Suspense } from "react";

// Lazy load non-critical sections to improve initial load performance
const Hero = React.lazy(() => import("@/components/Hero"));
const About = React.lazy(() => import("@/components/About"));

/**
 * Home
 * Renders the main homepage with all key sections.
 *
 * - Lazy loads sections to improve Time To Interactive (TTI)
 * - Uses semantic landmarks for accessibility
 * - Memoized for avoiding unnecessary re-renders
 */
const Home: React.FC = memo(() => {
  return (
    <main className="min-h-screen" id="home-page">
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        {/* Hero Section */}
        <section aria-label="Hero">
          <Hero />
        </section>

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <About />
        </section>
      </Suspense>
    </main>
  );
});

Home.displayName = "Home";

export default Home;
