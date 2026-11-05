# Birthday Surprise Website for Dhana

A romantic, premium birthday surprise website built with React, Vite, Framer Motion, and Lucide icons. It includes a dreamy pink design, countdown, touch-friendly gallery, personal letter, music player, and final surprise section.

## Tech Stack

- React
- Vite
- JavaScript / TypeScript
- Framer Motion
- Lucide React
- HTML5 / CSS3

## Project Structure

```bash
baday/
├── public/
│   ├── audio/
│   │   └── placeholder-birthday.wav
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.tsx
│   ├── main.ts
│   ├── style.css
│   └── assets/
│       └── images/
│           ├── memory-1.svg
│           ├── memory-2.svg
│           ├── memory-3.svg
│           ├── memory-4.svg
│           └── memory-5.svg
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Commands

### 1. Install dependencies

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm install
```

### 2. Start the local development server

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm run dev -- --host 0.0.0.0
```

Then open:

```text
http://localhost:5173/
```

### 3. Build the production bundle

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm run build
```

### 4. Preview the production build locally

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm run preview -- --host 0.0.0.0
```

## Deployment Commands

### Deploy to Vercel

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm install -g vercel
vercel
```

If you want a production deploy:

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
vercel --prod
```

### Deploy to Netlify

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages (optional)

```bash
cd C:\Users\postb\OneDrive\Pictures\baday
npm install -g gh-pages
npm run build
npx gh-pages -d dist
```

## Customize the Website

### Replace the placeholder images

Put your own personal images in the folder below:

```bash
src/assets/images/
```

Recommended sizes:

- 900x1200 for gallery cards
- Keep the filenames as `memory-1.svg`, `memory-2.svg`, etc., or replace them with your own JPG/PNG files and update the imports in `src/App.tsx`.

### Replace the music

The placeholder track is located here:

```bash
public/audio/placeholder-birthday.wav
```

To add your own music:

1. Put your legally usable MP3/WAV file in `public/audio/`.
2. Update the audio source in `src/App.tsx`.
3. Keep your music volume low and tasteful for a romantic experience.

### Update the birthday date or text

You can edit the main content in:

- `src/App.tsx`
- `src/style.css`

The countdown target is currently set for:

```js
new Date('2026-11-19T00:00:00')
```

## Notes

- No backend is required for this project.
- The site is mobile responsive and designed with a soft romantic pink aesthetic.
- The custom design includes floating hearts, animated cards, a letter typing effect, gallery lightbox, and final surprise animation.

## Useful Commands

```bash
npm install
npm run dev -- --host 0.0.0.0
npm run build
npm run preview -- --host 0.0.0.0
```
