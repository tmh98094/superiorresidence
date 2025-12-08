# Font and Logo Integration Guide

## Font Recommendations

Based on your luxury property brand, here are my recommendations:

### Primary Fonts (Recommended Order):
1. **Optima** - Best for display/headings
   - Elegant, timeless, sophisticated
   - Perfect for "SUPERIOR RESIDENCE" branding
   - Use for: Main headings, section titles

2. **New York** - Serif for body text
   - Editorial, refined, classic
   - Use for: Descriptive paragraphs, quotes, elegant body text

3. **Century Gothic** - Sans-serif for UI elements
   - Clean, modern, readable
   - Use for: Navigation, labels, secondary text

### Font Integration Steps:

1. **Upload Font Files** to `/public/fonts/` folder:
   ```
   /public/fonts/
   ├── Optima-Regular.woff2
   ├── Optima-Bold.woff2
   ├── NewYork-Regular.woff2
   ├── NewYork-Italic.woff2
   ├── CenturyGothic-Regular.woff2
   └── CenturyGothic-Bold.woff2
   ```

2. **Add to `index.css`** (I'll do this once you upload):
   ```css
   @font-face {
     font-family: 'Optima';
     src: url('/fonts/Optima-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
   }
   
   @font-face {
     font-family: 'New York';
     src: url('/fonts/NewYork-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
   }
   ```

3. **Update `tailwind.config.js`**:
   ```javascript
   fontFamily: {
     display: ['Optima', 'serif'],
     serif: ['New York', 'Georgia', 'serif'],
     sans: ['Century Gothic', 'system-ui', 'sans-serif'],
   }
   ```

---

## Logo Usage Strategy

You have 3 logo variants:
- **Logo1.png** - Gold logo (transparent background)
- **Logo2.png** - White logo (transparent background)
- **Logo3.png** - Black logo (transparent background)

### Recommended Usage:

#### 1. **Hero Section** - Use Logo1 (Gold)
   - Centered, large scale during intro animation
   - Gold creates premium feel against dark hero image
   - Transitions to navbar

#### 2. **Navbar** - Use Logo2 (White)
   - White logo for visibility on dark/transparent navbar
   - Maintains consistency when scrolling

#### 3. **Loading Screen** - Use Logo1 (Gold)
   - Premium first impression
   - Matches brand identity

#### 4. **Footer** - Use Logo2 (White)
   - White on dark background
   - Consistent with navbar

#### 5. **Unveiling Section** - Use Logo1 (Gold)
   - Currently uses SVG, can replace with gold PNG
   - Maintains premium aesthetic

#### 6. **Light Backgrounds** (if any) - Use Logo3 (Black)
   - For any future light-colored sections
   - Contact forms, modals, etc.

### Logo Replacement Implementation:

Replace the current SVG logo with PNG images:

**Current SVG locations:**
1. `components/Hero.tsx` - Line ~125 (SVG logo)
2. `components/Navbar.tsx` - Hidden logo space
3. `components/LoadingScreen.tsx` - Line ~35 (SVG logo)
4. `components/Unveiling.tsx` - Line ~55 (SVG leaf icon)

**Replacement code example:**
```tsx
{/* Replace SVG with PNG */}
<img 
  src="/images/Logo1.png" 
  alt="Superior Residence" 
  className="w-32 h-auto"
/>
```

---

## Next Steps:

1. **Upload fonts** to `/public/fonts/` folder
2. **Confirm logo files** are in `/public/images/` as:
   - Logo1.png (Gold)
   - Logo2.png (White)
   - Logo3.png (Black)
3. **Upload PropertyGuru award image** as `/public/images/propertyguru-award.png`
4. **Confirm video file** `/public/videos/broll2.mp4` is uploaded

Once uploaded, I'll:
- Integrate fonts into the CSS
- Replace SVG logos with PNG versions
- Update all components to use the new fonts
- Test and optimize

---

## Font Pairing Examples:

**Hero Section:**
- Title: Optima (display)
- Subtitle: Century Gothic (sans)

**Prelude Section:**
- Heading: Optima (display)
- Body: New York (serif)

**Features/Location:**
- Titles: Optima (display)
- Descriptions: New York (serif)

**Navigation:**
- Links: Century Gothic (sans)
