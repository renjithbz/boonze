# Boonze Repository Summary

## Project Overview

**Boonze Media Solutions** is a digital marketing agency website built with Hugo static site generator. Founded in 2005, Boonze specializes in SEM, PPC, and SEO services for agencies, publishers, and SMBs based in Chennai, India.

- **Website**: https://boonze.com
- **Services**: Search Engine Marketing, Pay-Per-Click advertising, SEO outsourcing
- **Sister Company**: O3M Directional Marketing (spun out in 2010)

## Tech Stack

- **Static Site Generator**: Hugo v0.83.1
- **Theme**: Custom "boonze" theme from gethugothemes.com
- **CMS**: Previously Forestry.io (deprecated as of April 2024)
- **Hosting**: Netlify with automated deployment
- **Forms**: Formspree.io integration
- **Version Control**: GitHub

## Directory Structure

```
boonze/
├── .forestry/          # Forestry CMS configuration (deprecated)
├── archetypes/         # Hugo content templates
├── content/            # Site content and pages
│   ├── about-us/
│   ├── careers/
│   ├── contact-us/
│   ├── services/
│   └── *.md           # Individual pages
├── i18n/              # Internationalization files
├── resources/         # Hugo generated resources
├── static/            # Static assets (images, CSS, JS)
├── themes/boonze/     # Custom Hugo theme
├── config.toml        # Hugo configuration
├── netlify.toml       # Netlify deployment config
└── readme             # Project documentation
```

## How to Build and Deploy

### Local Development

1. **Install Hugo** (v0.83.1 or compatible)
   ```bash
   # Download from https://gohugo.io/getting-started/installing/
   ```

2. **Clone and serve locally**
   ```bash
   git clone <repository-url>
   cd boonze
   hugo server -D
   ```

3. **Access site at** `http://localhost:1313`

### Production Build

```bash
hugo --minify --gc
```

### Deployment Workflow

```
GitHub Repository
       ↓ (webhook trigger)
   Netlify Build
       ↓ (hugo --minify --gc)
   Live Website (boonze.com)
```

### Netlify Configuration

- **Build Command**: `hugo --minify --gc`
- **Publish Directory**: `public`
- **Hugo Version**: 0.83.1
- **Security Headers**: Configured in netlify.toml

### Content Management

- **Previous CMS**: Forestry.io (deprecated)
- **Current**: Direct file editing in GitHub
- **Contact Forms**: Handled by Formspree.io

## Key Features

- Responsive design with custom Hugo theme
- Multi-page business website structure
- Client testimonials and case studies
- Industry-specific service pages
- Contact form integration
- SEO optimized with proper meta tags
- Security headers for production deployment