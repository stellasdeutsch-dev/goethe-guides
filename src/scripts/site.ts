import { $, $$, onReady, reduce, say } from './lib';

onReady(() => {
  // Любой элемент с data-say произносит немецкий текст.
  document.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-say]');
    if (b) say(b.dataset.say || '', b.classList.contains('say') || b.classList.contains('bub') ? b : null);
  });

  // Открытый гайд считается прочитанным: галочки на экранах уровня и модуля.
  if ($('[data-article]')) {
    try {
      const seen: string[] = JSON.parse(localStorage.getItem('seen') || '[]');
      if (!seen.includes(location.pathname)) {
        seen.push(location.pathname);
        localStorage.setItem('seen', JSON.stringify(seen.slice(-400)));
      }
    } catch { /* приватный режим */ }
  }

  // Оглавление: на широком экране открыто сбоку, на телефоне закрывается после перехода.
  const wide = matchMedia('(min-width:1100px)').matches;
  if (wide) $('.toc')?.setAttribute('open', '');
  else $$<HTMLAnchorElement>('.toc a').forEach((a) => a.addEventListener('click', () => a.closest('details')?.removeAttribute('open')));

  if (reduce()) return;

  // Блоки появляются при прокрутке, по очереди внутри одной волны.
  const REV = '.path>li,.list>li,.mods>li,.scores>*,.prose>.x,.prose>.callout,.prose>.steps,.prose>.table,.prose>.phrases,.prose>.task,.prose>.meters,.prose>.anat,.prose>.wc,.prose>h2,.next,.toc';
  const items = $$<HTMLElement>(REV);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      let k = 0;
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        el.style.setProperty('--rd', `${Math.min(k++, 8) * 70}ms`);
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    items.forEach((el) => { el.classList.add('rv'); io.observe(el); });
    // Блоки, которые добавляет скрипт позже (план по неделям), тоже подхватываем.
    new MutationObserver(() => $$<HTMLElement>(REV).forEach((el) => { if (!el.classList.contains('rv')) { el.classList.add('rv'); io.observe(el); } })).observe(document.body, { childList: true, subtree: true });
  }

  // Полоса прогресса чтения вверху гайда.
  const art = $<HTMLElement>('[data-article]');
  if (art) {
    const bar = document.createElement('div');
    bar.className = 'readbar';
    document.body.appendChild(bar);
    const upd = () => {
      const r = art.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)));
      bar.style.transform = `scaleX(${p})`;
    };
    addEventListener('scroll', upd, { passive: true });
    addEventListener('resize', upd);
    upd();
  }

  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!fine) return;

  // Параллакс иллюстрации в шапке: слои с разной глубиной смещаются за курсором.
  $$<HTMLElement>('.hero,.art-head').forEach((hero) => {
    const layers = $$<HTMLElement>('[data-depth]', hero);
    if (!layers.length) return;
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      layers.forEach((l) => { const d = Number(l.dataset.depth) / 2; l.style.translate = `${dx * d}px ${dy * d}px`; });
    });
    hero.addEventListener('pointerleave', () => layers.forEach((l) => (l.style.translate = '0 0')));
  });

  // Карточки слегка наклоняются за курсором.
  $$<HTMLElement>('.pick,.stat,.next,.mod').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add('tilt');
      el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-3px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
});
