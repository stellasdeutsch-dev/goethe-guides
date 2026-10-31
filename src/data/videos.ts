/* Официальные видео устных экзаменов с YouTube.
   embed: можно ли встроить плеер на страницу. Goethe-Institut встраивание запретил,
   эти видео открываются на YouTube. Проверка: https://www.youtube.com/oembed?url=… отдаёт 401, если нельзя. */
export interface Video { id: string; title: string; channel: string; min: string; embed: boolean }

const goethe = (id: string, title: string, min: string): Video => ({ id, title, min, channel: 'Goethe-Institut', embed: false });
const telc = (id: string, title: string, min: string): Video => ({ id, title, min, channel: 'telc gGmbH', embed: true });
const oesd = (id: string, title: string, min: string): Video => ({ id, title, min, channel: 'ÖSD', embed: true });

export const VIDEOS = {
  'goethe-a1': goethe('O6m-GslH2kM', 'Goethe-Zertifikat A1: Start Deutsch 1 – Sprechen', '13:37'),
  'goethe-a2': goethe('3BuPkYHl5V4', 'Goethe-Zertifikat A2 – Sprechen', '11:20'),
  'goethe-b1': goethe('YggtVH9BoSE', 'Goethe-Zertifikat B1 – Modul Sprechen', '12:56'),
  'goethe-b2': goethe('dZtBsH95r84', 'Goethe-Zertifikat B2 – Modul Sprechen', '16:14'),
  'goethe-c1': goethe('HoD9dnTidxw', 'Goethe-Zertifikat C1 – Modul Sprechen', '19:11'),
  'goethe-c2': goethe('gy8iXzJBkA8', 'Goethe-Zertifikat C2 – Modul Sprechen', '17:25'),
  'telc-a1': telc('rQO4zjppdr8', 'Mündliche Prüfung telc Deutsch A1', '16:26'),
  'telc-a2': telc('3hPns0XBOCs', 'Mündliche Prüfung telc Deutsch A2', '7:37'),
  'telc-b1': telc('9lkyjt0j3Bs', 'Mündliche Prüfung telc Deutsch B1', '12:28'),
  'telc-b2': telc('D2epCDXIZ2g', 'Mündliche Prüfung telc Deutsch B2', '15:34'),
  'oesd-a1': oesd('yJEueRpVXGU', 'ÖSD Zertifikat A1 – Sprechen, digitale Prüfung', '12:01'),
  'oesd-a2': oesd('6Qr6u5btwaA', 'ÖSD Zertifikat A2 – Sprechen, digitale Prüfung', '14:07'),
  'oesd-b1': oesd('D1k0gAyNW6I', 'ÖSD Zertifikat B1 – Mündliche Prüfung, einzeln', '9:11'),
  'oesd-b1-paar': oesd('CtYvctbOSO8', 'ÖSD Zertifikat B1 – Mündliche Prüfung, Paar', '11:49'),
  'oesd-b2': oesd('3H8VMowHb-o', 'ÖSD Zertifikat B2 – Sprechen, digitale Prüfung', '18:48'),
  'oesd-c1': oesd('Al1Kej_d1UU', 'ÖSD Zertifikat C1 – Sprechen, digitale Prüfung', '19:29'),
  'oesd-c2': oesd('TeSBiK894aw', 'ÖSD Zertifikat C2 – Sprechen, digitale Prüfung', '23:09'),
} satisfies Record<string, Video>;

export type VideoKey = keyof typeof VIDEOS;
