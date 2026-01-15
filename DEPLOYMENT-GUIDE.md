# Deployment Guide - SMART RFP Portal

This guide walks you through deploying the SMART RFP Portal to production.

## 🔐 Current Password Protection

The portal now includes password protection with different credentials for each route:

- **Partner Route**: `BBC2026!` (Building Beloved Communities)
- **Client Route**: `SMART2026!` (SMART evaluation team)

### To Change Passwords

Edit the password object in `index.html`:

```javascript
const passwords = {
    partner: 'YOUR_NEW_PARTNER_PASSWORD',
    client: 'YOUR_NEW_CLIENT_PASSWORD'
};
```

## 📋 Pre-Deployment Checklist

Before deploying, complete these steps:

### 1. Update Contact Information
- [ ] Replace `[Your Email Here]` in `partner.html` and `client.html`
- [ ] Replace `[Your Phone Here]` in `partner.html` and `client.html`
- [ ] Add LinkedIn profile URLs where indicated
- [ ] Verify all email addresses are correct
- [ ] Add actual company logo if available

### 2. Test Password Protection
- [ ] Open `index.html` in browser
- [ ] Click "Building Beloved Communities" card
- [ ] Test partner password: `BBC2026!`
- [ ] Click "SMART" card
- [ ] Test client password: `SMART2026!`
- [ ] Verify incorrect passwords show alert

### 3. Test All Features
- [ ] Open `partner.html` directly (should work without password)
- [ ] Open `client.html` directly (should work without password)
- [ ] Test document viewer modal on both pages
- [ ] Verify all markdown files load correctly
- [ ] Test responsive design on mobile devices
- [ ] Check all animations work smoothly
- [ ] Verify countdown timer shows correct deadline

### 4. Verify Files Present
- [ ] index.html
- [ ] partner.html
- [ ] client.html
- [ ] css/styles.css
- [ ] css/partner.css
- [ ] css/client.css
- [ ] js/main.js
- [ ] js/animations.js
- [ ] js/partner.js
- [ ] js/client.js
- [ ] SMART-RFP-26-4364-Technical-Proposal.md
- [ ] SMART-RFP-26-4364-Pricing-Proposal.md
- [ ] SMART-RFP-26-4364-Required-Forms.md
- [ ] SMART-RFP-26-4364-Action-Plan.md
- [ ] SMART-RFP-26-4364-Submission-Checklist.md
- [ ] README.md

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Free & Easy)

#### Step 1: Create GitHub Repository

```bash
# Navigate to your project directory
cd c:\Users\MaxMu\Documents\projects\SMART

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - SMART RFP Portal"

# Create main branch
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/smart-rfp-portal.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Click "GitHub" and authorize Netlify to access your repositories
5. Select your `smart-rfp-portal` repository
6. Click "Deploy site"

#### Step 3: Configure Site

1. Netlify will deploy automatically in ~1-2 minutes
2. Once deployed, you'll get a URL like: `https://your-site-name.netlify.app`
3. You can:
   - Change the site name in Site Settings
   - Add a custom domain (e.g., `smart-rfp.yourcompany.com`)
   - Configure SSL/TLS (automatic on Netlify)

#### Step 4: Test Production Site

- [ ] Visit your Netlify URL
- [ ] Test password protection
- [ ] Test all pages and features
- [ ] Verify markdown documents load
- [ ] Check mobile responsiveness

#### Step 5: Enable Auto-Updates

Every time you push changes to GitHub, Netlify automatically:
1. Detects the new commit
2. Rebuilds the site
3. Deploys to production in ~1-2 minutes

No manual deployment needed!

### Option 2: Vercel (Alternative - Also Free & Fast)

#### Step 1: Create GitHub Repository

Same as Option 1, Step 1

#### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Add New" → "Project"
4. Select your `smart-rfp-portal` repository
5. Click "Deploy"

#### Step 3: Configure Site

Vercel will:
- Deploy automatically
- Provide a URL like: `https://smart-rfp-portal.vercel.app`
- Enable SSL/TLS automatically
- Set up continuous deployment

### Option 3: GitHub Pages (Free - Simple)

#### Step 1: Create GitHub Repository

Same as Option 1, Step 1

#### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" tab
3. Click "Pages" in left sidebar
4. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `main` → `/(root)`
5. Click "Save"

#### Step 3: Access Site

GitHub will deploy in ~1-2 minutes at:
`https://YOUR_USERNAME.github.io/smart-rfp-portal/`

### Option 4: Traditional Web Hosting

If you have traditional web hosting (cPanel, Plesk, etc.):

1. Compress all project files into a ZIP
2. Upload to your hosting provider's file manager
3. Extract to public HTML directory (usually `public_html` or `www`)
4. Update nameservers if using a custom domain

## 🔒 Security Considerations

### Password Protection Notes

The current implementation uses client-side JavaScript password checking. This provides:
- ✅ Basic access control
- ✅ Prevents casual browsing
- ⚠️ Not suitable for highly sensitive data

For enhanced security (if needed):

#### Option A: Server-Side Passwords
- Implement `.htaccess` (Apache) or `.htpasswd`
- Use server-side authentication
- More secure but requires server configuration

#### Option B: Authentication Service
- Use services like Auth0, Firebase Auth
- More robust but adds complexity
- Overkill for this use case

#### Current Recommendation
The current client-side implementation is appropriate because:
- This is a proposal portal, not handling sensitive user data
- Provides basic access control for different audiences
- Simple and maintainable
- No server setup required

### HTTPS/SSL

All recommended platforms (Netlify, Vercel, GitHub Pages) provide:
- ✅ Automatic SSL/TLS certificates
- ✅ HTTPS by default
- ✅ No manual configuration needed

If using traditional hosting:
- Enable Let's Encrypt (free SSL)
- Purchase SSL certificate from hosting provider
- Force HTTPS redirects

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create a Google Analytics 4 property
2. Get your GA4 measurement ID (format: `G-XXXXXXXXXX`)
3. Add this script to each HTML file's `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔄 Updating Content

### How Auto-Update Works

1. You edit markdown files on your computer
2. Commit and push to GitHub
3. Deployment platform detects changes
4. Site rebuilds and deploys automatically
5. Content updates in 1-2 minutes

### Example: Update Technical Proposal

```bash
# Edit the markdown file
# (Edit SMART-RFP-26-4364-Technical-Proposal.md)

# Commit changes
git add SMART-RFP-26-4364-Technical-Proposal.md
git commit -m "Update technical proposal methodology"

# Push to GitHub
git push

# Site updates automatically!
```

## 📱 Testing Checklist

After deployment, test on multiple devices:

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Edge (Windows)

### Mobile Devices
- [ ] iOS Safari (iPhone)
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet
- [ ] Firefox Mobile

### Tablet Devices
- [ ] iPad Safari
- [ ] Android Chrome Tablet

### Key Functionality Tests
- [ ] Password prompts work
- [ ] Documents load correctly
- [ ] Animations play smoothly
- [ ] Responsive layout adapts
- [ ] Scroll navigation works
- [ ] Contact form (if enabled)
- [ ] All external links open correctly

## 🆘 Troubleshooting

### Issue: Documents won't load
**Solution**: Use local server for testing
```bash
python -m http.server 8000
```

### Issue: Passwords not working
**Solution**: Check JavaScript console for errors
- Open Developer Tools (F12)
- Check Console tab for errors
- Verify password object exists in index.html

### Issue: Site not updating after push
**Solution**: 
- Check GitHub repository (are changes pushed?)
- Check deployment platform logs
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Broken images or links
**Solution**: 
- Verify file paths are correct
- Check case sensitivity (GitHub Pages is case-sensitive)
- Ensure all files are committed to repository

## 📞 Support

For deployment issues:
- **Netlify Support**: [netlify.com/support](https://www.netlify.com/support)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

**Recommended Choice**: Netlify for its ease of use, automatic HTTPS, and excellent free tier for static sites.
