#!/bin/bash

# Setup script for Supabase environment variables
echo "Setting up environment variables..."

# Create .env.local file with Supabase credentials
cat > .env.local << 'EOF'
VITE_SUPABASE_URL=https://mlznnqhzipnaujvhlnwu.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sem5ucWh6aXBuYXVqdmhsbnd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNjExMzAsImV4cCI6MjA3MTYzNzEzMH0.ozQkxkWA93U_gmbdbxKMSKvT9Nih8S-KWDcUu1bbJJU
EOF

echo "✅ .env.local file created successfully!"
echo "🚀 Now run 'npm run dev' to start the development server"
echo "📋 Don't forget to run the database schema in your Supabase SQL Editor"
