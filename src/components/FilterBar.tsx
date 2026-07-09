interface Props {
  query: string;
  onQueryChange: (q: string) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
}

export function FilterBar({ query, onQueryChange, onExpandAll, onCollapseAll }: Props) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6">
      <input
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Buscar por título, resumo, tese ou dispositivo legal…"
        className="w-full max-w-md rounded-md border px-3 py-2 text-sm outline-none"
        style={{
          borderColor: "var(--border)",
          background: "var(--card-bg)",
          color: "var(--ink-primary)",
        }}
      />
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
