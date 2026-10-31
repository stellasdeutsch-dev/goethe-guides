// 3D-иконки разделов (public/art/*.png): шапка гайда, карточки модулей, иллюстрации.
export const ART: Record<string, string> = {
  lesen: 'book', hoeren: 'headphones', schreiben: 'pen', sprechen: 'mic',
  probniki: 'checklist', pruefung: 'clock', grammatik: 'puzzle', sprachbausteine: 'puzzle',
};
export const artOf = (section: string) => ART[section] ?? 'medal';
