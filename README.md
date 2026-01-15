# SMART RFP 26-4364 - Proposal Portal

Interactive web portal for the SMART (Suburban Mobility Authority for Regional Transportation) RFP 26-4364 - Enterprise Resource Planning (ERP) System Upgrade Consultant proposal.

## 🌟 Features

### Dual-Route Architecture
- **Partner Route** (`partner.html`) - Collaboration dashboard for joint venture partner (Building Beloved Communities, LLC)
- **Client Route** (`client.html`) - Professional proposal presentation for SMART evaluation team
- **Landing Page** (`index.html`) - Audience selection entry point

### Key Functionality

#### Partner Dashboard
- Real-time progress tracking (75% complete)
- Task tracker with priority levels and deadlines
- Document library with markdown auto-loading
- Countdown timer to submission deadline (February 13, 2026)
- Contact form for collaboration
- Timeline visualization of application phases

#### Client Page (SMART)
- Comprehensive proposal overview
- Problem statement addressing SMART's pain points
- Methodology explanation (Corporate Ethnography, Service Blueprints, etc.)
- 24-month roadmap visualization
- Pricing breakdown ($434,500 firm-fixed price)
- Team information section
- Document viewer for full proposal files

#### Technical Features
- **Auto-updating Markdown System**: Documents load dynamically from markdown files
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Animations**: Smooth transitions, hover effects, and scroll animations
- **Interactive Elements**: Document modal viewer, task tracking, progress indicators
- **No Build Required**: Pure HTML/CSS/JavaScript - opens directly in browser

## 📁 File Structure

```
SMART-RFP-Portal/
│
├── index.html              # Landing page with audience selection
├── partner.html            # Partner collaboration dashboard
├── client.html             # Client (SMART) proposal view
│
├── css/
│   ├── styles.css          # Global styles and base components
│   ├── partner.css         # Partner dashboard specific styles
│   └── client.css          # Client page specific styles
│
├── js/
│   ├── main.js             # Core functionality (scroll, forms, notifications)
│   ├── animations.js       # Animation controller
│   ├── partner.js          # Partner dashboard logic
│   └── client.js           # Client page logic
│
├── SMART-RFP-26-4364-Technical-Proposal.md      # Technical methodology
├── SMART-RFP-26-4364-Pricing-Proposal.md          # Pricing breakdown
├── SMART-RFP-26-4364-Required-Forms.md               # RFP forms 3.04-3.14
├── SMART-RFP-26-4364-Action-Plan.md                    # 29-day execution plan
├── SMART-RFP-26-4364-Submission-Checklist.md          # Final submission checklist
│
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Open Directly (No Server Required)
1. Open `index.html` in your web browser
2. Navigate to partner or client routes
3. All functionality works immediately

### Option 2: Local Server (Recommended for Markdown Loading)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Option 3: Deploy to Netlify (Auto-Update Setup)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SMART RFP Portal"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/smart-rfp-portal.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Deploy automatically

3. **Enable Auto-Update**
   - Every time you push changes to GitHub, Netlify auto-deploys
   - Markdown files update instantly in the portal
   - No manual deployment needed

## 📊 Document Viewer

The portal includes a built-in markdown viewer that:
- Fetches markdown files dynamically
- Converts to HTML using marked.js
- Adds table of contents for navigation
- Displays in a modal overlay
- Supports all standard markdown features

### Supported Documents
- Technical Proposal
- Pricing Proposal
- Required Forms
- Action Plan
- Submission Checklist

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #1a365d;      /* Main blue */
    --secondary-color: #00a8e8;    /* Accent blue */
    --accent-color: #ff6b35;       /* Orange accent */
}
```

### Contact Information
Update in `partner.html` and `client.html`:
```html
<p><i class="fas fa-envelope"></i> [Your Email Here]</p>
<p><i class="fas fa-phone"></i> [Your Phone Here]</p>
```

### Team Members
Add bios to `client.html` team section:
```html
<div class="team-card">
    <div class="team-avatar">
        <i class="fas fa-user"></i>
    </div>
    <h3>Name</h3>
    <p class="team-title">Title</p>
    <p class="team-bio">Bio text here</p>
</div>
```

## 🔧 Dependencies

### CDN Links (No Installation Required)
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Inter)** - Typography
- **Marked.js** - Markdown to HTML conversion

All loaded via CDN in HTML files - no npm or package.json needed.

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features Explained

### Corporate Ethnography Approach
Differentiates from traditional consultants by:
- Observing users in context (not just interviews)
- Discovering "Shadow ERP" (hidden workarounds)
- Creating Service Blueprints (visual process maps)
- Ensuring high user adoption

### Guardian Model
Implementation oversight that:
- Stands between SMART and software vendor
- Prevents scope creep
- Ensures deliverables meet requirements
- Provides independent quality assurance

### Firm-Fixed Pricing
Budget certainty through:
- $434,500 total investment
- Deliverable-based structure
- No hourly billing surprises
- Payment tied to milestones

## 📅 Important Dates

- **Pre-Proposal Conference**: January 23, 2026 @ 10:00 AM ET
- **Submission Deadline**: February 13, 2026 @ 3:00 PM ET
- **Contract Duration**: 24 months
- **Project Timeline**: Comprehensive roadmap with 4 phases

## 🔐 Security & Privacy

- No backend server required
- No user data collection
- All documents load client-side
- GitHub private repository recommended for sensitive data

## 📞 Support

For questions or issues:
- **Lead Consultant**: Maximilian Murphy
- **Partner**: Building Beloved Communities, LLC
- **Email**: [Your Email Here]
- **Phone**: [Your Phone Here]

## 📝 License

© 2026 Building Beloved Communities, LLC. All rights reserved.

## 🚀 Deployment Checklist

Before deploying to production:
- [ ] Update all placeholder contact information
- [ ] Replace "[Your Email Here]" with actual email
- [ ] Replace "[Your Phone Here]" with actual phone
- [ ] Add LinkedIn profile URLs
- [ ] Verify all markdown files are present
- [ ] Test document viewer functionality
- [ ] Test responsive design on mobile
- [ ] Verify countdown timer shows correct deadline
- [ ] Check all external links work
- [ ] Test contact form (or remove if not needed)

## 🎓 Next Steps

1. **Review Proposal Documents**
   - Technical Proposal
   - Pricing Proposal
   - Required Forms
   - Action Plan
   - Submission Checklist

2. **Partner Actions** (Building Beloved Communities, LLC)
   - Provide company legal structure (EIN, LLC/Corp status)
   - Confirm DBE certification status
   - Locate financial documentation (2023-2024)
   - Contact insurance broker for certificates
   - Review all proposal documents
   - Sign joint venture agreement
   - Approve final submission package

3. **Maximilian's Independent Tasks** (14 items)
   - Create Executive Summary (2-page compelling narrative)
   - Research competitive intelligence
   - Develop Grant Compliance Matrix
   - Prepare oral presentation materials
   - Create Service Blueprint examples
   - Expand Risk Management playbook
   - Develop Change Management strategy
   - Create Data Migration playbook
   - Design Reference package templates
   - Draft Project Charter outline
   - Complete 4 additional supporting documents

4. **Final Submission**
   - Assemble complete proposal package
   - Verify all RFP requirements met
   - Submit by February 13, 2026 @ 3:00 PM ET

---

**Good luck with the RFP submission! This portal is designed to showcase professionalism, innovation, and commitment to SMART's success.**
