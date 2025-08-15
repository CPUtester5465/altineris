# Cloudflare Pages Deployment Guide

## Quick Start

Your TaaFit landing page is ready for deployment! Here are the deployment options:

## Option 1: Git Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TaaFit landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/taafit-landing.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project" → "Connect to Git"
   - Select your repository

3. **Configure Build Settings:**
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18`

4. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be available at `https://your-project-name.pages.dev`

## Option 2: Direct Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages:**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project" → "Upload assets"
   - Upload the entire `dist` folder

## Option 3: Wrangler CLI

1. **Install Wrangler globally:**
   ```bash
   npm install -g wrangler
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   wrangler pages deploy dist
   ```

## Environment Variables (if needed)

If you need to add environment variables:
- In Cloudflare Pages dashboard, go to your project
- Navigate to "Settings" → "Environment variables"
- Add any required variables

## Custom Domain

To use a custom domain:
1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## Performance Tips

- Your site is already optimized for Cloudflare's global CDN
- Three.js assets are properly bundled and minified
- The build size is ~627KB (gzipped: ~169KB) which is excellent for the features included

## Troubleshooting

If you encounter issues:
1. Check the build logs in Cloudflare Pages dashboard
2. Ensure Node.js version is set to 18
3. Verify the build command and output directory are correct
4. Check browser console for any runtime errors

## What You Get

Your deployed site will include:
- ✨ Interactive Three.js background with volumetric lights
- 🎯 Custom animated cursor
- 📱 Smooth section scrolling (wheel, touch, keyboard)
- 💫 Interactive growth options with light effects
- 🎨 Modern glass morphism design
- 📱 Fully responsive across all devices

## File Structure

```
taafit-landing/
├── dist/                 # Built files for deployment
├── src/                  # Source code
│   ├── components/       # React components
│   ├── App.tsx          # Main app
│   └── index.css        # Styles
├── package.json         # Dependencies
├── vite.config.ts       # Build configuration
└── README.md           # Documentation
```

🎉 **Your landing page is ready to go live!**
