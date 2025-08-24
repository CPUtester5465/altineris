-- Supabase Database Schema for Behavioral Profiler Signups
-- Run this SQL in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

-- Create participant_signups table
CREATE TABLE IF NOT EXISTS participant_signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    age_range TEXT NOT NULL CHECK (age_range IN ('18-24', '25-34', '35-44', '45-54', '55-64', '65+')),
    consent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create researcher_signups table
CREATE TABLE IF NOT EXISTS researcher_signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    institution TEXT,
    research_focus TEXT NOT NULL CHECK (research_focus IN ('Psychology', 'Cognitive Science', 'HCI', 'Marketing', 'Data Science', 'Other')),
    consent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_participant_signups_email ON participant_signups(email);
CREATE INDEX IF NOT EXISTS idx_participant_signups_created_at ON participant_signups(created_at);
CREATE INDEX IF NOT EXISTS idx_researcher_signups_email ON researcher_signups(email);
CREATE INDEX IF NOT EXISTS idx_researcher_signups_created_at ON researcher_signups(created_at);

-- Row Level Security Policies
ALTER TABLE participant_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE researcher_signups ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for signup forms)
CREATE POLICY "Allow public inserts" ON participant_signups
    FOR INSERT TO PUBLIC
    WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON researcher_signups
    FOR INSERT TO PUBLIC
    WITH CHECK (true);

-- Allow authenticated users to read their own data
CREATE POLICY "Users can read own data" ON participant_signups
    FOR SELECT TO authenticated
    USING (auth.uid()::text = id::text OR auth.email() = email);

CREATE POLICY "Users can read own data" ON researcher_signups
    FOR SELECT TO authenticated
    USING (auth.uid()::text = id::text OR auth.email() = email);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_participant_signups_updated_at 
    BEFORE UPDATE ON participant_signups 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_researcher_signups_updated_at 
    BEFORE UPDATE ON researcher_signups 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create a view for analytics (optional)
CREATE OR REPLACE VIEW signup_analytics AS
SELECT 
    'participant' as type,
    COUNT(*) as total_signups,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as signups_24h,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as signups_7d,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as signups_30d
FROM participant_signups
UNION ALL
SELECT 
    'researcher' as type,
    COUNT(*) as total_signups,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours') as signups_24h,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as signups_7d,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as signups_30d
FROM researcher_signups;

-- Grant necessary permissions
GRANT SELECT ON signup_analytics TO authenticated;

-- Insert some example data (remove in production)
-- INSERT INTO participant_signups (name, email, age_range, consent) 
-- VALUES ('Test User', 'test@example.com', '25-34', true);

-- INSERT INTO researcher_signups (name, email, institution, research_focus, consent) 
-- VALUES ('Dr. Test', 'researcher@university.edu', 'Test University', 'Psychology', true);
