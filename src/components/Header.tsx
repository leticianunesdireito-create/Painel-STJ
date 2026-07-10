export function Header() {
  return (
    <header>
      <div
        className="text-white"
        style={{ background: "var(--brand-green)" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight">MRV</span>
            <span style={{ color: "var(--brand-orange-decor)" }} className="text-xl font-bold">
              &amp;CO
            </span>
            <span className="ml-2 text-sm text-white/70">Jurídico</span>
          </div>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Painel STJ — Construção Civil e Incorporação Imobiliária
          </h1>
          <p className="mt-1 max-w-3xl text-sm text-white/80">
            Monitoramento de jurisprudência do STJ para a defesa da MRV
            Engenharia e Participações S/A em ações de construção civil e
            incorporação imobiliária.
          </p>
        </div>
      </div>

      <div
        className="border-b px-4 py-3 text-sm sm:px-6"
        style={{
          background: "var(--warning-bg)",
          color: "var(--warning-ink)",
          borderColor: "var(--border)",
        }}
        role="note"
      >
        <div className="mx-auto flex max-w-6xl items-start gap-2">
          <span aria-hidden="true">⚠</span>
          <p>
            <strong>Aviso:</strong> conteúdo de apoio jurídico interno. As
            abas Notícias e Decisões e Recursos Repetitivos usam
            exclusivamente fontes oficiais do STJ (stj.jus.br); a aba
            Insights também traz análises de Migalhas, Conjur, CNJ e ONR. Não
            substitui parecer jurídico. Confira sempre o inteiro teor do
            acórdão, o número do processo e a data de julgamento na fonte
            oficial antes de usar em petição.
          </p>
        </div>
      </div>
    </header>
  );
}
