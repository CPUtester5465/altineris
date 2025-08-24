import { useState } from 'react';

interface PrivacyPolicyProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function PrivacyPolicy({ onClose, isModal = false }: PrivacyPolicyProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const containerClass = isModal 
    ? "privacy-policy-modal" 
    : "privacy-policy-page section";

  return (
    <div className={containerClass} data-section="privacy">
      <div className="privacy-content">
        {isModal && onClose && (
          <div className="privacy-header">
            <h2>Privacy Policy</h2>
            <button className="close-btn" onClick={onClose} aria-label="Close privacy policy">×</button>
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
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">Your privacy and data protection are our top priorities</p>
            <div className="last-updated">Last updated: January 2025</div>
          </div>
        )}

        <div className="privacy-sections">
          
          {/* Quick Summary */}
          <div className="privacy-section summary">
            <h3>Privacy at a Glance</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-icon">🔒</span>
                <div>
                  <strong>Privacy-First</strong>
                  <p>We collect minimal data and anonymize everything possible</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🛡️</span>
                <div>
                  <strong>GDPR/PIPEDA Compliant</strong>
                  <p>Full compliance with international privacy regulations</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">👤</span>
                <div>
                  <strong>Your Rights</strong>
                  <p>Access, modify, or delete your data anytime</p>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-icon">🔬</span>
                <div>
                  <strong>Research Purpose</strong>
                  <p>Data used solely for behavioral psychology research</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Collection */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('collection')}
              aria-expanded={activeSection === 'collection'}
            >
              <h3>What Data We Collect</h3>
              <span className="toggle-icon">{activeSection === 'collection' ? '−' : '+'}</span>
            </button>
            {activeSection === 'collection' && (
              <div className="section-content">
                <h4>For Participants:</h4>
                <ul>
                  <li><strong>Basic Information:</strong> Name/alias, email address, age range</li>
                  <li><strong>Behavioral Data:</strong> Video interaction patterns (scrolling, pausing, engagement)</li>
                  <li><strong>Technical Data:</strong> Device type, browser information (for compatibility)</li>
                </ul>
                
                <h4>For Researchers:</h4>
                <ul>
                  <li><strong>Professional Information:</strong> Name, email, institution, research focus</li>
                  <li><strong>Collaboration Data:</strong> Research interests and potential partnership areas</li>
                </ul>

                <div className="data-notice">
                  <strong>We DO NOT collect:</strong> Personal identifiable information beyond what's necessary, 
                  sensitive personal data, or content from your social media accounts.
                </div>
              </div>
            )}
          </div>

          {/* How We Use Data */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('usage')}
              aria-expanded={activeSection === 'usage'}
            >
              <h3>How We Use Your Data</h3>
              <span className="toggle-icon">{activeSection === 'usage' ? '−' : '+'}</span>
            </button>
            {activeSection === 'usage' && (
              <div className="section-content">
                <h4>Research Purposes:</h4>
                <ul>
                  <li>Analyzing behavioral patterns in video consumption</li>
                  <li>Developing psychological profiling algorithms</li>
                  <li>Creating anonymized research datasets</li>
                  <li>Publishing academic papers on digital behavior</li>
                </ul>
                
                <h4>Communication:</h4>
                <ul>
                  <li>Sending study updates and results to participants</li>
                  <li>Coordinating research collaboration opportunities</li>
                  <li>Providing your psychological insights report</li>
                </ul>

                <div className="data-notice">
                  <strong>We will NEVER:</strong> Sell your data, use it for commercial advertising, 
                  or share it with third parties outside our research team.
                </div>
              </div>
            )}
          </div>

          {/* Data Security */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('security')}
              aria-expanded={activeSection === 'security'}
            >
              <h3>Data Security & Storage</h3>
              <span className="toggle-icon">{activeSection === 'security' ? '−' : '+'}</span>
            </button>
            {activeSection === 'security' && (
              <div className="section-content">
                <h4>Security Measures:</h4>
                <ul>
                  <li><strong>Encryption:</strong> All data encrypted in transit and at rest</li>
                  <li><strong>Access Control:</strong> Limited access to authorized research team only</li>
                  <li><strong>Anonymization:</strong> Personal identifiers removed from research datasets</li>
                  <li><strong>Secure Infrastructure:</strong> Hosted on enterprise-grade cloud platforms</li>
                </ul>
                
                <h4>Data Retention:</h4>
                <ul>
                  <li><strong>Active Study:</strong> Data retained during active research participation</li>
                  <li><strong>Research Archive:</strong> Anonymized data may be kept for academic purposes</li>
                  <li><strong>Contact Information:</strong> Deleted upon request or study completion</li>
                </ul>
              </div>
            )}
          </div>

          {/* Your Rights */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('rights')}
              aria-expanded={activeSection === 'rights'}
            >
              <h3>Your Privacy Rights</h3>
              <span className="toggle-icon">{activeSection === 'rights' ? '−' : '+'}</span>
            </button>
            {activeSection === 'rights' && (
              <div className="section-content">
                <h4>Under GDPR/PIPEDA, you have the right to:</h4>
                <ul>
                  <li><strong>Access:</strong> Request a copy of all data we hold about you</li>
                  <li><strong>Rectification:</strong> Correct any inaccurate personal information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Objection:</strong> Object to processing for specific purposes</li>
                  <li><strong>Withdraw Consent:</strong> Revoke consent for data processing anytime</li>
                </ul>
                
                <div className="rights-contact">
                  <strong>To exercise your rights:</strong> Contact us at privacy@behavioralprofile.com
                  <br />
                  <strong>Response time:</strong> We'll respond within 30 days of your request.
                </div>
              </div>
            )}
          </div>

          {/* Cookies and Tracking */}
          <div className="privacy-section">
            <button 
              className="section-toggle"
              onClick={() => toggleSection('cookies')}
              aria-expanded={activeSection === 'cookies'}
            >
              <h3>Cookies & Tracking</h3>
              <span className="toggle-icon">{activeSection === 'cookies' ? '−' : '+'}</span>
            </button>
            {activeSection === 'cookies' && (
              <div className="section-content">
                <h4>We use minimal tracking:</h4>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics:</strong> Anonymous usage statistics to improve our platform</li>
                  <li><strong>Study Data:</strong> Behavioral tracking only during active research participation</li>
                </ul>
                
                <div className="data-notice">
                  <strong>No advertising trackers:</strong> We don't use third-party advertising cookies or pixels.
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="privacy-section contact">
            <h3>Contact Us</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Data Protection Officer:</strong>
                <p>privacy@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Research Team:</strong>
                <p>research@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>General Inquiries:</strong>
                <p>hello@behavioralprofile.com</p>
              </div>
              <div className="contact-item">
                <strong>Data Requests:</strong>
                <p>Use our data request form or email privacy@behavioralprofile.com</p>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="privacy-section legal">
            <h3>Legal Basis for Processing</h3>
            <p>
              We process your personal data based on your <strong>explicit consent</strong> for research participation. 
              This consent can be withdrawn at any time without affecting the lawfulness of processing 
              based on consent before its withdrawal.
            </p>
            <p>
              For researchers, we process data based on <strong>legitimate interests</strong> in academic 
              collaboration and research advancement.
            </p>
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
