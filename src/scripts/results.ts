/* Результаты пробников из localStorage ('abres'), сведённые по частям экзамена.
   Пробник может быть разбит на несколько бланков (telc, ÖSD): баллы бланков одной части складываются. */
export interface Result { title?: string; level?: string; module?: string; points: number; max: number; at: number }

export function readResults(): Record<string, Result> {
  try { return JSON.parse(localStorage.getItem('abres') || '{}'); } catch { return {}; }
}

/** Чей это результат: Goethe по уровню, telc/ÖSD по префиксу id (telc-b1-…). */
export function belongs(id: string, r: Result, o: { exam: string; track: string; goethe?: string }) {
  if (o.goethe) return !/^(telc|oesd)-/.test(id) && r.level === o.goethe;
  return id.startsWith(`${o.exam}-${o.track}-`);
}

/** Проценты по каждой части (lesen, hoeren, …). */
export function mockResults(o: { exam: string; track: string; goethe?: string }): Record<string, number> {
  const sum: Record<string, [number, number]> = {};
  for (const [id, r] of Object.entries(readResults())) {
    if (!r.module || !r.max || !belongs(id, r, o)) continue;
    const s = (sum[r.module] ??= [0, 0]);
    s[0] += r.points;
    s[1] += r.max;
  }
  return Object.fromEntries(Object.entries(sum).map(([m, [p, x]]) => [m, Math.round((p / x) * 100)]));
}
