type Aba = "noticias" | "repetitivos" | "insights";

interface Props {
  aba: Aba;
  onChange: (aba: Aba) => void;
  totalNoticias: number;
  totalRepetitivos: number;
  totalInsights: number;
}

export function TabBar({ aba, onChange, totalNoticias, totalRepetitivos, totalInsights }: Props) {
  return (
    <div className="mx-auto flex max-w-6xl gap-2 px-4 pt-4 sm:px-6" role="tablist">
      <TabButton
        active={aba === "noticias"}
        onClick={() => onChange("noticias")}
        label={`Jurisprudência STJ (${totalNoticias})`}
      />
      <TabButton
        active={aba === "repetitivos"}
        onClick={() => onChange("repetitivos")}
        label={`Repetitivos (${totalRepetitivos})`}
      />
      <TabButton
        active={aba === "insights"}
        onClick={() => onChange("insights")}
        label={`Notícias (${totalInsights})`}
      />
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className="rounded-t-lg border-x border-t px-4 py-2.5 text-sm font-semibold"
      style={{
        borderColor: "var(--border)",
        background: active ? "var(--card-bg)" : "transparent",
        color: active ? "var(--brand-green)" : "var(--ink-secondary)",
        borderBottom: active ? "3px solid var(--brand-green)" : "3px solid transparent",
        marginBottom: "-1px",
      }}
    >
      {label}
    </button>
  );
}
