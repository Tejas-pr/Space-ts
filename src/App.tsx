import Banner2 from "./components/Banne2";
import Banner from "./components/Banner";
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
        <Banner />
        <Banner2 />
      </div>
    </>
  );
}

export default App;
