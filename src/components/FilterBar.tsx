import type { TemaId, TemaInfo } from "../types";

interface Props {
  temas: TemaInfo[];
  temaSelecionado: TemaId | null;
  onSelecionarTema: (tema: TemaId | null) => void;
  query: string;
  onQueryChange: (q: string) => void;
  contagens: Record<TemaId, number>;
  total: number;
}

export function FilterBar({
  temas,
  temaSelecionado,
  onSelecionarTema,
  query,
  onQueryChange,
  contagens,
  total,
}: Props) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onSelecionarTema(null)}
          className="rounded-full border px-3 py-1.5 text-sm font-medium"
          style={{
            borderColor: temaSelecionado === null ? "var(--brand-green)" : "var(--border)",
            background: temaSelecionado === null ? "var(--brand-green)" : "var(--card-bg)",
            color: temaSelecionado === null ? "#fff" : "var(--ink-primary)",
          }}
        >
          Todos ({total})
        </button>
        {temas.map((tema) => {
          const ativo = temaSelecionado === tema.id;
          return (
            <button
              key={tema.id}
              type="button"
              onClick={() => onSelecionarTema(ativo ? null : tema.id)}
              className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium"
              style={{
                borderColor: ativo ? `var(${tema.corVar})` : "var(--border)",
                background: ativo ? `var(${tema.corVar})` : "var(--card-bg)",
                color: ativo ? "#fff" : "var(--ink-primary)",
              }}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ background: ativo ? "#fff" : `var(${tema.corVar})` }}
              />
              {tema.labelCurto} ({contagens[tema.id] ?? 0})
            </button>
          );
        })}
      </div>

      <div className="mt-3">
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
      </div>
    </div>
  );
}
