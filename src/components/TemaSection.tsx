import type { CasoSTJ, TemaInfo } from "../types";
import { CaseCard } from "./CaseCard";

interface Props {
  tema: TemaInfo;
  casos: CasoSTJ[];
  aberto: boolean;
  onToggle: () => void;
}

export function TemaSection({ tema, casos, aberto, onToggle }: Props) {
  return (
    <section
      className="overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={aberto}
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
        style={{ borderLeft: `6px solid var(${tema.corVar})` }}
      >
        <span className="text-2xl" aria-hidden="true">
          {tema.icone}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold" style={{ color: "var(--ink-primary)" }}>
              {tema.label}
            </h2>
            <span
              className="rounded-full px-2 py-0.5 text-xs font-semibold text-white"
              style={{ background: `var(${tema.corVar})` }}
            >
              {casos.length}
            </span>
          </div>
          <p className="mt-0.5 text-sm" style={{ color: "var(--ink-secondary)" }}>
            {tema.descricao}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl transition-transform"
          style={{
            color: "var(--ink-muted)",
            transform: aberto ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ⌄
        </span>
      </button>

      {aberto && (
        <div className="border-t px-4 py-4 sm:px-5" style={{ borderColor: "var(--border)" }}>
          {casos.length === 0 ? (
            <p className="py-4 text-center text-sm" style={{ color: "var(--ink-muted)" }}>
              Nenhum caso encontrado para os filtros selecionados.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {casos.map((caso) => (
                <CaseCard key={caso.id} caso={caso} tema={tema} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
