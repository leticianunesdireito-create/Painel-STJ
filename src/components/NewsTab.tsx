import { useMemo, useState } from "react";
import type { CasoSTJ, TemaId, TemaInfo } from "../types";
import { parseDataBR, anosDisponiveis, ordenarPorDataRecente } from "../lib/dates";
import { NewsFilterBar } from "./NewsFilterBar";
import { TemaSection } from "./TemaSection";

interface Props {
  casos: CasoSTJ[];
  temas: TemaInfo[];
  temaRepetitivoFiltro: string | null;
  onLimparTemaRepetitivoFiltro: () => void;
}

const TODOS_TEMAS = (temas: TemaInfo[]) => new Set<TemaId>(temas.map((t) => t.id));

export function NewsTab({ casos, temas, temaRepetitivoFiltro, onLimparTemaRepetitivoFiltro }: Props) {
  const [query, setQuery] = useState("");
  const [ano, setAno] = useState<number | null>(null);
  const [mes, setMes] = useState<number | null>(null);
  const [temasAbertos, setTemasAbertos] = useState<Set<TemaId>>(() => TODOS_TEMAS(temas));

  const anos = useMemo(() => anosDisponiveis(casos), [casos]);

  const filtrando = query.trim() !== "" || ano !== null || mes !== null || temaRepetitivoFiltro !== null;

  const casosFiltrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return casos.filter((caso) => {
      if (temaRepetitivoFiltro && caso.temaRepetitivo !== temaRepetitivoFiltro) return false;
      if (ano !== null || mes !== null) {
        const d = parseDataBR(caso.data);
        if (!d) return false;
        if (ano !== null && d.getFullYear() !== ano) return false;
        if (mes !== null && d.getMonth() !== mes) return false;
      }
      if (!q) return true;
      const haystack = [caso.titulo, caso.resumo, caso.teseFixada ?? "", caso.referencia ?? "", ...caso.baseLegal]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [casos, temaRepetitivoFiltro, ano, mes, query]);

  const casosOrdenados = useMemo(() => ordenarPorDataRecente(casosFiltrados), [casosFiltrados]);

  function toggleTema(id: TemaId) {
    setTemasAbertos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <NewsFilterBar
        query={query}
        onQueryChange={setQuery}
        anos={anos}
        ano={ano}
        onAnoChange={setAno}
        mes={mes}
        onMesChange={setMes}
        onExpandAll={() => setTemasAbertos(TODOS_TEMAS(temas))}
        onCollapseAll={() => setTemasAbertos(new Set())}
      />

      {temaRepetitivoFiltro && (
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 sm:px-6">
          <span
            className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--brand-green)", color: "var(--brand-green)" }}
          >
            Filtrando por {temaRepetitivoFiltro}
            <button
              type="button"
              onClick={onLimparTemaRepetitivoFiltro}
              aria-label="Remover filtro de tema repetitivo"
              className="font-bold"
            >
              ×
            </button>
          </span>
        </div>
      )}

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6">
        {temas.map((tema) => {
          const casosDoTema = casosOrdenados.filter((c) => c.tema === tema.id);
          if (filtrando && casosDoTema.length === 0) return null;
          return (
            <TemaSection
              key={tema.id}
              tema={tema}
              casos={casosDoTema}
              aberto={filtrando || temasAbertos.has(tema.id)}
              onToggle={() => toggleTema(tema.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
