import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import ScrollHalftone from './components/ScrollHalftone';
import ChromaticScroll from './components/ChromaticScroll';
import KonamiEasterEgg from './components/KonamiEasterEgg';
import LazySection from './components/LazySection';
import InkSplatter from './components/InkSplatter';
import CrawlingSpider from './components/CrawlingSpider';
import WebParticles from './components/WebParticles';
import CursorTrail from './components/CursorTrail';
import SectionTransition from './components/SectionTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';
import ComicSkeleton from './components/ComicSkeleton';

const About = lazy(() => import('./components/About'));
const Internships = lazy(() => import('./components/Internships'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const TechStack = lazy(() => import('./components/TechStack'));
const Achievements = lazy(() => import('./components/Achievements'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const NextIssueTeaser = lazy(() => import('./components/NextIssueTeaser'));
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <SmoothScroll>
          <IntroLoader />
          <CustomCursor />
          <CursorTrail />
          <ScrollProgress />
          <ScrollHalftone />
          <ChromaticScroll />
          <KonamiEasterEgg />
          <CrawlingSpider />
          <WebParticles />

          <div className="min-h-screen bg-spider-dark dark:bg-spider-dark text-white relative">
            <Suspense fallback={null}>
              <ThreeBackground />
            </Suspense>

            <Navbar />
            <Hero />

            <InkSplatter />

            <SectionTransition direction="left">
              <Suspense fallback={<ComicSkeleton rows={2} />}>
                <LazySection>
                  <About />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter variant="drip" />

            <SectionTransition direction="right">
              <Suspense fallback={<ComicSkeleton rows={3} />}>
                <LazySection>
                  <Internships />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter variant="splash" />

            <SectionTransition direction="up">
              <Suspense fallback={<ComicSkeleton rows={2} columns={2} />}>
                <LazySection>
                  <Skills />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter />

            <SectionTransition direction="left">
              <Suspense fallback={<ComicSkeleton rows={2} columns={3} />}>
                <LazySection>
                  <Projects />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter variant="drip" />

            <SectionTransition direction="right">
              <Suspense fallback={<ComicSkeleton rows={1} />}>
                <LazySection>
                  <TechStack />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter variant="splash" />

            <SectionTransition direction="up">
              <Suspense fallback={<ComicSkeleton rows={1} columns={4} />}>
                <LazySection>
                  <Achievements />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter />

            <SectionTransition direction="left">
              <Suspense fallback={<ComicSkeleton rows={1} columns={2} />}>
                <LazySection>
                  <Testimonials />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <InkSplatter variant="drip" />

            <SectionTransition direction="right">
              <Suspense fallback={<ComicSkeleton rows={1} />}>
                <LazySection>
                  <Contact />
                </LazySection>
              </Suspense>
            </SectionTransition>

            <Suspense fallback={null}>
              <NextIssueTeaser />
            </Suspense>

            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
        </SmoothScroll>
      </SoundProvider>
    </ThemeProvider>
  );
}
