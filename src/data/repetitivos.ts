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
      "Prazo prescricional aplicável à pretensão de restituição de comissão de corretagem e taxa SATI cobradas do adquirente na incorporação imobiliária (afastada a prescrição trienal, hipótese de decadência).",
    status: "julgado",
    data: "20/08/2019",
    fonte: "https://scon.stj.jus.br/jurisprudencia/externo/informativo/?aplicacao=informativo&acao=pesquisar&livre=%40CNOT%3D%27017163%27",
  },
  {
    numero: "Tema 1099",
    temaAssunto: "corretagem",
    questao:
      "Prazo prescricional aplicável à restituição de comissão de corretagem em caso de resolução contratual por atraso na entrega do imóvel.",
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
  {
    numero: "Tema 886",
    temaAssunto: "taxa-condominial",
    questao:
      "Legitimidade concorrente entre promitente vendedor e promitente comprador no polo passivo de cobrança de débitos condominiais posteriores à imissão do comprador na posse, sem registro do contrato.",
    status: "em julgamento",
    data: "09/06/2025",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/09062025-Em-revisao-de-repetitivo--STJ-vai-analisar-responsabilidade-conjunta-entre-vendedor-e-comprador-por-divida.aspx",
  },
  {
    numero: "Tema 1420",
    temaAssunto: "distrato",
    questao:
      "Aplicação da Lei 9.514/1997 ou do CDC à rescisão de contrato de compra e venda de imóvel com garantia de alienação fiduciária não levada a registro.",
    status: "em julgamento",
    data: "23/04/2026",
    fonte: "https://www.stj.jus.br/sites/portalp/paginas/comunicacao/noticias/2026/23042026-rescisao-de-contrato-imobiliario-com-alienacao-fiduciaria-sem-registro-em-cartorio-e-tema-de-repetitivo.aspx",
  },
  {
    numero: "Tema 1178",
    temaAssunto: "temas-processuais",
    questao:
      "Legitimidade da adoção de critérios objetivos na avaliação de hipossuficiência para concessão de gratuidade de justiça à pessoa natural.",
    status: "em julgamento",
    data: "26/12/2023",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2023/26122023-Relator-vota-para-afastar-criterios-objetivos-na-analise-de-justica-gratuita--vista-suspende-julgamento.aspx",
  },
  {
    numero: "Tema 1424",
    temaAssunto: "temas-processuais",
    questao:
      "Se a mera comprovação de inatividade ou queda de faturamento da pessoa jurídica basta para demonstrar hipossuficiência econômico-financeira e justificar gratuidade de justiça.",
    status: "julgado",
    data: "03/07/2026",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/03072026-Primeiro-repetitivo-julgado-em-sessao-totalmente-virtual-define-requisitos-para-justica-gratuita-a-pessoas.aspx",
  },
  {
    numero: "Tema 1396",
    temaAssunto: "temas-processuais",
    questao:
      "Se o interesse de agir em ações de consumo exige tentativa prévia de solução extrajudicial (reclamação direta à empresa, PROCON, mediação) antes do ajuizamento.",
    status: "em julgamento",
    data: "27/05/2026",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/27052026-Interesse-de-agir-em-acoes-de-consumo-segunda-parte-da-audiencia-debate-mecanismos-extrajudiciais.aspx",
  },
];
