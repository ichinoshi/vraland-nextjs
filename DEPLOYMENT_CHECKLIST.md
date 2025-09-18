# VRA Land - cPanel Deployment Checklist

## Pre-Deployment Preparation

### 1. Environment Setup
- [ ] Update `.env.production` with your actual domain and email settings
- [ ] Replace `https://vraland.com.ph` with your actual domain
- [ ] Configure production SMTP settings for contact form
- [ ] Test email functionality locally

### 2. Build Preparation
- [ ] Run `npm run deploy:check` to verify code quality
- [ ] Run `npm run deploy:prepare` to build static files
- [ ] Verify `out/` folder contains all necessary files
- [ ] Check that images are properly included

### 3. Domain & Hosting Setup
- [ ] Ensure your domain is pointed to your cPanel hosting
- [ ] Verify cPanel access and File Manager availability
- [ ] Check available disk space (project is ~50MB after build)
- [ ] Obtain SSL certificate (recommended)

## Deployment Steps

### Step 1: Build Static Files
```bash
# Clean previous builds
npm run deploy:clean

# Build for production
NODE_ENV=production npm run deploy:prepare
```

### Step 2: Upload to cPanel
- [ ] Login to cPanel
- [ ] Open File Manager
- [ ] Navigate to `public_html` (or your domain's document root)
- [ ] Backup existing files (if any)
- [ ] Upload all contents from `out/` folder
- [ ] Maintain directory structure during upload

### Step 3: Configure Server
- [ ] Upload `.htaccess` file to `public_html`
- [ ] Set file permissions:
  - Folders: 755
  - Files: 644
- [ ] Verify `.htaccess` is working (check URL rewriting)

### Step 4: SSL Configuration (Recommended)
- [ ] Enable SSL certificate in cPanel
- [ ] Update `.htaccess` to force HTTPS (uncomment lines 6-8)
- [ ] Test HTTPS access

## Post-Deployment Testing

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Development pages load (Sotera Township, Fairfield, Lazule)
- [ ] Individual property pages work
- [ ] Image galleries function properly
- [ ] Contact form submits (may not work with static export)
- [ ] Newsletter signup (may not work with static export)

### Performance Tests
- [ ] Page loading speed (should be under 3 seconds)
- [ ] Mobile responsiveness
- [ ] Image optimization
- [ ] Browser caching working
- [ ] Gzip compression active

### SEO & Analytics
- [ ] Meta tags are present
- [ ] Open Graph tags working
- [ ] Google Analytics (if configured)
- [ ] Search engine indexing

## Troubleshooting Common Issues

### 1. 404 Errors on Page Refresh
**Problem:** Direct URL access shows 404 error
**Solution:** 
- Verify `.htaccess` file is uploaded
- Check URL rewriting rules
- Ensure file permissions are correct

### 2. Images Not Loading
**Problem:** Images show broken links
**Solution:**
- Check image file paths in exported files
- Verify image files are uploaded
- Check file permissions (should be 644)

### 3. CSS/JavaScript Not Loading
**Problem:** Site appears unstyled or non-functional
**Solution:**
- Verify all static assets are uploaded
- Check file permissions
- Clear browser cache
- Check `.htaccess` cache settings

### 4. Contact Form Not Working
**Problem:** Contact form doesn't submit
**Note:** Static export doesn't support API routes
**Solutions:**
- Use Formspree (formspree.io)
- Use EmailJS (emailjs.com)
- Create custom PHP form handler
- Consider Node.js hosting for full functionality

## Alternative Deployment: Node.js Hosting

If your cPanel supports Node.js applications:

### Setup Steps
- [ ] Create Node.js app in cPanel
- [ ] Set Node.js version to 18.x or higher
- [ ] Upload entire project (not just `out/` folder)
- [ ] Install dependencies: `npm install`
- [ ] Build application: `npm run build`
- [ ] Configure environment variables in cPanel
- [ ] Start application

### Benefits of Node.js Hosting
- Full API route functionality
- Contact form works natively
- Newsletter signup works
- Server-side rendering
- Better SEO capabilities

## Contact Form Alternatives for Static Hosting

### Option 1: Formspree
1. Sign up at formspree.io
2. Create form endpoint
3. Update ContactForm component to use Formspree endpoint

### Option 2: EmailJS
1. Sign up at emailjs.com
2. Configure email service
3. Update ContactForm component to use EmailJS

### Option 3: PHP Form Handler
Create `contact.php` in `public_html`:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $message = $input['message'] ?? '';
    
    $to = 'info@vraland.com.ph';
    $subject = 'Contact Form Submission from VRA Land Website';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
```

Then update ContactForm to use `/contact.php` endpoint.

## Final Verification

### Before Going Live
- [ ] Test all pages and functionality
- [ ] Verify mobile responsiveness
- [ ] Check loading speeds
- [ ] Test contact methods
- [ ] Verify SSL certificate
- [ ] Check browser compatibility

### After Going Live
- [ ] Monitor website performance
- [ ] Set up website monitoring
- [ ] Configure backups
- [ ] Update DNS if needed
- [ ] Submit to search engines

## Support Resources

- **cPanel Documentation:** Check your hosting provider's cPanel guide
- **Next.js Static Export:** https://nextjs.org/docs/advanced-features/static-html-export
- **Hosting Support:** Contact your hosting provider for specific issues
- **VRA Land Updates:** Keep this checklist updated for future deployments

## Notes

- Static export is recommended for most shared hosting scenarios
- Node.js hosting provides full functionality but may cost more
- Always keep backups of your website files
- Monitor website performance after deployment
- Consider CDN for better global performance
