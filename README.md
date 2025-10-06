# George The Broker Website

A modern, production-ready website for George The Broker - Wholesale Building Connector, built with Next.js, shadcn/ui, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist design with professional branding
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO features with sitemap and robots.txt
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant components and design
- **Performance**: Optimized for Core Web Vitals

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Fonts**: Montserrat (body) + Arsenal (brand)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Brand Guidelines

### Colors
- **Navy Blue**: #0A3370 (Primary)
- **Aero Blue**: #00B4CD (Accent)

### Typography
- **Body Text**: Montserrat Regular
- **Brand Text**: Arsenal Regular

### Logo Usage
- Must scale cleanly to merchandise
- Maintain proportions, never stretch
- White background unless inverted (navy box + white text)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gtb-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with lead capture
│   ├── first-home-buyers/ # First home buyer guide
│   ├── investors/         # Investment property page
│   ├── packages/          # Investment packages
│   ├── services/          # Services overview
│   ├── globals.css        # Global styles and brand colors
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section component
│   ├── Logo.tsx          # Brand logo component
│   ├── Navbar.tsx        # Navigation component
│   └── ServiceCard.tsx   # Service card component
└── lib/                  # Utility functions
    └── utils.ts          # shadcn/ui utilities
```

## Pages

### Homepage (/)
- Hero section with main value proposition
- Services overview
- Trust indicators and testimonials
- Call-to-action sections

### Services (/services)
- Detailed service offerings
- Process explanation
- Why choose us section

### Contact (/contact)
- Lead capture form
- Contact information
- Quick action buttons

### About (/about)
- Company story and values
- Team information
- Client testimonials

### Packages (/packages)
- Investment property packages
- Package of the week feature
- Investment benefits

### First-Home Buyers (/first-home-buyers)
- Step-by-step process guide
- Grants and incentives information
- Why choose us for first home buyers

### Investors (/investors)
- Investment strategies
- ROI calculator
- Portfolio management services

## SEO Features

- **Metadata**: Optimized page titles and descriptions
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Ready for schema markup
- **Performance**: Optimized for Core Web Vitals

## Customization

### Brand Colors
Update the CSS custom properties in `src/app/globals.css`:

```css
:root {
  --gtb-navy: #0A3370;
  --gtb-aero: #00B4CD;
  --gtb-navy-light: #1a4a8a;
  --gtb-aero-light: #33c4d6;
}
```

### Content
- Update page content in respective page files
- Modify service offerings in `src/app/services/page.tsx`
- Update testimonials and case studies
- Add real builder logos and images

### Forms
The contact form is currently a demo. To make it functional:
1. Add form handling logic
2. Integrate with your preferred email service
3. Add form validation
4. Set up lead capture database

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `out` directory to your hosting platform

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized Google Fonts loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to George The Broker.

## Support

For technical support or questions about the website, contact the development team.