import { useState } from "react";
import type { CasoSTJ, TemaInfo } from "../types";
import { StrategyPanel } from "./StrategyPanel";

interface Props {
  caso: CasoSTJ;
  tema: TemaInfo;
}

export function CaseCard({ caso, tema }: Props) {
  const [aberto, setAberto] = useState(false);

  return (
    <article
      className="rounded-lg border p-4 shadow-sm"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className="flex items-center gap-1.5 rounded-full px-2 py-1 font-medium text-white"
          style={{ background: `var(${tema.corVar})` }}
        >
          {tema.labelCurto}
        </span>
        {caso.temaRepetitivo && (
          <span
            className="rounded-full border px-2 py-1 font-medium"
            style={{ borderColor: "var(--brand-green)", color: "var(--brand-green)" }}
          >
            {caso.temaRepetitivo}
          </span>
        )}
        <span style={{ color: "var(--ink-muted)" }}>{caso.data}</span>
      </div>

      <h3 className="mt-2 text-base font-semibold" style={{ color: "var(--ink-primary)" }}>
        {caso.titulo}
      </h3>

      {caso.referencia && (
        <p className="mt-1 text-xs" style={{ color: "var(--ink-muted)" }}>
          {caso.referencia}
        </p>
      )}

      <p className="mt-2 text-sm" style={{ color: "var(--ink-secondary)" }}>
        {caso.resumo}
      </p>

      {caso.teseFixada && (
        <p className="mt-2 text-sm italic" style={{ color: "var(--ink-primary)" }}>
          Tese: {caso.teseFixada}
        </p>
      )}

      <div className="mt-3 flex items-center gap-3">
        <a
          href={caso.fonte}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium underline"
          style={{ color: "var(--brand-orange-text)" }}
        >
          Ver notícia oficial no STJ ↗
        </a>
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="ml-auto rounded-md border px-3 py-1.5 text-sm font-medium"
          style={{ borderColor: "var(--border)", color: "var(--ink-primary)" }}
          aria-expanded={aberto}
        >
          {aberto ? "Ocultar estratégias" : "Ver estratégias ▾"}
        </button>
      </div>

      {aberto && <StrategyPanel caso={caso} />}
    </article>
  );
}
