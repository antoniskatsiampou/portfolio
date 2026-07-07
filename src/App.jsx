import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Coursework from "@/sections/Coursework";
import Experience from "@/sections/Experience";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Coursework />
        <Experience />
      </main>
    </div>
  );
}

export default App;
