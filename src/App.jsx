import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-500 selection:text-white">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#050505] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar></Navbar>
          <Hero></Hero>
          <hr></hr>
           <About></About>
           
           <Tech></Tech>
           <Experience></Experience>
           <Project></Project>
           <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
