import type { TemaInfo } from "../types";

export const temas: TemaInfo[] = [
  {
    id: "atraso-obra",
    label: "Atraso de obra e multa contratual",
    labelCurto: "Atraso de obra",
    descricao:
      "Cláusula de tolerância, mora na entrega, cláusula penal e lucros cessantes.",
    corVar: "--tema-atraso-obra",
    icone: "🏗️",
  },
  {
    id: "distrato",
    label: "Distrato e rescisão contratual",
    labelCurto: "Distrato",
    descricao:
      "Lei 13.786/2018, retenção de valores, taxa de fruição/ocupação e prazos de restituição.",
    corVar: "--tema-distrato",
    icone: "📄",
  },
  {
    id: "vicios-construtivos",
    label: "Vícios construtivos e qualidade",
    labelCurto: "Vícios construtivos",
    descricao:
      "Garantia quinquenal (art. 618 CC), prazos decadenciais e prescricionais, seguro habitacional.",
    corVar: "--tema-vicios-construtivos",
    icone: "🧱",
  },
  {
    id: "loteamento",
    label: "Loteamento e incorporação (regularidade)",
    labelCurto: "Loteamento",
    descricao:
      "Lei 6.766/1979, responsabilidade do loteador, registro e taxas de manutenção.",
    corVar: "--tema-loteamento",
    icone: "🗺️",
  },
  {
    id: "corretagem",
    label: "Corretagem (comissão e SATI)",
    labelCurto: "Corretagem",
    descricao:
      "Comissão de corretagem, SATI, legitimidade passiva da incorporadora e responsabilidade do corretor.",
    corVar: "--tema-corretagem",
    icone: "🤝",
  },
  {
    id: "taxa-condominial",
    label: "Taxa condominial",
    labelCurto: "Taxa condominial",
    descricao:
      "Rateio de despesas condominiais em unidades não vendidas e responsabilidade do adquirente registrado.",
    corVar: "--tema-taxa-condominial",
    icone: "🏢",
  },
];
