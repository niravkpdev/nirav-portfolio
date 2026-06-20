import { AuroraBackground } from "./components/layout/AuroraBackground";
import { MouseGlow } from "./components/layout/MouseGlow";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { JourneyTimeline } from "./components/sections/JourneyTimeline";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <AuroraBackground>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <FeaturedProject />
        <JourneyTimeline />
        <Contact />
        <Footer />
      </AuroraBackground>
    </>
  );
}

export default App;
