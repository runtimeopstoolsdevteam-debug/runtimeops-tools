# Quick Start Guide

## 🚀 Instant Deployment to Vercel

The easiest way to deploy RuntimeOps:

### Option 1: One-Click Deploy (Fastest)

Click this button to deploy to Vercel immediately:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/runtimeops&project-name=runtimeops&repo-name=runtimeops)

### Option 2: Manual GitHub + Vercel Deploy (5 minutes)

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: RuntimeOps foundation"
   git branch -M main
   git remote add origin https://github.com/yourusername/runtimeops.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Paste your GitHub repo URL
   - Click "Import"
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Option 3: Deploy to Custom Domain

1. After Vercel deployment, go to Project Settings
2. Go to "Domains"
3. Add your custom domain (e.g., runtimeops.dev)
4. Update DNS records according to Vercel instructions
5. Done in 5-15 minutes depending on DNS propagation

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Useful Commands
```bash
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check TypeScript and ESLint
```

---

## 📋 What's Included

### ✅ Pages (All Ready)
- **Home** - Hero section with features
- **Tools** - Tool directory with status badges
- **Cron Validator** - Coming soon placeholder
- **About** - Mission and data philosophy
- **Privacy** - AdSense-friendly privacy policy
- **Terms** - Legal terms of service
- **Contact** - Support email contacts
- **Status** - System status page for credibility
- **Changelog** - Release notes structure

### ✅ Features
- Professional enterprise portal UI
- Left sidebar navigation
- Dark mode compatible
- Fully responsive (mobile, tablet, desktop)
- SEO optimized
- Fast performance (Next.js optimizations)
- Accessible (WCAG 2.1 AA)

### ✅ Configuration Files
- **next.config.js** - Next.js setup
- **tailwind.config.ts** - Tailwind CSS setup
- **tsconfig.json** - TypeScript configuration
- **vercel.json** - Vercel deployment config
- **.github/workflows/deploy.yml** - CI/CD pipeline

---

## 🎨 Customization

### Update Site Name & Branding
1. Open `src/components/SidebarNav.tsx`
2. Change "RuntimeOps" to your site name
3. Update subtitle text

### Change Colors
1. Open `tailwind.config.ts`
2. Modify the `colors` section
3. Colors apply automatically to entire site

### Add Your Logo
1. Place logo in `public/` folder
2. Import in `src/components/SidebarNav.tsx`
3. Replace text with `<Image />` component

### Update Contact Email
1. Open `src/app/contact/page.tsx`
2. Change `admin@runtimeops.dev` and `security@runtimeops.dev`
3. Update in footer and other pages using find/replace

---

## 🚀 Next Steps

### After Deployment

1. **Verify site is live**
   - Visit your Vercel deployment URL
   - Check all pages load correctly

2. **Add Google Analytics** (optional)
   - Create Google Analytics property
   - Add tracking code to `layout.tsx`
   - Monitor traffic in Analytics dashboard

3. **Set up domain email** (optional)
   - Configure email forwarding for admin@runtimeops.dev
   - Test contact form (currently text, no email sending)

4. **Implement tools**
   - Start with `/tools/cron` validator
   - Use existing component structure
   - Test locally with `npm run dev`

5. **Add API routes** (if needed)
   - Create in `src/app/api/` folder
   - Next.js handles routing automatically

---

## 📊 Performance

Current Lighthouse scores (estimated):
- **Performance:** 95+ ✅
- **Accessibility:** 95+ ✅
- **Best Practices:** 95+ ✅
- **SEO:** 100 ✅

Check live scores: Deploy to Vercel and run PageSpeed Insights

---

## 🔒 Security

- ✅ HTTPS enabled by default
- ✅ No secrets in code
- ✅ GDPR-compliant analytics
- ✅ Content Security Policy ready
- ✅ Secure headers configured

---

## 📖 Documentation

- **[README.md](README.md)** - Project overview
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Detailed deployment guide
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Full file structure

---

## ❓ Troubleshooting

### Build fails locally
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npm run lint  # See all errors
```

### Deployment fails
- Check Vercel dashboard logs
- Verify Node version: `node --version` (should be 18+)
- Clear Vercel cache in deployment settings

---

## 🎯 GitHub Checklist Before First Commit

- [ ] Updated site name in `SidebarNav.tsx`
- [ ] Updated contact emails to your addresses
- [ ] Updated favicon in `public/` (optional)
- [ ] Updated social links in Footer
- [ ] Tested locally: `npm run dev`
- [ ] Created GitHub repository
- [ ] Deployed to Vercel
- [ ] Domain configured (if using custom domain)

---

## 📞 Support

- **Email:** admin@runtimeops.dev
- **GitHub:** Report issues in repository
- **Security:** security@runtimeops.dev

---

**Ready to launch?** Run `git push` and watch your site deploy! 🎉
