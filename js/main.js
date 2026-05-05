/* ═══════════════════════════════════════════════════════
   Khánh Ly FitX — main.js
   ═══════════════════════════════════════════════════════ */

// Helper: load ảnh, nếu lỗi giữ placeholder
function imgOrPH(imgSrc, phEl, imgEl) {
  if (!imgSrc) return;
  const t = new Image();
  t.onload = () => {
    imgEl.src = imgSrc;
    imgEl.style.display = 'block';
    if (phEl) phEl.style.display = 'none';
  };
  t.onerror = () => {};
  t.src = imgSrc;
}


// ══════════════════════════════════════════════
//  BUILD PAGE
// ══════════════════════════════════════════════

// ── Nav ──────────────────────────────────────
(function buildNav() {
  const links = [
    ['#about',     'Về tôi'],
    ['#services',  'Dịch vụ'],
    ['#results',   'Kết quả'],
    ['#portfolio', 'Portfolio'],
    ['#contact',   'Liên hệ'],
  ];
  document.getElementById('navLinks').innerHTML =
    links.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('');
})();

// ── Hero ─────────────────────────────────────
(function buildHero() {
  document.getElementById('heroEyebrow').textContent = COACH.tagline;
  document.getElementById('heroH1').innerHTML =
    `BIẾN ĐỔI CƠ THỂ<br><em>ĐỊNH HÌNH</em><br>BẢN THÂN`;
  document.getElementById('heroSub').textContent =
    'Không chỉ là tập gym — là hành trình tái định hình bản thân. Cùng hệ thống luyện tập cá nhân hóa và tư duy chiến lược.';

  document.getElementById('heroBadge').innerHTML =
  COACH.stats.map(s => `
    <div class="stat-item">
      <div class="stat-number">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`
  ).join('');

  if (COACH.about.img) {
    const img = document.createElement('img');
    img.alt = COACH.name;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:none';
    document.getElementById('heroFrame').appendChild(img);
    imgOrPH(COACH.about.img, document.getElementById('heroPlaceholder'), img);
  }
})();

// ── About ─────────────────────────────────────
(function buildAbout() {
  const ab = COACH.about;

  document.getElementById('aboutLabel').textContent = 'Về tôi';
  document.getElementById('aboutH2').innerHTML =
    ab.headline.split('\n').map((h, i) =>
      i === 1 ? `<em style="font-style:normal;color:var(--pink)">${h}</em>` : h
    ).join('<br>');
  document.getElementById('aboutSerif').textContent =
    '"Không có con đường ngắn — chỉ có con đường đúng."';
  document.getElementById('aboutBody').innerHTML =
    ab.body.map(p => `<p>${p}</p>`).join('');
  document.getElementById('aboutPH').textContent     = COACH.nameShort;
  document.getElementById('aboutStats').innerHTML =
    COACH.about.stats.map(s => `
      <div class="stat-item">
        <div class="stat-number">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    ).join('');
  document.getElementById('aboutDecoTxt').textContent = COACH.nameShort;

  imgOrPH(ab.img, document.getElementById('aboutPH'), document.getElementById('aboutImg'));
})();

// ── Services ──────────────────────────────────
(function buildPrograms() {
  const grid = document.getElementById('programGrid');
  if (!grid || !COACH.programs) return;
  grid.innerHTML = COACH.programs.map(p => `
    <div class="program-card">
      <div class="program-media">
        ${p.video
          ? `<video autoplay muted loop playsinline><source src="${p.video}" type="video/mp4"></video>`
          : `<img src="${p.img}" alt="${p.title}">`}
      </div>
      <div class="program-overlay"></div>
      <div class="program-content">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>
    </div>`).join('');
})();

(function buildServices() {
  document.getElementById('svcGrid').innerHTML = COACH.services.map(s => `
    <div class="svc-format-card">
      <div class="svc-format-img">
        <img src="${s.img || ''}" alt="${s.title}" onerror="this.style.display='none'">
      </div>
      <h3 class="svc-format-name">${s.title.replace(/\n/g,'<br>')}</h3>
      <p class="svc-format-desc">${s.desc}</p>
    </div>`).join('');
})();

// ── Before / After ────────────────────────────
(function buildBA() {
  const ba = COACH.results;

  document.getElementById('baAfterLbl').textContent  = 'SAU';
  document.getElementById('baBeforeLbl').textContent = 'TRƯỚC';
  document.getElementById('baStats').innerHTML =
    ba.stats.map(s =>
      `<div class="ba-stat"><div class="ba-sn">${s.num}</div><div class="ba-sl">${s.label}</div></div>`
    ).join('');

  imgOrPH(ba.afterImg,  document.getElementById('baAfterPH'),    document.getElementById('baAfterImg'));
  imgOrPH(ba.beforeImg, document.getElementById('baBeforePHtxt'), document.getElementById('baBeforeImg'));
})();

// ── Portfolio ─────────────────────────────────
(function buildPortfolio() {
  document.getElementById('portGrid').innerHTML = COACH.portfolio.map(p => {
    const safeTitle = p.title.replace(/'/g, "\\'");
    return `
    <div class="port-item${p.wide ? ' wide' : ''}" data-cat="${p.cat}"
         onclick="openLB('${safeTitle}','${p.tag}','${p.img || ''}')">
      <div class="port-inner">${p.tag}</div>
      <div class="port-overlay">
        <div class="port-cat">${p.cat}</div>
        <div class="port-title">${p.title}</div>
      </div>
    </div>`;
  }).join('');

  COACH.portfolio.forEach(p => {
    if (!p.img) return;
    document.querySelectorAll('.port-item').forEach(item => {
      const titleEl = item.querySelector('.port-title');
      if (titleEl && titleEl.textContent === p.title) {
        const img = document.createElement('img');
        img.src = p.img;
        img.alt = p.title;
        const inner = item.querySelector('.port-inner');
        img.onload  = () => item.insertBefore(img, inner.nextSibling);
        img.onerror = () => {};
      }
    });
  });
})();

(function buildLocations() {
  const grid = document.getElementById('locationsGrid');
  if (!grid || !COACH.locations) return;
  grid.innerHTML = COACH.locations.map(l => `
    <a href="${l.url}" class="location-item" target="_blank">
      <div class="location-icon">💎</div>
      <div class="location-info">
        <h4>${l.name}</h4>
        <p>${l.addr}</p>
      </div>
    </a>`).join('');
})();

// ── Contact ───────────────────────────────────
(function buildContact() {
  const co = COACH.contact;

  const items = [
    { key: 'phone',    label: 'Hotline',            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>`, target: false },
    { key: 'email',    label: 'Email',              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`, target: false },
    { key: 'messenger',label: 'Facebook Messenger', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/></svg>`, target: true },
    { key: 'zalo',     label: 'Zalo',               icon: `<img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" width="20" height="20">`, target: true },
    { key: 'address',  label: 'Địa chỉ',            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>`, target: true },
  ].filter(i => co[i.key] && co[i.key].url && co[i.key].display);

  document.getElementById('contactLinks').innerHTML = items.map(i => `
    <a href="${co[i.key].url}" class="c-link"${i.target ? ' target="_blank"' : ''}>
      <div class="c-icon">${i.icon}</div>
      <div><div class="c-lbl">${i.label}</div><div class="c-val">${co[i.key].display}</div></div>
    </a>`).join('');

  document.getElementById('fabZalo').href = co.zalo.url;
  document.getElementById('fabWa').href   = co.phone.url;
  document.getElementById('footCopy').textContent = COACH.footer.copy;
})();


// ══════════════════════════════════════════════
//  SLIDER — build slides
// ══════════════════════════════════════════════
let curSlide    = 0;
let isAnimating = false;
const sInner    = document.getElementById('sliderInner');
const sDots     = document.getElementById('sliderDots');

COACH.slides.forEach((s, i) => {
  // Tách title: dòng 1 trắng, dòng 2 đỏ
  const parts     = s.title.split('\n');
  const titleHTML = parts.map((t, idx) =>
    idx === 1
      ? `<span class="slide-title-accent">${t}</span>`
      : `<span class="slide-title-main">${t}</span>`
  ).join('');

  const el = document.createElement('div');
  el.className = 'slide' + (i === 0 ? ' is-active' : '');
  el.innerHTML = `
    <div class="slide-img-wrap">
      <div class="slide-placeholder">${s.emoji || ''}</div>
    </div>
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <p  class="slide-tag">${s.tag}</p>
      <h2 class="slide-title">${titleHTML}</h2>
      <p  class="slide-desc">${s.desc}</p>
      <a  class="slide-cta" href="#contact">JOIN CLASSES +</a>
    </div>`;

  if (s.img) {
    const img     = document.createElement('img');
    img.src       = s.img;
    img.alt       = s.tag;
    img.className = 'slide-bg-img';
    const wrap    = el.querySelector('.slide-img-wrap');
    img.onload    = () => {
      wrap.appendChild(img);
      wrap.querySelector('.slide-placeholder').style.display = 'none';
    };
    img.onerror = () => {};
  }

  sInner.appendChild(el);

  // Dot
  const d = document.createElement('button');
  d.className = 'slider-dot' + (i === 0 ? ' is-active' : '');
  d.setAttribute('aria-label', `Slide ${i + 1}`);
  d.onclick = () => goSlide(i);
  sDots.appendChild(d);
});

// Ẩn tất cả slide trừ slide 0 ngay từ đầu
document.querySelectorAll('.slide:not(.is-active)').forEach(s => {
  s.style.display = 'none';
});


// ══════════════════════════════════════════════
//  SLIDER — animation helpers
// ══════════════════════════════════════════════
function getEls(slide) {
  return {
    tag:   slide.querySelector('.slide-tag'),
    title: slide.querySelector('.slide-title'),
    desc:  slide.querySelector('.slide-desc'),
    cta:   slide.querySelector('.slide-cta'),
    img:   slide.querySelector('.slide-img-wrap'),
  };
}

function animateSlideIn(slide) {
  const { tag, title, desc, cta, img } = getEls(slide);
  // Reset về trạng thái ẩn
  gsap.set([tag, title, desc, cta], { opacity: 0, y: 50 });
  gsap.set(img, { opacity: 0, scale: 1.1, x: 80 });

  return gsap.timeline()
    // Chữ vào trước — stagger từng phần
    .to(tag,   { opacity: 1, y: 0, duration: 0.5,  ease: 'power3.out' }, 0.05)
    .to(title, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0.2)
    .to(desc,  { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, 0.38)
    .to(cta,   { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 0.52)
    // Ảnh vào sau — slide từ phải
    .to(img,   { opacity: 1, scale: 1, x: 0, duration: 1.0, ease: 'power3.out' }, 0.3);
}

function animateSlideOut(slide) {
  const { tag, title, desc, cta, img } = getEls(slide);

  return gsap.timeline()
    .to([cta, desc, tag], { opacity: 0, y: -24, duration: 0.22, stagger: 0.04, ease: 'power2.in' }, 0)
    .to(title,            { opacity: 0, y: -32, duration: 0.28, ease: 'power2.in' },                0.04)
    .to(img,              { opacity: 0, scale: 1.05, x: -50, duration: 0.38, ease: 'power2.in' },  0);
}


// ══════════════════════════════════════════════
//  SLIDER — navigate
// ══════════════════════════════════════════════
function goSlide(n) {
  if (isAnimating) return;
  const slides = sInner.querySelectorAll('.slide');
  const dots   = sDots.querySelectorAll('.slider-dot');
  const next   = ((n % COACH.slides.length) + COACH.slides.length) % COACH.slides.length;
  if (next === curSlide) return;

  isAnimating = true;
  const prevSlide = slides[curSlide];
  const nextSlide = slides[next];
  curSlide = next;

  dots.forEach((d, i) => d.classList.toggle('is-active', i === curSlide));

  // Hiện slide mới, đặt z-index
  gsap.set(nextSlide, { display: 'flex', zIndex: 2 });
  gsap.set(prevSlide, { zIndex: 1 });

  gsap.timeline({
    onComplete: () => {
      prevSlide.classList.remove('is-active');
      gsap.set(prevSlide, { display: 'none', zIndex: 1 });
      nextSlide.classList.add('is-active');
      isAnimating = false;
    }
  })
  .add(animateSlideOut(prevSlide), 0)
  .add(animateSlideIn(nextSlide),  0);
}

function changeSlide(d) { goSlide(curSlide + d); }

// Auto-play
let autoS = setInterval(() => changeSlide(1), 5000);
sInner.addEventListener('mouseenter', () => clearInterval(autoS));
sInner.addEventListener('mouseleave', () => { autoS = setInterval(() => changeSlide(1), 5000); });

// Touch swipe
let touchX = 0;
document.getElementById('sliderOuter').addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX;
}, { passive: true });
document.getElementById('sliderOuter').addEventListener('touchend', e => {
  if (Math.abs(touchX - e.changedTouches[0].clientX) > 40)
    changeSlide(touchX > e.changedTouches[0].clientX ? 1 : -1);
});


// ══════════════════════════════════════════════
//  PRELOADER
// ══════════════════════════════════════════════
(function runPreloader() {
  let prog = 0;
  gsap.to('.pre-word', { opacity: 1, y: 0, duration: 0.5, delay: 0.15 });

  const pi = setInterval(() => {
    prog += Math.random() * 14;
    if (prog >= 100) {
      prog = 100;
      clearInterval(pi);
      setTimeout(donePreload, 350);
    }
    gsap.to('.pre-line', { width: (prog / 100 * 180) + 'px', duration: 0.08, ease: 'none' });
    document.getElementById('prePct').textContent = Math.floor(prog) + '%';
  }, 70);
})();

function donePreload() {
  gsap.to('#preloader', {
    opacity: 0, duration: 0.5,
    onComplete: () => {
      document.getElementById('preloader').style.display = 'none';
      initPage();
    }
  });
}


// ══════════════════════════════════════════════
//  PAGE INIT — GSAP ANIMATIONS
// ══════════════════════════════════════════════
function initPage() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero animate in
  const tl = gsap.timeline();
  tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' })
    .to('.hero-h1',      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' }, '-=0.35')
    .to('.hero-serif',   { opacity: 1, y: 0, duration: 0.6,  ease: 'power3.out' }, '-=0.5')
    .to('.hero-actions', { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.4')
    .to('#heroRight',    { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out' }, '-=0.6')
    .to('.hero-stats',   { opacity: 1, y: 0, duration: 0.5,  ease: 'power3.out' }, '-=0.4')
    .to('#heroScroll',   { opacity: 1,       duration: 0.4 },                       '-=0.2');

  // Scroll reveals
  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.75, delay: i * 0.07, ease: 'power3.out',
    });
  });

  gsap.from('.svc-card', {
    scrollTrigger: { trigger: '#services', start: 'top 75%' },
    opacity: 0, y: 35, duration: 0.65, stagger: 0.1, ease: 'power3.out',
  });
  gsap.from('.ba-outer', {
    scrollTrigger: { trigger: '#results', start: 'top 75%' },
    opacity: 0, scale: 0.97, duration: 0.8, ease: 'power3.out',
  });
  gsap.from('.ba-stat', {
    scrollTrigger: { trigger: '.ba-stats-row', start: 'top 88%' },
    opacity: 0, y: 18, duration: 0.55, stagger: 0.1, ease: 'power3.out',
  });
  gsap.from('.port-item', {
    scrollTrigger: { trigger: '#portfolio', start: 'top 75%' },
    opacity: 0, y: 25, duration: 0.6, stagger: 0.07, ease: 'power3.out',
  });
  gsap.from('.c-link', {
    scrollTrigger: { trigger: '#contact', start: 'top 80%' },
    opacity: 0, x: -18, duration: 0.55, stagger: 0.1, ease: 'power3.out',
  });

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
  }, { passive: true });

  // ← ANIMATE SLIDE ĐẦU TIÊN SAU KHI PRELOADER XONG
  animateSlideIn(sInner.querySelector('.slide.is-active'));
}


// ══════════════════════════════════════════════
//  BEFORE / AFTER
// ══════════════════════════════════════════════
(function initBA() {
  const baO  = document.getElementById('baOuter');
  const baC  = document.getElementById('baClip');
  const baDL = document.getElementById('baDivLine');
  const baH  = document.getElementById('baHandle');
  if (!baO) return;

  let baOn = false;

  function setBA(pct) {
    pct = Math.max(2, Math.min(98, pct));
    baC.style.clipPath = `inset(0 ${(100 - pct).toFixed(1)}% 0 0)`;
    baDL.style.left    = pct.toFixed(1) + '%';
    baH.style.left     = pct.toFixed(1) + '%';
  }
  setBA(50);

  function getP(e) {
    const r = baO.getBoundingClientRect();
    return ((e.touches ? e.touches[0].clientX : e.clientX) - r.left) / r.width * 100;
  }

  baO.addEventListener('mousedown',    e => { baOn = true; setBA(getP(e)); e.preventDefault() });
  window.addEventListener('mousemove', e => { if (baOn) setBA(getP(e)) });
  window.addEventListener('mouseup',   () => baOn = false);
  baO.addEventListener('touchstart',   e => { baOn = true; setBA(getP(e)) }, { passive: true });
  baO.addEventListener('touchmove',    e => { if (baOn) { setBA(getP(e)); e.preventDefault() } }, { passive: false });
  baO.addEventListener('touchend',     () => baOn = false);
})();


// ══════════════════════════════════════════════
//  SERVICES
// ══════════════════════════════════════════════
function handleSvc(card) {
  if (card.getAttribute('data-detail') === 'false') {
    const u = card.querySelector('.svc-updating');
    u.classList.add('show');
    setTimeout(() => u.classList.remove('show'), 2000);
  }
}


// ══════════════════════════════════════════════
//  PORTFOLIO FILTER
// ══════════════════════════════════════════════
function filterPort(btn, cat) {
  document.querySelectorAll('.filt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.port-item').forEach(item => {
    const show = cat === 'all' || item.dataset.cat === cat;
    gsap.to(item, { opacity: show ? 1 : 0.12, scale: show ? 1 : 0.95, duration: 0.3, ease: 'power2.out' });
    item.style.pointerEvents = show ? 'all' : 'none';
  });
}


// ══════════════════════════════════════════════
//  LIGHTBOX
// ══════════════════════════════════════════════
function openLB(title, cat, imgSrc) {
  document.getElementById('lbCat').textContent   = cat;
  document.getElementById('lbTitle').textContent = title;
  const area = document.getElementById('lbImg');
  area.innerHTML = '';
  if (imgSrc) {
    const img = document.createElement('img');
    img.src = imgSrc; img.alt = title;
    img.onerror = () => { area.textContent = '🖼' };
    area.appendChild(img);
  } else {
    area.textContent = '🖼';
  }
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) closeLB();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB() });


// ══════════════════════════════════════════════
//  FORM
// ══════════════════════════════════════════════
function submitForm() {
  const n = document.getElementById('fName').value.trim();
  const p = document.getElementById('fPhone').value.trim();
  if (!n || !p) {
    gsap.fromTo('#formBox', { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,0.3)' });
    return;
  }
  gsap.to('#formBox', {
    opacity: 0, y: -10, duration: 0.3,
    onComplete: () => {
      document.getElementById('formBox').style.display = 'none';
      const s = document.getElementById('formSuccess');
      s.style.display = 'block';
      gsap.from(s, { opacity: 0, y: 10, duration: 0.4 });
    }
  });
}


// ══════════════════════════════════════════════
//  FAB
// ══════════════════════════════════════════════
let fabO = false;
function toggleFab() {
  fabO = !fabO;
  document.getElementById('fab').classList.toggle('expanded', fabO);
  document.getElementById('fabMain').textContent      = fabO ? '✕' : '✉';
  document.getElementById('fabMain').style.background = fabO ? 'var(--ink)' : 'var(--pink)';
}

function animateCounter(element, target, duration) {
  let startValue = 0;
  const suffix    = element.textContent.replace(/[0-9]/g, ''); 
  const increment = target / (duration / 16);
 
  const iv = setInterval(() => {
    startValue += increment;
    if (startValue >= target) {
      element.textContent = target + suffix;
      clearInterval(iv);
    } else {
      element.textContent = Math.floor(startValue) + suffix;
    }
  }, 16);
}
 
const _badgeEl = document.getElementById('heroBadge');
if (_badgeEl) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.stat-number').forEach(el => {
        animateCounter(el, parseInt(el.textContent), 2000);
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 }).observe(_badgeEl);
}

const _aboutStats = document.getElementById('aboutStats');
if (_aboutStats) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.stat-number').forEach(el => {
        animateCounter(el, parseInt(el.textContent), 2000);
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 }).observe(_aboutStats);
}


// ══════════════════════════════════════════════
//  MOBILE MENU
// ══════════════════════════════════════════════
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
