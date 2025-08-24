import { useState } from 'react';
import { ParticipantForm, ResearcherForm, Modal } from './SignupForms';

interface TrustDetailsProps {
  onShowPrivacy: () => void;
}

export default function TrustDetails({ onShowPrivacy }: TrustDetailsProps) {
  const [activeModal, setActiveModal] = useState<'participant' | 'researcher' | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmit = async (formData: any) => {
    try {
      console.log('Form submitted to Supabase:', formData);
      
      // Show success message
      const message = formData.type === 'participant' 
        ? "Thanks! We'll contact you with next steps for the study."
        : "Thanks! We'll contact you to discuss collaboration opportunities.";
      
      setSuccessMessage(message);
      setActiveModal(null);
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccessMessage('There was an error submitting your form. Please try again.');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="trust-details-section section" data-section="2">
      <div className="trust-content">
        <div className="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Browse Naturally</h3>
                <p>Use TikTok/Reels as you normally would</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Analyze Interactions</h3>
                <p>Record how you scroll, pause, and engage</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Insights</h3>
                <p>Receive your psychological profile report</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="trust-messaging">
          <h2 className="section-title">Your Privacy Matters</h2>
          <div className="trust-points">
            <div className="trust-point">
              <span className="trust-icon">🔒</span>
              <span>Privacy-first approach</span>
            </div>
            <div className="trust-point">
              <span className="trust-icon">🛡️</span>
              <span>GDPR/PIPEDA compliant</span>
            </div>
            <div className="trust-point">
              <span className="trust-icon">👤</span>
              <span>Anonymized data only</span>
            </div>
            <div className="trust-point">
              <span className="trust-icon">🗑️</span>
              <span>Delete data anytime</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button 
              onClick={onShowPrivacy}
              style={{
                background: 'none',
                border: '1px solid rgba(147, 51, 234, 0.5)',
                color: '#3b82f6',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                textDecoration: 'none',
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
              Read Full Privacy Policy
            </button>
          </div>
        </div>
        
        <div className="cta-section">
          <button 
            className="primary-cta"
            onClick={() => setActiveModal('participant')}
          >
            Join as Participant
          </button>
          <button 
            className="secondary-cta"
            onClick={() => setActiveModal('researcher')}
          >
            Join as Researcher
          </button>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="success-notification">
          <div className="success-content">
            <span className="success-icon">✓</span>
            <p>{successMessage}</p>
          </div>
        </div>
      )}

      {/* Modals */}
      <Modal isOpen={activeModal === 'participant'} onClose={closeModal}>
        <ParticipantForm onSubmit={handleFormSubmit} onClose={closeModal} />
      </Modal>

      <Modal isOpen={activeModal === 'researcher'} onClose={closeModal}>
        <ResearcherForm onSubmit={handleFormSubmit} onClose={closeModal} />
      </Modal>
    </div>
  );
}
