import { useMemo, useState } from "react";
import type { TemaId } from "./types";
import { temas } from "./data/temas";
import { casos } from "./data/casos";
import { repetitivos } from "./data/repetitivos";
import { Header } from "./components/Header";
import { RepetitivosSection } from "./components/RepetitivosSection";
import { FilterBar } from "./components/FilterBar";
import { CaseCard } from "./components/CaseCard";

const ATUALIZADO_EM = "09/07/2026";

function App() {
  const [temaSelecionado, setTemaSelecionado] = useState<TemaId | null>(null);
  const [temaRepetitivoSelecionado, setTemaRepetitivoSelecionado] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const temaPorId = useMemo(() => Object.fromEntries(temas.map((t) => [t.id, t])), []);

  const contagens = useMemo(() => {
    const c = {} as Record<TemaId, number>;
    for (const tema of temas) {
      c[tema.id] = casos.filter((caso) => caso.tema === tema.id).length;
    }
    return c;
  }, []);

  const casosFiltrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return casos.filter((caso) => {
      if (temaSelecionado && caso.tema !== temaSelecionado) return false;
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
  }, [temaSelecionado, temaRepetitivoSelecionado, query]);

  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <Header />

      <RepetitivosSection
        repetitivos={repetitivos}
        temaAtivo={temaRepetitivoSelecionado}
        onSelecionar={setTemaRepetitivoSelecionado}
      />

      <FilterBar
        temas={temas}
        temaSelecionado={temaSelecionado}
        onSelecionarTema={setTemaSelecionado}
        query={query}
        onQueryChange={setQuery}
        contagens={contagens}
        total={casos.length}
      />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {casosFiltrados.length === 0 ? (
          <p className="py-12 text-center text-sm" style={{ color: "var(--ink-muted)" }}>
            Nenhum caso encontrado para os filtros selecionados.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {casosFiltrados.map((caso) => (
              <CaseCard key={caso.id} caso={caso} tema={temaPorId[caso.tema]} />
            ))}
          </div>
        )}
      </main>

      <footer
        className="border-t px-4 py-6 text-center text-xs sm:px-6"
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
