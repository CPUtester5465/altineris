import { useRef } from 'react';

interface ResearchGoal {
  id: string;
  className: string;
  text: string;
  description: string;
  beamTarget: { x: number; y: number };
}

interface GrowthProps {
  onShowDigitalBehavior?: () => void;
  onShowPsychologyResearch?: () => void;
  onShowDemocratizeInsights?: () => void;
}

const researchGoals: ResearchGoal[] = [
  { id: 'understand-behavior', className: 'participant', text: 'Understand Digital Behavior', description: 'Map how video interactions reveal personality traits', beamTarget: { x: 400, y: 100 } },
  { id: 'advance-psychology', className: 'researcher', text: 'Advance Psychology Research', description: 'Create new tools for behavioral analysis', beamTarget: { x: 150, y: 400 } },
  { id: 'democratize-insights', className: 'learn-more', text: 'Democratize Insights', description: 'Make psychological profiling accessible', beamTarget: { x: 650, y: 400 } }
];

export default function Growth({ 
  onShowDigitalBehavior, 
  onShowPsychologyResearch, 
  onShowDemocratizeInsights 
}: GrowthProps) {
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
      
      if (element.classList.contains('participant')) {
        targetY = -150 - Math.random() * 50;
        targetX = (Math.random() - 0.5) * 50;
      } else if (element.classList.contains('researcher')) {
        targetX = -150 - Math.random() * 50;
        targetY = 100 + Math.random() * 50;
      } else if (element.classList.contains('learn-more')) {
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

  const handleMouseEnter = (goal: ResearchGoal, element: HTMLElement) => {
    // Create additional light particles
    createLightBurst(element);
    
    // Enhance center glow
    if (centerRef.current) {
      centerRef.current.style.transform = 'scale(1.5)';
      centerRef.current.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 0.6), transparent)';
    }
    
    // Animate SVG beam line
    const beamLine = document.querySelector(`.beam-${goal.id}`) as SVGLineElement;
    if (beamLine) {
      beamLine.style.transition = 'all 0.3s ease';
      beamLine.setAttribute('stroke-width', '3');
      beamLine.setAttribute('opacity', '1');
      beamLine.style.filter = 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))';
    }
    
    // Highlight dotted line for advance-psychology and democratize-insights
    if (goal.id === 'advance-psychology' || goal.id === 'democratize-insights') {
      const dottedLine = document.querySelector(`.dotted-${goal.id}`) as SVGLineElement;
      if (dottedLine) {
        dottedLine.classList.add('highlighted');
      }
    }
  };

  const handleMouseLeave = (goal: ResearchGoal) => {
    if (centerRef.current) {
      centerRef.current.style.transform = 'scale(1)';
      centerRef.current.style.background = 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)';
    }
    
    // Reset SVG beam line
    const beamLine = document.querySelector(`.beam-${goal.id}`) as SVGLineElement;
    if (beamLine) {
      beamLine.setAttribute('stroke-width', '0');
      beamLine.setAttribute('opacity', '0');
    }
    
    // Remove highlight from dotted line for advance-psychology and democratize-insights
    if (goal.id === 'advance-psychology' || goal.id === 'democratize-insights') {
      const dottedLine = document.querySelector(`.dotted-${goal.id}`) as SVGLineElement;
      if (dottedLine) {
        dottedLine.classList.remove('highlighted');
      }
    }
  };

  const handleGoalClick = (goal: ResearchGoal) => {
    switch (goal.id) {
      case 'understand-behavior':
        onShowDigitalBehavior?.();
        break;
      case 'advance-psychology':
        onShowPsychologyResearch?.();
        break;
      case 'democratize-insights':
        onShowDemocratizeInsights?.();
        break;
      default:
        break;
    }
  };

  return (
    <div className="content-section section" data-section="1">
      <div className="research-container">
        <div className="research-center" ref={centerRef}></div>
        
        {/* Connecting light beams from center */}
        <svg 
          className="research-lines" 
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
          
          {/* Dotted lines for advance-psychology and democratize-insights only */}
          <line
            className="dotted-line dotted-advance-psychology"
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
            className="dotted-line dotted-democratize-insights"
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
          {researchGoals.map((goal) => (
            <line
              key={goal.id}
              className={`beam-line beam-${goal.id}`}
              x1="400"
              y1="250"
              x2={goal.beamTarget.x}
              y2={goal.beamTarget.y}
              stroke="url(#beam-gradient)"
              strokeWidth="0"
              opacity="0"
            />
          ))}
        </svg>
        
        {researchGoals.map((goal) => (
          <div
            key={goal.id}
            className={`research-option ${goal.className}`}
            data-beam={goal.id}
            onMouseEnter={(e) => handleMouseEnter(goal, e.currentTarget)}
            onMouseLeave={() => handleMouseLeave(goal)}
            onClick={() => handleGoalClick(goal)}
            style={{ cursor: 'pointer' }}
          >
            <div className="research-beam"></div>
            <div className="research-glow"></div>
            <div className="research-content">
              <div className="research-text">{goal.text}</div>
              <div className="research-description">{goal.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
