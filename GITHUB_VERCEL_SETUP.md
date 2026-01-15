# GitHub & Vercel Setup Guide

## Step 1: Create GitHub Repository

### Option A: Using Git CLI

```bash
# Navigate to project directory
cd c:\Users\likhi\source\repos\runtimeops-tools

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: RuntimeOps foundation

- Next.js 14+ app with App Router
- TypeScript and Tailwind CSS
- Professional portal-style UI
- All required pages: home, tools, about, privacy, terms, contact, status, changelog
- SEO optimized (sitemap.xml, robots.txt)
- Dark mode support
- Fully responsive design
- Ready for Vercel deployment"

# Set main branch
git branch -M main

# Add remote repository (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/runtimeops.git

# Push to GitHub
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Go to https://github.com/new
2. Enter repository name: `runtimeops`
3. Add description: `Production debugging utilities for engineers`
4. Choose "Public" (for credibility)
5. Click "Create repository"
6. Follow the "or push an existing repository from the command line" instructions

---

## Step 2: Deploy to Vercel

### Option A: Vercel GitHub App (Recommended)

1. Go to https://vercel.com/new
2. Click "GitHub" button
3. Install Vercel GitHub App (allows auto-deployments)
4. Select your `runtimeops` repository
5. Click "Import"
6. **Framework Preset:** Select "Next.js"
7. **Build Command:** `npm run build`
8. **Output Directory:** `.next` (auto-filled)
9. Click "Deploy"
10. Wait 60-90 seconds for deployment
11. Congratulations! Your site is live! 🎉

### What Happens Automatically
- Every `git push` to main automatically deploys
- Vercel creates unique URLs for PRs
- Free SSL/HTTPS certificate
- CDN edge caching for speed

---

## Step 3: Configure Custom Domain (Optional)

### In Vercel Dashboard

1. Go to Project Settings
2. Click "Domains"
3. Enter your domain: `runtimeops.dev`
4. Click "Add"
5. Choose DNS option (recommended for flexibility)

### Update DNS at Your Registrar

For most registrars (GoDaddy, Namecheap, etc.):

1. Go to your domain registrar's DNS settings
2. Add Vercel's nameservers (shown in Vercel dashboard):
   ```
   ns1.vercel.com
   ns2.vercel.com
   ns3.vercel.com
   ns4.vercel.com
   ```
3. Wait 24-48 hours for DNS propagation
4. Verify in Vercel dashboard (should show "Valid")

**Alternative:** CNAME record (if nameserver update not allowed)
- Add CNAME record pointing to Vercel's domain
- Instructions provided in Vercel dashboard

---

## Step 4: Environment Variables (Optional)

If you add features that need configuration:

### In Vercel Dashboard

1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables (examples):
   ```
   NEXT_PUBLIC_ANALYTICS_ID=your_google_analytics_id
   ```

### Locally (Development)

Create `.env.local`:
```env
NEXT_PUBLIC_ANALYTICS_ID=your_google_analytics_id
```

---

## Step 5: GitHub Actions CI/CD (Optional)

The project includes automatic workflows. To enable:

### Add Vercel Secrets to GitHub

1. Go to GitHub repo Settings
2. Click "Secrets and variables" > "Actions"
3. Create these new secrets:

   **VERCEL_TOKEN**
   - Go to https://vercel.com/account/tokens
   - Create new token
   - Copy value
   - Paste in GitHub secret

   **VERCEL_ORG_ID**
   - In Vercel dashboard, go to Settings
   - Copy Organization ID
   - Paste in GitHub secret

   **VERCEL_PROJECT_ID**
   - In Vercel, go to Project Settings
   - Copy Project ID
   - Paste in GitHub secret

### Workflow Behavior

Now every push runs:
- ✅ Lint & type checking
- ✅ Build verification
- ✅ Auto-deploy to Vercel (main branch only)

---

## Step 6: GitHub Repository Settings (Recommended)

### Branch Protection

1. Go to Settings > Branches
2. Click "Add rule"
3. Pattern: `main`
4. Check "Require status checks to pass before merging"
5. Check "Require code reviews"
6. Click "Create"

### Repository Description & Topics

1. Go to Repository Settings
2. Add description:
   ```
   Production debugging utilities for engineers. 
   Built with Next.js 14+, TypeScript, Tailwind CSS.
   ```
3. Add topics:
   - debugging
   - production
   - devtools
   - next.js
   - typescript
   - tailwindcss

### Disable Features (Optional)

1. Go to Settings
2. Uncheck "Wikis" (if not using)
3. Uncheck "Projects" (if not using)
4. Uncheck "Discussions" (unless planning community features)

---

## Step 7: GitHub Pages (Alternative to Vercel)

If you prefer GitHub Pages instead of Vercel:

1. Go to Settings > Pages
2. Set "Source" to "GitHub Actions"
3. Choose Next.js workflow
4. Follow the template instructions
5. Site publishes to `username.github.io/runtimeops`

---

## Continuous Development

### Workflow for Updates

```bash
# Create feature branch
git checkout -b feature/add-cron-validator

# Make changes, test locally
npm run dev

# Commit changes
git add src/app/tools/cron/page.tsx
git commit -m "feat: add cron validator tool

- Support for Azure, Quartz, Unix dialects
- Real-time validation
- Error highlighting"

# Push to GitHub
git push origin feature/add-cron-validator

# Create Pull Request on GitHub
# Request review
# Merge when approved

# GitHub Actions automatically runs tests
# Vercel automatically deploys to production
```

### Project Management (Optional)

Use GitHub Issues to track:
- Feature requests
- Bug reports
- Tasks for implementation

Use GitHub Projects (old) or Milestones for roadmap planning

---

## Monitoring & Analytics

### Vercel Analytics
- Built-in to Vercel dashboard
- No additional setup needed
- View traffic, performance, errors

### Google Analytics (Optional)

1. Create Google Analytics 4 property
2. Get Measurement ID
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Install `@react-ga/core` or similar
5. Initialize in `layout.tsx`

---

## Security Best Practices

### GitHub

1. Enable two-factor authentication
2. Use personal access tokens (not passwords)
3. Review deployed commits in Vercel dashboard
4. Keep dependencies updated:
   ```bash
   npm outdated
   npm update
   ```

### Environment Variables

✅ Never commit secrets to Git
❌ Don't add `.env.local` to repository (already in `.gitignore`)
✅ Use Vercel dashboard for production secrets

### Dependencies

Keep npm packages updated:
```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## Troubleshooting

### Deployment fails
- Check Vercel build logs
- Ensure all TypeScript errors are fixed: `npm run lint`
- Verify `.gitignore` isn't excluding important files

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Check domain settings in Vercel dashboard
- Verify DNS records with https://www.digwebinterface.com

### GitHub Actions not running
- Check `.github/workflows/deploy.yml` syntax
- Verify secrets are set correctly
- Check GitHub Actions logs in repository

### Local dev broken after pull
```bash
# Reinstall dependencies
npm install

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

---

## Final Checklist

- [ ] GitHub repository created and initialized
- [ ] All files pushed to GitHub
- [ ] Vercel connected to GitHub repository
- [ ] Initial deployment successful
- [ ] Custom domain configured (optional)
- [ ] GitHub Actions secrets configured (optional)
- [ ] Repository settings optimized
- [ ] Branch protection enabled (recommended)
- [ ] README updated with your details
- [ ] Team members have GitHub access

---

## Next Steps

1. **Monitor deployment** - Check Vercel dashboard
2. **Test live site** - Visit your Vercel URL or custom domain
3. **Share with team** - Give teammates access
4. **Implement tools** - Start building the actual debugging tools
5. **Set up monitoring** - Add error tracking (Sentry, etc.)
6. **Plan roadmap** - Use GitHub Issues for feature tracking

---

**Your RuntimeOps site is now live on GitHub and Vercel! 🚀**
