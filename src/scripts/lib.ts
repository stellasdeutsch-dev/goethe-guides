/* Shared client helpers: springs (Apple-style motion), TTS, visibility. */

export const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
export const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) =>
  Array.from(r.querySelectorAll<T>(s));

export const reduce = () => !!window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Запуск после парсинга документа. */
export function onReady(fn: () => void) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
}

/* ---------- springs ----------
   Параметры как у Apple: damping (1 = без перелёта) и response (сек, «скорость дотягивания»).
   Пружина всегда стартует с текущего значения и текущей скорости, поэтому её можно прервать
   и перенаправить в любой момент без рывка. */
interface SpringState {
  x: number;
  v: number;
  target: number;
  k: number;
  c: number;
  eps: number;
  raf: number;
  apply: (x: number) => void;
  done?: () => void;
}
const springs = new WeakMap<object, Map<string, SpringState>>();

export interface SpringOpts {
  response?: number;
  damping?: number;
  /** Начальное значение, если пружина ещё не запускалась (или принудительный старт). */
  from?: number;
  velocity?: number;
  eps?: number;
  done?: () => void;
}

export function spring(owner: object, key: string, target: number, apply: (x: number) => void, o: SpringOpts = {}) {
  const response = o.response ?? 0.4;
  const damping = o.damping ?? 1;
  const k = Math.pow((2 * Math.PI) / response, 2);
  const c = (4 * Math.PI * damping) / response;
  let map = springs.get(owner);
  if (!map) springs.set(owner, (map = new Map()));
  let s = map.get(key);
  if (!s) {
    s = { x: o.from ?? target, v: o.velocity ?? 0, target, k, c, eps: o.eps ?? 0.01, raf: 0, apply };
    map.set(key, s);
  } else {
    if (o.from !== undefined) s.x = o.from;
    if (o.velocity !== undefined) s.v = o.velocity;
  }
  Object.assign(s, { target, k, c, apply, eps: o.eps ?? s.eps, done: o.done });
  if (reduce()) {
    cancelAnimationFrame(s.raf);
    s.raf = 0;
    s.x = target;
    s.v = 0;
    apply(target);
    s.done?.();
    return;
  }
  if (s.raf) return; // уже летит: подхватит новую цель со своей скоростью
  let last = performance.now();
  const st = s;
  const step = (now: number) => {
    const dt = Math.min(0.064, (now - last) / 1000);
    last = now;
    const n = Math.max(1, Math.ceil(dt / 0.004));
    const h = dt / n;
    for (let i = 0; i < n; i++) {
      const a = -st.k * (st.x - st.target) - st.c * st.v;
      st.v += a * h;
      st.x += st.v * h;
    }
    if (Math.abs(st.v) < st.eps && Math.abs(st.x - st.target) < st.eps) {
      st.x = st.target;
      st.v = 0;
      st.raf = 0;
      st.apply(st.x);
      st.done?.();
      return;
    }
    st.apply(st.x);
    st.raf = requestAnimationFrame(step);
  };
  st.raf = requestAnimationFrame(step);
}

/** Короткий «пружинный» отклик: масштаб с from до 1. */
export function pop(el: HTMLElement | null, from = 0.85, damping = 0.6) {
  if (!el) return;
  spring(el, 'pop', 1, (x) => (el.style.scale = String(x)), { from, damping, response: 0.35, eps: 0.001 });
}

/* ---------- speech (de-DE) ---------- */
const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window;
let deVoice: SpeechSynthesisVoice | null = null;
function pickVoice() {
  try {
    const v = speechSynthesis.getVoices().filter((x) => /^de/i.test(x.lang));
    // Предпочитаем качественные голоса, если они есть.
    deVoice = v.find((x) => /premium|enhanced|anna|google deutsch/i.test(x.name)) || v[0] || null;
  } catch {
    /* ignore */
  }
}
if (hasTTS) {
  pickVoice();
  try {
    speechSynthesis.addEventListener('voiceschanged', pickVoice);
  } catch {
    /* ignore */
  }
} else if (typeof document !== 'undefined') {
  document.documentElement.classList.add('no-tts');
}
export const canSpeak = () => hasTTS;

export function say(text: string, btn?: HTMLElement | null, opts: { rate?: number; onend?: () => void } = {}) {
  if (!hasTTS || !text) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = opts.rate ?? 0.9;
    if (deVoice) u.voice = deVoice;
    if (btn) btn.classList.add('on');
    u.onend = u.onerror = () => {
      btn?.classList.remove('on');
      opts.onend?.();
    };
    speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}
export function hush() {
  try {
    if (hasTTS) speechSynthesis.cancel();
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
  new IntersectionObserver((es) => es.forEach((en) => (en.isIntersecting ? on() : off && off())), { threshold }).observe(el);
}

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);

/** **жирный** → <b>, остальное экранируем. */
export const fmt = (s: string) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

export const icon = (name: string) => `<svg class="ic" aria-hidden="true"><use href="#i-${name}"/></svg>`;
