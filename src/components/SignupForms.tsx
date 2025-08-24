import { useState } from 'react';
import { signupParticipant, signupResearcher, sendNotificationEmail } from '../lib/supabase';

interface ParticipantFormData {
  name: string;
  email: string;
  ageRange: string;
  consent: boolean;
}

interface ResearcherFormData {
  name: string;
  email: string;
  institution: string;
  researchFocus: string;
  consent: boolean;
}

interface FormProps {
  onSubmit: (data: any) => void;
  onClose?: () => void;
}

export function ParticipantForm({ onSubmit, onClose }: FormProps) {
  const [formData, setFormData] = useState<ParticipantFormData>({
    name: '',
    email: '',
    ageRange: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const ageRanges = [
    '18-24', '25-34', '35-44', '45-54', '55-64', '65+'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.ageRange) {
      newErrors.ageRange = 'Please select your age range';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy to continue';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Submit to Supabase
      const result = await signupParticipant({
        name: formData.name,
        email: formData.email,
        age_range: formData.ageRange,
        consent: formData.consent
      });

      // Send notification email
      await sendNotificationEmail({
        type: 'participant',
        email: formData.email,
        name: formData.name
      });

      // Call parent callback
      await onSubmit({ ...formData, type: 'participant', id: result.id });
    } catch (error) {
      console.error('Submission error:', error);
      // Show error to user (you can enhance this with proper error states)
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ParticipantFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="signup-form participant-form">
      <div className="form-header">
        <h3>Join as Participant</h3>
        <p>Get your free personality insights from your video interaction behavior</p>
        {onClose && (
          <button className="close-btn" onClick={onClose} aria-label="Close form">×</button>
        )}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="p-name">Name / Alias</label>
          <input
            id="p-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={errors.name ? 'error' : ''}
            placeholder="Enter your name or preferred alias"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="p-email">Email</label>
          <input
            id="p-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={errors.email ? 'error' : ''}
            placeholder="your.email@example.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="p-age">Age Range</label>
          <select
            id="p-age"
            value={formData.ageRange}
            onChange={(e) => handleInputChange('ageRange', e.target.value)}
            className={errors.ageRange ? 'error' : ''}
          >
            <option value="">Select your age range</option>
            {ageRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          {errors.ageRange && <span className="error-message">{errors.ageRange}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
            />
            <span className="checkmark"></span>
            I agree to the <a href="?page=privacy" className="privacy-link">Privacy Policy</a> and consent to data collection
          </label>
          {errors.consent && <span className="error-message">{errors.consent}</span>}
        </div>

        <button 
          type="submit" 
          className="submit-btn primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join Study'}
        </button>
      </form>
    </div>
  );
}

export function ResearcherForm({ onSubmit, onClose }: FormProps) {
  const [formData, setFormData] = useState<ResearcherFormData>({
    name: '',
    email: '',
    institution: '',
    researchFocus: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const researchFocusOptions = [
    'Psychology', 'Cognitive Science', 'HCI', 'Marketing', 'Data Science', 'Other'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.researchFocus) {
      newErrors.researchFocus = 'Please select your research focus';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy to continue';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Submit to Supabase
      const result = await signupResearcher({
        name: formData.name,
        email: formData.email,
        institution: formData.institution || null,
        research_focus: formData.researchFocus,
        consent: formData.consent
      });

      // Send notification email
      await sendNotificationEmail({
        type: 'researcher',
        email: formData.email,
        name: formData.name
      });

      // Call parent callback
      await onSubmit({ ...formData, type: 'researcher', id: result.id });
    } catch (error) {
      console.error('Submission error:', error);
      // Show error to user (you can enhance this with proper error states)
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ResearcherFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="signup-form researcher-form">
      <div className="form-header">
        <h3>Join as Researcher</h3>
        <p>Collaborate with us and get early access to behavioral datasets</p>
        {onClose && (
          <button className="close-btn" onClick={onClose} aria-label="Close form">×</button>
        )}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="r-name">Full Name</label>
          <input
            id="r-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={errors.name ? 'error' : ''}
            placeholder="Dr. Jane Smith"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="r-email">Email</label>
          <input
            id="r-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={errors.email ? 'error' : ''}
            placeholder="jane.smith@university.edu"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="r-institution">Institution / Affiliation (Optional)</label>
          <input
            id="r-institution"
            type="text"
            value={formData.institution}
            onChange={(e) => handleInputChange('institution', e.target.value)}
            placeholder="University, Company, or Research Institute"
          />
        </div>

        <div className="form-group">
          <label htmlFor="r-focus">Research Focus</label>
          <select
            id="r-focus"
            value={formData.researchFocus}
            onChange={(e) => handleInputChange('researchFocus', e.target.value)}
            className={errors.researchFocus ? 'error' : ''}
          >
            <option value="">Select your research focus</option>
            {researchFocusOptions.map(focus => (
              <option key={focus} value={focus}>{focus}</option>
            ))}
          </select>
          {errors.researchFocus && <span className="error-message">{errors.researchFocus}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
            />
            <span className="checkmark"></span>
            I agree to the <a href="?page=privacy" className="privacy-link">Privacy Policy</a> and terms of collaboration
          </label>
          {errors.consent && <span className="error-message">{errors.consent}</span>}
        </div>

        <button 
          type="submit" 
          className="submit-btn secondary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Collaborate with Us'}
        </button>
      </form>
    </div>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
