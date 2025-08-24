import { useState } from 'react';

interface DemocratizeInsightsPageProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function DemocratizeInsightsPage({ onClose, isModal = false }: DemocratizeInsightsPageProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const containerClass = isModal 
    ? "privacy-policy-modal" 
    : "privacy-policy-page section";

  return (
    <div className={containerClass} data-section="democratize-insights">
      <div className="privacy-content">
        {isModal && onClose && (
          <div className="privacy-header">
            <h2>Democratize Insights</h2>
            <button className="close-btn" onClick={onClose} aria-label="Close democratize insights page">×</button>
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
            <h1 className="privacy-title">Democratize Insights</h1>
            <p className="privacy-subtitle">Make psychological profiling accessible to everyone</p>
            <div className="last-updated">Accessible Psychology • 2025</div>
          </div>
        )}

        <div className="privacy-sections">
          
          {/* Quick Summary */}
          <div className="privacy-section summary">
            <h3>Democratized Psychology at a Glance</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-icon">🌍</span>
                <div>
                  <strong>Universal Access</strong>
                  <p>Breaking down barriers to psychological understanding</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">💡</span>
                <div>
                  <strong>Simplified Insights</strong>
                  <p>Complex psychology made easy to understand and apply</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">⚡</span>
                <div>
                  <strong>Instant Results</strong>
                  <p>Real-time psychological insights from your digital behavior</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🎯</span>
                <div>
                  <strong>Actionable Guidance</strong>
                  <p>Practical recommendations based on your unique profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Revolution */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('accessibility')}
              aria-expanded={activeSection === 'accessibility'}
            >
              <h3>Making Psychology Accessible</h3>
              <span className="toggle-icon">{activeSection === 'accessibility' ? '−' : '+'}</span>
            </button>
            {activeSection === 'accessibility' && (
              <div className="section-content">
                <h4>Breaking Traditional Barriers:</h4>
                <ul>
                  <li><strong>Cost Elimination:</strong> Free access to professional-grade psychological insights</li>
                  <li><strong>Geographic Independence:</strong> Available anywhere with internet access</li>
                  <li><strong>Time Efficiency:</strong> Instant results vs. weeks of traditional assessment</li>
                  <li><strong>No Expert Required:</strong> Self-service psychological profiling and interpretation</li>
                  <li><strong>Language Accessibility:</strong> Insights available in multiple languages</li>
                </ul>
                
                <h4>Inclusive Design Principles:</h4>
                <ul>
                  <li><strong>Simple Interface:</strong> Intuitive design for all technical skill levels</li>
                  <li><strong>Clear Communication:</strong> Jargon-free explanations of psychological concepts</li>
                  <li><strong>Visual Learning:</strong> Infographics and interactive visualizations</li>
                  <li><strong>Mobile-First:</strong> Full functionality on smartphones and tablets</li>
                  <li><strong>Accessibility Standards:</strong> WCAG compliant for users with disabilities</li>
                </ul>

                <div className="data-notice">
                  <strong>Our Mission:</strong> Every person deserves access to psychological understanding, 
                  regardless of their background, location, or economic situation.
                </div>
              </div>
            )}
          </div>

          {/* Simplified Psychological Insights */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('insights')}
              aria-expanded={activeSection === 'insights'}
            >
              <h3>Simplified Psychological Insights</h3>
              <span className="toggle-icon">{activeSection === 'insights' ? '−' : '+'}</span>
            </button>
            {activeSection === 'insights' && (
              <div className="section-content">
                <h4>Personal Understanding:</h4>
                <ul>
                  <li><strong>Personality Dashboard:</strong> Visual representation of your Big Five traits</li>
                  <li><strong>Behavioral Patterns:</strong> Easy-to-understand charts of your digital habits</li>
                  <li><strong>Strength Identification:</strong> Highlight your unique psychological strengths</li>
                  <li><strong>Growth Areas:</strong> Gentle suggestions for personal development</li>
                  <li><strong>Comparison Context:</strong> How you compare to others (anonymous and aggregated)</li>
                </ul>
                
                <h4>Practical Applications:</h4>
                <ul>
                  <li><strong>Career Guidance:</strong> Jobs and environments that match your personality</li>
                  <li><strong>Relationship Insights:</strong> Understanding your communication and social styles</li>
                  <li><strong>Learning Optimization:</strong> Study methods that work best for your cognitive style</li>
                  <li><strong>Stress Management:</strong> Personalized strategies based on your stress patterns</li>
                  <li><strong>Decision Making:</strong> Understanding your decision-making biases and strengths</li>
                </ul>
                
                <h4>Educational Components:</h4>
                <ul>
                  <li><strong>Psychology 101:</strong> Basic psychological concepts explained simply</li>
                  <li><strong>Trait Explanations:</strong> What each personality dimension means in real life</li>
                  <li><strong>Behavioral Science:</strong> The science behind our digital behavior analysis</li>
                  <li><strong>Personal Growth:</strong> How to use psychological insights for self-improvement</li>
                </ul>

                <div className="data-notice">
                  <strong>Evidence-Based:</strong> All insights are grounded in peer-reviewed psychological research 
                  and validated through rigorous scientific testing.
                </div>
              </div>
            )}
          </div>

          {/* Community and Sharing */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('community')}
              aria-expanded={activeSection === 'community'}
            >
              <h3>Community and Knowledge Sharing</h3>
              <span className="toggle-icon">{activeSection === 'community' ? '−' : '+'}</span>
            </button>
            {activeSection === 'community' && (
              <div className="section-content">
                <h4>Global Psychology Community:</h4>
                <ul>
                  <li><strong>Anonymous Insights:</strong> Learn from aggregated patterns across millions of users</li>
                  <li><strong>Discussion Forums:</strong> Connect with others interested in psychology and self-discovery</li>
                  <li><strong>Expert Contributions:</strong> Psychologists and researchers share insights and answer questions</li>
                  <li><strong>Peer Learning:</strong> Community-driven knowledge sharing and support</li>
                  <li><strong>Cultural Diversity:</strong> Understanding psychological differences across cultures and regions</li>
                </ul>
                
                <h4>Educational Resources:</h4>
                <ul>
                  <li><strong>Video Explanations:</strong> Short, engaging videos explaining psychological concepts</li>
                  <li><strong>Interactive Tutorials:</strong> Hands-on learning about personality and behavior</li>
                  <li><strong>Research Summaries:</strong> Latest psychological research made accessible</li>
                  <li><strong>Case Studies:</strong> Real-world applications of psychological insights (anonymized)</li>
                  <li><strong>Monthly Insights:</strong> Regular updates on new discoveries and trends</li>
                </ul>
                
                <h4>Professional Development:</h4>
                <ul>
                  <li><strong>Educator Resources:</strong> Tools for teachers and trainers to use psychological insights</li>
                  <li><strong>Manager Training:</strong> Understanding team dynamics and individual differences</li>
                  <li><strong>Therapist Tools:</strong> Digital insights to supplement traditional therapy</li>
                  <li><strong>Coach Resources:</strong> Personality-based coaching strategies and techniques</li>
                </ul>

                <h4>Open Science Initiative:</h4>
                <ul>
                  <li><strong>Public Datasets:</strong> Anonymized data available for academic research</li>
                  <li><strong>Open Source Tools:</strong> Free psychological assessment and analysis tools</li>
                  <li><strong>Research Collaboration:</strong> Connecting researchers with interested participants</li>
                  <li><strong>Publication Access:</strong> Free access to research papers and findings</li>
                </ul>
              </div>
            )}
          </div>

          {/* Technology for Good */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('technology')}
              aria-expanded={activeSection === 'technology'}
            >
              <h3>Technology for Social Good</h3>
              <span className="toggle-icon">{activeSection === 'technology' ? '−' : '+'}</span>
            </button>
            {activeSection === 'technology' && (
              <div className="section-content">
                <h4>Ethical AI Implementation:</h4>
                <ul>
                  <li><strong>Bias Detection:</strong> Continuous monitoring for algorithmic bias and fairness</li>
                  <li><strong>Transparency:</strong> Open explanations of how insights are generated</li>
                  <li><strong>Privacy by Design:</strong> Data protection built into every aspect of the platform</li>
                  <li><strong>User Control:</strong> Complete control over data usage and sharing preferences</li>
                  <li><strong>Accuracy Validation:</strong> Regular testing against established psychological measures</li>
                </ul>
                
                <h4>Social Impact Initiatives:</h4>
                <ul>
                  <li><strong>Mental Health Support:</strong> Early detection and resources for psychological distress</li>
                  <li><strong>Educational Equity:</strong> Free tools for schools in underserved communities</li>
                  <li><strong>Workplace Wellness:</strong> Promoting psychological health in professional environments</li>
                  <li><strong>Research Funding:</strong> Supporting psychology research in developing countries</li>
                  <li><strong>Digital Literacy:</strong> Teaching people to understand their digital behavior patterns</li>
                </ul>
                
                <h4>Future Vision:</h4>
                <ul>
                  <li><strong>AI Therapy Assistance:</strong> Supporting mental health professionals with AI insights</li>
                  <li><strong>Personalized Education:</strong> Learning systems adapted to individual psychological profiles</li>
                  <li><strong>Team Optimization:</strong> Building better teams through personality compatibility</li>
                  <li><strong>Social Understanding:</strong> Promoting empathy through psychological education</li>
                  <li><strong>Global Mental Health:</strong> Scaling psychological support to underserved populations</li>
                </ul>

                <div className="data-notice">
                  <strong>Commitment to Good:</strong> We pledge to use psychological insights to benefit individuals 
                  and society, never for manipulation or harm.
                </div>
              </div>
            )}
          </div>

          {/* Getting Started */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('getting-started')}
              aria-expanded={activeSection === 'getting-started'}
            >
              <h3>How to Get Started</h3>
              <span className="toggle-icon">{activeSection === 'getting-started' ? '−' : '+'}</span>
            </button>
            {activeSection === 'getting-started' && (
              <div className="section-content">
                <h4>For Individuals:</h4>
                <ul>
                  <li><strong>Sign Up:</strong> Create your free account in under 2 minutes</li>
                  <li><strong>Natural Browsing:</strong> Use your device normally while we analyze your patterns</li>
                  <li><strong>Receive Insights:</strong> Get your personalized psychological profile</li>
                  <li><strong>Explore Implications:</strong> Learn what your profile means for your life and goals</li>
                  <li><strong>Track Changes:</strong> Monitor how your psychological patterns evolve over time</li>
                </ul>
                
                <h4>For Educators:</h4>
                <ul>
                  <li><strong>Classroom Integration:</strong> Use psychological insights to understand student learning styles</li>
                  <li><strong>Curriculum Development:</strong> Design lessons that accommodate different personality types</li>
                  <li><strong>Student Support:</strong> Identify students who might benefit from additional help</li>
                  <li><strong>Professional Development:</strong> Understand your own teaching style and preferences</li>
                </ul>
                
                <h4>For Organizations:</h4>
                <ul>
                  <li><strong>Team Building:</strong> Use personality insights to build complementary teams</li>
                  <li><strong>Leadership Development:</strong> Understand different leadership styles and approaches</li>
                  <li><strong>Communication Training:</strong> Learn to communicate effectively with different personality types</li>
                  <li><strong>Culture Development:</strong> Build organizational culture that supports diverse personalities</li>
                </ul>
                
                <h4>For Researchers:</h4>
                <ul>
                  <li><strong>Data Access:</strong> Request access to anonymized datasets for research</li>
                  <li><strong>Tool Integration:</strong> Incorporate our tools into your existing research workflow</li>
                  <li><strong>Collaboration:</strong> Partner with us on psychology research projects</li>
                  <li><strong>Publication Support:</strong> Get help publishing your findings in peer-reviewed journals</li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="privacy-section contact">
            <h3>Join the Movement</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>General Inquiries:</strong>
                <p>hello@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Educational Partnerships:</strong>
                <p>education@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Community Support:</strong>
                <p>community@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Technical Help:</strong>
                <p>support@behavioralprofile.com</p>
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
