import type { Repetitivo } from "../types";

interface Props {
  repetitivo: Repetitivo;
  onVerNoticias: (numeroTema: string) => void;
}

export function RepetitivoCard({ repetitivo, onVerNoticias }: Props) {
  return (
    <article
      className="rounded-lg border p-4 shadow-sm"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className="rounded-full px-2 py-1 font-semibold"
          style={{ borderColor: "var(--brand-green)", color: "var(--brand-green)", border: "1px solid var(--brand-green)" }}
        >
          {repetitivo.numero}
        </span>
        <span
          className="rounded-full px-2 py-1 font-medium"
          style={{
            background: repetitivo.status === "julgado" ? "rgba(11,131,0,0.12)" : "var(--warning-bg)",
            color: repetitivo.status === "julgado" ? "#0b8300" : "var(--warning-ink)",
          }}
        >
          {repetitivo.status === "julgado" ? "Julgado" : "Em julgamento"}
        </span>
        <span style={{ color: "var(--ink-muted)" }}>{repetitivo.data}</span>
      </div>

      <p className="mt-2 text-sm" style={{ color: "var(--ink-primary)" }}>
        {repetitivo.questao}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={repetitivo.fonte}
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
          onClick={() => onVerNoticias(repetitivo.numero)}
          className="rounded-md border px-3 py-1.5 text-sm font-medium"
          style={{ borderColor: "var(--border)", color: "var(--ink-primary)" }}
        >
          Ver notícias relacionadas →
        </button>
      </div>
    </article>
  );
}
