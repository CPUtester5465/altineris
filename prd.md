PRD: Behavioral Profiler Website (MVP)
1. Overview

This website is the front door for your behavioral profiling project.
It has two main purposes:

Recruit participants for the MVP research study.

Attract researchers/psychologists interested in collaborating or gaining early access.

The website must clearly explain what the project is, provide trust and compliance cues, and capture leads through two separate forms.

2. Objectives

✅ Build trust and legitimacy for an early-stage research project.

✅ Collect signups from participants (for user studies).

✅ Collect signups from researchers (secondary stakeholder group).

✅ Store data securely with GDPR/PIPEDA-compliant consent.

✅ Keep design minimal, modern, and mobile-first.

3. Target Users
Primary

Participants (general public, 18+): People curious about what their TikTok/scrolling behavior says about them.

Secondary

Researchers / Psychologists: Individuals in academia or applied psychology who may want to collaborate or access early reports.

(Future roadmap: marketers/brands, but not in this MVP website.)

4. Core Features
4.1 Landing Page (Three-Section Scrolling Design)

**Section 1 - Hero:**
- Main headline: "What does your TikTok behavior reveal about you?"
- Sub-headline: "We're building the first psychological profiler from video interactions."
- Primary CTA: "Join Our Research" (scrolls to section 2)
- Maintains current Three.js background effects

**Section 2 - Research Paths (replaces current "Growth" section):**
- Center focal point with three interactive paths:
  - "Join as Participant" → Participant form
  - "Join as Researcher" → Researcher form  
  - "Learn More" → Trust & how-it-works info
- Interactive hover effects with current beam/glow animations

**Section 3 - Trust & Details (replaces "Coming Soon"):**
- How it Works (3 steps): Browse naturally → We analyze interactions → Get insights
- Trust messaging: Privacy-first, GDPR/PIPEDA compliant, data deletion rights
- Forms embedded or modal overlays for both participant and researcher signups

4.2 Forms
Participant Form

Fields:

Name / Alias

Email

Age range (dropdown: 18–24, 25–34, etc.)

Consent checkbox (must agree to Privacy Policy)

CTA: “Join Study”

Confirmation message: “Thanks! We’ll contact you with next steps.”

Researcher Form

Fields:

Name

Email

Institution / Affiliation (optional free text)

Research focus (dropdown: Psychology, Cognitive Science, HCI, Marketing, Other)

Consent checkbox

CTA: “Collaborate with Us”

Confirmation: “Thanks! We’ll contact you to discuss collaboration.”

4.3 Implementation Strategy

**Phase 1 - Content Transformation (Week 1):**
- Update Hero section with behavioral profiling messaging
- Transform Growth section into Research Paths with new interactive options
- Replace Coming Soon with Trust & Details section

**Phase 2 - Form Integration (Week 2):**
- Add form components using React state management
- Integrate with Formspree or Netlify Forms for data collection
- Implement modal overlays or embedded forms in Section 3
- Add form validation and success/error states

**Phase 3 - Backend & Data (Week 3):**
- Set up Supabase for PostgreSQL storage (recommended) or use form service directly
- Configure email notifications for new signups
- Add GDPR/PIPEDA compliant consent flows
- Implement data export and deletion capabilities

**Technical Integration:**
- Forms: React controlled components with TypeScript interfaces
- State: useState for form data, modal states, section navigation
- Styling: Extend current CSS with form-specific glass morphism styles
- Validation: Real-time validation with current purple glow effects for errors/success

5. Non-Functional Requirements

Performance: Load time <2s on mobile.

Responsiveness: Mobile-first design.

Accessibility: Contrast-friendly, screen-reader friendly.

Compliance: Consent required before data submission.

Security: HTTPS, no plain-text storage, form submissions encrypted at rest.

6. Design Guidelines

Style: Dark, modern, scientific with glass morphism effects (matching current implementation).

Colors: Black background + white typography + purple/violet highlights (#9333ea) + glowing effects.

Typography: Helvetica Neue (current) or similar sans-serif, with letter-spacing for elegance.

Effects: Three.js volumetric lights, particle systems, animated glows, and interactive hover states.

Imagery: Abstract 3D visuals, neural network patterns, geometric forms. No stock photography.

7. Tech Stack

Frontend: React 18 + TypeScript + Vite (current setup, fast development, Cloudflare Pages deployment).

Styling: CSS3 with custom animations, glass morphism, dark theme with purple accents.

3D Effects: Three.js for volumetric lights, particles, and background effects (already implemented).

Forms: React forms + 3rd-party service (Formspree, Netlify Forms, or Supabase) for data collection.

Storage: Supabase (PostgreSQL) OR Netlify Forms OR Google Sheets for MVP.

Deployment: Cloudflare Pages (current setup, excellent performance, free SSL).

8. Success Metrics

50+ participant signups in 1st month.

10+ researcher signups in 1st month.

Bounce rate <50%.

Average session duration >60s.

9. Risks & Mitigations

Risk: Users fear privacy violations → Mitigation: Explicit consent + “delete my data” policy.

Risk: Low credibility → Mitigation: Clean academic-style design, reference to psychological frameworks (Big Five, Valence–Arousal).

Risk: Low conversions → Mitigation: A/B test CTAs and hero messaging.

10. Implementation Roadmap

**Immediate Changes Needed:**
1. **Content Migration**: Replace ALTINERIS branding with behavioral profiling messaging
2. **Section Restructure**: Repurpose existing three sections for research-focused content
3. **Form Development**: Add participant and researcher signup forms with current design system
4. **Backend Setup**: Implement data collection and storage system
5. **Compliance**: Add privacy policy, consent flows, and GDPR compliance

**Preserving Current Assets:**
- Three.js background effects and animations
- Glass morphism design system and purple color scheme
- Smooth scrolling navigation and mobile responsiveness  
- Interactive hover effects and particle systems
- Custom cursor and navigation dots

**Key Success Factors:**
- Maintain current technical performance and visual appeal
- Seamlessly integrate forms into existing design language
- Ensure mobile-first approach for participant recruitment
- Build trust through professional design and clear privacy messaging