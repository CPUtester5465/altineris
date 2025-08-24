import { useState, useEffect, useCallback, useRef } from 'react';
import Hero from './components/Hero';
import Growth from './components/Growth';
import TrustDetails from './components/ComingSoon';
import CustomCursor from './components/CustomCursor';
import NavigationDots from './components/NavigationDots';
import ThreeBackground from './components/ThreeBackground';
import PrivacyPolicy from './components/PrivacyPolicy';
import DigitalBehaviorPage from './components/DigitalBehaviorPage';
import PsychologyResearchPage from './components/PsychologyResearchPage';
import DemocratizeInsightsPage from './components/DemocratizeInsightsPage';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showPrivacyPage, setShowPrivacyPage] = useState(false);
  const [showDigitalBehaviorPage, setShowDigitalBehaviorPage] = useState(false);
  const [showPsychologyResearchPage, setShowPsychologyResearchPage] = useState(false);
  const [showDemocratizeInsightsPage, setShowDemocratizeInsightsPage] = useState(false);
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

  // Function to initialize main page sections
  const initializeMainPageSections = useCallback(() => {
    const sections = sectionsRef.current?.querySelectorAll('.section');
    sections?.forEach((section: Element, i: number) => {
      const htmlSection = section as HTMLElement;
      htmlSection.style.transform = `translateY(${i * 100}vh)`;
      htmlSection.style.position = 'absolute';
      htmlSection.style.top = '0';
      htmlSection.style.left = '0';
      htmlSection.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  }, []);

  // Function to restore main page state
  const restoreMainPageState = useCallback(() => {
    // Reset all page states
    setShowPrivacyPage(false);
    setShowDigitalBehaviorPage(false);
    setShowPsychologyResearchPage(false);
    setShowDemocratizeInsightsPage(false);
    
    // Reset to first section
    setCurrentSection(0);
    
    // Restore main page styles
    document.body.classList.remove('privacy-page-open');
    document.documentElement.classList.remove('privacy-page-open');
    document.body.style.cursor = 'none';
    document.documentElement.style.overflowY = 'hidden';
    document.documentElement.style.height = '100vh';
    
    // Re-initialize sections
    setTimeout(() => {
      initializeMainPageSections();
    }, 50); // Small delay to ensure DOM is ready
  }, [initializeMainPageSections]);

  useEffect(() => {
    // Check URL for page navigation
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    
    if (page === 'privacy') {
      setShowPrivacyPage(true);
      // Enable scrolling and restore cursor
      document.body.classList.add('privacy-page-open');
      document.documentElement.classList.add('privacy-page-open');
      document.body.style.cursor = 'auto';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.height = 'auto';
    } else if (page === 'digital-behavior') {
      setShowDigitalBehaviorPage(true);
      // Enable scrolling and restore cursor
      document.body.classList.add('privacy-page-open');
      document.documentElement.classList.add('privacy-page-open');
      document.body.style.cursor = 'auto';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.height = 'auto';
    } else if (page === 'psychology-research') {
      setShowPsychologyResearchPage(true);
      // Enable scrolling and restore cursor
      document.body.classList.add('privacy-page-open');
      document.documentElement.classList.add('privacy-page-open');
      document.body.style.cursor = 'auto';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.height = 'auto';
    } else if (page === 'democratize-insights') {
      setShowDemocratizeInsightsPage(true);
      // Enable scrolling and restore cursor
      document.body.classList.add('privacy-page-open');
      document.documentElement.classList.add('privacy-page-open');
      document.body.style.cursor = 'auto';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.height = 'auto';
    } else {
      // No page parameter - restore main page
      restoreMainPageState();
    }

    // Initialize sections positions on first load
    if (!page) {
      initializeMainPageSections();
    }
  }, [restoreMainPageState, initializeMainPageSections]);

  // Handle privacy policy navigation
  const showPrivacyPolicy = () => {
    setShowPrivacyPage(true);
    // Enable scrolling and restore cursor
    document.body.classList.add('privacy-page-open');
    document.documentElement.classList.add('privacy-page-open');
    document.body.style.cursor = 'auto';
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.height = 'auto';
    window.history.pushState(null, '', '?page=privacy');
  };

  const hidePrivacyPolicy = () => {
    // Navigate back to main page using history API
    window.history.pushState(null, '', window.location.pathname);
    // Manually trigger state restoration
    restoreMainPageState();
  };

  // Digital Behavior page navigation
  const handleShowDigitalBehaviorPage = () => {
    setShowDigitalBehaviorPage(true);
    // Enable scrolling and restore cursor
    document.body.classList.add('privacy-page-open');
    document.documentElement.classList.add('privacy-page-open');
    document.body.style.cursor = 'auto';
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.height = 'auto';
    window.history.pushState(null, '', '?page=digital-behavior');
  };

  const handleHideDigitalBehaviorPage = () => {
    // Navigate back to main page using history API
    window.history.pushState(null, '', window.location.pathname);
    // Manually trigger state restoration
    restoreMainPageState();
  };

  // Psychology Research page navigation
  const handleShowPsychologyResearchPage = () => {
    setShowPsychologyResearchPage(true);
    // Enable scrolling and restore cursor
    document.body.classList.add('privacy-page-open');
    document.documentElement.classList.add('privacy-page-open');
    document.body.style.cursor = 'auto';
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.height = 'auto';
    window.history.pushState(null, '', '?page=psychology-research');
  };

  const handleHidePsychologyResearchPage = () => {
    // Navigate back to main page using history API
    window.history.pushState(null, '', window.location.pathname);
    // Manually trigger state restoration
    restoreMainPageState();
  };

  // Democratize Insights page navigation
  const handleShowDemocratizeInsightsPage = () => {
    setShowDemocratizeInsightsPage(true);
    // Enable scrolling and restore cursor
    document.body.classList.add('privacy-page-open');
    document.documentElement.classList.add('privacy-page-open');
    document.body.style.cursor = 'auto';
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.height = 'auto';
    window.history.pushState(null, '', '?page=democratize-insights');
  };

  const handleHideDemocratizeInsightsPage = () => {
    // Navigate back to main page using history API
    window.history.pushState(null, '', window.location.pathname);
    // Manually trigger state restoration
    restoreMainPageState();
  };

  useEffect(() => {
    // Don't add any event listeners if any page is open
    if (showPrivacyPage || showDigitalBehaviorPage || showPsychologyResearchPage || showDemocratizeInsightsPage) return;

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
  }, [currentSection, isScrolling, scrollToSection, showPrivacyPage, showDigitalBehaviorPage, showPsychologyResearchPage, showDemocratizeInsightsPage]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Re-check URL and update state accordingly
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get('page');
      
      if (!page) {
        // User navigated back to main page
        restoreMainPageState();
      }
      // If there's a page parameter, the initial useEffect will handle it
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [restoreMainPageState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('privacy-page-open');
      document.documentElement.classList.remove('privacy-page-open');
      document.body.style.cursor = 'none';
      document.documentElement.style.overflowY = 'hidden';
      document.documentElement.style.height = '100vh';
    };
  }, []);

  if (showPrivacyPage) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        background: '#000000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000
      }}>
        <PrivacyPolicy onClose={hidePrivacyPolicy} isModal={false} />
      </div>
    );
  }

  if (showDigitalBehaviorPage) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        background: '#000000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000
      }}>
        <DigitalBehaviorPage onClose={handleHideDigitalBehaviorPage} isModal={false} />
      </div>
    );
  }

  if (showPsychologyResearchPage) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        background: '#000000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000
      }}>
        <PsychologyResearchPage onClose={handleHidePsychologyResearchPage} isModal={false} />
      </div>
    );
  }

  if (showDemocratizeInsightsPage) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        background: '#000000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000
      }}>
        <DemocratizeInsightsPage onClose={handleHideDemocratizeInsightsPage} isModal={false} />
      </div>
    );
  }

  return (
    <>
      <ThreeBackground />
      <CustomCursor />
      
      <div className="sections-container" ref={sectionsRef}>
        <Hero onExplore={() => scrollToSection(1)} />
        <Growth 
          onShowDigitalBehavior={handleShowDigitalBehaviorPage}
          onShowPsychologyResearch={handleShowPsychologyResearchPage}
          onShowDemocratizeInsights={handleShowDemocratizeInsightsPage}
        />
        <TrustDetails onShowPrivacy={showPrivacyPolicy} />
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
