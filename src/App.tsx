import { useState } from "react";
import { temas } from "./data/temas";
import { casos } from "./data/casos";
import { repetitivos } from "./data/repetitivos";
import { insights } from "./data/insights";
import { Header } from "./components/Header";
import { TabBar } from "./components/TabBar";
import { NewsTab } from "./components/NewsTab";
import { RepetitivosTab } from "./components/RepetitivosTab";
import { InsightsTab } from "./components/InsightsTab";

const ATUALIZADO_EM = "10/07/2026";

type Aba = "noticias" | "repetitivos" | "insights";

function App() {
  const [aba, setAba] = useState<Aba>("noticias");

  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <Header />

      <TabBar
        aba={aba}
        onChange={setAba}
        totalNoticias={casos.length}
        totalRepetitivos={repetitivos.length}
        totalInsights={insights.length}
      />

      <main className="py-4">
        {aba === "noticias" ? (
          <NewsTab casos={casos} temas={temas} />
        ) : aba === "repetitivos" ? (
          <RepetitivosTab repetitivos={repetitivos} temas={temas} />
        ) : (
          <InsightsTab insights={insights} />
        )}
      </main>

      <footer
        className="mt-4 border-t px-4 py-6 text-center text-xs sm:px-6"
        style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
      >
        <p>
          Painel interno — Jurídico MRV Engenharia e Participações S/A.
          Conteúdo atualizado em {ATUALIZADO_EM}. Notícias e Decisões e Recursos
          Repetitivos têm fonte exclusivamente oficial do STJ (stj.jus.br); a
          aba Insights também usa Migalhas e Conjur. Não constitui parecer
          jurídico.
        </p>
      </footer>
    </div>
  );
}

export default App;
