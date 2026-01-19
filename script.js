(() => {
  // ----------------------------
  // Doha Clock (Asia/Qatar)
  // ----------------------------
  const clockEl = document.getElementById('dohaClock');
  const dateEl = document.getElementById('dohaDate');

  const timeFmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Qatar',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateFmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Qatar',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  function tick() {
    const now = new Date();
    if (clockEl) clockEl.textContent = timeFmt.format(now);
    if (dateEl) dateEl.textContent = dateFmt.format(now);
  }
  tick();
  setInterval(tick, 1000);

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ----------------------------
  // Navbar dropdown (desktop)
  // ----------------------------
  const dropdown = document.querySelector('[data-dropdown]');
  const dropdownBtn = document.querySelector('[data-dropdown-button]');
  const dropdownMenu = document.querySelector('[data-dropdown-menu]');

  function closeDropdown() {
    dropdown?.classList.remove('is-open');
    dropdownBtn?.setAttribute('aria-expanded', 'false');
  }

  dropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown?.classList.toggle('is-open');
    dropdownBtn.setAttribute('aria-expanded', String(!!isOpen));
  });

  document.addEventListener('click', () => closeDropdown());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });

  // ----------------------------
  // Mobile drawer
  // ----------------------------
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobilePanel = document.querySelector('[data-mobile]');

  function setMobile(open) {
    if (!mobilePanel || !mobileToggle) return;
    mobilePanel.classList.toggle('is-open', open);
    mobileToggle.setAttribute('aria-expanded', String(open));
  }

  mobileToggle?.addEventListener('click', () => {
    const open = !mobilePanel?.classList.contains('is-open');
    setMobile(open);
  });

  // Close mobile when clicking a normal anchor
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href')?.startsWith('#')) {
      setMobile(false);
      closeDropdown();
    }
  });

  // ----------------------------
  // Data (tabs, galleries, logos)
  // ----------------------------
  const partnerLogos = [
    'logos (3)', 'logos (4)', 'logos (5)', 'logos (6)', 'logos (7)', 'logos (8)', 'logos (9)',
    'logos (10)', 'logos (11)', 'logos (12)', 'logos (13)', 'logos (14)', 'logos (15)',
    'logos (16)', 'logos (17)', 'logos (18)', 'logos (18)'
  ];

  const aboutTabs = [
    {
      id: 'vision',
      label: 'OUR VISION',
      title: 'Our Vision',
      imageBase: 'OUR VISION',
      body: `Our vision at Golden Choice Contracting & Services is to foster global prosperity and mutual welfare by connecting skilled and unskilled manpower with overseas businesses in need. We aspire to be the leading provider of outsourced manpower recruitment across various sectors, including hospitality, security, engineering, construction, scientific, and IT. Through our unwavering dedication to quality and integrity, we strive to be the first choice for both offshore employers and overseas professionals seeking dependable recruitment solutions. With continual expansion and a commitment to excellence, we envision a future where companies and job seekers alike trust us to deliver safe and efficient manpower solutions.`
    },
    {
      id: 'mission',
      label: 'OUR MISSION',
      title: 'Our Mission',
      imageBase: 'OUR MISSION',
      body: `Golden Choice Contracting & Services provides unparalleled services in facility management, waste management, and manpower recruitment. With a focus on expertise, resources, and exceptional service, we aim to meet the needs of companies, contractors, and candidates in Qatar and beyond. Our mission is to synchronize vacancies with the best-suited candidates, ensuring maximum efficiency and satisfaction for all parties involved. We are committed to maintaining our reputation as a reliable and genuine manpower supplier, delivering quality solutions since our inception in 1987.`
    },
    {
      id: 'about-company',
      label: 'About our company',
      title: 'About Our Company',
      imageBase: 'About our company',
      body: `Golden Choice Contracting & Services, established in Qatar in 2018, specializes in facility and waste management and manpower recruitment. With over three decades of experience, Golden Choice HR Solution in Qatar has provided exceptional recruitment services across various sectors. We pride ourselves on offering unparalleled expertise, resources, and service to companies, contractors, and candidates. Our goal is to ensure global prosperity and mutual welfare by providing skilled and unskilled manpower to overseas businesses. We strive to match vacancies with the best-suited candidates promptly and at competitive pay scales. Since our inception in 2018, we've remained a reliable and genuine manpower supplier committed to quality. You can trust us to deliver efficient and dependable recruitment solutions.`
    }
  ];

  const serviceTabs = [
    {
      id: 'recruitment',
      label: 'Recruitment Services',
      imageBase: 'Recruitment Services',
      body: 'Add your Recruitment Services description here.',
      bullets: ['Candidate sourcing & screening', 'Skilled + unskilled placements', 'Onboarding & compliance support']
    },
    {
      id: 'housekeeping',
      label: 'Housekeeping Services',
      imageBase: 'Housekeeping Services',
      body: 'Add your Housekeeping Services description here.',
      bullets: ['Facility upkeep & sanitation', 'Trained housekeeping teams', 'Quality inspections & reporting']
    },
    {
      id: 'outsourcing',
      label: 'Manpower Outsourcing Services',
      imageBase: 'Manpower Outsourcing Services',
      body: 'Add your Manpower Outsourcing Services description here.',
      bullets: ['Flexible workforce planning', 'Project-based staffing', 'Payroll & HR administration']
    },
    {
      id: 'hospitality',
      label: 'Hospitality Services',
      imageBase: 'Hospitality Services',
      body: 'Add your Hospitality Services description here.',
      bullets: ['Hotel & event staffing', 'Guest service training', 'Operational excellence support']
    },
    {
      id: 'pro',
      label: 'PRO Services',
      imageBase: 'PRO SERVICES',
      body: 'Add your PRO Services description here.',
      bullets: ['Visa processing & renewals', 'Government documentation', 'Regulatory compliance assistance']
    },
  ];

  const awardPhotos = [
    'photos (8)','photos (9)','photos (10)','photos (11)','photos (12)','photos (13)','photos (14)','photos (15)',
    'photos (16)','photos (17)','photos (18)','photos (19)','photos (20)','photos (21)','photos (22)'
  ];

  const certificates = [
    'Certificates (1)','Certificates (2)','Certificates (3)','Certificates (4)',
    'Certificates (5)','Certificates (6)','Certificates (7)','Certificates (8)'
  ];

  const teamTabs = [
    {
      id: 'moshahid-reza',
      label: 'Moshahid Reza',
      subtitle: 'CEO',
      title: 'CEO Mr. Moshahid Reza message:',
      imageBase: 'Moshahid Reza',
      body: `"I am driven by a vision for excellence, we assure impeccable manpower solutions, fostering partnerships that redefine industry standards and empower organizational growth." As Chairman of Golden Choice, I'm committed to upholding our promises and enhancing organizational productivity through Qatar professionals, setting industry standards, and fostering mutually beneficial partnerships with Nepalese talent and organizations.
We propose a strategic alliance to provide efficient, economic, and confidential manpower solutions, ensuring satisfaction with blue- and white-collar recruitment needs.”`
    },
    {
      id: 'pragyanand-rai',
      label: 'Pragyanand Rai',
      subtitle: 'General Manager',
      title: "GENERAL MANAGER'S MESSAGE Mr. Pragyanand Rai",
      imageBase: 'Pragyanand Rai',
      body: `"Empowering Success through Integrity, Quality, and Partnership." As a General Manager of Golden Choice. With over three decades of experience, we are proud to be a trusted partner in facility management, waste management, and manpower recruitment, delivering tailored solutions to meet the needs of businesses in Qatar and worldwide. Our commitment to quality, efficiency, and professionalism drives everything we do, empowering our clients to achieve their goals.
At Golden Choice, we believe in creating mutual growth and value. Our approach centers on integrity and shared success, benefiting both our clients and the talented individuals we support. Thank you for considering us as your partner; we look forward to building a successful future together.`
    },
    {
      id: 'vikas-kumar',
      label: 'Vikas Kumar',
      subtitle: 'Operation Coordinator',
      title: "OPERATION COORDINATOR'S Mr. Vikas Kumar",
      imageBase: 'Vikas Kumar',
      body: `With relentless dedication to our mission and vision, we are determined to deliver on our promise of exceptional value. With Golden Choice Contracting and Services" At Golden Choice, we are driven by a singular purpose – to provide exceptional value to our clients. Therefore, we continually improve our operations to meet their evolving needs. Our operational flexibility and commitment to high quality standards allow us to swiftly respond to their requests as soon as the need arises. Maintaining such standards has only been possible through a dedicated workforce, whose well-being and safety remain a priority. As such, we have implemented stringent Adopting a preventative and proactive approach to safety, we are able to focus on streamlining operations and supporting new growth to organisation.`
    }
  ];

  // ----------------------------
  // Helpers
  // ----------------------------
  const IMG_DIR = 'assets/images/';
  const COMMON_EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

  function imgCandidates(base) {
    // If base already has an extension, return it.
    if (/\.(png|jpg|jpeg|webp)$/i.test(base)) return [IMG_DIR + base];
    return COMMON_EXTS.map(ext => IMG_DIR + base + ext);
  }

  function createSmartImg(base, alt) {
    const img = document.createElement('img');
    img.alt = alt;
    const candidates = imgCandidates(base);
    let idx = 0;
    img.src = candidates[idx];
    img.onerror = () => {
      idx += 1;
      if (idx < candidates.length) img.src = candidates[idx];
    };
    return img;
  }

  function smoothScrollTo(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ----------------------------
  // Partner marquee
  // ----------------------------
  const marqueeTrack = document.getElementById('partnerMarqueeTrack');
  if (marqueeTrack) {
    // Duplicate list for seamless loop
    const items = [...partnerLogos, ...partnerLogos];
    items.forEach((base) => {
      const img = createSmartImg(base, 'Partner logo');
      img.className = 'logoMarquee__logo';
      marqueeTrack.appendChild(img);
    });
  }

  // ----------------------------
  // Vertical Tabs Component (accessible)
  // ----------------------------
  function renderVerticalTabs(rootId, tabs, options = {}) {
    const root = document.getElementById(rootId);
    if (!root) return;

    const list = document.createElement('div');
    list.className = 'vTabs__list';
    list.setAttribute('role', 'tablist');
    list.setAttribute('aria-orientation', 'vertical');

    const panel = document.createElement('div');
    panel.className = 'vTabs__panel';

    let activeIndex = 0;

    function setActive(index, focus = false) {
      activeIndex = index;
      [...list.children].forEach((btn, i) => {
        btn.setAttribute('aria-selected', String(i === activeIndex));
        btn.tabIndex = i === activeIndex ? 0 : -1;
      });

      const t = tabs[activeIndex];
      panel.innerHTML = '';

      const inner = document.createElement('div');
      inner.className = 'vTabs__panelInner';

      const h = document.createElement('h3');
      h.textContent = t.title || t.label;
      inner.appendChild(h);

      const p = document.createElement('p');
      p.textContent = t.body || '';
      inner.appendChild(p);

      if (Array.isArray(t.bullets) && t.bullets.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'vTabs__bullets';
        t.bullets.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        inner.appendChild(ul);
      }

      // media
      if (t.imageBase) {
        const media = document.createElement('div');
        media.className = 'vTabs__media';
        media.appendChild(createSmartImg(t.imageBase, t.label));
        inner.appendChild(media);
      }

      // Optional CTA
      if (options.includeCTA) {
        const cta = document.createElement('div');
        cta.className = 'vTabs__cta';
        const a = document.createElement('a');
        a.className = 'btn btn--primary';
        a.href = '#contact';
        a.textContent = 'Contact us';
        cta.appendChild(a);
        inner.appendChild(cta);
      }

      panel.appendChild(inner);

      if (focus) {
        const btn = list.children[activeIndex];
        if (btn && typeof btn.focus === 'function') btn.focus();
      }

      if (typeof options.onChange === 'function') {
        options.onChange(tabs[activeIndex]);
      }
    }

    tabs.forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = 'vTabs__tab';
      btn.type = 'button';
      btn.id = `${rootId}-tab-${t.id || i}`;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', 'false');
      btn.tabIndex = -1;
      const title = document.createElement('span');
      title.className = 'vTabs__tabTitle';
      title.textContent = t.label;
      btn.appendChild(title);

      if (t.subtitle) {
        const subtitle = document.createElement('span');
        subtitle.className = 'vTabs__tabSubtitle';
        subtitle.textContent = t.subtitle;
        btn.appendChild(subtitle);
      }

      btn.addEventListener('click', () => setActive(i, true));
      btn.addEventListener('keydown', (e) => {
        const key = e.key;
        const max = tabs.length - 1;
        let next = null;
        if (key === 'ArrowDown' || key === 'ArrowRight') next = Math.min(activeIndex + 1, max);
        if (key === 'ArrowUp' || key === 'ArrowLeft') next = Math.max(activeIndex - 1, 0);
        if (key === 'Home') next = 0;
        if (key === 'End') next = max;
        if (next !== null) {
          e.preventDefault();
          setActive(next, true);
        }
      });

      list.appendChild(btn);
    });

    root.innerHTML = '';
    root.appendChild(list);
    root.appendChild(panel);

    setActive(0);

    return {
      setActiveByLabel(label) {
        const idx = tabs.findIndex(t => t.label.toLowerCase() === String(label).toLowerCase());
        if (idx >= 0) setActive(idx);
      },
      setActiveById(id) {
        const idx = tabs.findIndex(t => t.id === id);
        if (idx >= 0) setActive(idx);
      },
      getActive() { return tabs[activeIndex]; }
    };
  }

  renderVerticalTabs('aboutTabs', aboutTabs);

  const servicesApi = renderVerticalTabs('servicesTabs', serviceTabs, {
    includeCTA: true,
  });

  renderVerticalTabs('teamTabs', teamTabs);

  // ----------------------------
  // Services: open specific tab + scroll from nav
  // ----------------------------
  function openService(label) {
    // close menus
    setMobile(false);
    closeDropdown();

    smoothScrollTo('#services');
    // slight delay ensures section is reached on some browsers
    setTimeout(() => servicesApi?.setActiveByLabel(label), 180);
    // Update URL hash for shareability
    const slug = String(label).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    history.replaceState(null, '', `#services-${slug}`);
  }

  document.querySelectorAll('[data-open-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.getAttribute('data-open-service');
      if (label) openService(label);
    });
  });

  // On load: support #services-hospitality-services etc.
  function normalizeServiceSlug(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .trim();
  }

  function mapServiceSlug(slug) {
    const map = {
      'recruitment-services': 'Recruitment Services',
      'housekeeping-services': 'Housekeeping Services',
      'manpower-outsourcing-services': 'Manpower Outsourcing Services',
      'hospitality-services': 'Hospitality Services',
      'pro-services': 'PRO Services',
      'recruitment': 'Recruitment Services',
      'housekeeping': 'Housekeeping Services',
      'manpower-outsourcing': 'Manpower Outsourcing Services',
      'hospitality': 'Hospitality Services',
      'pro': 'PRO Services'
    };
    return map[slug] || null;
  }

  function parseServiceFromHash() {
    const rawHash = location.hash || '';
    const cleanHash = rawHash.toLowerCase();

    if (cleanHash.startsWith('#services-')) {
      const slug = cleanHash.replace('#services-', '').trim();
      return mapServiceSlug(slug);
    }

    if (cleanHash.startsWith('#services') && cleanHash.includes('?')) {
      const query = cleanHash.split('?')[1] || '';
      const params = new URLSearchParams(query);
      const tab = params.get('tab');
      if (tab) return mapServiceSlug(normalizeServiceSlug(tab));
    }

    return null;
  }

  function parseServiceFromQuery() {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) return mapServiceSlug(normalizeServiceSlug(tab));
    return null;
  }

  const initialService = parseServiceFromHash() || parseServiceFromQuery();
  if (initialService) {
    // wait for layout
    setTimeout(() => openService(initialService), 250);
  }

  // ----------------------------
  // Award gallery + lightbox
  // ----------------------------
  const awardGallery = document.getElementById('awardGallery');
  if (awardGallery) {
    awardPhotos.forEach((base) => {
      const tile = document.createElement('div');
      tile.className = 'cardImg';
      const img = createSmartImg(base, 'Award Function photo');
      tile.appendChild(img);
      tile.addEventListener('click', () => openLightbox(img.src));
      awardGallery.appendChild(tile);
    });
  }

  // Technology partners grid (reuse partner logos)
  const techGrid = document.getElementById('technologyPartnersGrid');
  if (techGrid) {
    partnerLogos.forEach((base) => {
      const img = createSmartImg(base, 'Technology partner logo');
      techGrid.appendChild(img);
    });
  }

  // Certificates
  const certGrid = document.getElementById('certGrid');
  if (certGrid) {
    certificates.forEach((base) => {
      const card = document.createElement('div');
      card.className = 'cert';
      const img = createSmartImg(base, 'Certificate');
      card.appendChild(img);
      card.addEventListener('click', () => openLightbox(img.src));
      certGrid.appendChild(card);
    });
  }

  // ----------------------------
  // Lightbox
  // ----------------------------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ----------------------------
  // Contact form (front-end only)
  // ----------------------------
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const subject = String(fd.get('subject') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !okEmail || !subject || !message) {
      if (note) note.textContent = 'Please fill all fields with a valid email.';
      return;
    }

    if (note) note.textContent = 'Thanks! Your message was captured (front-end demo).';
    form.reset();
  });
})();
