import type { Repetitivo } from "../types";

/**
 * Recursos Repetitivos confirmados em fonte oficial do STJ (stj.jus.br e
 * subdomínios oficiais scon.stj.jus.br / processo.stj.jus.br), organizados
 * por tema. Nem todo tema possui repetitivo próprio catalogado.
 */
export const repetitivos: Repetitivo[] = [
  {
    numero: "Tema 971",
    temaAssunto: "atraso-obra",
    questao:
      "Parâmetros para arbitramento de indenização por atraso na entrega de imóvel na planta, incluindo a cumulação de cláusula penal com lucros cessantes.",
    status: "julgado",
    data: "22/05/2019",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2019/Segunda-Secao-fixa-teses-sobre-penalidades-por-atraso-na-entrega-de-imovel.aspx",
  },
  {
    numero: "Tema 996",
    temaAssunto: "atraso-obra",
    questao:
      "Legalidade da cobrança de juros de obra no crédito associativo do Minha Casa, Minha Vida durante o atraso na conclusão do empreendimento, imputável à vendedora.",
    status: "julgado",
    data: "11/09/2019",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2019/Segunda-Secao-fixa-teses-sobre-atraso-na-entrega-de-imoveis-do-programa-Minha-Casa--Minha-Vida.aspx",
  },
  {
    numero: "Tema 938",
    temaAssunto: "corretagem",
    questao:
      "Prazo prescricional aplicável à pretensão de restituição de comissão de corretagem e taxa SATI cobradas do adquirente na incorporação imobiliária.",
    status: "julgado",
    data: "26/08/2025",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/26082025-Prazo-para-pedir-restituicao-de-corretagem-por-atraso-na-entrega-do-imovel-e-de-dez-anos--define-Segunda-Secao.aspx",
  },
  {
    numero: "Tema 1039",
    temaAssunto: "vicios-construtivos",
    questao:
      "Termo inicial do prazo prescricional da ação indenizatória contra a seguradora por vícios de construção em imóveis financiados pelo SFH.",
    status: "em julgamento",
    data: "22/08/2024",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2024/22082024-Corte-discute-inicio-do-prazo-para-cobrar-seguro-por-defeito-de-construcao-em-imovel-do-SFH.aspx",
  },
  {
    numero: "Tema 1173",
    temaAssunto: "corretagem",
    questao:
      "Responsabilidade do corretor de imóveis por descumprimento de obrigações da construtora/incorporadora (atraso na entrega, vícios de construção).",
    status: "julgado",
    data: "26/01/2026",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/26012026-Em-regra--corretor-de-imoveis-nao-responde-por-descumprimento-de-obrigacoes-da-construtora.aspx",
  },
  {
    numero: "Tema 1288",
    temaAssunto: "alienacao-fiduciaria",
    questao:
      "Efeitos da consolidação da propriedade fiduciária de imóvel antes e depois da Lei 13.465/2017: desfazimento da consolidação com mora purgada (regra antiga) x direito de preferência (regra nova).",
    status: "julgado",
    data: "19/02/2026",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/19022026-Repetitivo-define-efeitos-da-quitacao-da-divida-em-imovel-com-alienacao-fiduciaria-apos-a-Lei-13-4652017.aspx",
  },
];
