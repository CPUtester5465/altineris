interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <div className="hero section" data-section="0">
      <h1 className="brand-title">ALTINERIS</h1>
      <div className="explore-section">
        <div className="explore-text" onClick={onExplore}>
          Explore
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
}
