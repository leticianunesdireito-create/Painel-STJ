import { useState } from "react";
import { temas } from "./data/temas";
import { casos } from "./data/casos";
import { repetitivos } from "./data/repetitivos";
import { Header } from "./components/Header";
import { TabBar } from "./components/TabBar";
import { NewsTab } from "./components/NewsTab";
import { RepetitivosTab } from "./components/RepetitivosTab";

const ATUALIZADO_EM = "09/07/2026";

type Aba = "noticias" | "repetitivos";

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
      />

      <main className="py-4">
        {aba === "noticias" ? (
          <NewsTab casos={casos} temas={temas} />
        ) : (
          <RepetitivosTab repetitivos={repetitivos} temas={temas} />
        )}
      </main>

      <footer
        className="mt-4 border-t px-4 py-6 text-center text-xs sm:px-6"
        style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
      >
        <p>
          Painel interno — Jurídico MRV Engenharia e Participações S/A.
          Conteúdo atualizado em {ATUALIZADO_EM}, com base em fontes oficiais do
          STJ (stj.jus.br). Não constitui parecer jurídico.
        </p>
      </footer>
    </div>
  );
}

export default App;
