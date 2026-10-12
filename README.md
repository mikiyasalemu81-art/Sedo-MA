# Sedo Martial Art — Official Brand & Sponsorships Portal

Production-ready personal brand and commercial partnerships website for **Sedo Martial Art**, an Ethiopian MMA fighter and Taekwondo champion with **2.4M TikTok followers** and **61.2M likes**. Tailored specifically for attracting premium brand deals, sponsorships, and commercial endorsements.

---

## 📁 Project Structure

```text
sedo-site/
├── index.html            # Semantic HTML5, 6-step collab form, phone video panel, SEO meta
├── styles.css            # Custom editorial styling, #0A0A0A / #B10F1A / #F3EDE6 palette
├── script.js             # Status config, 4-language i18n, motion engine, form validator
├── package.json          # Minimal package manifest ("private": true, no dependencies)
├── README.md             # Complete documentation and deployment guide
└── assets/
    ├── images/
    │   ├── sedo-poster.webp        # Hero carousel slide 1, combat poster, logo mark
    │   ├── sedo-portrait.webp      # Hero slide 2 & 3, About portrait, gallery
    │   └── sedo-tiktok-profile.jpg # (Reference only — never displayed on site)
    ├── video/
    │   └── sedo-highlight.mp4      # Full-height 9:16 vertical video reel
    ├── logo/
    │   └── imako-logo.png          # Builder credit logo (automatic text fallback)
    ├── press/
    │   └── sedo-press-kit.pdf      # Downloadable press kit (with coming-soon note)
    └── partners/                   # Brand partner logos for infinite marquee
```

---

## 🎯 Configurable Status Badge (Idea 12)

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
   - **Loading Intro**: Letter-by-letter reveal of `SEDO`, red sweep bar, and curtain lift (`sessionStorage` cached for first visits only).
   - **Custom Red Cursor & Magnetic Buttons (Idea 4)**: Smooth cursor tracking and interactive pull on CTAs.
   - **Split-Letter Headings (Idea 6) & Red Clip-Path Wipes (Idea 7)**: Progressive viewport entry transitions.
   - **Animated Metric Counters (Idea 8)**: Counting up to 2.4M followers, 61.2M likes, and active campaigns.
   - **Interactive Career Timeline (Idea 9)**: Dynamic red progress line tracking scroll position across milestone years.
   - **Fight Card Services (Idea 10)**: Full-width rows with hover red sweep lines.
   - **Full-Height 9:16 TikTok Video Panel (Idea 11)**: Autoplays in view; unmutes on desktop hover and tap-to-unmute on mobile.
   - **Parallax Portrait (Idea 13)**: Subtle depth shift against the red offset frame on scroll.
   - **Brand Partner Marquee (Idea 14)**: Infinite scrolling strip with automatic graceful fallback if logos are pending.
   - **Testimonials Slider (Idea 19)**: Client quotes slider formatted strictly with placeholders.

---

## 💼 6-Step Brand Collaboration Form (Ideas 15 & 16)

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
