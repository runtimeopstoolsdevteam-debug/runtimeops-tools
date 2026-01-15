# Troubleshooting Guide

## Local Development Issues

### Issue: npm install fails

**Error:** `npm ERR! code ERESOLVE` or similar

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules

# Reinstall
npm install

# If still failing, use legacy peer deps
npm install --legacy-peer-deps
```

### Issue: `npm run dev` fails to start

**Error:** Port 3000 already in use

**Solution:**
```bash
# Use different port
npm run dev -- -p 3001

# Or kill process on port 3000
# On Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: TypeScript errors in editor

**Error:** Red squiggles in VS Code

**Solution:**
```bash
# Run type check
npm run lint

# This shows all TypeScript errors

# Fix manually or:
npm run build  # Will also show errors
```

### Issue: Changes not hot-reloading

**Error:** Page doesn't update when file changes

**Solution:**
1. Check terminal - should show file change logs
2. Hard refresh in browser: Ctrl+Shift+R
3. Restart dev server: Ctrl+C then `npm run dev`
4. Check `src/` folder permissions

### Issue: Tailwind classes not applying

**Error:** Styles don't show up

**Solution:**
```bash
# Ensure content paths in tailwind.config.ts are correct
# Check that file uses className (not class)
# Hard refresh browser cache

# Rebuild Tailwind
rm -rf .next
npm run dev
```

---

## Build Issues

### Issue: Build fails locally

**Error:** `next build` fails

**Solution:**
```bash
# Remove cache
rm -rf .next node_modules

# Reinstall
npm install

# Try building again
npm run build

# Check errors in output
```

### Issue: Type errors during build

**Error:** TypeScript errors preventing build

**Solution:**
```bash
# View all errors
npm run lint

# Fix one at a time

# Common fixes:
# - Missing imports: Add import statement
# - Type mismatches: Check function signatures
# - Undefined variables: Check spelling and scope
```

### Issue: Out of memory during build

**Error:** `JavaScript heap out of memory`

**Solution:**
```bash
# Increase Node.js memory limit
node --max-old-space-size=4096 node_modules/.bin/next build

# Or in package.json:
"build": "NODE_OPTIONS=--max_old_space_size=4096 next build"
```

---

## Deployment Issues

### Vercel: Deployment fails

**Error:** Build fails on Vercel dashboard

**Solution:**
1. Check build logs in Vercel dashboard
2. Common causes:
   - Different Node version locally vs Vercel
   - Missing environment variables
   - Syntax errors not caught locally
3. Ensure all changes pushed to GitHub
4. Try rebuild in Vercel dashboard

### Vercel: Site shows wrong content

**Error:** Old version of site still visible

**Solution:**
1. Vercel cache issue - redeploy manually
2. Browser cache - Hard refresh (Ctrl+Shift+R)
3. Wait 5-10 minutes for CDN cache clear
4. Check deployment shows correct commit SHA

### Vercel: Custom domain not working

**Error:** Domain doesn't resolve

**Solution:**
1. Wait 24-48 hours after DNS change
2. Verify DNS records:
   - Use https://www.digwebinterface.com
   - Check all records are correct
3. In Vercel dashboard:
   - Verify domain shows "Valid"
   - Check it's pointing to right project
4. Try browser cache clear

### Vercel: Environment variables not working

**Error:** Process.env.VAR is undefined

**Solution:**
1. Environment variables must start with `NEXT_PUBLIC_` for client-side
2. Check spelling matches between .env.local and code
3. Restart dev server after adding env vars
4. In Vercel:
   - Check variables in Settings > Environment Variables
   - Redeploy after adding new vars

### Vercel: Build takes too long

**Error:** Build timeout or very slow

**Solution:**
1. Check what dependencies are slow
2. Remove unused npm packages
3. Optimize images
4. Check for large files in src/
5. Split into separate projects if needed

---

## GitHub Issues

### Issue: Git push rejected

**Error:** `fatal: 'origin' does not appear to be a git repository`

**Solution:**
```bash
# Check remote is set
git remote -v

# If not set, add it
git remote add origin https://github.com/yourusername/runtimeops.git

# Verify then push
git push -u origin main
```

### Issue: Merge conflicts

**Error:** Cannot pull/merge - conflicts

**Solution:**
```bash
# See conflicts
git status

# Edit conflicted files manually
# Remove conflict markers <<<<<<< ======= >>>>>>>

# Stage resolved files
git add .

# Complete merge
git commit -m "Resolved merge conflicts"
```

### Issue: Accidentally committed node_modules

**Error:** Pushing huge files to GitHub

**Solution:**
```bash
# Remove from git history (advanced)
git rm -r --cached node_modules/
git commit -m "Remove node_modules"

# Ensure .gitignore has node_modules/
# Push

# Note: This rewrites history - coordinate with team
```

---

## Component & Page Issues

### Issue: Component doesn't render

**Error:** Page blank or component missing

**Solution:**
1. Check import path is correct
2. Ensure component exports properly:
   ```tsx
   export function MyComponent() { ... }
   // OR
   export default function MyComponent() { ... }
   ```
3. Check for TypeScript errors: `npm run lint`
4. Verify file is in src/components/

### Issue: Styling not applied to new component

**Error:** Tailwind classes don't work

**Solution:**
1. Check className spelling (no hyphens, use camelCase)
2. Ensure class is in tailwind.config.ts content paths
3. Use full class names (not dynamic):
   ```tsx
   // ✅ Good
   className="bg-neutral-900"
   
   // ❌ Bad - won't work
   className={`bg-${color}`}
   ```
4. Hard refresh browser

### Issue: Dark mode not working

**Error:** Dark mode doesn't toggle

**Solution:**
1. Check `dark:` classes in component
2. Ensure html/body has proper setup in layout.tsx
3. Test in browser - open DevTools
4. Check prefers-color-scheme in globals.css

### Issue: Responsive design breaks on mobile

**Error:** Layout wrong on small screens

**Solution:**
1. Use Tailwind responsive prefixes:
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2">
   ```
2. Test with browser DevTools (F12)
3. Check sidebar doesn't overlap on mobile (ml-64)
4. Mobile-first approach - add desktop styles with md:, lg:, etc.

---

## Performance Issues

### Issue: Site loads slowly

**Error:** Performance poor on Vercel

**Solution:**
1. Check Vercel Analytics dashboard
2. Identify slow API routes
3. Optimize images (use Next.js Image component)
4. Reduce JavaScript bundle:
   ```bash
   npm ls  # See dependency tree
   ```
5. Enable caching in vercel.json

### Issue: Lighthouse score low

**Error:** Lighthouse reports poor performance

**Solution:**
1. Check what metric is low
2. Common issues:
   - Cumulative Layout Shift: Add width/height to images
   - Largest Contentful Paint: Optimize images
   - First Input Delay: Reduce JavaScript
3. Remove unused CSS with PurgeCSS
4. Use Next.js Image optimization

---

## Security Issues

### Issue: Console warnings about security

**Error:** CSP or security warnings

**Solution:**
1. Add security headers in next.config.js:
   ```js
   async headers() {
     return [
       {
         source: '/:path*',
         headers: [
           { key: 'X-Content-Type-Options', value: 'nosniff' },
         ],
       },
     ]
   }
   ```
2. Test with security checkers
3. Monitor security.txt endpoint

### Issue: Secrets exposed in code

**Error:** API keys or passwords in git

**Solution:**
1. Immediately rotate the secret
2. Remove from code and git history
3. Use .env.local (already in .gitignore)
4. Never commit secrets - always use env vars
5. Scan with git-secrets tool

---

## Browser Compatibility

### Issue: Site doesn't work in old browsers

**Error:** Features missing in IE11, etc.

**Solution:**
1. This site targets modern browsers
2. If need for older browser support:
   - Use @next/polyfill in _document.tsx
   - Test with BrowserStack
   - Add fallbacks for CSS features
3. Check browser support:
   - next.config.js target setting
   - Can adjust in tsconfig.json

### Issue: Mobile Safari issues

**Error:** Site broken on iPhone/iPad

**Solution:**
1. Test in Safari DevTools (if on Mac)
2. Common issues:
   - Viewport meta tag (already included)
   - Sticky positioning bugs
   - Safe area insets for notch
3. Use webkit- prefixes for vendor features
4. Test on real device if possible

---

## Getting Help

### Still having issues?

1. **Check error message carefully** - usually tells you what's wrong
2. **Search for error + "Next.js"** - likely someone faced it
3. **Check files mentioned in error** - typos often obvious
4. **Review relevant documentation:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind Docs](https://tailwindcss.com/docs)
   - [TypeScript Handbook](https://www.typescriptlang.org/docs/)
5. **Ask for help:**
   - GitHub Issues: Post with error and steps to reproduce
   - Email: admin@runtimeops.dev
   - Stack Overflow: Tag with next.js, typescript, tailwindcss

### Reporting bugs

When reporting issues, include:
- Error message (exact copy from console/terminal)
- Steps to reproduce
- Expected behavior vs actual
- Environment (Node version, npm version, OS)
- Code snippet if applicable

---

## Quick Reference

### Essential Commands

```bash
# Development
npm run dev                 # Start dev server
npm run lint              # Check errors
npm run build             # Build for production
npm start                 # Run production build

# Debugging
npm run lint             # See all errors
node -e "console.log('test')"  # Quick test

# Git
git status               # See changes
git add .                # Stage changes
git commit -m "message"  # Commit
git push                 # Push to GitHub
git pull                 # Pull from GitHub

# Node version
node --version           # Check Node version
nvm use 18               # Switch to Node 18

# Kill port
lsof -ti:3000 | xargs kill -9  # Mac/Linux
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process  # Windows
```

---

**Still stuck? Email admin@runtimeops.dev for support!**
