import { useMemo, useState } from "react";
import type { Repetitivo, TemaId, TemaInfo } from "../types";
import { ordenarPorDataRecente } from "../lib/dates";
import { FilterBar } from "./FilterBar";
import { RepetitivoTemaSection } from "./RepetitivoTemaSection";

interface Props {
  repetitivos: Repetitivo[];
  temas: TemaInfo[];
  onVerNoticias: (numeroTema: string) => void;
}

const TODOS_TEMAS = (temas: TemaInfo[]) => new Set<TemaId>(temas.map((t) => t.id));

export function RepetitivosTab({ repetitivos, temas, onVerNoticias }: Props) {
  const [query, setQuery] = useState("");
  const [temasAbertos, setTemasAbertos] = useState<Set<TemaId>>(() => TODOS_TEMAS(temas));

  const filtrando = query.trim() !== "";

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return repetitivos;
    return repetitivos.filter((r) =>
      [r.numero, r.questao, r.status].join(" ").toLowerCase().includes(q),
    );
  }, [repetitivos, query]);

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

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-sm" style={{ color: "var(--ink-secondary)" }}>
          Clique em "Ler íntegra no STJ" para conferir o julgado, ou use a busca acima. Para ver as
          notícias e decisões relacionadas a um tema repetitivo específico, use o botão dentro de
          cada card.
        </p>
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
              onVerNoticias={onVerNoticias}
            />
          );
        })}
      </div>
    </div>
  );
}
