import { nomeMes } from "../lib/dates";

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
  anos: number[];
  ano: number | null;
  onAnoChange: (ano: number | null) => void;
  mes: number | null;
  onMesChange: (mes: number | null) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
}

const selectStyle = {
  borderColor: "var(--border)",
  background: "var(--card-bg)",
  color: "var(--ink-primary)",
};

export function NewsFilterBar({
  query,
  onQueryChange,
  anos,
  ano,
  onAnoChange,
  mes,
  onMesChange,
  onExpandAll,
  onCollapseAll,
}: Props) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6">
      <input
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Buscar por título, resumo, tese ou dispositivo legal…"
        className="w-full max-w-md rounded-md border px-3 py-2 text-sm outline-none"
        style={selectStyle}
      />

      <select
        value={ano ?? ""}
        onChange={(e) => onAnoChange(e.target.value ? Number(e.target.value) : null)}
        className="rounded-md border px-3 py-2 text-sm"
        style={selectStyle}
        aria-label="Filtrar por ano"
      >
        <option value="">Todos os anos</option>
        {anos.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      <select
        value={mes ?? ""}
        onChange={(e) => onMesChange(e.target.value ? Number(e.target.value) : null)}
        className="rounded-md border px-3 py-2 text-sm"
        style={selectStyle}
        aria-label="Filtrar por mês"
      >
        <option value="">Todos os meses</option>
        {Array.from({ length: 12 }, (_, i) => i).map((m) => (
          <option key={m} value={m}>
            {nomeMes(m).charAt(0).toUpperCase() + nomeMes(m).slice(1)}
          </option>
        ))}
      </select>

      <div className="ml-auto flex gap-2 text-sm">
        <button
          type="button"
          onClick={onExpandAll}
          className="rounded-md border px-3 py-1.5 font-medium"
          style={{ borderColor: "var(--border)", color: "var(--ink-primary)" }}
        >
          Expandir todos
        </button>
        <button
          type="button"
          onClick={onCollapseAll}
          className="rounded-md border px-3 py-1.5 font-medium"
          style={{ borderColor: "var(--border)", color: "var(--ink-primary)" }}
        >
          Recolher todos
        </button>
      </div>
    </div>
  );
}
