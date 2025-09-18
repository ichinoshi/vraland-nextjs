# VRA Land Deployment Modes

## 🔄 Automatic Environment Detection

Your project now automatically switches between Node.js and PHP based on the environment:

### **Development Mode (Node.js)**
```bash
# Start development server
npm run dev
```
- **Contact Form:** Uses `/api/contact` (Next.js API route)
- **Newsletter:** Uses `/api/newsletter` (Next.js API route)
- **Full Node.js functionality**
- **Hot reloading and development features**

### **Production Mode (cPanel/PHP)**
```bash
# Build for cPanel deployment
npm run build:cpanel
```
- **Contact Form:** Uses `/contact.php` (PHP script)
- **Newsletter:** Uses `/newsletter.php` (PHP script)
- **Static files generated in `out/` folder**
- **No Node.js required on server**

## 📁 File Structure

### **Development Files (Node.js)**
```
app/api/
├── contact/route.ts     # Node.js contact handler
└── newsletter/route.ts  # Node.js newsletter handler
```

### **Production Files (PHP)**
```
public/php/
├── contact.php         # PHP contact handler
└── newsletter.php      # PHP newsletter handler
```

## 🚀 Deployment Commands

### **For Development:**
```bash
npm run dev              # Start development server
npm run build           # Build for Node.js production
npm run start           # Start Node.js production server
```

### **For cPanel Deployment:**
```bash
npm run deploy:check    # Check for errors before deployment
npm run build:cpanel    # Build static files for cPanel
npm run deploy:prepare  # Build and show success message
```

## 🔧 Environment Variables

### **Development (.env.local)**
```env
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
# SMTP settings for Node.js API routes
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
# ... other SMTP settings
```

### **Production (cPanel)**
```env
NODE_ENV=production
DEPLOY_TARGET=cpanel
# PHP handles email directly, no SMTP env vars needed
```

## 📋 Component Logic

All form components automatically detect the environment:

```typescript
// Automatic endpoint selection
const apiEndpoint = process.env.NODE_ENV === 'production' 
  ? "/php/contact.php"      // PHP for cPanel
  : "/api/contact";         // Node.js for development
```

## 🎯 Deployment Steps

### **Step 1: Development**
1. Work normally with `npm run dev`
2. Forms use Node.js API routes
3. Full development features available

### **Step 2: cPanel Deployment**
1. Run `npm run build:cpanel`
2. Upload `out/` folder contents to `public_html`
3. Forms automatically use PHP scripts
4. No server configuration needed

## ✅ Benefits

### **Development Benefits:**
- ✅ Full Next.js development experience
- ✅ Hot reloading and debugging
- ✅ Node.js API routes with full functionality
- ✅ Environment variables for SMTP

### **Production Benefits:**
- ✅ Works on any cPanel hosting
- ✅ No Node.js server required
- ✅ PHP handles email natively
- ✅ Static files for fast loading
- ✅ Automatic environment detection

## 🔍 Testing

### **Test Development Mode:**
```bash
npm run dev
# Visit http://localhost:3000
# Forms should use /api/* endpoints
```

### **Test Production Mode:**
```bash
npm run build:cpanel
# Check out/ folder contents
# Forms should use /*.php endpoints
```

## 📝 Notes

- **No manual switching required** - environment detection is automatic
- **Same codebase** works for both Node.js and PHP deployment
- **PHP files** are included in static build automatically
- **Development** uses full Next.js features
- **Production** uses static files + PHP for forms

Your project now seamlessly supports both development and deployment environments! 🎉
