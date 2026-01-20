# GOLDEN CHOICE — Website Starter (Static)

This is a **static** (HTML/CSS/JS) starter template that matches the modern corporate feel you want and includes all required sections and behaviors:

- Top black bar: **Doha, Qatar live digital clock + date**
- Sticky navbar with **Services dropdown** that scrolls to Services and opens the correct tab
- Home hero with **3 images** + arrow overlay buttons that jump to **Contact Us**
- Auto-rotating **partner logos marquee** under the hero
- **Vertical tabs** sections for About, Services, and Team
- Award Function 2023 **gallery grid** with lightbox
- Technology Partners **logo grid**
- Certificates **grid** with lightbox
- 3 integrated image sections
- Contact Us section with form validation (front-end demo)

## 1) Where to put images

Put **all** your images here:

```
assets/images/
```

### Required filenames
Use these exact names (including spaces and parentheses). If your files are `.png`, keep them `.png`. If some are `.jpg`, that’s fine too — the site tries `.png/.jpg/.jpeg/.webp` automatically for most images.

**Logo**
- `logos (1).png` (or `.jpg`)  ← company logo

**Home images**
- `Homepage11.png`
- `homepage22.png` (or `.jpg`)
- `homepage33.png` (or `.jpg`)

**Partner logos** (used in marquee + Technology Partners grid)
- `logos (3).png` … `logos (18).png` (and duplicate `logos (18)` as listed)

**About images**
- `OUR VISION.png`
- `OUR MISSION.png`
- `About our company.png`

**Services images**
- `Recruitment Services.png`
- `Housekeeping Services.png`
- `Manpower Outsourcing Services.png`
- `Hospitality Services.png`
- `PRO SERVICES.png`

**Award Function photos**
- `photos (8).png` … `photos (22).png`

**Certificates**
- `Certificates (1).png` … `Certificates (8).png`

**Integrated images**
- `Industries we serve.png`
- `Manpower recruitment.png`
- `Human resources.png`

> Tip: If you want to rename files to remove spaces, you can — but then you must update the names inside `script.js` and `index.html`.

## 2) Run locally
Because this is static, you can run it in several ways:

### Option A — Open directly
Open `index.html` in your browser.

### Option B — Use a tiny local server (recommended)
From this folder:

```bash
python3 -m http.server 5173
```

Then open:

- `http://localhost:5173`

## 3) Deploy
Upload this folder to GitHub and deploy on Netlify/Vercel/GitHub Pages.

## 4) Notes for Codex
If you want Codex to convert this into a full Next.js/Tailwind project later, this starter gives it:

- The full section structure
- Working UI logic (tabs, dropdown, deep-linking, lightbox)
- A clear list of required assets
