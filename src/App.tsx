import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
function App() {
  return (
    <>
      <div >
        <div className="relative">
           <Video />
        </div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
