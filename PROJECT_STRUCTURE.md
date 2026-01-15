# Project Structure

```
runtimeops-tools/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD pipeline
├── public/
│   └── llms.txt                    # AI crawler information
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── changelog/
│   │   │   └── page.tsx            # Changelog page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   ├── privacy/
│   │   │   └── page.tsx            # Privacy policy
│   │   ├── status/
│   │   │   └── page.tsx            # System status
│   │   ├── terms/
│   │   │   └── page.tsx            # Terms of service
│   │   ├── tools/
│   │   │   ├── cron/
│   │   │   │   └── page.tsx        # Cron validator (coming soon)
│   │   │   └── page.tsx            # Tools index
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout with sidebar & footer
│   │   ├── not-found.tsx           # 404 page
│   │   ├── page.tsx                # Home page
│   │   ├── robots.ts               # robots.txt generation
│   │   └── sitemap.ts              # sitemap.xml generation
│   └── components/
│       ├── Button.tsx              # Button component
│       ├── Callout.tsx             # Alert/notice callout component
│       ├── Footer.tsx              # Global footer
│       ├── InfoCard.tsx            # Content card component
│       ├── PageContainer.tsx       # Page layout wrapper
│       ├── SidebarNav.tsx          # Left sidebar navigation
│       └── index.ts                # Component exports
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                       # Git ignore rules
├── CODE_OF_CONDUCT.md              # Community guidelines
├── CONTRIBUTING.md                 # Contribution guidelines
├── DEPLOYMENT.md                   # Deployment instructions
├── README.md                       # Project overview
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── vercel.json                     # Vercel deployment config
```

## Page Routes

| Route | Status | Description |
|-------|--------|-------------|
| `/` | ✅ Live | Home page with hero and features |
| `/tools` | ✅ Live | Tools index with all available tools |
| `/tools/cron` | ⏳ Soon | Cron dialect validator (coming soon) |
| `/about` | ✅ Live | About RuntimeOps mission |
| `/privacy` | ✅ Live | Privacy policy (AdSense-friendly) |
| `/terms` | ✅ Live | Terms of service |
| `/contact` | ✅ Live | Contact information |
| `/status` | ✅ Live | System status page |
| `/changelog` | ✅ Live | Release notes and updates |
| `/404` | ✅ Live | Custom 404 page |
| `/sitemap.xml` | ✅ Auto | XML sitemap for SEO |
| `/robots.txt` | ✅ Auto | robots.txt for crawlers |

## Components

- **SidebarNav** - Fixed left sidebar with navigation links
- **Footer** - Global footer with legal links
- **PageContainer** - Page layout wrapper with header
- **InfoCard** - Reusable content card with optional link
- **Callout** - Alert/notice boxes (info, warning, success)
- **Button** - Reusable button component (primary, secondary, ghost)
- **ButtonLink** - Button styled as link

## Tech Stack

- ✅ Next.js 14+ (App Router)
- ✅ TypeScript 5.3+
- ✅ Tailwind CSS 3.4+
- ✅ React 18.3+
- ✅ Lucide React Icons
- ✅ ESLint
- ✅ Vercel Ready

## Ready to Deploy

This project is fully configured for:
- ✅ Vercel (automatic)
- ✅ GitHub Pages
- ✅ Self-hosted (Node.js 18+)
- ✅ Docker/Container deployment
