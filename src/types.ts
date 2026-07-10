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

export interface Insight {
  id: string;
  categoria: string; // rótulo livre, ex: "Direito Ambiental", fora dos 8 temas específicos
  titulo: string;
  data: string;
  resumo: string;
  referencia?: string;
  fonte: string;
  previsaoLegal?: string; // o que a legislação prevê sobre o ponto, quando houver contraste relevante com a lei
  analise: string; // entendimento do STJ/tribunais ou análise jurídica da notícia
  providenciaSugerida: string[]; // ação concreta recomendada (manter prática, revisar contrato, alerta ao time de defesa etc.)
}
