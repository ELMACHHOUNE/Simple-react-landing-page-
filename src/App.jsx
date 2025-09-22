import BackgroundBoxes from "./components/BackgroundBoxes";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import SkillsWithTooltip from "./components/sections/SkillsWithTooltip";

function App() {
  return (
    <BackgroundBoxes>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />

          <SkillsWithTooltip />
        </main>
        <Footer />
      </div>
    </BackgroundBoxes>
  );
}

export default App;
