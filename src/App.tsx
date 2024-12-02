import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Video from "./components/Video";
function App() {
  return (
    <>
      <div>
        <div>
           <Video />
        </div>
        <Navbar />
        <Hero />
        <Services />
      </div>
    </>
  );
}

export default App;
