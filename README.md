# Sedo Martial Art — Personal Brand & Sponsorship Portal

Production-ready personal brand and commercial partnership website for **Sedo Martial Art**, an Ethiopian MMA fighter and martial arts creator with 2.4M TikTok followers and 61.2M likes. Designed for attracting brand deals, advertisements, and athletic sponsorships.

---

## 📁 Project Structure

```text
sedo-site/
├── index.html            # Semantic HTML5, accessible structure, SEO meta
├── styles.css            # Custom editorial CSS, deep black & red palette, zero-radius
├── script.js             # 4-language i18n, multi-step form, 3D tilt, video controller
├── package.json          # Minimal package.json ("private": true, no dependencies)
├── README.md             # Documentation, deployment guide, and asset guide
└── assets/
    ├── images/
    │   ├── sedo-poster.webp        # Hero 3D card & Photos gallery image
    │   ├── sedo-portrait.webp      # About section portrait & Photos gallery image
    │   └── sedo-tiktok-profile.jpg # (Reference only - never displayed on site)
    ├── video/
    │   └── sedo-highlight.mp4      # 9:16 phone-frame highlight reel
    └── logo/
        └── imako-logo.png          # Builder credit in footer (fallback text included)
```

---

## 🎨 Design Direction

- **Color Palette**:
  - Deep Black: `#0A0A0A`
  - Deep Ink Red: `#8E0E16`
  - Signature Red: `#B10F1A`
  - Bone White: `#F3EDE6`
  - Muted Warm Grey: `#9C918C` (secondary text)
  - Structural 1px dividers: `#2A1A1A`
- **Typography**:
  - Display: **Bodoni Moda** (weights 400 and 700)
  - Body & UI: **Jost** (weights 300, 400, 500)
  - Fallbacks: **Noto Sans Ethiopic** (Amharic), **Noto Sans Arabic** (Arabic)
- **Geometry**: Zero border-radius throughout, with an intentional 2px radius permitted only for the signature TikTok buttons.
- **Hero Card**: Cursor-responsive 3D tilt (max 8 degrees) with dynamic reflection and soft shadow. Disabled on touch devices and when `prefers-reduced-motion` is enabled.

---

## 🌐 Multi-Language Support

Includes full 4-language localization with layout mirroring (`dir="rtl"`) for Arabic:
1. **English (en)** — Default
2. **Amharic / አማርኛ (am)**
3. **Afaan Oromo (om)**
4. **Arabic / العربية (ar)**

Language selection is persisted safely in `localStorage` inside `try/catch` wrappers.

---

## 🚀 Deployment to Vercel

This site is a 100% static project that requires **no build step**, **no server**, and **no environment variables**.

### Step 1: Push or Import to Git
1. Push the project repository to your GitHub, GitLab, or Bitbucket account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sedo Martial Art brand site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Log in to [vercel.com](https://vercel.com) and click **"Add New..."** > **"Project"**.
2. Select your repository from the list.
3. In the project configuration:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./` (leave default)
   - **Build Command**: Leave blank (None)
   - **Output Directory**: Leave blank (None)
4. Click **Deploy**. Vercel will serve `index.html` and the `assets/` folder directly.

### Step 3: Test on Mobile
1. Open the deployed production URL on your smartphone browser (Safari or Chrome).
2. Test the **Collab Form**:
   - Fill in Step 1 (Full Name), Step 2 (Phone Number), Step 3 (Brand Name), and Step 4 (Description).
   - Tap **"Send request"**.
   - Verify that your proposal is copied to the clipboard and that the Telegram share window opens to send the message to **@Donkahan03**.
   - Check the confirmation modal to confirm the guidance message appears correctly.
3. Verify that the **9:16 highlight video** autoplays smoothly when scrolled into view and pauses when scrolled away.

---

## ⚙️ Customization & Placeholders

1. **Career Milestones & Biography**:
   In `index.html` and `script.js`, replace the placeholder tokens `[TITLE]`, `[YEAR]`, and `[WIN]` with Sedo's official match records and tournament titles.
2. **Builder Link**:
   In the footer of `index.html`, find `https://YOUR-IMAKO-SITE-URL` and update it to the live website of **Imako Solution**.
3. **Builder Logo**:
   Place `imako-logo.png` (or `imako-logo.svg`) inside `assets/logo/`. If absent, the site automatically falls back to clean bone-white text reading **"Imako Solution"** without layout shifts.

---

## 🛡️ Accessibility & Performance Standards

- **Semantic Elements**: Structured using `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, and `<footer>`.
- **Keyboard Navigation**: Complete tab accessibility with distinct `#B10F1A` focus indicators. Modals feature `Escape` key close and backdrop click dismissals.
- **Media Optimization**: Hero poster preloaded with `<link rel="preload">`. Gallery images load lazily (`loading="lazy"`). Video uses `preload="none"` with lazy assignment through `IntersectionObserver`.
- **Motion Accessibility**: Full compliance with `prefers-reduced-motion: reduce`.
