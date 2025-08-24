import { useState } from 'react';

interface PsychologyResearchPageProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function PsychologyResearchPage({ onClose, isModal = false }: PsychologyResearchPageProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const containerClass = isModal 
    ? "privacy-policy-modal" 
    : "privacy-policy-page section";

  return (
    <div className={containerClass} data-section="psychology-research">
      <div className="privacy-content">
        {isModal && onClose && (
          <div className="privacy-header">
            <h2>Advance Psychology Research</h2>
            <button className="close-btn" onClick={onClose} aria-label="Close psychology research page">×</button>
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
            <h1 className="privacy-title">Advance Psychology Research</h1>
            <p className="privacy-subtitle">Create new tools for behavioral analysis</p>
            <div className="last-updated">Research Innovation • 2025</div>
          </div>
        )}

        <div className="privacy-sections">
          
          {/* Quick Summary */}
          <div className="privacy-section summary">
            <h3>Research Innovation at a Glance</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-icon">🔬</span>
                <div>
                  <strong>Novel Methodologies</strong>
                  <p>Pioneering new approaches to psychological measurement</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">📊</span>
                <div>
                  <strong>Large-Scale Analysis</strong>
                  <p>Processing millions of behavioral data points for insights</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🤝</span>
                <div>
                  <strong>Academic Collaboration</strong>
                  <p>Partnering with leading psychology researchers worldwide</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🚀</span>
                <div>
                  <strong>Open Science</strong>
                  <p>Making research tools and datasets available to the community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Tools */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('tools')}
              aria-expanded={activeSection === 'tools'}
            >
              <h3>Behavioral Analysis Tools</h3>
              <span className="toggle-icon">{activeSection === 'tools' ? '−' : '+'}</span>
            </button>
            {activeSection === 'tools' && (
              <div className="section-content">
                <h4>Digital Behavior Analysis Suite:</h4>
                <ul>
                  <li><strong>Micro-Interaction Tracker:</strong> Sub-second precision behavioral measurement</li>
                  <li><strong>Pattern Recognition Engine:</strong> AI-powered detection of behavioral signatures</li>
                  <li><strong>Temporal Analysis Framework:</strong> Time-series analysis of behavioral changes</li>
                  <li><strong>Cross-Platform Correlator:</strong> Behavior consistency analysis across devices</li>
                  <li><strong>Predictive Modeling Toolkit:</strong> Machine learning for behavior prediction</li>
                </ul>
                
                <h4>Psychological Assessment Integration:</h4>
                <ul>
                  <li><strong>Real-Time Personality Profiling:</strong> Continuous assessment through digital behavior</li>
                  <li><strong>Mood State Detection:</strong> Emotional state inference from interaction patterns</li>
                  <li><strong>Cognitive Load Measurement:</strong> Mental effort estimation through behavioral signals</li>
                  <li><strong>Attention Span Analytics:</strong> Focus and concentration measurement tools</li>
                  <li><strong>Social Preference Mapping:</strong> Social behavior analysis and preference detection</li>
                </ul>

                <div className="data-notice">
                  <strong>Validation Standards:</strong> All tools undergo rigorous validation against established 
                  psychological instruments with peer-reviewed publication of results.
                </div>
              </div>
            )}
          </div>

          {/* Research Areas */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('areas')}
              aria-expanded={activeSection === 'areas'}
            >
              <h3>Active Research Areas</h3>
              <span className="toggle-icon">{activeSection === 'areas' ? '−' : '+'}</span>
            </button>
            {activeSection === 'areas' && (
              <div className="section-content">
                <h4>Personality Psychology:</h4>
                <ul>
                  <li><strong>Digital Personality Stability:</strong> How personality manifests across digital platforms</li>
                  <li><strong>Implicit Personality Measurement:</strong> Unconscious trait detection through behavior</li>
                  <li><strong>Personality Development:</strong> Tracking personality changes over time</li>
                  <li><strong>Cultural Personality Differences:</strong> Cross-cultural behavioral pattern analysis</li>
                </ul>
                
                <h4>Cognitive Psychology:</h4>
                <ul>
                  <li><strong>Attention and Focus:</strong> Digital environment impact on cognitive control</li>
                  <li><strong>Decision Making:</strong> Choice patterns in information-rich environments</li>
                  <li><strong>Memory and Learning:</strong> Information retention through digital interfaces</li>
                  <li><strong>Cognitive Bias Detection:</strong> Identifying thinking patterns and biases</li>
                </ul>
                
                <h4>Social Psychology:</h4>
                <ul>
                  <li><strong>Digital Social Behavior:</strong> Online interaction patterns and social preferences</li>
                  <li><strong>Influence and Persuasion:</strong> Susceptibility to digital influence</li>
                  <li><strong>Group Dynamics:</strong> Collective behavior in digital spaces</li>
                  <li><strong>Social Identity:</strong> Identity expression through digital behavior</li>
                </ul>

                <h4>Applied Psychology:</h4>
                <ul>
                  <li><strong>Mental Health Indicators:</strong> Early detection of psychological distress</li>
                  <li><strong>Educational Psychology:</strong> Learning style identification and optimization</li>
                  <li><strong>Workplace Psychology:</strong> Professional behavior and performance patterns</li>
                  <li><strong>Consumer Psychology:</strong> Understanding decision-making and preferences</li>
                </ul>
              </div>
            )}
          </div>

          {/* Methodology Innovation */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('methodology')}
              aria-expanded={activeSection === 'methodology'}
            >
              <h3>Methodological Innovations</h3>
              <span className="toggle-icon">{activeSection === 'methodology' ? '−' : '+'}</span>
            </button>
            {activeSection === 'methodology' && (
              <div className="section-content">
                <h4>Data Collection Advances:</h4>
                <ul>
                  <li><strong>Ecological Validity:</strong> Natural environment data collection without laboratory constraints</li>
                  <li><strong>Longitudinal Tracking:</strong> Long-term behavioral pattern analysis across months/years</li>
                  <li><strong>Multi-Modal Integration:</strong> Combining behavioral, physiological, and self-report data</li>
                  <li><strong>Real-Time Analytics:</strong> Immediate processing and feedback of behavioral data</li>
                </ul>
                
                <h4>Analytical Breakthroughs:</h4>
                <ul>
                  <li><strong>Deep Learning Psychology:</strong> Neural networks trained on psychological theory</li>
                  <li><strong>Causal Inference:</strong> Determining cause-effect relationships in behavioral data</li>
                  <li><strong>Individual Difference Modeling:</strong> Personalized psychological models</li>
                  <li><strong>Behavioral Prediction:</strong> Forecasting future behavior with high accuracy</li>
                </ul>
                
                <h4>Ethical Research Framework:</h4>
                <ul>
                  <li><strong>Informed Consent Innovation:</strong> Dynamic consent models for ongoing research</li>
                  <li><strong>Privacy-Preserving Analytics:</strong> Advanced anonymization and differential privacy</li>
                  <li><strong>Participant Empowerment:</strong> Real-time control over data usage and sharing</li>
                  <li><strong>Transparent Algorithms:</strong> Explainable AI for psychological interpretations</li>
                </ul>

                <div className="data-notice">
                  <strong>Open Science Commitment:</strong> We publish all methodologies, release anonymized datasets, 
                  and provide open-source tools to advance the entire field.
                </div>
              </div>
            )}
          </div>

          {/* Collaboration Opportunities */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('collaboration')}
              aria-expanded={activeSection === 'collaboration'}
            >
              <h3>Research Collaboration</h3>
              <span className="toggle-icon">{activeSection === 'collaboration' ? '−' : '+'}</span>
            </button>
            {activeSection === 'collaboration' && (
              <div className="section-content">
                <h4>Academic Partnerships:</h4>
                <ul>
                  <li><strong>University Collaborations:</strong> Joint research projects with leading psychology departments</li>
                  <li><strong>Graduate Student Programs:</strong> Thesis and dissertation support using our platform</li>
                  <li><strong>Faculty Research Grants:</strong> Co-funding opportunities for innovative projects</li>
                  <li><strong>Conference Presentations:</strong> Joint presentations at major psychology conferences</li>
                </ul>
                
                <h4>Industry Partnerships:</h4>
                <ul>
                  <li><strong>Tech Company Research:</strong> User experience and product psychology studies</li>
                  <li><strong>Healthcare Applications:</strong> Digital therapeutics and mental health tools</li>
                  <li><strong>Educational Technology:</strong> Learning platform optimization and assessment</li>
                  <li><strong>Market Research:</strong> Consumer behavior and decision-making analysis</li>
                </ul>
                
                <h4>Research Infrastructure:</h4>
                <ul>
                  <li><strong>Data Access Programs:</strong> Anonymized datasets for academic research</li>
                  <li><strong>Tool Licensing:</strong> Access to our behavioral analysis suite</li>
                  <li><strong>Cloud Computing Resources:</strong> High-performance computing for large-scale analysis</li>
                  <li><strong>Technical Support:</strong> Expert consultation and methodology guidance</li>
                </ul>

                <h4>Publication Opportunities:</h4>
                <ul>
                  <li><strong>Co-Authored Papers:</strong> Joint publications in top-tier psychology journals</li>
                  <li><strong>Special Issues:</strong> Themed journal issues on digital behavioral psychology</li>
                  <li><strong>Book Collaborations:</strong> Comprehensive volumes on digital behavior research</li>
                  <li><strong>Open Access Publishing:</strong> Making research freely available to all</li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="privacy-section contact">
            <h3>Join Our Research Community</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Research Director:</strong>
                <p>director@altineris.com</p>
              </div>
              <div className="contact-item">
                <strong>Collaboration Coordinator:</strong>
                <p>partnerships@altineris.com</p>
              </div>
              <div className="contact-item">
                <strong>Data Access Requests:</strong>
                <p>data@altineris.com</p>
              </div>
              <div className="contact-item">
                <strong>Technical Support:</strong>
                <p>support@altineris.com</p>
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
