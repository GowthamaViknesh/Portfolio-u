import Aboutme from "./Components/Aboutme";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
          {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Aboutme />
          <Experience />
          <Marquee />
          <Education />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;