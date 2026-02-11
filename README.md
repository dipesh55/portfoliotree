# Portfolio Tree - React Edition

A modern, responsive portfolio website built with React.js, featuring a clean and minimal design.

## Features

* ⚛️ Built with React 18 and Vite
* 🎨 Light and Clean design
* 📱 100% Responsive
* 🧹 Clean, modular code structure
* 🎯 Component-based architecture
* 🚀 Fast development with Vite
* 🎭 Smooth animations with Anime.js
* 📊 Google Analytics integration
* 🔗 Social media integration
* 📘 Facebook SDK integration

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Anime.js** - Animation library
- **CSS3** - Styling with CSS Variables

## Project Structure

```
portfoliotree/
├── public/
│   └── images/          # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── LinksPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── ProfilePicture.jsx
│   │   ├── LinkList.jsx
│   │   ├── IconList.jsx
│   │   ├── BackgroundDecoration.jsx
│   │   └── FacebookEmbed.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useFacebookSDK.js
│   ├── styles/          # Component stylesheets
│   │   ├── LinksPage.css
│   │   └── BlogPage.css
│   ├── utils/           # Utility functions
│   │   └── analytics.js
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfoliotree
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deploy to Netlify

1. **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket).

2. **In Netlify:**
   - Go to [netlify.com](https://www.netlify.com) and sign in.
   - Click **Add new site** → **Import an existing project**.
   - Connect your Git provider and select this repository.

3. **Build settings** (usually detected from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. **Environment variables (optional):**  
   If you use EmailJS, add in **Site settings → Environment variables**:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

5. Click **Deploy site**. Netlify will build and host your portfolio; all routes (e.g. `/`, `/blog`) will work with React Router.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Routes

- `/` or `/links` - Main portfolio links page
- `/blog` - Blog page with Facebook embed

## Features Breakdown

### Components

- **LinksPage**: Main portfolio page with profile, links, and social icons
- **BlogPage**: Blog page with Facebook page embed
- **ProfilePicture**: Circular profile picture component
- **LinkList**: List of action links (Contact, Blog)
- **IconList**: Social media icon links
- **BackgroundDecoration**: Animated SVG background
- **FacebookEmbed**: Facebook page embed component

### Custom Hooks

- **useFacebookSDK**: Handles Facebook SDK loading and initialization

### Utilities

- **analytics.js**: Google Analytics tracking functions

## Configuration

### Google Analytics

Update the Google Analytics ID in `index.html`:
```html
gtag('config', 'UA-177429414-1');
```

### Facebook Page

Update the Facebook page URL in `src/components/FacebookEmbed.jsx`:
```jsx
data-href="https://www.facebook.com/dipesh.bhatta.18/"
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

## Author

Dipesh Bhatta

- GitHub: [@dipesh55](https://github.com/dipesh55)
- LinkedIn: [dipeshbhatta4](https://linkedin.com/in/dipeshbhatta4)
- Twitter: [@dipeshbhatta55](https://twitter.com/dipeshbhatta55)
