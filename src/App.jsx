import BackgroundBoxes from "./components/BackgroundBoxes";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SkillsWithTooltip from "./components/sections/SkillsWithTooltip";
import StickyScrollRevealDemo from "./components/sections/Projects";

function App() {
  return (
    <BackgroundBoxes>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />

          <SkillsWithTooltip />
          <StickyScrollRevealDemo />
        </main>
        <Footer />
      </div>
    </BackgroundBoxes>
  );
}

export default App;
