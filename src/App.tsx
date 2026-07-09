import { useMemo, useState } from "react";
import type { TemaId } from "./types";
import { temas } from "./data/temas";
import { casos } from "./data/casos";
import { repetitivos } from "./data/repetitivos";
import { Header } from "./components/Header";
import { RepetitivosSection } from "./components/RepetitivosSection";
import { FilterBar } from "./components/FilterBar";
import { TemaSection } from "./components/TemaSection";

const ATUALIZADO_EM = "09/07/2026";
const TODOS_TEMAS = new Set<TemaId>(temas.map((t) => t.id));

function App() {
  const [temaRepetitivoSelecionado, setTemaRepetitivoSelecionado] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [temasAbertos, setTemasAbertos] = useState<Set<TemaId>>(TODOS_TEMAS);

  const filtrando = query.trim() !== "" || temaRepetitivoSelecionado !== null;

  const casosFiltrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return casos.filter((caso) => {
      if (temaRepetitivoSelecionado && caso.temaRepetitivo !== temaRepetitivoSelecionado) return false;
      if (!q) return true;
      const haystack = [
        caso.titulo,
        caso.resumo,
        caso.teseFixada ?? "",
        caso.referencia ?? "",
        ...caso.baseLegal,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [temaRepetitivoSelecionado, query]);

  function toggleTema(id: TemaId) {
    setTemasAbertos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <Header />

      <RepetitivosSection
        repetitivos={repetitivos}
        temaAtivo={temaRepetitivoSelecionado}
        onSelecionar={setTemaRepetitivoSelecionado}
      />

      <div className="py-4">
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          onExpandAll={() => setTemasAbertos(new Set(TODOS_TEMAS))}
          onCollapseAll={() => setTemasAbertos(new Set())}
        />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-2 sm:px-6">
        {temas.map((tema) => {
          const casosDoTema = casosFiltrados.filter((c) => c.tema === tema.id);
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
      </main>

      <footer
        className="mt-4 border-t px-4 py-6 text-center text-xs sm:px-6"
        style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
      >
        <p>
          Painel interno — Jurídico MRV Engenharia e Participações S/A.
          Conteúdo atualizado em {ATUALIZADO_EM}, com base em fontes oficiais do
          STJ (stj.jus.br). Não constitui parecer jurídico.
        </p>
      </footer>
    </div>
  );
}

export default App;
