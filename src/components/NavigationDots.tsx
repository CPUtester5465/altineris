interface NavigationDotsProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

export default function NavigationDots({ currentSection, totalSections, onNavigate }: NavigationDotsProps) {
  return (
    <div className="nav-dots">
      {Array.from({ length: totalSections }, (_, index) => (
        <div
          key={index}
          className={`nav-dot ${index === currentSection ? 'active' : ''}`}
          onClick={() => onNavigate(index)}
        />
      ))}
    </div>
  );
}
