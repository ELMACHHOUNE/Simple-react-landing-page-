import BackgroundBoxes from "./components/BackgroundBoxes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BackgroundBoxes>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
      </div>
    </BackgroundBoxes>
  );
}

export default App;
