export type TemaId =
  | "atraso-obra"
  | "distrato"
  | "vicios-construtivos"
  | "loteamento"
  | "corretagem"
  | "taxa-condominial";

export interface TemaInfo {
  id: TemaId;
  label: string;
  labelCurto: string;
  descricao: string;
  corVar: string; // nome da CSS custom property, ex: "--tema-atraso-obra"
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
  temaRepetitivo?: string;
  baseLegal: string[];
  estrategiaDefesa: string[];
  estrategiaAcordo: string[];
  avaliacaoBase: string[];
}

export interface Repetitivo {
  tema: string;
  questao: string;
  status: "julgado" | "em julgamento";
  fonte: string;
}
