import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Internships } from './components/AboutInternships';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TechStack, Achievements, Contact } from './components/OtherSections';
import { CustomCursor, ScrollProgress, LoadingScreen } from './components/Enhancements';
import { BackgroundBeams } from './components/BackgroundBeams';

function App() {
  return (
    <div className="relative">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Internships />
        <Skills />
        <Projects />
        <TechStack />
        <Achievements />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-sm font-mono tracking-widest uppercase">
          &copy; 2026 Designed & Built by Satyam Jha
        </p>
      </footer>
    </div>
  );
}

export default App;
