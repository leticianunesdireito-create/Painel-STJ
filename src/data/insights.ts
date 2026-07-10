import type { Insight } from "../types";

/**
 * Notícias/decisões do STJ que não se encaixam nos 8 temas específicos do
 * painel, mas que — por avaliação própria, considerando o mercado de
 * incorporação imobiliária, loteamento e construção civil — podem
 * interessar ao Jurídico da MRV. Fonte exclusivamente oficial (stj.jus.br).
 * Para cada item: o que a lei prevê x o que o STJ está de fato decidindo,
 * e uma providência concreta sugerida.
 */
export const insights: Insight[] = [
  {
    id: "insight-01",
    categoria: "Direito Ambiental",
    titulo: "Ibama pode fiscalizar edificação por risco ambiental, mesmo com licença de outro órgão",
    data: "20/02/2025",
    resumo:
      "A Primeira Turma decidiu que o Ibama pode fiscalizar e autuar construções com risco ambiental (ex.: em área de preservação permanente) ainda que exista licença de edificação concedida por outro órgão público (municipal/estadual).",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/20022025-Ibama-pode-fiscalizar-edificacao-por-risco-ambiental--ainda-que-haja-licenca-de-outro-orgao-publico.aspx",
    previsaoLegal:
      "A competência para fiscalização ambiental é comum entre os entes federativos (art. 23, VI, CF; Lei Complementar 140/2011), coexistindo com a competência de licenciamento de edificações do Município/Estado — a lei não trata as duas esferas como excludentes.",
    entendimentoSTJ:
      "O STJ confirmou e reforçou essa leitura: a licença de edificação de um órgão não afasta a competência fiscalizatória ambiental federal (Ibama), aplicando a Súmula 613/STJ (não há direito adquirido à manutenção de situação que gere prejuízo ao meio ambiente).",
    providenciaSugerida: [
      "Manter dossiê ambiental próprio e independente da licença municipal para empreendimentos próximos a áreas ambientalmente sensíveis — a licença local não é escudo suficiente contra autuação federal.",
      "Orientar o time de sustentabilidade/compliance a incluir consulta prévia a restrições ambientais federais (não só municipais) na due diligence de novos terrenos.",
    ],
  },
  {
    id: "insight-02",
    categoria: "Direito Ambiental",
    titulo: "Erro na concessão de licença não isenta empresa de pagar pelo dano ambiental",
    data: "s/d",
    resumo:
      "A Terceira Turma manteve condenação por dano ambiental decorrente de construção em área de Mata Atlântica, mesmo tendo a empresa obtido licenças do poder público — o erro do órgão licenciador não exime a responsabilidade do empreendedor.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/Erro-na-concessao-de-licenca-nao-isenta-empresa-de-pagar-pelo-dano-ambiental.aspx",
    previsaoLegal:
      "Art. 14, §1º, da Lei 6.938/1981 — a responsabilidade civil por dano ambiental é objetiva, independentemente de culpa do poluidor ou de terceiros (incluindo o próprio poder público licenciador).",
    entendimentoSTJ:
      "O STJ aplicou a lei à risca: eventual falha do órgão público na análise do licenciamento não exclui o dever do empreendedor de reparar o dano ambiental causado, mesmo agindo de boa-fé com base na licença obtida.",
    providenciaSugerida: [
      "Manter prática de due diligence ambiental própria e independente (laudos técnicos externos) antes de lançar empreendimentos em áreas com vegetação nativa ou histórico de sensibilidade ambiental, sem se apoiar apenas na licença do poder público.",
      "Avaliar a inclusão de cláusulas de garantia/indenização por passivo ambiental pré-existente em contratos de aquisição de terrenos.",
    ],
  },
  {
    id: "insight-03",
    categoria: "Recuperação Judicial",
    titulo: "Fim do patrimônio de afetação exige quitação do financiamento",
    data: "18/10/2024",
    resumo:
      "O STJ definiu que o encerramento do regime de patrimônio de afetação de um empreendimento só pode ocorrer após a extinção das obrigações com o agente financiador da obra, protegendo o crédito do banco até a quitação.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2024/18102024-Extincao-de-obrigacoes-com-agente-financiador-e-condicao-para-encerrar-patrimonio-de-afetacao.aspx",
    previsaoLegal:
      "O art. 31-E da Lei 4.591/1964 lista hipóteses objetivas de extinção do patrimônio de afetação (averbação da construção com registro dos títulos em nome dos adquirentes, decurso do prazo de carência etc.), sem mencionar expressamente a quitação do financiamento bancário como condição.",
    entendimentoSTJ:
      "O STJ foi além da literalidade do art. 31-E e condicionou o encerramento também à quitação das obrigações com o agente financeiro que custeou a obra, mesmo sem previsão expressa nesse sentido, para proteger o crédito do banco.",
    providenciaSugerida: [
      "Incluir a confirmação de quitação do financiamento da obra como item obrigatório no checklist interno de encerramento contábil/jurídico do patrimônio de afetação de cada SPE, mesmo quando a literalidade da lei sugerir que os demais requisitos já bastariam.",
      "Alinhar com o time financeiro para não declarar extinto o regime de afetação perante investidores/auditoria antes dessa quitação, evitando questionamento do agente financeiro.",
    ],
  },
  {
    id: "insight-04",
    categoria: "Recuperação Judicial",
    titulo: "A submissão de SPE imobiliária à recuperação judicial",
    data: "24/05/2022",
    resumo:
      "A Terceira Turma definiu hipóteses em que uma Sociedade de Propósito Específico (SPE) imobiliária, inclusive com patrimônio de afetação, pode se submeter à recuperação judicial, sem que isso contamine o patrimônio afetado de cada empreendimento pelas dívidas do grupo econômico.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/24052022-Terceira-Turma-define-hipoteses-para-recuperacao-de-sociedades-de-proposito-especifico-imobiliarias.aspx",
    previsaoLegal:
      "A Lei 11.101/2005 não veda expressamente a submissão de SPEs à recuperação judicial, mas também não trata especificamente da relação entre esse regime e o patrimônio de afetação de incorporações imobiliárias (Lei 4.591/1964) — lacuna normativa.",
    entendimentoSTJ:
      "O STJ preencheu a lacuna: admite a recuperação judicial da SPE, mas exige que o patrimônio de afetação de cada empreendimento permaneça segregado das demais relações jurídicas do grupo econômico, preservando os adquirentes.",
    providenciaSugerida: [
      "Manter rigor na segregação contábil e jurídica de cada SPE com patrimônio de afetação (fluxo de caixa próprio, contratos próprios), documentando isso de forma auditável, para sustentar a blindagem em eventual cenário de estresse financeiro de outra empresa do grupo.",
      "Usar este precedente como referência em due diligence de eventual aquisição de terrenos/ativos de incorporadoras concorrentes em recuperação judicial.",
    ],
  },
  {
    id: "insight-05",
    categoria: "Direito Real / Multipropriedade",
    titulo: "Terceira Turma reconhece multipropriedade como direito real e afasta penhora",
    data: "21/09/2016",
    resumo:
      "O STJ reconheceu a multipropriedade imobiliária (time-sharing) como direito real, permitindo que o cotista de uma fração de tempo se valha de embargos de terceiro para proteger sua cota contra penhora movida contra a incorporadora proprietária registral do imóvel.",
    referencia: "REsp 1.546.165-SP, j. 26/04/2016",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias-antigas/2016/2016-09-21_09-41_Terceira-Turma-reconhece-multipropriedade-como-direito-real-e-afasta-penhora.aspx",
    previsaoLegal:
      "Em 2016, a multipropriedade ainda não tinha previsão expressa no Código Civil como direito real — essa figura só foi formalmente incluída no rol dos direitos reais (art. 1.225, XIII, CC) e regulamentada pela Lei 13.777/2018, dois anos depois deste julgamento.",
    entendimentoSTJ:
      "O STJ reconheceu a natureza de direito real da multipropriedade por construção jurisprudencial antes mesmo de existir lei específica, protegendo os cotistas com embargos de terceiro mesmo com o registro do imóvel em nome de outra pessoa jurídica.",
    providenciaSugerida: [
      "Caso a MRV avalie desenvolver produtos em regime de multipropriedade/fractional ownership, adotar desde já a estrutura formal da Lei 13.777/2018 (convenção de multipropriedade registrada, individualização das frações de tempo), que já incorporou e detalhou o entendimento fixado neste precedente.",
      "Ficar atenta a esse precedente em eventual devida diligência de aquisição de empreendimentos de terceiros que já operem em regime de multipropriedade não formalizado.",
    ],
  },
  {
    id: "insight-06",
    categoria: "Tributário Imobiliário",
    titulo: "STJ define base de cálculo do ITBI em recurso repetitivo",
    data: "09/03/2022",
    resumo:
      "Julgamento do Tema 1113: a Primeira Seção fixou que a base de cálculo do ITBI é o valor do imóvel transmitido em condições normais de mercado, não vinculado ao valor venal usado para o IPTU, e o Município não pode arbitrar previamente esse valor de forma unilateral.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/09032022-Base-de-calculo-do-ITBI-e-o-valor-do-imovel-transmitido-em-condicoes-normais-de-mercado--define-Primeira-Secao.aspx",
    previsaoLegal:
      "O art. 148 do CTN permite ao Fisco arbitrar a base de cálculo declarada pelo contribuinte apenas mediante regular processo administrativo, quando houver fundada suspeita de que o valor declarado não reflete o valor de mercado — não autoriza arbitramento prévio e unilateral.",
    entendimentoSTJ:
      "O STJ confirmou a leitura garantista do CTN (Tema 1113): o valor declarado pelo contribuinte goza de presunção de veracidade, só afastável por processo administrativo próprio; o Município não pode fixar previamente um valor de referência unilateral para cobrar ITBI maior.",
    providenciaSugerida: [
      "Manter e organizar lastro documental de mercado (laudos, comparáveis de mercado) para os valores declarados em escrituras de aquisição de terrenos e venda de unidades, sustentando a presunção de veracidade caso o Município tente arbitrar ITBI acima do declarado.",
      "Impugnar administrativamente, com base no Tema 1113, qualquer cobrança de ITBI fundada em valor de referência arbitrado unilateralmente pelo Município, sem o processo do art. 148 do CTN.",
    ],
  },
];
