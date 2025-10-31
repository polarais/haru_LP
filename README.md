# Haru Landing Page

This is the landing page for Haru - an AI-powered personal diary application.

## Features

- 🌏 Multi-language support (English, Korean, Japanese, Chinese)
- 💫 Beautiful gradient UI with pink/rose theme
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🎯 Framer Motion animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This landing page can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Google Cloud Run

## Configuration

Update the `handleGetStarted` function in `app/page.tsx` to redirect to your actual Haru app URL:

```typescript
const handleGetStarted = () => {
  window.location.href = 'https://your-actual-haru-app.com/register'
}
```

## License

All rights reserved.