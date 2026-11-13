/* ============ EDITE AQUI SEUS CONTATOS ============ */
const CONTATO = {
  whatsapp: '5531999758571',           // código do país + DDD + número, só dígitos
  email: 'aanasimoes.dev@gmail.com',
  mensagem: 'Olá, Ana! Vi seu site e quero conversar sobre um projeto.'
};
/* ================================================== */

const $ = (s, c = document) => [...c.querySelectorAll(s)];
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

// links de contato
$('[data-wa]').forEach(a => {
  a.href = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(a.dataset.wa || CONTATO.mensagem)}`;
  a.target = '_blank'; a.rel = 'noopener';
});
$('[data-mail]').forEach(a => a.href = 'mailto:' + CONTATO.email);
document.getElementById('yr').textContent = new Date().getFullYear();

// links internos: rolam até a seção correspondente
$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const alvo = document.getElementById(a.getAttribute('href').slice(1));
  if (!alvo) return;
  e.preventDefault();
  alvo.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
}));

// nav
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = aberto => {
  nav.classList.toggle('open', aberto);
  burger.setAttribute('aria-expanded', aberto);
  burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
};
burger.addEventListener('click', () => menu(!nav.classList.contains('open')));
$('#menu a').forEach(a => a.addEventListener('click', () => menu(false)));
addEventListener('keydown', e => e.key === 'Escape' && menu(false));
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20), { passive: true });

// dimensões na caixa de seleção do hero
const sb = document.querySelector('.selbox'), dim = document.getElementById('dim');
const setDim = () => { const r = sb.getBoundingClientRect(); dim.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`; };
setTimeout(() => document.querySelector('h1').classList.add('done'), calm ? 0 : 1100);
setDim(); addEventListener('resize', setDim); document.fonts && document.fonts.ready.then(setDim);

// texto embaralhado
function scramble(el) {
  const fin = el.dataset.t || (el.dataset.t = el.textContent), ch = '<>/[]{}=+*#_';
  let f = 0; const tot = 22;
  (function tick() {
    el.textContent = [...fin].map((c, i) => i < fin.length * f / tot || c === ' ' ? c : ch[Math.random() * ch.length | 0]).join('');
    if (f++ < tot) setTimeout(tick, 32);
  })();
}

// reveal ao rolar
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  if (e.target.hasAttribute('data-scr') && !calm) scramble(e.target);
  io.unobserve(e.target);
}), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
$('.rv,[data-scr]').forEach(el => io.observe(el));

// linha do processo
const steps = document.getElementById('steps');
function stepLine() {
  const r = steps.getBoundingClientRect();
  steps.style.setProperty('--p', Math.max(0, Math.min(1, (innerHeight * .7 - r.top) / r.height)));
}
addEventListener('scroll', stepLine, { passive: true }); stepLine();

// comparador design / código
const demo = document.getElementById('demo'), rng = demo.querySelector('input');
const setX = v => demo.style.setProperty('--x', v + '%');
rng.addEventListener('input', () => { demo.dataset.touched = 1; setX(rng.value); });
if (!calm) new IntersectionObserver((es, o) => {
  if (!es[0].isIntersecting) return; o.disconnect();
  const t0 = performance.now();
  (function sweep(t) {
    if (demo.dataset.touched) return;
    const k = Math.min(1, (t - t0) / 2600), v = 50 + Math.sin(k * Math.PI * 2) * 32;
    rng.value = v; setX(v);
    if (k < 1) requestAnimationFrame(sweep);
  })(t0);
}, { threshold: .5 }).observe(demo);

// brilho que segue o mouse nos cards
$('.track').forEach(c => c.addEventListener('pointermove', e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px');
}));

if (matchMedia('(hover:hover)').matches && !calm) {
  // botões magnéticos
  $('.mag').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    b.addEventListener('pointerleave', () => b.style.transform = '');
  });
  // cursor com coordenadas
  const cur = document.getElementById('cur'), lbl = cur.querySelector('span');
  let tx = 0, ty = 0, cx = 0, cy = 0;
  addEventListener('pointermove', e => {
    tx = e.clientX; ty = e.clientY; cur.style.opacity = 1;
    lbl.textContent = `x:${Math.round(tx)} y:${Math.round(ty)}`;
    cur.classList.toggle('big', !!e.target.closest('a,summary,.demo'));
  });
  (function follow() {
    cx += (tx - cx) * .2; cy += (ty - cy) * .2;
    cur.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(follow);
  })();
}

// grade de pontos que reage ao mouse
(function () {
  const cv = document.getElementById('grid'), ctx = cv.getContext('2d');
  const GAP = 30, R = 170; let w, h, d, mx = -999, my = -999, sx = -999, sy = -999, on = true;
  function size() {
    d = Math.min(devicePixelRatio || 1, 2); w = innerWidth; h = innerHeight;
    cv.width = w * d; cv.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0); draw();
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const off = -(scrollY * .15) % GAP;
    for (let y = off; y < h + GAP; y += GAP) for (let x = GAP / 2; x < w; x += GAP) {
      const dx = x - sx, dy = y - sy, dist = Math.hypot(dx, dy);
      if (dist < R) {
        const f = 1 - dist / R, p = f * f * 16;
        ctx.fillStyle = `rgba(255,74,28,${.25 + f * .75})`;
        ctx.fillRect(x + dx / dist * p - 1 - f, y + dy / dist * p - 1 - f, 2 + f * 2, 2 + f * 2);
      } else { ctx.fillStyle = 'rgba(235,230,218,.13)'; ctx.fillRect(x - .75, y - .75, 1.5, 1.5); }
    }
  }
  function loop() {
    if (on) { sx += (mx - sx) * .12; sy += (my - sy) * .12; draw(); }
    requestAnimationFrame(loop);
  }
  addEventListener('resize', size);
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('visibilitychange', () => on = !document.hidden);
  size();
  if (calm) addEventListener('scroll', draw, { passive: true }); else loop();
})();
