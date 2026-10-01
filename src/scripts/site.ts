import { $, $$, onReady, say } from './lib';

document.documentElement.classList.add('js');

onReady(() => {
  // Любой элемент с data-say произносит немецкий текст.
  document.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-say]');
    if (!b) return;
    say(b.dataset.say || '', b.classList.contains('say') || b.classList.contains('bub') ? b : null);
  });

  // Навигация: волосяная линия появляется, только когда под ней едет контент.
  const nav = $('.gnav');
  const prog = $<HTMLElement>('.prog');
  const article = $('.prose');
  let ticking = false;
  const onScroll = () => {
    nav?.classList.toggle('scrolled', window.scrollY > 4);
    if (prog && article) {
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
      prog.style.transform = `scaleX(${p})`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  // Мобильное меню: шторка выезжает из-под навигации и уходит туда же.
  const btn = $<HTMLButtonElement>('.menu-btn');
  const sheet = $('#sheet');
  const scrim = $('.scrim');
  const setMenu = (open: boolean) => {
    if (!btn || !sheet) return;
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = `<svg class="ic"><use href="#i-${open ? 'x' : 'menu'}"/></svg>`;
    sheet.classList.toggle('open', open);
    scrim?.classList.toggle('open', open);
    sheet.toggleAttribute('inert', !open);
  };
  btn?.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  scrim?.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  $$('#sheet a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Подсветка текущего раздела в оглавлении.
  const links = $$<HTMLAnchorElement>('.toc a');
  const heads = $$('.prose h2[id]');
  if (links.length && heads.length && 'IntersectionObserver' in window) {
    const setOn = (id: string) => links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${id}`));
    const io = new IntersectionObserver(
      (es) => {
        const vis = es.filter((x) => x.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setOn(vis[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    heads.forEach((h) => io.observe(h));
  }
  $$<HTMLAnchorElement>('.toc.mob a').forEach((a) => a.addEventListener('click', () => a.closest('details')?.removeAttribute('open')));

  // Появление блоков при скролле.
  const rv = $$('.rv');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (es) => es.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add('in'));
});
