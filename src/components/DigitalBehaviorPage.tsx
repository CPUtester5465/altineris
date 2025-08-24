import { useState } from 'react';

interface DigitalBehaviorPageProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function DigitalBehaviorPage({ onClose, isModal = false }: DigitalBehaviorPageProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const containerClass = isModal 
    ? "privacy-policy-modal" 
    : "privacy-policy-page section";

  return (
    <div className={containerClass} data-section="digital-behavior">
      <div className="privacy-content">
        {isModal && onClose && (
          <div className="privacy-header">
            <h2>Understand Digital Behavior</h2>
            <button className="close-btn" onClick={onClose} aria-label="Close digital behavior page">×</button>
          </div>
        )}
        
        {!isModal && (
          <div className="privacy-hero">
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <button 
                onClick={onClose}
                style={{
                  background: 'none',
                  border: '1px solid rgba(147, 51, 234, 0.5)',
                  color: '#3b82f6',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.8)';
                  e.currentTarget.style.background = 'rgba(147, 51, 234, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
                  e.currentTarget.style.background = 'none';
                }}
              >
                ← Back to Main Site
              </button>
            </div>
            <h1 className="privacy-title">Understand Digital Behavior</h1>
            <p className="privacy-subtitle">Map how video interactions reveal personality traits</p>
            <div className="last-updated">Behavioral Psychology Research • 2025</div>
          </div>
        )}

        <div className="privacy-sections">
          
          {/* Quick Summary */}
          <div className="privacy-section summary">
            <h3>Digital Behavior at a Glance</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-icon">👁️</span>
                <div>
                  <strong>Eye Movement Patterns</strong>
                  <p>Track where users look and how their gaze moves across content</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">⏱️</span>
                <div>
                  <strong>Temporal Dynamics</strong>
                  <p>Analyze scrolling speed, pause duration, and engagement timing</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🎯</span>
                <div>
                  <strong>Content Preferences</strong>
                  <p>Understand what content types drive engagement and retention</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🧠</span>
                <div>
                  <strong>Cognitive Patterns</strong>
                  <p>Reveal underlying psychological traits through digital behavior</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Interaction Mapping */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('interaction')}
              aria-expanded={activeSection === 'interaction'}
            >
              <h3>Video Interaction Mapping</h3>
              <span className="toggle-icon">{activeSection === 'interaction' ? '−' : '+'}</span>
            </button>
            {activeSection === 'interaction' && (
              <div className="section-content">
                <h4>Behavioral Signals We Analyze:</h4>
                <ul>
                  <li><strong>Scroll Velocity:</strong> Speed and rhythm of content navigation</li>
                  <li><strong>Pause Patterns:</strong> When, where, and for how long users stop</li>
                  <li><strong>Replay Behavior:</strong> Content revisitation and loop patterns</li>
                  <li><strong>Skip Indicators:</strong> Rapid advancement through specific content types</li>
                  <li><strong>Engagement Depth:</strong> Time spent on individual videos vs. browsing</li>
                </ul>
                
                <h4>Personality Correlations:</h4>
                <ul>
                  <li><strong>Attention Span:</strong> Links to focus, patience, and cognitive control</li>
                  <li><strong>Content Preference:</strong> Reveals values, interests, and emotional needs</li>
                  <li><strong>Social Engagement:</strong> Indicates extroversion and social connectivity</li>
                  <li><strong>Risk-Taking:</strong> Shown through content exploration patterns</li>
                </ul>

                <div className="data-notice">
                  <strong>Scientific Basis:</strong> Our mapping techniques are based on established psychological 
                  research linking digital behavior to personality traits and cognitive patterns.
                </div>
              </div>
            )}
          </div>

          {/* Personality Trait Detection */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('traits')}
              aria-expanded={activeSection === 'traits'}
            >
              <h3>Personality Trait Detection</h3>
              <span className="toggle-icon">{activeSection === 'traits' ? '−' : '+'}</span>
            </button>
            {activeSection === 'traits' && (
              <div className="section-content">
                <h4>Big Five Personality Dimensions:</h4>
                <ul>
                  <li><strong>Openness:</strong> Detected through content variety and exploration patterns</li>
                  <li><strong>Conscientiousness:</strong> Revealed by systematic browsing and completion rates</li>
                  <li><strong>Extraversion:</strong> Shown through social content engagement and sharing behavior</li>
                  <li><strong>Agreeableness:</strong> Indicated by positive content preference and interaction style</li>
                  <li><strong>Neuroticism:</strong> Detected through stress-response patterns and content avoidance</li>
                </ul>
                
                <h4>Cognitive Traits:</h4>
                <ul>
                  <li><strong>Processing Speed:</strong> How quickly users make content decisions</li>
                  <li><strong>Working Memory:</strong> Ability to track and return to previous content</li>
                  <li><strong>Attention Control:</strong> Resistance to distraction and focus maintenance</li>
                  <li><strong>Decision Making:</strong> Speed and consistency of content choices</li>
                </ul>

                <h4>Emotional Patterns:</h4>
                <ul>
                  <li><strong>Mood Regulation:</strong> Content seeking for emotional management</li>
                  <li><strong>Stress Response:</strong> Behavior changes under cognitive load</li>
                  <li><strong>Emotional Reactivity:</strong> Response intensity to different content types</li>
                </ul>
              </div>
            )}
          </div>

          {/* Research Methodology */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('methodology')}
              aria-expanded={activeSection === 'methodology'}
            >
              <h3>Research Methodology</h3>
              <span className="toggle-icon">{activeSection === 'methodology' ? '−' : '+'}</span>
            </button>
            {activeSection === 'methodology' && (
              <div className="section-content">
                <h4>Data Collection Approach:</h4>
                <ul>
                  <li><strong>Non-Intrusive Monitoring:</strong> Background tracking without disrupting natural behavior</li>
                  <li><strong>Controlled Environment:</strong> Standardized video content for consistent measurement</li>
                  <li><strong>Multi-Session Analysis:</strong> Tracking behavior patterns across multiple sessions</li>
                  <li><strong>Cross-Platform Validation:</strong> Comparing behavior across different video platforms</li>
                </ul>
                
                <h4>Analytical Framework:</h4>
                <ul>
                  <li><strong>Machine Learning Models:</strong> AI algorithms trained on psychological datasets</li>
                  <li><strong>Statistical Validation:</strong> Rigorous testing against established personality assessments</li>
                  <li><strong>Longitudinal Analysis:</strong> Tracking personality stability and change over time</li>
                  <li><strong>Predictive Modeling:</strong> Forecasting future behavior based on current patterns</li>
                </ul>

                <div className="data-notice">
                  <strong>Validation Process:</strong> All personality predictions are validated against standard 
                  psychological assessments (Big Five Inventory, NEO-PI-R) with 85%+ accuracy rates.
                </div>
              </div>
            )}
          </div>

          {/* Applications */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('applications')}
              aria-expanded={activeSection === 'applications'}
            >
              <h3>Practical Applications</h3>
              <span className="toggle-icon">{activeSection === 'applications' ? '−' : '+'}</span>
            </button>
            {activeSection === 'applications' && (
              <div className="section-content">
                <h4>Personal Development:</h4>
                <ul>
                  <li><strong>Self-Awareness:</strong> Understanding your unconscious behavioral patterns</li>
                  <li><strong>Digital Wellness:</strong> Identifying problematic usage patterns</li>
                  <li><strong>Habit Formation:</strong> Leveraging personality traits for better habits</li>
                  <li><strong>Stress Management:</strong> Recognizing early stress indicators in digital behavior</li>
                </ul>
                
                <h4>Research Applications:</h4>
                <ul>
                  <li><strong>Psychological Studies:</strong> Large-scale personality research with real-world data</li>
                  <li><strong>User Experience:</strong> Designing interfaces that match user personality types</li>
                  <li><strong>Educational Assessment:</strong> Understanding learning styles through digital behavior</li>
                  <li><strong>Mental Health:</strong> Early detection of psychological distress patterns</li>
                </ul>
                
                <h4>Future Possibilities:</h4>
                <ul>
                  <li><strong>Personalized Content:</strong> AI-driven content recommendations based on personality</li>
                  <li><strong>Team Formation:</strong> Optimal team composition using personality compatibility</li>
                  <li><strong>Therapeutic Tools:</strong> Digital behavior-based therapy and intervention</li>
                  <li><strong>Career Guidance:</strong> Job matching based on personality-behavior alignment</li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="privacy-section contact">
            <h3>Learn More</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Research Team:</strong>
                <p>research@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Collaboration Inquiries:</strong>
                <p>partnerships@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Technical Details:</strong>
                <p>tech@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Media Inquiries:</strong>
                <p>media@behavioralprofile.com</p>
              </div>
            </div>
          </div>

        </div>

        {isModal && (
          <div className="privacy-footer">
            <button className="close-privacy-btn" onClick={onClose}>
              I Understand
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
