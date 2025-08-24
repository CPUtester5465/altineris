-- Fix Row Level Security Policies for Form Submissions
-- Run this SQL in your Supabase SQL Editor

-- Drop existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow public inserts" ON participant_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON researcher_signups;
DROP POLICY IF EXISTS "Users can read own data" ON participant_signups;
DROP POLICY IF EXISTS "Users can read own data" ON researcher_signups;

-- Create new policies with unique names for participant signups
CREATE POLICY "Enable insert for anon users" ON participant_signups
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users" ON participant_signups
    FOR INSERT TO authenticated
    WITH CHECK (true);

-- Create new policies with unique names for researcher signups  
CREATE POLICY "Enable insert for anon users on researchers" ON researcher_signups
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users on researchers" ON researcher_signups
    FOR INSERT TO authenticated
    WITH CHECK (true);

-- Allow authenticated users to read their own data (optional for admin purposes)
CREATE POLICY "Users can view own participant data" ON participant_signups
    FOR SELECT TO authenticated
    USING (auth.email() = email);

CREATE POLICY "Users can view own researcher data" ON researcher_signups
    FOR SELECT TO authenticated
    USING (auth.email() = email);

-- Verify RLS is enabled
ALTER TABLE participant_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE researcher_signups ENABLE ROW LEVEL SECURITY;
