import { useRef } from 'react';

interface GrowthOption {
  id: string;
  className: string;
  text: string;
  beamTarget: { x: number; y: number };
}

const growthOptions: GrowthOption[] = [
  { id: 'muscles', className: 'muscles', text: 'Grow Muscles', beamTarget: { x: 400, y: 100 } },
  { id: 'team', className: 'team', text: 'Grow Team', beamTarget: { x: 150, y: 400 } },
  { id: 'professionalism', className: 'professionalism', text: 'Grow Professionalism', beamTarget: { x: 650, y: 400 } }
];

export default function Growth() {
  const centerRef = useRef<HTMLDivElement>(null);

  const createLightBurst = (element: HTMLElement) => {
    const particles = 10;
    const container = element.querySelector('.growth-glow')?.parentElement;
    
    if (!container) return;

    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = '#9333ea';
      particle.style.borderRadius = '50%';
      particle.style.boxShadow = '0 0 10px rgba(147, 51, 234, 0.8)';
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.opacity = '1';
      particle.style.pointerEvents = 'none';
      
      container.appendChild(particle);
      
      // Animate particle based on direction
      let targetX = 0, targetY = 0;
      
      if (element.classList.contains('muscles')) {
        targetY = -150 - Math.random() * 50;
        targetX = (Math.random() - 0.5) * 50;
      } else if (element.classList.contains('team')) {
        targetX = -150 - Math.random() * 50;
        targetY = 100 + Math.random() * 50;
      } else if (element.classList.contains('professionalism')) {
        targetX = 150 + Math.random() * 50;
        targetY = 100 + Math.random() * 50;
      }
      
      particle.animate([
        { 
          transform: 'translate(-50%, -50%)',
          opacity: '1'
        },
        { 
          transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px))`,
          opacity: '0'
        }
      ], {
        duration: 1000,
        easing: 'ease-out'
      });
      
      setTimeout(() => particle.remove(), 1000);
    }
  };

  const handleMouseEnter = (option: GrowthOption, element: HTMLElement) => {
    // Create additional light particles
    createLightBurst(element);
    
    // Enhance center glow
    if (centerRef.current) {
      centerRef.current.style.transform = 'scale(1.5)';
      centerRef.current.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 0.6), transparent)';
    }
    
    // Animate SVG beam line
    const beamLine = document.querySelector(`.beam-${option.id}`) as SVGLineElement;
    if (beamLine) {
      beamLine.style.transition = 'all 0.3s ease';
      beamLine.setAttribute('stroke-width', '3');
      beamLine.setAttribute('opacity', '1');
      beamLine.style.filter = 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))';
    }
    
    // Highlight dotted line for team and professionalism
    if (option.id === 'team' || option.id === 'professionalism') {
      const dottedLine = document.querySelector(`.dotted-${option.id}`) as SVGLineElement;
      if (dottedLine) {
        dottedLine.classList.add('highlighted');
      }
    }
  };

  const handleMouseLeave = (option: GrowthOption) => {
    if (centerRef.current) {
      centerRef.current.style.transform = 'scale(1)';
      centerRef.current.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)';
    }
    
    // Reset SVG beam line
    const beamLine = document.querySelector(`.beam-${option.id}`) as SVGLineElement;
    if (beamLine) {
      beamLine.setAttribute('stroke-width', '0');
      beamLine.setAttribute('opacity', '0');
    }
    
    // Remove highlight from dotted line for team and professionalism
    if (option.id === 'team' || option.id === 'professionalism') {
      const dottedLine = document.querySelector(`.dotted-${option.id}`) as SVGLineElement;
      if (dottedLine) {
        dottedLine.classList.remove('highlighted');
      }
    }
  };

  return (
    <div className="content-section section" data-section="1">
      <div className="growth-container">
        <div className="growth-center" ref={centerRef}></div>
        
        {/* Connecting light beams from center */}
        <svg 
          className="growth-lines" 
          width="800" 
          height="500" 
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(147,51,234,0)', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: 'rgba(147,51,234,0.8)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(147,51,234,0)', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          
          {/* Dotted lines for team and professionalism only */}
          <line
            className="dotted-line dotted-team"
            x1="400"
            y1="250"
            x2="150"
            y2="400"
            stroke="rgba(147, 51, 234, 0.4)"
            strokeWidth="2"
            strokeDasharray="8,6"
            opacity="1"
          />
          <line
            className="dotted-line dotted-professionalism"
            x1="400"
            y1="250"
            x2="650"
            y2="400"
            stroke="rgba(147, 51, 234, 0.4)"
            strokeWidth="2"
            strokeDasharray="8,6"
            opacity="1"
          />
          
          {/* Hover beam lines */}
          {growthOptions.map((option) => (
            <line
              key={option.id}
              className={`beam-line beam-${option.id}`}
              x1="400"
              y1="250"
              x2={option.beamTarget.x}
              y2={option.beamTarget.y}
              stroke="url(#beam-gradient)"
              strokeWidth="0"
              opacity="0"
            />
          ))}
        </svg>
        
        {growthOptions.map((option) => (
          <div
            key={option.id}
            className={`growth-option ${option.className}`}
            data-beam={option.id}
            onMouseEnter={(e) => handleMouseEnter(option, e.currentTarget)}
            onMouseLeave={() => handleMouseLeave(option)}
          >
            <div className="growth-beam"></div>
            <div className="growth-glow"></div>
            <div className="growth-text">{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
