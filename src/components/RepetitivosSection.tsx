import type { Repetitivo } from "../types";

interface Props {
  repetitivos: Repetitivo[];
  temaAtivo: string | null;
  onSelecionar: (tema: string | null) => void;
}

export function RepetitivosSection({ repetitivos, temaAtivo, onSelecionar }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6" aria-labelledby="repetitivos-heading">
      <h2 id="repetitivos-heading" className="text-base font-semibold" style={{ color: "var(--ink-primary)" }}>
        Recursos Repetitivos relacionados
      </h2>
      <p className="mt-1 text-sm" style={{ color: "var(--ink-secondary)" }}>
        Temas fixados ou em julgamento pelo STJ que orientam a estratégia processual nos casos abaixo.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {repetitivos.map((rep) => {
          const ativo = temaAtivo === rep.tema;
          return (
            <button
              key={rep.tema}
              type="button"
              onClick={() => onSelecionar(ativo ? null : rep.tema)}
              className="rounded-lg border p-3 text-left transition-shadow hover:shadow-sm"
              style={{
                background: "var(--card-bg)",
                borderColor: ativo ? "var(--brand-green)" : "var(--border)",
                boxShadow: ativo ? "0 0 0 2px var(--brand-green) inset" : undefined,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold" style={{ color: "var(--brand-green)" }}>
                  {rep.tema}
                </span>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    background: rep.status === "julgado" ? "rgba(11,131,0,0.12)" : "var(--warning-bg)",
                    color: rep.status === "julgado" ? "#0b8300" : "var(--warning-ink)",
                  }}
                >
                  {rep.status === "julgado" ? "Julgado" : "Em julgamento"}
                </span>
              </div>
              <p className="mt-2 text-xs leading-snug" style={{ color: "var(--ink-secondary)" }}>
                {rep.questao}
              </p>
              <a
                href={rep.fonte}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 inline-block text-xs font-medium underline"
                style={{ color: "var(--brand-orange-text)" }}
              >
                Ver fonte oficial STJ ↗
              </a>
            </button>
          );
        })}
      </div>
    </section>
  );
}
