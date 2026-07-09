import { useMemo, useState } from "react";
import type { Repetitivo, TemaId, TemaInfo } from "../types";
import { ordenarPorDataRecente } from "../lib/dates";
import { FilterBar } from "./FilterBar";
import { RepetitivoTemaSection } from "./RepetitivoTemaSection";

interface Props {
  repetitivos: Repetitivo[];
  temas: TemaInfo[];
}

type StatusFiltro = "todos" | "julgado" | "em julgamento";

const TODOS_TEMAS = (temas: TemaInfo[]) => new Set<TemaId>(temas.map((t) => t.id));

export function RepetitivosTab({ repetitivos, temas }: Props) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFiltro>("todos");
  const [temasAbertos, setTemasAbertos] = useState<Set<TemaId>>(() => TODOS_TEMAS(temas));

  const filtrando = query.trim() !== "" || status !== "todos";

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repetitivos.filter((r) => {
      if (status !== "todos" && r.status !== status) return false;
      if (!q) return true;
      return [r.numero, r.questao, r.status].join(" ").toLowerCase().includes(q);
    });
  }, [repetitivos, query, status]);

  const ordenados = useMemo(() => ordenarPorDataRecente(filtrados), [filtrados]);

  function toggleTema(id: TemaId) {
    setTemasAbertos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const temasComRepetitivo = temas.filter((tema) =>
    repetitivos.some((r) => r.temaAssunto === tema.id),
  );

  return (
    <div className="flex flex-col gap-4">
      <FilterBar
        query={query}
        onQueryChange={setQuery}
        onExpandAll={() => setTemasAbertos(TODOS_TEMAS(temas))}
        onCollapseAll={() => setTemasAbertos(new Set())}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 sm:px-6">
        <StatusChip label="Todos" ativo={status === "todos"} onClick={() => setStatus("todos")} />
        <StatusChip label="Julgado" ativo={status === "julgado"} onClick={() => setStatus("julgado")} />
        <StatusChip
          label="Em julgamento"
          ativo={status === "em julgamento"}
          onClick={() => setStatus("em julgamento")}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6">
        {temasComRepetitivo.map((tema) => {
          const repetitivosDoTema = ordenados.filter((r) => r.temaAssunto === tema.id);
          if (filtrando && repetitivosDoTema.length === 0) return null;
          return (
            <RepetitivoTemaSection
              key={tema.id}
              tema={tema}
              repetitivos={repetitivosDoTema}
              aberto={filtrando || temasAbertos.has(tema.id)}
              onToggle={() => toggleTema(tema.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

function StatusChip({ label, ativo, onClick }: { label: string; ativo: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-3 py-1.5 text-sm font-medium"
      style={{
        borderColor: ativo ? "var(--brand-green)" : "var(--border)",
        background: ativo ? "var(--brand-green)" : "var(--card-bg)",
        color: ativo ? "#fff" : "var(--ink-primary)",
      }}
    >
      {label}
    </button>
  );
}
