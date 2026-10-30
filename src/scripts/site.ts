import { $, $$, onReady, say } from './lib';

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
});
