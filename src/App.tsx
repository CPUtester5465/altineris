import { useState, useEffect, useCallback, useRef } from 'react';
import Hero from './components/Hero';
import Growth from './components/Growth';
import ComingSoon from './components/ComingSoon';
import CustomCursor from './components/CustomCursor';
import NavigationDots from './components/NavigationDots';
import ThreeBackground from './components/ThreeBackground';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const totalSections = 3;

  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      
      const sections = sectionsRef.current?.querySelectorAll('.section');
      sections?.forEach((section: Element, i: number) => {
        const htmlSection = section as HTMLElement;
        const offset = (i - index) * 100;
        htmlSection.style.transform = `translateY(${offset}vh)`;
        htmlSection.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  }, [isScrolling, totalSections]);

  useEffect(() => {
    // Initialize sections positions
    const sections = sectionsRef.current?.querySelectorAll('.section');
    sections?.forEach((section: Element, i: number) => {
      const htmlSection = section as HTMLElement;
      htmlSection.style.transform = `translateY(${i * 100}vh)`;
      htmlSection.style.position = 'absolute';
      htmlSection.style.top = '0';
      htmlSection.style.left = '0';
    });
  }, []);

  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!isScrolling) {
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (e.deltaY > 0) {
            // Scroll down
            scrollToSection(currentSection + 1);
          } else {
            // Scroll up
            scrollToSection(currentSection - 1);
          }
        }, 50);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isScrolling) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          scrollToSection(currentSection + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          scrollToSection(currentSection - 1);
        }
      }
    };

    // Touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      if (!isScrolling) {
        if (touchStartY - touchEndY > 50) {
          // Swipe up
          scrollToSection(currentSection + 1);
        } else if (touchEndY - touchStartY > 50) {
          // Swipe down
          scrollToSection(currentSection - 1);
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(wheelTimeout);
    };
  }, [currentSection, isScrolling, scrollToSection]);

  return (
    <>
      <ThreeBackground />
      <CustomCursor />
      
      <div className="sections-container" ref={sectionsRef}>
        <Hero onExplore={() => scrollToSection(1)} />
        <Growth />
        <ComingSoon />
      </div>

      <NavigationDots 
        currentSection={currentSection} 
        totalSections={totalSections}
        onNavigate={scrollToSection}
      />
    </>
  );
}

export default App;
