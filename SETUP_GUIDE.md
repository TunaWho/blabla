# 🎉 Wedding Invitation Setup Guide

## Quick Start

### Option 1: Open Directly in Browser
Simply double-click on `index.html` or drag it into your web browser.

### Option 2: Using a Local Server (Recommended)

#### Using Python:
```bash
# Python 3
cd /home/haipro/Downloads/projects/simple-wedding-invitation
python3 -m http.server 8000

# Then open: http://localhost:8000
```

#### Using Node.js (http-server):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
cd /home/haipro/Downloads/projects/simple-wedding-invitation
http-server -p 8000

# Then open: http://localhost:8000
```

#### Using PHP:
```bash
cd /home/haipro/Downloads/projects/simple-wedding-invitation
php -S localhost:8000

# Then open: http://localhost:8000
```

## 📝 Customization Guide

### 1. Update Couple Names
**File**: `index.html`

Find and replace:
- Line 8: `[Nama CPW]` & `[Nama CPP]` → Your names
- Line 98: `Nama Wanita & Nama Pria` → Your names
- Line 199-203: Full names of bride and groom

### 2. Update Date & Time
**File**: `index.html`

- Line 101: `Sabtu, 21 April 2021` → Your date
- Line 129: `var harih = '03/21/2020 17:00:00';` → Your wedding date/time
- Line 228-230: Day, date, month
- Line 239: Akad time
- Line 249: Reception time

### 3. Update Location
**File**: `index.html`

- Line 103-105: Venue name, area, city
- Line 273-277: Detailed address
- Line 282: Google Maps embed URL
- Line 286: Google Maps direction link

### 4. Update Calendar Link
**File**: `index.html`

- Line 259: Replace with your Google Calendar event link

### 5. Update WhatsApp Numbers
**File**: `index.html`

- Line 411: CPW WhatsApp number (format: 628xxxxxxxxxx)
- Line 418: CPP WhatsApp number (format: 628xxxxxxxxxx)

### 6. Update Instagram Accounts
**File**: `index.html`

- Line 432: CPW Instagram username
- Line 436: CPP Instagram username

### 7. Update Photos
**Location**: `image/` folder

Replace these images with your photos:
- Background photos (hero section)
- Story photos (foto1-foto6 sections)
- Update CSS references in `css/menikah.css` (lines 832-871)

### 8. Customize Colors
**File**: `css/menikah.css`

Main color palette:
```css
#996E6D - Main theme color (dusty pink darkest)
#BC8887 - Lighter theme color (dusty pink darker)
#D8A9A8 - Light theme color (dusty pink)
#EDD2D1 - Very light (dusty pink lighter)
#F4E2E2 - Background (dusty pink lightest)
```

Find and replace these hex codes with your preferred colors.

## 🎨 Advanced Customization

### Change Fonts
**File**: `css/menikah.css` (Line 1)

Modify the Google Fonts import URL to use different fonts.

### Adjust Animation Speed
**File**: `index.html` (Line 472-476)

Change AOS animation settings:
```javascript
AOS.init({
  duration: 1000,  // Animation duration in ms
  offset: 100,     // Trigger offset
});
```

### Modify Countdown
**File**: `index.html` (Line 131-138)

```javascript
$('#hitungmundur').countdown({
  date: 'MM/DD/YYYY HH:MM:SS',
  offset: +7,  // Your timezone offset
});
```

## 📱 Testing

### Test Responsiveness
1. Open in browser
2. Press F12 (Developer Tools)
3. Click device toolbar icon
4. Test different screen sizes

### Test Animations
1. Scroll through all sections
2. Hover over buttons and photos
3. Click navigation links
4. Test mobile menu

### Browser Testing
Test in:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## 🚀 Deployment

### Option 1: Netlify (Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant URL

### Option 2: GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Access via: `username.github.io/repo-name`

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project folder
3. Follow prompts

### Option 4: Traditional Hosting
Upload all files to your web hosting via FTP:
- All HTML, CSS, JS files
- `image/` folder
- Maintain folder structure

## ⚠️ Important Notes

1. **Images**: Optimize images before uploading (compress to reduce file size)
2. **Testing**: Test on multiple devices before sharing
3. **Links**: Verify all WhatsApp and Instagram links work
4. **Date**: Double-check countdown date format
5. **Maps**: Ensure Google Maps location is correct

## 🎯 Checklist Before Publishing

- [ ] Updated all names
- [ ] Set correct date and time
- [ ] Updated location and map
- [ ] Replaced all photos
- [ ] Updated WhatsApp numbers
- [ ] Updated Instagram handles
- [ ] Tested countdown timer
- [ ] Checked all links work
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] Optimized images
- [ ] Proofread all text

## 💡 Tips

1. **Image Size**: Keep images under 500KB each for fast loading
2. **Preview**: Always test before sharing the link
3. **Backup**: Keep a copy of original files
4. **Custom Domain**: Consider purchasing a custom domain (e.g., yournames.com)
5. **QR Code**: Generate a QR code linking to your invitation

## 🆘 Troubleshooting

### Images Not Showing?
- Check file paths in CSS
- Ensure images are in `image/` folder
- Check file extensions (jpg, png)

### Countdown Not Working?
- Check date format: `MM/DD/YYYY HH:MM:SS`
- Verify timezone offset
- Check browser console for errors

### Animations Not Smooth?
- Test on different browser
- Check internet connection
- Try clearing browser cache

### Mobile Menu Not Opening?
- Ensure jQuery is loading
- Check browser console for errors
- Try different browser

## 📞 Need Help?

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all file paths are correct
3. Ensure all dependencies are loading
4. Test in different browser

---

**Enjoy your beautiful wedding invitation! 💕✨**

