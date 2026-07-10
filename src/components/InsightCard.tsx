import { useState } from "react";
import type { Insight } from "../types";

export function InsightCard({ insight }: { insight: Insight }) {
  const [aberto, setAberto] = useState(false);

  return (
    <article
      className="rounded-lg border p-4 shadow-sm"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className="rounded-full border px-2 py-1 font-medium"
          style={{ borderColor: "var(--brand-green)", color: "var(--brand-green)" }}
        >
          {insight.categoria}
        </span>
        <span style={{ color: "var(--ink-muted)" }}>{insight.data}</span>
      </div>

      <h3 className="mt-2 text-base font-semibold" style={{ color: "var(--ink-primary)" }}>
        {insight.titulo}
      </h3>

      {insight.referencia && (
        <p className="mt-1 text-xs" style={{ color: "var(--ink-muted)" }}>
          {insight.referencia}
        </p>
      )}

      <p className="mt-2 text-sm" style={{ color: "var(--ink-secondary)" }}>
        {insight.resumo}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={insight.fonte}
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
          {aberto ? "Ocultar análise" : "Lei x entendimento do STJ ▾"}
        </button>
      </div>

      {aberto && (
        <div className="mt-4 flex flex-col gap-3 border-t pt-4" style={{ borderColor: "var(--border)" }}>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--ink-primary)" }}>
              Previsão legal
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--ink-secondary)" }}>
              {insight.previsaoLegal}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--ink-primary)" }}>
              Entendimento do STJ
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--ink-secondary)" }}>
              {insight.entendimentoSTJ}
            </p>
          </div>
          <div className="rounded-md p-3" style={{ background: "rgba(31,92,60,0.08)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--brand-green)" }}>
              Providência sugerida
            </p>
            <ul className="mt-1 list-inside list-disc space-y-1.5 text-sm" style={{ color: "var(--ink-secondary)" }}>
              {insight.providenciaSugerida.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
