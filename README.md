# Sedo Martial Art — Official Brand & Sponsorships Portal

Production-ready personal brand and commercial partnerships website for **Sedo Martial Art**, an Ethiopian MMA fighter and Taekwondo champion with **2.4M TikTok followers** and **61.2M likes**. Tailored specifically for attracting premium brand deals, sponsorships, and commercial endorsements.

---

## 📁 Project Structure

```text
sedo-site/
├── index.html            # Semantic HTML5, 6-step collab form, phone video panel, SEO & icon meta
├── styles.css            # Custom editorial styling, #0A0A0A / #B10F1A / #F3EDE6 palette
├── script.js             # Status config, 4-language i18n, motion engine, form validator
├── manifest.json         # Web App Manifest for mobile install and standalone display
├── package.json          # Minimal package manifest ("private": true, no dependencies)
├── README.md             # Complete documentation and deployment guide
└── assets/
    ├── logo/
    │   ├── sedo-logo.png           # Master Sedo logo mark (ring + "S" + "SEDO MARTIAL ART")
    │   └── imako-logo.png          # Builder credit logo (automatic text fallback)
    ├── icons/
    │   ├── favicon.ico             # Desktop browser tab icon (16x16, 32x32, 48x48)
    │   ├── favicon-32.png          # 32x32 PNG browser tab icon
    │   ├── apple-touch-icon.png    # 180x180 PNG iPhone home screen icon
    │   └── icon-512.png            # 512x512 PNG Android / install icon
    ├── images/
    │   ├── sedo-poster.webp        # Hero carousel slide 1, combat poster in gallery
    │   ├── sedo-portrait.webp      # Hero slides 2 & 3, About portrait, gallery
    │   └── sedo-tiktok-profile.jpg # (Reference only — never displayed on site)
    ├── video/
    │   └── sedo-highlight.mp4      # Full-height 9:16 vertical video reel
    ├── press/
    │   └── sedo-press-kit.pdf      # Downloadable press kit (with coming-soon note)
    └── partners/                   # Brand partner logos for infinite marquee
```

---

## 🎯 Configurable Status Badge

At the top of [`script.js`](file:///c:/Users/ps/Desktop/Sedo%20martialart/script.js#L1-L25), you can easily modify Sedo's real-time career status:

```javascript
const STATUS_CONFIG = {
  text: "Training now", // Options: "Training now", "Fight night soon", "Available for collabs"
  color: "#B10F1A",     // Signature red accent
  pulse: true           // Animated breathing dot
};
```

---

## 🎨 Design System & Creative Features

1. **Editorial Palette**: Deep black (`#0A0A0A`), signature red (`#B10F1A`), deep ink red (`#8E0E16`), bone white (`#F3EDE6`), warm grey (`#9C918C`), and hairline structural dividers (`#2A1A1A`).
2. **Typography**: **Bodoni Moda** for display headlines; **Jost** for body and interface; **Noto Sans Ethiopic** and **Noto Sans Arabic** for native multi-language rendering.
3. **Geometry**: Zero border-radius across all cards and sections, with fully rounded pill elements reserved exclusively for tags, badges, and TikTok buttons.
4. **Interactive Motion & Transitions**:
   - **Loading Intro**: Displays the Sedo logo mark, followed by a letter-by-letter reveal of `Sedo`, signature red sweep bar, and curtain lift (`sessionStorage` cached for first visits only).
   - **Custom Red Cursor & Magnetic Buttons**: Smooth cursor tracking and interactive pull on CTAs.
   - **Split-Letter Headings & Red Clip-Path Wipes**: Progressive viewport entry transitions.
   - **Animated Metric Counters**: Counting up to 2.4M followers, 61.2M likes, and active campaigns.
   - **Interactive Career Timeline**: Dynamic red progress line tracking scroll position across milestone years.
   - **Fight Card Services**: Full-width rows with hover red sweep lines.
   - **Full-Height 9:16 TikTok Video Panel**: Autoplays in view; unmutes on desktop hover and tap-to-unmute on mobile.
   - **Parallax Portrait**: Subtle depth shift against the red offset frame on scroll.
   - **Brand Partner Marquee**: Infinite scrolling strip with automatic graceful fallback if logos are pending.
   - **Testimonials Slider**: Client quotes slider formatted strictly with placeholders.

---

## 💼 6-Step Brand Collaboration Form

A high-converting 6-step partnership workflow:
- **Step 1 (About you)**: Name, email, phone (Ethiopian local + international validation), preferred contact channel.
- **Step 2 (Your business)**: Brand name, category dropdown, city/country, website or social handle.
- **Step 3 (The collaboration)**: Multi-select interactive icon cards (Paid advertisement, Sponsorship, Product promotion, Event appearance, Ambassador partnership, Other), campaign goal, start date picker, audience description.
- **Step 4 (The details)**: Campaign description (minimum 30 characters with live character counter), discovery source.
- **Step 5 (Review)**: Comprehensive summary card with direct "Edit" links for each section and consent confirmation.
- **Step 6 (Dispatch)**: Formulates a plain-text proposal, copies it to the clipboard, opens the Telegram share link targeting **@Donkahan03**, and shows an accessible modal.

---

## 🌐 4-Language Localization & RTL Layout

Supports instantaneous switching between:
- **English (`en`)**
- **Amharic / አማርኛ (`am`)**
- **Afaan Oromo (`om`)**
- **Arabic / العربية (`ar`)** — sets `dir="rtl"` on `<html>` and dynamically mirrors margins, borders, and flex layouts.

---

## 🚀 Deployment to Vercel

The site is 100% static with **zero build configuration** and **no environment variables required**:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Production release of Sedo Martial Art brand site"
   git push -u origin main
   ```
2. In your [Vercel Dashboard](https://vercel.com/new):
   - Click **Add New...** > **Project** and select your repository.
   - Framework Preset: **Other**.
   - Build Command: *(Leave blank)*.
   - Output Directory: *(Leave blank)*.
   - Click **Deploy**.
3. Open the production link on your smartphone to test the full-height mobile video and multi-step collab form.
