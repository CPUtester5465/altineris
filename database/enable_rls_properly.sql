-- Run this AFTER confirming forms work - Re-enable RLS with proper policies
-- This provides security while allowing form submissions

-- Re-enable RLS
ALTER TABLE participant_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE researcher_signups ENABLE ROW LEVEL SECURITY;

-- Create simple, working policies for form submissions
CREATE POLICY "allow_insert_participant" ON participant_signups
    FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "allow_insert_researcher" ON researcher_signups
    FOR INSERT 
    WITH CHECK (true);

-- Optional: Allow users to read their own submissions (for admin/user dashboard later)
CREATE POLICY "allow_select_own_participant" ON participant_signups
    FOR SELECT 
    USING (auth.email() = email);

CREATE POLICY "allow_select_own_researcher" ON researcher_signups
    FOR SELECT 
    USING (auth.email() = email);

SELECT 'RLS re-enabled with proper policies' as status;
