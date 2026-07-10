const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export function parseDataBR(data: string): Date | null {
  const m = data.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const [, dd, mm, yyyy] = m;
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
}

export function nomeMes(mes: number): string {
  return MESES[mes] ?? String(mes);
}

/** Ordena por data decrescente (mais recente primeiro); datas inválidas/"s/d" vão para o final. */
export function ordenarPorDataRecente<T extends { data: string }>(itens: T[]): T[] {
  return [...itens].sort((a, b) => {
    const da = parseDataBR(a.data);
    const db = parseDataBR(b.data);
    if (da && db) return db.getTime() - da.getTime();
    if (da) return -1;
    if (db) return 1;
    return 0;
  });
}

/** Mantém apenas itens com data parseável dentro dos últimos `dias` dias (padrão 180 ~ 6 meses). Itens sem data válida são excluídos. */
export function filtrarUltimosDias<T extends { data: string }>(itens: T[], dias = 180): T[] {
  const limite = new Date();
  limite.setDate(limite.getDate() - dias);
  return itens.filter((item) => {
    const d = parseDataBR(item.data);
    return d !== null && d >= limite;
  });
}

export function anosDisponiveis<T extends { data: string }>(itens: T[]): number[] {
  const anos = new Set<number>();
  for (const item of itens) {
    const d = parseDataBR(item.data);
    if (d) anos.add(d.getFullYear());
  }
  return Array.from(anos).sort((a, b) => b - a);
}
