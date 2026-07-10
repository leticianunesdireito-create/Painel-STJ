import type { Insight } from "../types";

/**
 * Notícias/decisões/análises que não se encaixam nos 8 temas específicos do
 * painel, mas que — por avaliação própria, considerando o mercado de
 * incorporação imobiliária, loteamento e construção civil — podem
 * interessar ao Jurídico da MRV. Diferente das outras duas abas, aqui a
 * busca inclui, além de stj.jus.br, os portais especializados Migalhas
 * (migalhas.com.br) e Conjur (conjur.com.br). A aba exibe apenas itens dos
 * últimos 6 meses (filtro aplicado em `InsightsTab`, com base no campo `data`).
 */
export const insights: Insight[] = [
  {
    id: "insight-01",
    categoria: "Recuperação Judicial",
    titulo: "STJ veta em definitivo recuperação judicial de SPE com patrimônio de afetação",
    data: "12/05/2026",
    resumo:
      "A Terceira Turma reafirmou, por unanimidade, no REsp 2.205.480/SP (grupo Rossi), que SPEs de incorporação imobiliária com patrimônio de afetação não se submetem à recuperação judicial sob nenhum ângulo — nem mesmo para dívidas gerais do grupo — por incompatibilidade sistêmica entre os dois institutos.",
    referencia: "REsp 2.205.480/SP, Rel. Min. Humberto Martins, Terceira Turma",
    fonte: "https://www.migalhas.com.br/quentes/455790/stj-sociedades-de-proposito-especifico-nao-se-submetem-a-recuperacao",
    previsaoLegal:
      "A Lei 11.101/2005 (Lei de Recuperação Judicial e Falência) não trata expressamente da relação entre o regime de patrimônio de afetação da incorporação imobiliária (Lei 4.591/1964) e a recuperação judicial — é uma lacuna que a jurisprudência vinha preenchendo caso a caso.",
    analise:
      "O STJ fechou definitivamente a questão: SPE com patrimônio de afetação não pode se submeter à recuperação judicial em nenhuma hipótese, nem para equacionar dívidas gerais do grupo controlador — o modelo funciona exatamente como desenhado, e a impossibilidade de recuperação é o que garante a previsibilidade do patrimônio afetado.",
    providenciaSugerida: [
      "Usar este precedente para reforçar, em pareceres e negociações, que o patrimônio de afetação de cada SPE da MRV é blindagem absoluta contra recuperação judicial de outras empresas do grupo econômico.",
      "Atualizar qualquer entendimento interno anterior que ainda cogitasse submissão parcial de SPE à recuperação judicial — a tese agora é de exclusão total e definitiva.",
    ],
  },
  {
    id: "insight-02",
    categoria: "Tributário Imobiliário",
    titulo: "Tributação do patrimônio de afetação das incorporações na reforma tributária",
    data: "20/01/2026",
    resumo:
      "Artigo analisa como a reforma tributária (EC 132/2023 e leis complementares do IBS/CBS) impacta o Regime Especial de Tributação (RET) das incorporações com patrimônio de afetação, e como deve se dar a transição do regime atual para o novo sistema.",
    fonte: "https://www.conjur.com.br/2026-jan-20/reforma-tributaria-sobre-o-patrimonio-de-afetacao-das-incorporacoes-imobiliarias/",
    previsaoLegal:
      "A Lei 10.931/2004 prevê o RET (alíquota unificada sobre a receita mensal recebida) para incorporações submetidas ao patrimônio de afetação; a EC 132/2023 ainda está em fase de regulamentação quanto à convivência desse regime especial com o novo IBS/CBS.",
    analise:
      "O artigo aponta incertezas regulatórias sobre a manutenção do RET no novo sistema tributário e alerta para o risco de aumento de carga tributária das incorporações durante o período de transição, se a regulamentação não preservar expressamente o regime especial.",
    providenciaSugerida: [
      "Acompanhar de perto a regulamentação infralegal da reforma tributária quanto à manutenção do RET, envolvendo o time tributário da MRV nas consultas públicas/audiências sobre o tema.",
      "Simular o impacto financeiro de cada cenário de transição (manutenção integral do RET x migração parcial para IBS/CBS) nos empreendimentos em patrimônio de afetação já em curso.",
    ],
  },
  {
    id: "insight-03",
    categoria: "Tributário Imobiliário",
    titulo: "ITBI sobre integralização de imóveis ao capital social: limites da atuação municipal",
    data: "15/03/2026",
    resumo:
      "Artigo discute os limites da atuação dos Municípios ao exigir ITBI sobre a integralização de imóveis ao capital social de empresas, questionando a imunidade constitucional quando o Fisco alega atividade preponderantemente imobiliária do adquirente.",
    fonte: "https://www.conjur.com.br/2026-mar-15/itbi-sobre-integralizacao-de-imoveis-em-pjs-limites-da-atuacao-municipal-e-da-legislacao/",
    previsaoLegal:
      "Art. 156, §2º, I, da Constituição Federal — imunidade de ITBI na transmissão de bens para integralização de capital social, salvo se a atividade preponderante do adquirente for a compra e venda, locação ou arrendamento de imóveis.",
    analise:
      "O texto critica autuações municipais que desconsideram a imunidade sem comprovar adequadamente a atividade preponderante imobiliária, defendendo interpretação mais rigorosa do requisito constitucional antes de afastar a imunidade.",
    providenciaSugerida: [
      "Ao integralizar imóveis ao capital de SPEs/subsidiárias do grupo, documentar formalmente a atividade/objeto social para sustentar a imunidade de ITBI caso questionada pelo Município.",
      "Impugnar administrativamente autuações municipais de ITBI sobre integralização que não comprovem, com apuração regular, a atividade preponderantemente imobiliária exigida pela CF.",
    ],
  },
  {
    id: "insight-04",
    categoria: "Direito Societário / Registral",
    titulo: "Integralização de imóvel ao capital social dispensa escritura pública",
    data: "18/06/2026",
    resumo:
      "Artigo comenta reforço na jurisprudência paulista (TJSP) de que a integralização de imóvel ao capital social de uma empresa pode ser feita por instrumento particular (ato constitutivo/alteração societária), sem necessidade de escritura pública.",
    fonte: "https://www.conjur.com.br/2026-jun-18/integralizacao-de-imovel-ao-capital-social-dispensa-escritura-publica-novo-reforco-da-jurisprudencia-paulista/",
    previsaoLegal:
      "O art. 108 do Código Civil exige escritura pública para negócios que visem à constituição/transferência de direitos reais sobre imóveis de valor superior a 30 salários-mínimos, salvo as exceções previstas em lei especial (como as leis societárias para integralização de capital).",
    analise:
      "A jurisprudência paulista tem admitido o instrumento particular (contrato/alteração social) como título hábil para registro da integralização do imóvel, dispensando a escritura pública, com base nas leis societárias específicas.",
    providenciaSugerida: [
      "Revisar o procedimento societário interno de aportes de imóveis a SPEs/subsidiárias para confirmar se os cartórios de registro de imóveis da praça aceitam o instrumento particular, evitando custo e tempo de escritura pública desnecessária.",
      "Padronizar a minuta de integralização por instrumento particular com o time societário, alinhando previamente com o cartório local quando possível.",
    ],
  },
  {
    id: "insight-05",
    categoria: "Regulatório / Incorporação",
    titulo: "Incorporação de casas isoladas sem condomínio edilício",
    data: "05/03/2026",
    resumo:
      "Artigo comenta a aplicação prática do art. 68 da Lei 4.591/1964 (alterado pela Lei 14.382/2022), que passou a reconhecer expressamente a incorporação de casas isoladas ou geminadas em lotes de loteamentos regularmente aprovados e registrados, sem exigir a instituição de condomínio edilício.",
    fonte: "https://www.conjur.com.br/2026-mar-05/incorporacao-de-casas-isoladas-sem-condominio-edilicio/",
    previsaoLegal:
      "Art. 68 da Lei 4.591/1964, com redação dada pela Lei 14.382/2022, autoriza a incorporação de casas isoladas/geminadas em loteamento regularmente aprovado e registrado, dispensando a instituição de condomínio edilício sobre a área.",
    analise:
      "O artigo detalha os requisitos práticos e registrais para essa modalidade simplificada de incorporação horizontal, destacando ganhos de segurança jurídica e redução de custos frente ao condomínio edilício tradicional.",
    providenciaSugerida: [
      "Para produtos de casas isoladas/geminadas em loteamentos já aprovados, avaliar com o time de produto/jurídico essa modalidade simplificada (sem condomínio edilício) como alternativa de estruturação, reduzindo custo e complexidade registral do empreendimento.",
      "Alinhar com os cartórios de registro de imóveis das praças de atuação os requisitos documentais exigidos para essa modalidade, evitando atrasos no registro da incorporação.",
    ],
  },
];
