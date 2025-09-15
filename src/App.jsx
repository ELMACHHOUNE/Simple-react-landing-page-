import BackgroundBoxes from "./components/BackgroundBoxes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BackgroundBoxes>
      <main className="py-10 px-6">
        <Navbar />
      </main>
    </BackgroundBoxes>
  );
}

export default App;
