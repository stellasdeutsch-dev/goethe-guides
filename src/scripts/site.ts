import { $, $$, G, onReady, say, whenVisible } from './lib';

onReady(() => {
  // Любой элемент с data-say произносит немецкий текст.
  document.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-say]');
    if (!b) return;
    say(b.dataset.say || '', b.classList.contains('say') ? b : null);
  });

  const g = G();

  // Прогресс чтения в шапке.
  const prog = $('.prog');
  const article = $('.prose');
  if (prog && article) {
    let ticking = false;
    const upd = () => {
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
      prog.style.transform = `scaleX(${p})`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(upd);
      }
    }, { passive: true });
    upd();
  }

  // Подсветка текущего раздела в оглавлении.
  const links = $$<HTMLAnchorElement>('.toc a');
  const heads = $$('.prose h2[id]');
  if (links.length && heads.length && 'IntersectionObserver' in window) {
    const setOn = (id: string) =>
      links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${id}`));
    const io = new IntersectionObserver(
      (es) => {
        const vis = es.filter((x) => x.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setOn(vis[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    heads.forEach((h) => io.observe(h));
  }
  // Мобильное оглавление закрывается после перехода.
  $$<HTMLAnchorElement>('.toc.mob a').forEach((a) =>
    a.addEventListener('click', () => a.closest('details')?.removeAttribute('open')),
  );

  // Появление блоков: GSAP, если есть, иначе CSS-класс.
  const rv = $$('.rv');
  if (g && window.ScrollTrigger) {
    window.ScrollTrigger.batch(rv, {
      start: 'top 88%',
      once: true,
      onEnter: (els: Element[]) =>
        g.from(els, { y: 34, rotation: 1.2, duration: 0.8, ease: 'back.out(1.6)', stagger: 0.08 }),
    });
    // Заголовки h2: слова прыгают, плашка .hl хлопает.
    $$('.prose h2').forEach((h) => {
      const hl = $('.hl', h);
      g.from(h, { yPercent: 30, duration: 0.7, ease: 'back.out(2)', scrollTrigger: { trigger: h, start: 'top 90%', once: true } });
      if (hl)
        g.from(hl, { rotation: -14, scale: 0.6, duration: 1, ease: 'elastic.out(1,.45)', scrollTrigger: { trigger: h, start: 'top 90%', once: true } });
    });
    // Полоски баллов растут.
    $$('.sc .tr i').forEach((bar) =>
      g.from(bar, { scaleX: 0.3, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 92%', once: true } }),
    );
    // Шаги метода.
    $$('.steps').forEach((s) =>
      g.from(s.children, { x: -24, rotation: -1.5, duration: 0.7, ease: 'back.out(1.8)', stagger: 0.12, scrollTrigger: { trigger: s, start: 'top 85%', once: true } }),
    );
    window.addEventListener('load', () => window.ScrollTrigger.refresh());
    document.fonts?.ready.then(() => window.ScrollTrigger.refresh());
  } else {
    rv.forEach((el) => whenVisible(el, () => el.classList.add('in'), undefined, 0.1));
  }
});
