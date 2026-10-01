/* Shared client helpers: TTS, GSAP access, visibility. */
declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
    SplitText?: any;
    MotionPathPlugin?: any;
  }
}

export const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
export const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) =>
  Array.from(r.querySelectorAll<T>(s));

export const reduce = () => !!window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

let gsapReady = false;
/** GSAP, если он загрузился и анимации не выключены. Иначе null: всё должно работать и без него. */
export function G(): any {
  const g = window.gsap;
  if (!g || reduce()) return null;
  if (!gsapReady) {
    try {
      if (window.ScrollTrigger) g.registerPlugin(window.ScrollTrigger);
      if (window.SplitText) g.registerPlugin(window.SplitText);
      if (window.MotionPathPlugin) g.registerPlugin(window.MotionPathPlugin);
      window.ScrollTrigger?.config({ ignoreMobileResize: true });
      document.documentElement.classList.add('gs');
    } catch {
      return null;
    }
    gsapReady = true;
  }
  return g;
}

/** Запуск после того, как выполнились все defer-скрипты (в том числе GSAP). */
export function onReady(fn: () => void) {
  if (document.readyState === 'complete') fn();
  else window.addEventListener('DOMContentLoaded', fn, { once: true });
}

/* ---------- speech (de-DE) ---------- */
const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window;
let deVoice: SpeechSynthesisVoice | null = null;
function pickVoice() {
  try {
    const v = speechSynthesis.getVoices();
    deVoice = v.find((x) => /^de/i.test(x.lang)) || null;
  } catch {
    /* ignore */
  }
}
if (hasTTS) {
  pickVoice();
  try {
    speechSynthesis.onvoiceschanged = pickVoice;
  } catch {
    /* ignore */
  }
} else if (typeof document !== 'undefined') {
  document.documentElement.classList.add('no-tts');
}

export function say(text: string, btn?: HTMLElement | null) {
  if (!hasTTS || !text) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = 0.88;
    if (deVoice) u.voice = deVoice;
    if (btn) {
      btn.classList.add('on');
      u.onend = u.onerror = () => btn.classList.remove('on');
    }
    speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}

export function whenVisible(el: Element | null, on: () => void, off?: () => void, threshold = 0.25) {
  if (!el) return;
  if (!('IntersectionObserver' in window)) {
    on();
    return;
  }
  new IntersectionObserver(
    (es) => es.forEach((en) => (en.isIntersecting ? on() : off && off())),
    { threshold },
  ).observe(el);
}

export function confetti(host: HTMLElement, n: number) {
  const g = G();
  if (!g) return;
  const colors = ['#C6F53C', '#FA0586', '#7700FF', '#00BDFF', '#FFE81A', '#FF6040'];
  for (let i = 0; i < n; i++) {
    const c = document.createElement('i');
    c.className = 'conf';
    c.style.background = colors[i % colors.length];
    host.appendChild(c);
    g.fromTo(
      c,
      { x: 0, y: 0, rotation: 0 },
      {
        x: g.utils.random(-260, 260),
        y: g.utils.random(-220, 160),
        rotation: g.utils.random(-540, 540),
        opacity: 0,
        duration: g.utils.random(1, 1.8),
        ease: 'power3.out',
        onComplete: () => c.remove(),
      },
    );
  }
}

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);
