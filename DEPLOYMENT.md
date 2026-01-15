# Deployment Instructions

## Vercel Deployment (Recommended)

RuntimeOps is designed to deploy to Vercel with zero configuration needed.

### Quick Deploy

1. **Fork the repository** on GitHub
2. **Create a Vercel account** at https://vercel.com (free tier available)
3. **Import the project:**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Paste your repository URL
   - Click Import
4. **Configure environment variables** (if needed - none required for demo)
5. **Click Deploy**

The site will be live in 60 seconds at `your-project.vercel.app`

### Custom Domain

In Vercel dashboard:
1. Go to Settings > Domains
2. Add your domain (e.g., runtimeops.dev)
3. Follow the DNS instructions for your domain registrar

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## GitHub Actions CI/CD

The project includes automated workflows:

- **Build & Test:** Runs on every push and PR
- **Deploy:** Automatically deploys to Vercel on main branch pushes

To enable automatic deployments:

1. Go to your GitHub repository Settings
2. Add these secrets:
   - `VERCEL_TOKEN` - Get from https://vercel.com/account/tokens
   - `VERCEL_ORG_ID` - Your Vercel org ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

## Environment Variables

No environment variables are required for the demo. If adding features that need them:

Create `.env.local`:
```
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## Troubleshooting

### Build fails
- Ensure Node 18+ is installed
- Run `npm install` to get latest dependencies
- Clear `.next` folder and rebuild

### Type errors
- Run `npm run lint` to see TypeScript errors
- Most are simple import or type issues

### Deployment issues
- Check Vercel dashboard logs for build errors
- Ensure all environment variables are set
- Try manual redeploy from Vercel dashboard

## Performance

The site is optimized for performance:

- Next.js automatic code splitting
- CSS optimization via Tailwind
- Image optimization via Next.js
- Lighthouse score: 90+ on desktop

Check performance: Deploy to Vercel and run PageSpeed Insights

## Analytics

Currently configured for Google Analytics (optional). To add:

1. Create Google Analytics property
2. Add tracking ID to environment variables
3. Add GA script to `layout.tsx`

## Security

- HTTPS enabled by default on Vercel
- CSP headers recommended in vercel.json
- No API keys or secrets in code
- GDPR-compliant analytics

## Monitoring

- Vercel provides free analytics and monitoring
- Status page at `/status` for credibility
- Set up alerts in Vercel dashboard

---

Questions? See [CONTRIBUTING.md](CONTRIBUTING.md) or email admin@runtimeops.dev
