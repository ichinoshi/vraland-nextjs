# VRA Land - cPanel Deployment Guide

This guide provides step-by-step instructions for deploying the VRA Land Next.js website to cPanel shared hosting.

## Prerequisites

- cPanel hosting account with Node.js support (recommended) or static hosting
- FTP/File Manager access
- Domain/subdomain configured
- SSL certificate (recommended)

## Deployment Options

### Option 1: Static Export (Recommended for Shared Hosting)

This method exports your Next.js app as static files that work on any web server.

#### Step 1: Prepare for Static Export

1. **Update Next.js Configuration**
   ```bash
   # The next.config.ts is already configured for static export
   # Just need to enable it when building for production
   ```

2. **Build and Export**
   ```bash
   npm run build
   npm run export
   ```

#### Step 2: Upload Files to cPanel

1. **Access cPanel File Manager**
   - Login to your cPanel
   - Open "File Manager"
   - Navigate to `public_html` (or your domain's document root)

2. **Upload Static Files**
   - Upload all contents from the `out/` folder to `public_html`
   - Ensure all files maintain their directory structure

3. **Set File Permissions**
   - Set folders to 755
   - Set files to 644

#### Step 3: Configure URL Rewriting

Create `.htaccess` file in `public_html`:

```apache
# VRA Land - URL Rewriting and Optimization

# Enable URL Rewriting
RewriteEngine On

# Force HTTPS (if SSL is available)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Compress files
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "origin-when-cross-origin"
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

### Option 2: Node.js Hosting (If Available)

If your cPanel supports Node.js applications:

#### Step 1: Create Node.js App

1. **Access Node.js App Manager**
   - Login to cPanel
   - Find "Node.js App" or "Node.js Selector"
   - Create new application

2. **Configure Application**
   - Node.js Version: 18.x or higher
   - Application Root: `vra-land`
   - Application URL: your domain/subdomain
   - Application Startup File: `server.js`

#### Step 2: Upload and Configure

1. **Upload Project Files**
   ```bash
   # Upload entire project to the application root
   # Exclude node_modules, .next, out folders
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

4. **Start Application**
   - Use cPanel Node.js interface to start the app
   - Or create startup script

## Environment Configuration

### Production Environment Variables

Create `.env.production` file:

```env
# Production API URL (replace with your domain)
NEXT_PUBLIC_API_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# SMTP Configuration (same as .env.local but for production)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
SMTP_TO_EMAIL=info@vraland.com.ph
SMTP_TO_EMAIL_GMAIL=your-email@gmail.com
```

## Build Scripts

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "build:static": "next build && next export",
    "deploy:prepare": "npm run build:static && echo 'Static files ready in out/ folder'",
    "clean:all": "rm -rf .next out node_modules/.cache"
  }
}
```

## Deployment Checklist

### Pre-Deployment
- [ ] Update production environment variables
- [ ] Test build process locally
- [ ] Verify all images and assets are included
- [ ] Check responsive design on various devices
- [ ] Test contact form functionality

### During Deployment
- [ ] Backup existing website (if any)
- [ ] Upload files via File Manager or FTP
- [ ] Set correct file permissions
- [ ] Configure .htaccess file
- [ ] Enable SSL certificate

### Post-Deployment
- [ ] Test website functionality
- [ ] Verify all pages load correctly
- [ ] Test contact form and newsletter signup
- [ ] Check mobile responsiveness
- [ ] Test page loading speeds
- [ ] Verify SEO meta tags

## Troubleshooting

### Common Issues

1. **404 Errors on Page Refresh**
   - Ensure `.htaccess` file is properly configured
   - Check URL rewriting rules

2. **Images Not Loading**
   - Verify image paths in the exported files
   - Check file permissions (should be 644)

3. **CSS/JS Not Loading**
   - Check file permissions
   - Verify cache settings in `.htaccess`

4. **Contact Form Not Working**
   - For static export, contact form won't work without backend
   - Consider using third-party form services like Formspree or Netlify Forms

### Performance Optimization

1. **Enable Gzip Compression**
   - Already included in `.htaccess`

2. **Optimize Images**
   - Use WebP format where possible
   - Compress images before upload

3. **Enable Browser Caching**
   - Configured in `.htaccess` file

## Alternative Solutions

### For Contact Form Functionality

Since static export doesn't support API routes, consider:

1. **Formspree** (formspree.io)
2. **Netlify Forms** (if using Netlify)
3. **EmailJS** (emailjs.com)
4. **Custom PHP script** (if cPanel supports PHP)

### Example PHP Contact Form

Create `contact.php`:

```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'info@vraland.com.ph';
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    if (mail($to, $subject, $body)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

## Support

For deployment issues:
1. Check cPanel documentation
2. Contact your hosting provider
3. Verify Node.js support availability
4. Consider upgrading hosting plan if needed

## Final Notes

- Static export is recommended for most shared hosting
- Node.js hosting provides full functionality but may cost more
- Always test thoroughly after deployment
- Keep backups of your website files
- Monitor website performance and loading times
