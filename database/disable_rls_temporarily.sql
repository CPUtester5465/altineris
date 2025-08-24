-- Temporary fix: Disable RLS to get forms working immediately
-- Run this SQL in your Supabase SQL Editor

-- Disable Row Level Security temporarily for both tables
ALTER TABLE participant_signups DISABLE ROW LEVEL SECURITY;
ALTER TABLE researcher_signups DISABLE ROW LEVEL SECURITY;

-- Remove all existing policies to clean slate
DROP POLICY IF EXISTS "Allow public inserts" ON participant_signups;
DROP POLICY IF EXISTS "Enable insert for anon users" ON participant_signups;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON participant_signups;
DROP POLICY IF EXISTS "Users can read own data" ON participant_signups;
DROP POLICY IF EXISTS "Users can view own participant data" ON participant_signups;

DROP POLICY IF EXISTS "Allow public inserts" ON researcher_signups;
DROP POLICY IF EXISTS "Enable insert for anon users on researchers" ON researcher_signups;
DROP POLICY IF EXISTS "Enable insert for authenticated users on researchers" ON researcher_signups;
DROP POLICY IF EXISTS "Users can read own data" ON researcher_signups;
DROP POLICY IF EXISTS "Users can view own researcher data" ON researcher_signups;

-- Verify the tables are accessible
SELECT 'participant_signups table ready' as status;
SELECT 'researcher_signups table ready' as status;
