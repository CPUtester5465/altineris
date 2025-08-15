# ALTINERIS Landing Page

A modern, interactive React landing page with Three.js background effects, built for deployment on Cloudflare Pages.

## Features

- ✨ **Interactive Three.js Background**: Volumetric lights, particles, and crystal effects
- 🎯 **Custom Cursor**: Animated cursor with glow effects
- 📱 **Smooth Section Scrolling**: Supports wheel, touch, and keyboard navigation
- 💫 **Interactive Growth Options**: Hover effects with light beams and particle bursts
- 🎨 **Modern Glass Morphism Design**: Dark theme with purple/violet accents
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **React 18** with TypeScript
- **Three.js** for 3D graphics and effects
- **Vite** for fast development and building
- **CSS3** with custom animations and glass morphism

## Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Deployment to Cloudflare Pages

### Method 1: Automatic Git Integration

1. Push your code to a GitHub repository
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`

### Method 2: Direct Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to Cloudflare Pages

### Method 3: Wrangler CLI

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Deploy:
   ```bash
   wrangler pages deploy dist
   ```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Main hero section with ALTINERIS branding
│   ├── Growth.tsx         # Interactive growth options section
│   ├── ComingSoon.tsx     # Coming soon section
│   ├── CustomCursor.tsx   # Custom animated cursor
│   ├── NavigationDots.tsx # Section navigation dots
│   └── ThreeBackground.tsx# Three.js background effects
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and animations
```

## Performance Optimizations

- Tree-shaking enabled for Three.js
- Code splitting with dynamic imports
- Optimized particle systems for smooth 60fps
- Efficient WebGL rendering with proper cleanup
- Responsive design with mobile optimizations

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with WebGL support

## License

MIT License
