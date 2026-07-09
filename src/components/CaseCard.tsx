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
          className="rounded-full px-2 py-1 font-medium"
          style={{ background: `color-mix(in srgb, var(${tema.corVar}) 14%, transparent)`, color: `var(${tema.corVar})` }}
        >
          {caso.data}
        </span>
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

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={caso.fonte}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold text-white"
          style={{ background: "var(--brand-orange-btn)" }}
        >
          <span aria-hidden="true">📖</span>
          <span>Ler íntegra no STJ ↗</span>
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
