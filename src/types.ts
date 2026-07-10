export type TemaId =
  | "atraso-obra"
  | "distrato"
  | "vicios-construtivos"
  | "alienacao-fiduciaria"
  | "registro-imobiliario"
  | "corretagem"
  | "taxa-condominial"
  | "temas-processuais";

export interface TemaInfo {
  id: TemaId;
  label: string;
  labelCurto: string;
  descricao: string;
  corVar: string; // nome da CSS custom property, ex: "--tema-atraso-obra"
  icone: string; // emoji representando o tema
}

export interface CasoSTJ {
  id: string;
  tema: TemaId;
  titulo: string;
  data: string;
  resumo: string;
  referencia?: string;
  fonte: string;
  teseFixada?: string;
  baseLegal: string[];
  estrategiaDefesa: string[];
  estrategiaAcordo: string[];
  avaliacaoBase: string[];
}

export interface Repetitivo {
  numero: string; // ex: "Tema 971"
  temaAssunto: TemaId;
  questao: string;
  status: "julgado" | "em julgamento";
  data: string; // data da fixação da tese ou da notícia mais recente sobre o tema
  fonte: string;
}
