import { useMemo, useState } from "react";
import type { Insight } from "../types";
import { ordenarPorDataRecente } from "../lib/dates";
import { InsightCard } from "./InsightCard";

export function InsightsTab({ insights }: { insights: Insight[] }) {
  const [query, setQuery] = useState("");

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return insights;
    return insights.filter((i) =>
      [i.categoria, i.titulo, i.resumo, i.previsaoLegal, i.entendimentoSTJ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [insights, query]);

  const ordenados = useMemo(() => ordenarPorDataRecente(filtrados), [filtrados]);

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-sm" style={{ color: "var(--ink-secondary)" }}>
          Notícias e decisões do STJ que não se encaixam nos 8 temas específicos do painel, mas que
          podem interessar ao mercado de incorporação imobiliária, loteamento e construção civil —
          selecionadas por avaliação própria. Para cada item, comparamos a previsão legal com o que
          o STJ está de fato decidindo e sugerimos uma providência concreta.
        </p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, resumo, categoria ou entendimento…"
          className="mt-3 w-full max-w-md rounded-md border px-3 py-2 text-sm outline-none"
          style={{ borderColor: "var(--border)", background: "var(--card-bg)", color: "var(--ink-primary)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-2">
        {ordenados.length === 0 ? (
          <p className="col-span-full py-12 text-center text-sm" style={{ color: "var(--ink-muted)" }}>
            Nenhum insight encontrado para essa busca.
          </p>
        ) : (
          ordenados.map((i) => <InsightCard key={i.id} insight={i} />)
        )}
      </div>
    </div>
  );
}
