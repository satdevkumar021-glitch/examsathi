# Supabase Setup Guide

## Quick Start (5 minutes)

1. Create a free Supabase project at https://app.supabase.com
2. Copy your project URL and anon key from Settings → API
3. Create `.env.local` in the project root (copy from `.env.local.example`)
4. Paste your credentials
5. Run `npm run dev`

## Enable Google OAuth (optional)
1. In Supabase dashboard: Authentication → Providers → Google
2. Add your Google OAuth client ID and secret
3. Add `http://localhost:3000` and your production URL to redirect URLs

## Email Templates
Supabase sends confirmation and reset emails automatically.
You can customise them at Authentication → Email Templates.

## What works without Supabase configured
- Guest/demo mode (localStorage only)
- All study material, mock tests, and flip cards
- Progress is NOT saved across devices in guest mode

## What requires Supabase
- Real account creation and login
- Progress sync across devices
- Streak and XP persistence
