# Supabase Setup Instructions

## 1. Database Schema Setup

1. Go to your Supabase dashboard: https://app.supabase.com
2. Navigate to the SQL Editor
3. Run the SQL script from `database/schema.sql`

## 2. Environment Variables Setup

You need to get your Supabase Anon Key:

1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy the "anon public" key
4. Create a `.env.local` file in the project root with:

```bash
VITE_SUPABASE_URL=https://mlznnqhzipnaujvhlnwu.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 3. Email Notifications (Optional)

To enable email notifications for new signups:

### Option A: Supabase Edge Functions
1. Create a new Edge Function in your Supabase dashboard
2. Use the function to send emails via your preferred service (SendGrid, Resend, etc.)

### Option B: Database Webhooks
1. Set up webhooks in Supabase to trigger on INSERT to both tables
2. Point webhooks to your email service endpoint

### Option C: Third-party Integration
1. Use services like Zapier or n8n to watch for new database entries
2. Configure them to send notification emails

## 4. Testing

Once setup is complete:
1. Fill out the participant or researcher forms
2. Check your Supabase dashboard to see the data being inserted
3. Verify Row Level Security is working properly

## 5. Production Considerations

- [ ] Set up proper email notifications
- [ ] Configure data backup policies
- [ ] Set up monitoring and alerts
- [ ] Review and test RLS policies
- [ ] Set up data retention policies (GDPR compliance)
- [ ] Configure proper indexes for performance
