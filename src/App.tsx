import Banner2 from "./components/Banne2";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
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
        <Footer />
        <Footer2 />
      </div>
    </>
  );
}

export default App;
