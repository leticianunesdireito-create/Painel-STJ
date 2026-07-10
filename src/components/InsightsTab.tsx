import { useMemo, useState } from "react";
import type { Insight } from "../types";
import { ordenarPorDataRecente, filtrarUltimosDias } from "../lib/dates";
import { InsightCard } from "./InsightCard";

export function InsightsTab({ insights }: { insights: Insight[] }) {
  const [query, setQuery] = useState("");

  const recentes = useMemo(() => filtrarUltimosDias(insights, 180), [insights]);

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recentes;
    return recentes.filter((i) =>
      [i.categoria, i.titulo, i.resumo, i.previsaoLegal ?? "", i.analise]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [recentes, query]);

  const ordenados = useMemo(() => {
    const porData = ordenarPorDataRecente(filtrados);
    // Normativos (STJ/CNJ/ONR) recebem destaque: aparecem primeiro, mantendo a ordem por data dentro de cada grupo.
    const normativos = porData.filter((i) => i.normativo);
    const outros = porData.filter((i) => !i.normativo);
    return [...normativos, ...outros];
  }, [filtrados]);

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, resumo, categoria ou análise…"
          className="w-full max-w-md rounded-md border px-3 py-2 text-sm outline-none"
          style={{ borderColor: "var(--border)", background: "var(--card-bg)", color: "var(--ink-primary)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-2">
        {ordenados.length === 0 ? (
          <p className="col-span-full py-12 text-center text-sm" style={{ color: "var(--ink-muted)" }}>
            Nenhum insight dos últimos 6 meses encontrado para essa busca.
          </p>
        ) : (
          ordenados.map((i) => <InsightCard key={i.id} insight={i} />)
        )}
      </div>
    </div>
  );
}
