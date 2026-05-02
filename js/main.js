/* ═══════════════════════════════════════
   COACH NK — main.js
   ═══════════════════════════════════════ */

// ─ Utility: try to load an <img> into a .img-wrap,
//   if src missing/broken → keep the placeholder visible
function loadImg(wrap, src, alt = '') {
  if (!src) return;
  const img = document.createElement('img');
  img.src   = src;
  img.alt   = alt;
  img.loading = 'lazy';
  img.onerror = () => img.remove(); // keeps placeholder visible
  wrap.prepend(img);
}

// ─ Render everything from COACH config ─────────────────

function buildPage() {
  // Brand name
  document.querySelectorAll('[data-brand]').forEach(el => {
    el.innerHTML = COACH.brandName.replace(/([NK])$/, '<span>$1</span>');
  });

  // ── HERO ──
  document.querySelector('.hero-eyebrow-text').textContent = COACH.tagline;
  const heroPortrait = document.querySelector('.hero-right .img-wrap');
  if (heroPortrait) loadImg(heroPortrait, COACH.about.img, COACH.name);

  COACH.stats.forEach((s, i) => {
    const el = document.querySelectorAll('.stat-item')[i];
    if (!el) return;
    el.querySelector('.stat-num').textContent   = s.num;
    el.querySelector('.stat-label').textContent = s.label;
  });

  // ── SLIDER ──
  const sliderInner = document.getElementById('sliderInner');
  const dotsWrap    = document.getElementById('sliderDots');
  sliderInner.innerHTML = '';
  dotsWrap.innerHTML    = '';

  COACH.slides.forEach((sl, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
      <div class="slide-img-side">
        <div class="img-wrap">
          <div class="img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
            <span>slide-${i+1}.jpg</span>
          </div>
        </div>
      </div>
      <div class="slide-text-side">
        <div class="slide-tag">${sl.tag}</div>
        <div class="slide-title">${sl.title}</div>
        <div class="slide-desc">${sl.desc}</div>
        <div class="slide-num">0${i+1}</div>
      </div>`;
    loadImg(slide.querySelector('.img-wrap'), sl.img, sl.tag);
    sliderInner.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick   = () => goSlide(i);
    dotsWrap.appendChild(dot);
  });

  // ── ABOUT ──
  document.querySelector('.about-h2').innerHTML = COACH.about.headline.replace(/\n/g,'<br>');
  const aboutParas = document.querySelector('.about-body');
  aboutParas.innerHTML = COACH.about.body.map(p => `<p>${p}</p>`).join('');
  document.querySelector('.badge-num').textContent = COACH.about.years;
  const aboutImgWrap = document.querySelector('.about-img-wrap .img-wrap');
  if (aboutImgWrap) loadImg(aboutImgWrap, COACH.about.img, COACH.name);

  // ── SERVICES ──
  const sGrid = document.querySelector('.services-grid');
  sGrid.innerHTML = '';
  COACH.services.forEach(sv => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-has-detail', sv.hasDetail);
    card.innerHTML = `
      <div class="service-card-img">
        <div class="img-wrap">
          <div class="img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
            <span>${sv.img.split('/').pop()}</span>
          </div>
        </div>
        <div class="service-card-img-overlay"></div>
      </div>
      <div class="service-card-body">
        <div class="service-num">${sv.num}</div>
        <div class="service-title">${sv.title.replace(/\n/g,'<br>')}</div>
        <div class="service-desc">${sv.desc}</div>
        <span class="service-more">Xem chi tiết →</span>
      </div>
      <div class="service-updating">Dịch vụ đang cập nhật</div>`;
    loadImg(card.querySelector('.img-wrap'), sv.img, sv.title);
    card.onclick = () => handleServiceClick(card);
    sGrid.appendChild(card);
  });

  // ── RESULTS stats ──
  COACH.results.stats.forEach((s, i) => {
    const el = document.querySelectorAll('.ba-stat')[i];
    if (!el) return;
    el.querySelector('.ba-stat-num').textContent   = s.num;
    el.querySelector('.ba-stat-label').textContent = s.label;
  });
  // BA images
  const baAfterWrap  = document.querySelector('.ba-after  .img-wrap');
  const baBeforeWrap = document.querySelector('#baClip .img-wrap');
  if (baAfterWrap)  loadImg(baAfterWrap,  COACH.results.afterImg,  'Sau');
  if (baBeforeWrap) loadImg(baBeforeWrap, COACH.results.beforeImg, 'Trước');

  // ── PORTFOLIO ──
  const pGrid = document.getElementById('portfolioGrid');
  pGrid.innerHTML = '';
  COACH.portfolio.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'portfolio-item' + (item.wide ? ' wide' : '');
    el.dataset.cat = item.cat;
    el.innerHTML = `
      <div class="img-wrap">
        <div class="img-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
          <span>${item.img.split('/').pop()}</span>
        </div>
      </div>
      <div class="portfolio-item-overlay">
        <div class="portfolio-item-tag">${item.tag}</div>
        <div class="portfolio-item-title">${item.title}</div>
      </div>`;
    loadImg(el.querySelector('.img-wrap'), item.img, item.title);
    el.onclick = () => openLightbox(item.title, item.tag, item.img);
    pGrid.appendChild(el);
  });

  // ── CONTACT ──
  document.querySelector('.contact-h2').innerHTML = COACH.contact.headline.replace(/\n/g,'<br>');
  document.querySelector('.contact-sub').textContent = COACH.contact.sub;
  const zaloLink = document.querySelector('.cl-zalo');
  const waLink   = document.querySelector('.cl-wa');
  const igLink   = document.querySelector('.cl-ig');
  if (zaloLink) { zaloLink.href = COACH.contact.zalo.url; zaloLink.querySelector('.cl-value').textContent = COACH.contact.zalo.display }
  if (waLink)   { waLink.href   = COACH.contact.whatsapp.url; waLink.querySelector('.cl-value').textContent = COACH.contact.whatsapp.display }
  if (igLink)   { igLink.href   = COACH.contact.instagram.url; igLink.querySelector('.cl-value').textContent = COACH.contact.instagram.display }

  // Footer
  document.querySelector('.footer-copy').textContent = COACH.footer.copy;
}


// ─ PRELOADER ────────────────────────────────────────────
function runPreloader() {
  const preBar = document.getElementById('preBar');
  const preName = document.querySelector('.pre-name');
  gsap.to(preName, { opacity: 1, y: 0, duration: 0.6, delay: 0.15 });
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 14;
    if (p >= 100) { p = 100; clearInterval(iv); setTimeout(hidePreloader, 350) }
    preBar.style.width = p + '%';
  }, 70);
}

function hidePreloader() {
  gsap.to('#preloader', {
    opacity: 0, duration: 0.55,
    onComplete: () => {
      document.getElementById('preloader').style.display = 'none';
      initAnimations();
    }
  });
}


// ─ ANIMATIONS ────────────────────────────────────────────
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  const tl = gsap.timeline();
  tl.to('.hero-eyebrow',  { opacity:1, y:0, duration:0.7, ease:'power3.out' })
    .to('.hero-h1',       { opacity:1, y:0, duration:0.9, ease:'power3.out' }, '-=0.45')
    .to('.hero-sub',      { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.5')
    .to('.hero-actions',  { opacity:1, y:0, duration:0.6, ease:'power3.out' }, '-=0.4')
    .to('.hero-stats',    { opacity:1,      duration:0.6, ease:'power2.out' }, '-=0.3')
    .to('.scroll-hint',   { opacity:1,      duration:0.5 },                    '-=0.2');

  // Scroll reveals
  document.querySelectorAll('[data-reveal]').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0, y: 28, duration: 0.8, ease: 'power3.out'
    });
  });

  // Staggered groups
  [
    { sel: '.service-card', trigger: '#services', y: 40 },
    { sel: '.ba-stat',      trigger: '.ba-info',  y: 20 },
    { sel: '.portfolio-item',trigger:'#portfolio', y: 24 },
    { sel: '.contact-link', trigger: '#contact',  x: -18, y: 0 },
  ].forEach(({ sel, trigger, y = 0, x = 0 }) => {
    gsap.from(sel, {
      scrollTrigger: { trigger, start: 'top 78%' },
      opacity: 0, y, x, duration: 0.7, stagger: 0.09, ease: 'power3.out'
    });
  });

  gsap.from('.ba-wrap', {
    scrollTrigger: { trigger: '#results', start: 'top 72%' },
    opacity: 0, scale: 0.97, duration: 0.9, ease: 'power3.out'
  });
}


// ─ NAV ────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ─ SLIDER ─────────────────────────────────────────────────
let curSlide = 0;
let autoSlideTimer;

function goSlide(n) {
  const slides = document.querySelectorAll('.slide');
  curSlide = (n + slides.length) % slides.length;
  document.getElementById('sliderInner').style.transform = `translateX(-${curSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === curSlide));
}

function changeSlide(dir) { goSlide(curSlide + dir); }

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => changeSlide(1), 4200);
}
function stopAutoSlide() { clearInterval(autoSlideTimer) }

window.changeSlide = changeSlide;

// Touch swipe on slider
window.addEventListener('DOMContentLoaded', () => {
  const sw = document.getElementById('sliderWrap');
  if (!sw) return;
  let sx = 0;
  sw.addEventListener('touchstart', e => { sx = e.touches[0].clientX; stopAutoSlide() }, { passive: true });
  sw.addEventListener('touchend',   e => {
    const diff = sx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) changeSlide(diff > 0 ? 1 : -1);
    startAutoSlide();
  });
  sw.addEventListener('mouseenter', stopAutoSlide);
  sw.addEventListener('mouseleave', startAutoSlide);
});


// ─ BEFORE / AFTER ─────────────────────────────────────────
let baActive = false;

function initBA() {
  const wrap   = document.getElementById('baWrap');
  const clip   = document.getElementById('baClip');
  const div    = document.getElementById('baDivider');
  const handle = document.getElementById('baHandle');
  if (!wrap) return;

  function setBA(pct) {
    pct = Math.max(2, Math.min(98, pct));
    clip.style.clipPath = `inset(0 ${(100 - pct).toFixed(1)}% 0 0)`;
    div.style.left    = pct.toFixed(1) + '%';
    handle.style.left = pct.toFixed(1) + '%';
  }
  setBA(50);

  function getP(e) {
    const r = wrap.getBoundingClientRect();
    return ((( e.touches ? e.touches[0].clientX : e.clientX ) - r.left) / r.width) * 100;
  }
  wrap.addEventListener('mousedown',  e => { baActive = true; setBA(getP(e)); e.preventDefault() });
  window.addEventListener('mousemove',e => { if (baActive) setBA(getP(e)) });
  window.addEventListener('mouseup',  () => baActive = false);
  wrap.addEventListener('touchstart', e => { baActive = true; setBA(getP(e)) }, { passive: true });
  wrap.addEventListener('touchmove',  e => { if (baActive) { setBA(getP(e)); e.preventDefault() } }, { passive: false });
  wrap.addEventListener('touchend',   () => baActive = false);
}


// ─ SERVICES ───────────────────────────────────────────────
function handleServiceClick(card) {
  if (card.getAttribute('data-has-detail') === 'false') {
    const msg = card.querySelector('.service-updating');
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 2200);
  }
}


// ─ PORTFOLIO FILTER ────────────────────────────────────────
window.filterPortfolio = function(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach(item => {
    const show = cat === 'all' || item.dataset.cat === cat;
    gsap.to(item, { opacity: show ? 1 : 0.12, scale: show ? 1 : 0.96, duration: 0.35, ease: 'power2.out' });
    item.style.pointerEvents = show ? 'all' : 'none';
  });
};


// ─ LIGHTBOX ───────────────────────────────────────────────
function openLightbox(title, tag, imgSrc) {
  document.getElementById('lbTitle').textContent = title;
  document.getElementById('lbTag').textContent   = tag;
  const lbImgWrap = document.querySelector('.lb-img .img-wrap');
  lbImgWrap.innerHTML = `<div class="img-placeholder">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:2rem;height:2rem;opacity:0.3">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m21 15-5-5L5 21"/>
    </svg>
  </div>`;
  if (imgSrc) loadImg(lbImgWrap, imgSrc, title);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.closeLightbox = function() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) window.closeLightbox();
  });
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeLightbox() });


// ─ FORM ────────────────────────────────────────────────────
window.submitForm = function() {
  const name  = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  if (!name || !phone) {
    gsap.to('#formBox', { keyframes:[{x:-7},{x:7},{x:-4},{x:4},{x:0}], duration:0.4, ease:'power1.inOut' });
    return;
  }
  gsap.to('#formBox', { opacity:0, y:-12, duration:0.3, onComplete: () => {
    document.getElementById('formBox').style.display = 'none';
    const s = document.getElementById('formSuccess');
    s.style.display = 'block';
    gsap.from(s, { opacity:0, y:10, duration:0.4 });
  }});
};


// ─ FAB ─────────────────────────────────────────────────────
let fabOpen = false;
window.toggleFab = function() {
  fabOpen = !fabOpen;
  const fab = document.getElementById('fab');
  fab.classList.toggle('expanded', fabOpen);
  const mainBtn = fab.querySelector('.fab-main');
  mainBtn.style.background = fabOpen ? 'var(--ink)' : 'var(--pink)';
  mainBtn.textContent = fabOpen ? '✕' : '✉';
  const label = fab.querySelector('.fab-main-label');
  if (label) label.textContent = fabOpen ? 'Đóng' : 'Liên hệ';
};


// ─ MOBILE MENU ─────────────────────────────────────────────
window.toggleMenu = function() {
  document.getElementById('mobile-menu').classList.toggle('open');
};


// ─ INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildPage();
  runPreloader();
  startAutoSlide();
  initBA();
});
