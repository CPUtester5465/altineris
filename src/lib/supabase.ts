import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ParticipantSignup {
  id?: string;
  name: string;
  email: string;
  age_range: string;
  consent: boolean;
  created_at?: string;
}

export interface ResearcherSignup {
  id?: string;
  name: string;
  email: string;
  institution?: string;
  research_focus: string;
  consent: boolean;
  created_at?: string;
}

// Database operations
export const signupParticipant = async (data: Omit<ParticipantSignup, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('participant_signups')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error inserting participant:', error);
    throw error;
  }

  return result;
};

export const signupResearcher = async (data: Omit<ResearcherSignup, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('researcher_signups')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error inserting researcher:', error);
    throw error;
  }

  return result;
};

// Email notification function (can be expanded to use Supabase Edge Functions)
export const sendNotificationEmail = async (signupData: { type: 'participant' | 'researcher', email: string, name: string }) => {
  // This would typically call a Supabase Edge Function or external email service
  // For now, we'll log it (you can integrate with your preferred email service)
  console.log('New signup notification:', signupData);
  
  // Example: You could use Supabase Edge Functions, SendGrid, or other email services here
  // await supabase.functions.invoke('send-notification-email', { body: signupData });
};
