import BackgroundBoxes from "./components/BackgroundBoxes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BackgroundBoxes>
      <Navbar />
      <Hero />
      <Footer />
    </BackgroundBoxes>
  );
}

export default App;
