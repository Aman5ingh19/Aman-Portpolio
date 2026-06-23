# 🌟 Aman Singh Portfolio

A modern, interactive portfolio website showcasing my work as a Full Stack Developer. Built with cutting-edge web technologies and featuring smooth animations, 3D elements, and a sleek design.

## 🚀 Live Demo



## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Interactive 3D Elements**: Dynamic 3D character animation in the hero section using Three.js
- **Smooth Scrolling**: Lenis smooth scroll integration for buttery-smooth navigation
- **GSAP Animations**: Professional-grade animations with ScrollTrigger
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Custom Cursor**: Interactive custom cursor effect for enhanced user experience
- **Project Showcase**: Dynamic project cards with hover effects and tech stack tags
- **Tech Stack Grid**: Interactive skills display with brand logos
- **Contact Section**: Social media integration with GitHub, LinkedIn, and Email
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server

### Animations & 3D
- **GSAP 3** - Professional animation library with ScrollTrigger
- **Framer Motion** - React animation library for smooth transitions
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Styling & UI
- **CSS Modules** - Scoped styling for components
- **React Icons** - Icon library with brand logos

### Additional Libraries
- **Lenis** - Smooth scroll implementation
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
Aman Portpolio/
├── public/                      # Static assets
│   ├── Aman_Singh_Resume.pdf   # Resume file
│   ├── favicon.svg             # Site favicon
│   └── certificates/           # Certificate PDFs
├── src/
│   ├── canvas/                 # Three.js 3D components
│   │   └── HeroScene.tsx      # 3D hero scene
│   ├── components/            # React components
│   │   ├── About/            # About section
│   │   ├── Contact/          # Contact section
│   │   ├── Experience/       # Experience section
│   │   ├── Footer/           # Footer component
│   │   ├── Hero/             # Hero section
│   │   ├── Navbar/           # Navigation bar
│   │   ├── Projects/         # Projects showcase
│   │   ├── HackerCharacter3D.tsx  # 3D character component
│   │   └── SocialSidebar.tsx      # Social media sidebar
│   ├── hooks/                # Custom React hooks
│   │   ├── useCustomCursor.ts    # Custom cursor logic
│   │   └── useLenis.ts           # Smooth scroll hook
│   ├── styles/               # Global styles
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── vite.config.ts         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Aman5ingh19/portfolio.git
cd "Aman Portpolio"
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Update Personal Information

1. **Profile Section** - Edit `src/components/About/About.tsx`
2. **Projects** - Update `src/components/Projects/Projects.tsx`
3. **Experience** - Modify `src/components/Experience/Experience.tsx`
4. **Contact Info** - Edit `src/components/Contact/Contact.tsx` and `src/components/SocialSidebar.tsx`

### Change Colors

Update CSS variables in `src/styles/global.css`:
- `--color-accent` - Primary accent color (currently neon green)
- `--color-bg` - Background color
- `--color-text` - Text colors

### Replace Resume

Replace `public/Aman_Singh_Resume.pdf` with your own resume file

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to deploy to any static hosting service.

### Deployment Options

- **Vercel** - Recommended for React apps
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for GitHub repositories
- **Cloudflare Pages** - Fast global CDN

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Aman Singh**

- GitHub: [@Aman5ingh19](https://github.com/Aman5ingh19)
- LinkedIn: [Aman Singh](https://www.linkedin.com/in/aman-singh-533519301/)
- Email: amansingh1992002@gmail.com

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- GSAP for powerful animation tools
- React Three Fiber for seamless React + Three.js integration
- All open-source contributors

## 📝 Notes

- Replace placeholder content with your own information
- Update social media links and contact details
- Add your own project images and descriptions
- Customize colors to match your personal brand

---

⭐ If you found this portfolio template helpful, please give it a star!
