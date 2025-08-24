interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <div className="hero section" data-section="0">
      <div className="hero-content">
        <h1 className="main-headline">What does your TikTok behavior reveal about you?</h1>
        <p className="sub-headline">We're building the first psychological profiler from video interactions.</p>
      </div>
      <div className="explore-section">
        <div className="explore-text" onClick={onExplore}>
          Join Our Research
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
}
