import type { CasoSTJ } from "../types";

export function StrategyPanel({ caso }: { caso: CasoSTJ }) {
  return (
    <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--border)" }}>
      {caso.baseLegal.length > 0 && (
        <div className="mb-4 rounded-md p-3 text-sm" style={{ background: "rgba(31,92,60,0.08)" }}>
          <p className="font-semibold" style={{ color: "var(--brand-green)" }}>
            Base legal
          </p>
          <ul className="mt-1 list-inside list-disc space-y-1" style={{ color: "var(--ink-secondary)" }}>
            {caso.baseLegal.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StrategyColumn icon="🛡" title="Estratégia de Defesa" items={caso.estrategiaDefesa} />
        <StrategyColumn icon="🤝" title="Estratégia de Acordo" items={caso.estrategiaAcordo} />
        <StrategyColumn icon="📊" title="Avaliação de Base" items={caso.avaliacaoBase} />
      </div>
    </div>
  );
}

function StrategyColumn({ icon, title, items }: { icon: string; title: string; items: string[] }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--ink-primary)" }}>
        <span aria-hidden="true">{icon}</span>
        {title}
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm" style={{ color: "var(--ink-secondary)" }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
