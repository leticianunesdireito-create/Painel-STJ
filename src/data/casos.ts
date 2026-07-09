import type { CasoSTJ } from "../types";

/**
 * Conteúdo levantado exclusivamente em stj.jus.br e subdomínios oficiais
 * (scon.stj.jus.br, processo.stj.jus.br). Confira sempre o inteiro teor do
 * acórdão antes de usar em petição — ver disclaimer no topo do painel.
 */
export const casos: CasoSTJ[] = [
  // ---------- Atraso de obra e multa contratual ----------
  {
    id: "atraso-01",
    tema: "atraso-obra",
    titulo: "Segunda Seção fixa teses sobre penalidades por atraso na entrega de imóvel",
    data: "22/05/2019",
    resumo:
      "Ao julgar o Tema 971, a Segunda Seção fixou parâmetros objetivos para o arbitramento de indenização por atraso na entrega de imóvel adquirido na planta, tratando da cumulação entre cláusula penal e lucros cessantes.",
    referencia: "REsp 1.631.485-DF, Rel. Min. Luis Felipe Salomão, Segunda Seção, j. 22/05/2019",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2019/Segunda-Secao-fixa-teses-sobre-penalidades-por-atraso-na-entrega-de-imovel.aspx",
    teseFixada:
      "Havendo cláusula penal compensatória no contrato de adesão apenas para o inadimplemento do adquirente, aplica-se por simetria em favor do comprador na mora da incorporadora; o Judiciário pode arbitrar indenização suplementar quando o valor pactuado for insuficiente.",
    temaRepetitivo: "Tema 971",
    baseLegal: [
      "Art. 43-A da Lei 4.591/1964 (incluído pela Lei 13.786/2018) — tolerância de 180 dias corridos além da data contratual, sem gerar resolução ou penalidade, desde que pactuada de forma clara e destacada.",
    ],
    estrategiaDefesa: [
      "Comprovar que o atraso não superou os 180 dias de tolerância contratual (art. 43-A da Lei 4.591/1964), demonstrando ciência inequívoca do comprador quanto à cláusula.",
      "Quando o atraso superar a tolerância, buscar aplicar por simetria apenas o valor da cláusula penal prevista para o inadimplemento do próprio adquirente, evitando arbitramento judicial acima desse parâmetro.",
      "Documentar causas de força maior/fortuito externo (embargo, licença ambiental, escassez de insumos) para eventual afastamento ou mitigação da mora.",
    ],
    estrategiaAcordo: [
      "Propor abatimento proporcional no saldo devedor ou entrega de benfeitorias/itens de acabamento em vez de indenização em dinheiro.",
      "Negociar teto de indenização vinculado ao valor locatício médio da região (parâmetro de lucros cessantes) em vez de percentual sobre o valor do contrato.",
    ],
    avaliacaoBase: [
      "Provisionar com base no valor locatício médio mensal do empreendimento × meses de atraso além da tolerância, quando não houver cláusula penal expressa em favor do comprador.",
      "Se houver cláusula penal simétrica, provisionar pelo percentual nela previsto para o inadimplemento do adquirente.",
    ],
  },
  {
    id: "atraso-02",
    tema: "atraso-obra",
    titulo: "STJ admite cumulação de cláusula penal com lucros cessantes",
    data: "02/03/2023",
    resumo:
      "A cobrança de lucros cessantes por atraso na entrega de imóvel não depende de o comprador exigir também a multa contratual, quando esta for de valor inferior ao proveito econômico do imóvel (aluguel).",
    referencia: "Rel. Ministro Marco Buzzi",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2023/02032023-Cobranca-de-lucros-cessantes-por-atraso-na-entrega-de-imovel-nao-depende-da-exigencia-de-multa-contratual-menor.aspx",
    teseFixada:
      "Se a cláusula penal moratória tiver valor inferior ao do aluguel do bem, o consumidor pode cobrar lucros cessantes diretamente, sem necessidade de exigir cumulativamente a multa contratual.",
    baseLegal: [
      "Art. 43-A da Lei 4.591/1964 — a tolerância de 180 dias deve ser descontada do período de atraso indenizável.",
    ],
    estrategiaDefesa: [
      "Delimitar o período indenizável descontando integralmente os 180 dias de tolerância contratual.",
      "Impugnar o valor locatício de referência apresentado pelo autor, trazendo laudo/pesquisa de mercado próprio com valores da região.",
      "Alegar eventual quitação/composição extrajudicial prévia sobre o mesmo período de atraso, se houver.",
    ],
    estrategiaAcordo: [
      "Oferecer indenização calculada sobre o valor locatício médio da região (não o pretendido pelo autor) como parâmetro objetivo de negociação.",
      "Vincular o acordo à quitação de eventuais outras pretensões correlatas do mesmo contrato (vícios, corretagem) para reduzir litigância futura.",
    ],
    avaliacaoBase: [
      "Base de cálculo: 0,5%–0,8% do valor atualizado do contrato por mês de atraso além da tolerância, como proxy de valor locatício, ajustável por perícia.",
      "Provisionar considerando histórico de sucesso da tese de delimitação do período (desconto integral dos 180 dias) nas Turmas de Direito Privado.",
    ],
  },
  {
    id: "atraso-03",
    tema: "atraso-obra",
    titulo: "Correção monetária abusiva não é suficiente para afastar mora do comprador de imóvel",
    data: "10/08/2020",
    resumo:
      "A existência de cláusula de correção monetária eventualmente abusiva no contrato não autoriza, por si só, o reconhecimento da mora da incorporadora nem afasta a mora do comprador inadimplente.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/10082020-Correcao-monetaria-abusiva-nao-e-suficiente-para-afastar-mora-do-comprador-de-imovel-.aspx",
    teseFixada:
      "Abusividade pontual em cláusula de correção monetária não contamina o contrato a ponto de afastar a mora do adquirente inadimplente; a nulidade deve ser tratada de forma autônoma.",
    baseLegal: [
      "Art. 51 do CDC (cláusulas abusivas) — aplicável de forma cirúrgica ao dispositivo específico, sem contaminar o contrato inteiro.",
    ],
    estrategiaDefesa: [
      "Isolar a discussão sobre eventual abusividade de índice de correção monetária da discussão sobre mora do comprador — são pretensões autônomas.",
      "Demonstrar que o índice utilizado (INCC durante obra, IGP-M/IPCA após habite-se) é o padrão de mercado para incorporação imobiliária.",
    ],
    estrategiaAcordo: [
      "Aceitar substituição pontual do índice de correção monetária controvertido por índice setorial (INCC) sem reconhecer abusividade genérica do contrato.",
    ],
    avaliacaoBase: [
      "Risco de exposição limitado à diferença entre o índice aplicado e um índice alternativo (ex.: INCC x IGP-M) sobre o saldo devedor, não ao contrato integral.",
    ],
  },

  // ---------- Distrato e rescisão contratual ----------
  {
    id: "distrato-01",
    tema: "distrato",
    titulo: "STJ confirma taxa de ocupação em caso de lote não edificado",
    data: "20/10/2025",
    resumo:
      "Sob a Lei do Distrato, é possível aplicar multa por desistência e cobrar taxa de ocupação/fruição do lote mesmo quando não há edificação, em contratos celebrados após a vigência da Lei 13.786/2018.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/20102025-Sob-Lei-do-Distrato--e-possivel-aplicar-multa-por-desistencia-e-taxa-de-ocupacao-de-lote-nao-edificado.aspx",
    teseFixada:
      "A retenção de valores a título de multa e de taxa de ocupação/fruição, prevista na Lei 13.786/2018, aplica-se a lotes não edificados, não exigindo prova de utilização efetiva do bem.",
    baseLegal: [
      "Art. 32-A, I, da Lei 4.591/1964 — retenção de taxa de fruição de até 0,75% do valor atualizado do contrato por mês de ocupação, além da penalidade.",
      "Art. 26-A da Lei 6.766/1979 — penalidade de até 10% do valor atualizado em resilição de loteamento.",
    ],
    estrategiaDefesa: [
      "Aplicar cumulativamente a penalidade contratual e a taxa de fruição, ainda que o lote não tenha sido edificado, invocando expressamente o art. 32-A, I, da Lei 4.591/1964.",
      "Verificar a data de assinatura do contrato: a retenção ampliada só se aplica a contratos posteriores a 27/12/2018 (vigência da Lei 13.786/2018).",
    ],
    estrategiaAcordo: [
      "Negociar devolução em parcela única com deságio (retenção próxima do teto legal) para reduzir tempo de litígio, evitando discussão sobre patrimônio de afetação.",
    ],
    avaliacaoBase: [
      "Provisionar retenção de até 10% (penalidade, art. 26-A Lei 6.766/1979) + 0,75%/mês de ocupação (art. 32-A, I, Lei 4.591/1964) para loteamentos pós-2018.",
      "Para incorporação com patrimônio de afetação, o teto de retenção sobe a 50% (art. 67-A, §5º, Lei 4.591/1964); sem afetação, 25%.",
    ],
  },
  {
    id: "distrato-02",
    tema: "distrato",
    titulo: "STJ nega taxa de fruição sobre imóvel edificado após a venda",
    data: "11/10/2024",
    resumo:
      "O uso de casa construída pelo próprio comprador, em terreno adquirido em loteamento, não justifica cobrança de taxa de fruição pela loteadora após a rescisão da venda, quando a edificação foi custeada pelo próprio adquirente.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2024/11102024-Uso-de-casa-construida-pelo-comprador-nao-justifica-taxa-de-fruicao-apos-rescisao-da-venda-de-imovel.aspx",
    teseFixada:
      "A taxa de fruição/ocupação incide sobre o uso do bem vendido pela incorporadora/loteadora, não sobre benfeitorias custeadas exclusivamente pelo comprador — deve ser calculada apenas sobre o valor do terreno/unidade original.",
    baseLegal: [
      "Art. 32-A, I, da Lei 4.591/1964 — a taxa de fruição incide sobre o valor atualizado do contrato original, não sobre benfeitorias do comprador.",
    ],
    estrategiaDefesa: [
      "Delimitar a base de cálculo da taxa de fruição estritamente ao valor do contrato original (terreno/unidade), excluindo benfeitorias custeadas pelo comprador, para evitar impugnação de excesso de cobrança.",
      "Demonstrar, com laudo, o valor de mercado do imóvel na data da venda, segregado de acessões posteriores.",
    ],
    estrategiaAcordo: [
      "Aceitar recalcular a taxa de fruição sobre a base segregada (sem benfeitorias) como forma de reduzir a controvérsia técnica-pericial.",
    ],
    avaliacaoBase: [
      "Risco de redução da base de cálculo da taxa de fruição quando o comprador comprova investimento próprio relevante no imóvel — provisionar sobre o valor original do contrato, não sobre o valor de mercado atual do bem melhorado.",
    ],
  },
  {
    id: "distrato-03",
    tema: "distrato",
    titulo: "STJ afasta a devolução em dobro da comissão de corretagem",
    data: "16/03/2022",
    resumo:
      "A Quarta Turma afastou a devolução em dobro do valor da comissão de corretagem retida indevidamente após a rescisão do contrato, e validou a retenção de 25% em contrato firmado antes da Lei 13.786/2018.",
    referencia: "REsp 1.947.698-MS, Rel. Min. Luis Felipe Salomão, Quarta Turma, j. 08/03/2022",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/16032022-Quarta-Turma-afasta-devolucao-em-dobro-de-comissao-de-corretagem-retida-indevidamente-apos-rescisao-do-contrato.aspx",
    teseFixada:
      "A retenção indevida da comissão de corretagem no distrato não configura cobrança dolosa a ensejar repetição em dobro (art. 42, CDC); a devolução deve ser simples, corrigida monetariamente.",
    baseLegal: [
      "Art. 67-A, caput, da Lei 4.591/1964 — permite abatimento da comissão de corretagem do valor a ser restituído, quando clara a previsão contratual.",
    ],
    estrategiaDefesa: [
      "Argumentar ausência de má-fé/dolo na retenção da corretagem, afastando pedido de devolução em dobro (art. 42 do CDC) mesmo se a retenção for depois considerada indevida.",
      "Comprovar previsão contratual clara e destacada do abatimento da comissão de corretagem do valor restituível.",
    ],
    estrategiaAcordo: [
      "Se a retenção for questionável, propor devolução simples (corrigida) da comissão, evitando o risco de eventual condenação em dobro por outros fundamentos (ex.: relação de consumo abusiva).",
    ],
    avaliacaoBase: [
      "Contratos anteriores à Lei 13.786/2018: provisionar retenção geral entre 10% e 25% dos valores pagos, com devolução em parcela única.",
      "Risco de devolução em dobro é baixo quando há previsão contratual expressa e ausência de má-fé documentada.",
    ],
  },

  // ---------- Vícios construtivos e qualidade ----------
  {
    id: "vicios-01",
    tema: "vicios-construtivos",
    titulo: "Para Segunda Seção, vícios estruturais de construção estão cobertos pelo seguro habitacional",
    data: "31/07/2020",
    resumo:
      "A Segunda Seção definiu que vícios estruturais de construção estão cobertos pelo seguro obrigatório do Sistema Financeiro de Habitação (SFH), com efeitos que se prolongam além da quitação do financiamento.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/31072020-Para-Segunda-Secao--vicios-estruturais-de-construcao-estao-cobertos-pelo-seguro-habitacional.aspx",
    teseFixada:
      "O seguro habitacional do SFH cobre vícios estruturais de construção ainda que descobertos após a quitação do financiamento, deslocando parte da exposição indenizatória para a seguradora.",
    baseLegal: [
      "Art. 618 do Código Civil — garantia quinquenal do construtor pela solidez e segurança da obra.",
    ],
    estrategiaDefesa: [
      "Em imóveis financiados pelo SFH, chamar a seguradora ao processo (denunciação da lide) sempre que o vício alegado se enquadrar em cobertura do seguro habitacional obrigatório.",
      "Diferenciar vício estrutural (coberto pelo seguro/garantia quinquenal) de vício de acabamento (regime de garantia contratual mais curto).",
    ],
    estrategiaAcordo: [
      "Condicionar eventual acordo à participação da seguradora no rateio da indenização, quando o vício for estrutural.",
    ],
    avaliacaoBase: [
      "Segregar a exposição financeira entre construtora e seguradora quando o imóvel for financiado pelo SFH e o vício for estrutural — provisionar apenas a fração não coberta pelo seguro.",
    ],
  },
  {
    id: "vicios-02",
    tema: "vicios-construtivos",
    titulo: "Pedido de indenização por falhas aparentes em imóvel tem prazo prescricional de dez anos",
    data: "s/d",
    resumo:
      "O STJ reafirmou que o prazo de cinco anos do art. 618 do Código Civil é de garantia da obra, e não de prescrição; a pretensão indenizatória decorrente de falhas construtivas segue o prazo prescricional decenal do art. 205 do CC.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/Pedido-de-indenizacao-por-falhas-aparentes-em-imovel-tem-prazo-prescricional-de-dez-anos.aspx",
    teseFixada:
      "O prazo de 5 anos do art. 618 do CC é de garantia; surgido o vício dentro desse período, a pretensão indenizatória prescreve em 10 anos (art. 205 do CC), contados do conhecimento inequívoco do dano.",
    baseLegal: [
      "Art. 618 do Código Civil — garantia quinquenal.",
      "Art. 205 do Código Civil — prazo prescricional geral decenal para a pretensão indenizatória.",
    ],
    estrategiaDefesa: [
      "Verificar se o vício surgiu dentro do prazo de garantia quinquenal (art. 618 CC); se surgiu depois, buscar afastar a responsabilidade da construtora por ausência de garantia vigente.",
      "Contar o termo inicial da prescrição decenal a partir da ciência inequívoca do dano pelo autor, não da mera entrada em vigor do contrato — exigir prova documental da data de ciência.",
    ],
    estrategiaAcordo: [
      "Em vícios de menor gravidade fora do prazo de garantia, negociar reparo direto (execução de obra corretiva) em vez de indenização pecuniária, reduzindo exposição financeira.",
    ],
    avaliacaoBase: [
      "Provisionar apenas vícios com data de manifestação comprovada dentro dos 5 anos de garantia; para os demais, avaliar tese de prescrição/decadência antes de provisionar.",
    ],
  },
  {
    id: "vicios-03",
    tema: "vicios-construtivos",
    titulo: "STJ discute prescrição de indenizações por defeitos em imóveis financiados pelo SFH",
    data: "17/11/2023",
    resumo:
      "A Segunda Seção iniciou a análise, em recurso repetitivo (Tema 1.039), do termo inicial do prazo prescricional para ações de indenização securitária por vícios de construção em imóveis financiados pelo SFH.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2023/17112023-Segunda-Secao-inicia-analise-de-prescricao-da-indenizacao-por-vicios-de-construcao-em-imoveis-financiados-pelo-SFH.aspx",
    teseFixada:
      "Em julgamento (Tema 1.039) — divergência entre contagem a partir do fim do contrato de financiamento (Min. Isabel Gallotti) e a partir da negativa expressa da seguradora (Min. Nancy Andrighi).",
    temaRepetitivo: "Tema 1039",
    baseLegal: [
      "Art. 205 do Código Civil — prazo prescricional decenal, cujo termo inicial está em discussão no repetitivo.",
    ],
    estrategiaDefesa: [
      "Monitorar o desfecho do Tema 1.039 antes de firmar posição definitiva sobre prescrição em casos de seguro habitacional SFH — suspender ações correlatas quando cabível (art. 1.037, II, CPC).",
      "Argumentar, enquanto não pacificado, pela tese mais favorável à incorporadora conforme o órgão julgador do caso concreto.",
    ],
    estrategiaAcordo: [
      "Evitar acordos definitivos em casos SFH com discussão de prescrição até a fixação da tese repetitiva, preferindo suspensão consensual do feito.",
    ],
    avaliacaoBase: [
      "Manter provisão contingencial (não provável) para casos SFH pendentes de prescrição até a fixação do Tema 1.039, reavaliando a classificação de risco após o julgamento.",
    ],
  },
  {
    id: "vicios-04",
    tema: "vicios-construtivos",
    titulo: "STJ discute início do prazo para cobrar seguro por defeito de construção em imóvel do SFH",
    data: "22/08/2024",
    resumo:
      "Continuidade do julgamento do Tema 1.039: a Corte Especial debate se o prazo prescricional da ação securitária por vício construtivo em imóvel do SFH conta do fim do contrato de financiamento ou da negativa da seguradora.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2024/22082024-Corte-discute-inicio-do-prazo-para-cobrar-seguro-por-defeito-de-construcao-em-imovel-do-SFH.aspx",
    teseFixada: "Em julgamento (Tema 1.039) — pedido de vista pendente de conclusão.",
    temaRepetitivo: "Tema 1039",
    baseLegal: ["Art. 205 do Código Civil."],
    estrategiaDefesa: [
      "Mesma linha do caso vicios-03: acompanhar o repetitivo e requerer sobrestamento de processos individuais correlatos.",
    ],
    estrategiaAcordo: [
      "Não fechar valores de indenização em imóveis SFH com disputa de prescrição até a tese ser fixada.",
    ],
    avaliacaoBase: [
      "Classificar como contingência possível (não provável) enquanto o Tema 1.039 não transitar em julgado.",
    ],
  },

  // ---------- Loteamento e incorporação (regularidade) ----------
  {
    id: "loteamento-01",
    tema: "loteamento",
    titulo: "Municípios são responsáveis pela regularização de lotes em espaços urbanos",
    data: "21/07/2016",
    resumo:
      "O STJ definiu que a regularização de loteamentos irregulares é poder-dever do Município, atividade vinculada e não discricionária, podendo o Município cobrar do loteador os custos da atuação saneadora.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias-antigas/2016/2016-07-21_16-30_Municipios-sao-responsaveis-pela-regularizacao-de-lotes-em-espacos-urbanos.aspx",
    teseFixada:
      "O poder-dever municipal de regularização não exime o loteador de responder pelos custos da atuação saneadora, limitados às obras de infraestrutura essenciais.",
    baseLegal: [
      "Lei 6.766/1979 (Lei do Parcelamento do Solo Urbano) — obrigações do loteador quanto à infraestrutura.",
    ],
    estrategiaDefesa: [
      "Limitar eventual ressarcimento ao Município às obras de infraestrutura essenciais efetivamente pendentes, impugnando itens que extrapolem esse rol.",
      "Comprovar cumprimento das obrigações urbanísticas assumidas no projeto de loteamento aprovado.",
    ],
    estrategiaAcordo: [
      "Negociar cronograma de execução direta das pendências de infraestrutura em vez de ressarcimento financeiro ao Município, reduzindo exposição em dinheiro.",
    ],
    avaliacaoBase: [
      "Provisionar apenas o custo de obras de infraestrutura essenciais pendentes (vias, drenagem, saneamento básico), com base em orçamento técnico, não em estimativa municipal genérica.",
    ],
  },
  {
    id: "loteamento-02",
    tema: "loteamento",
    titulo: "Sem prejuízo ao desenvolvimento urbano, loteador pode pedir cancelamento do procedimento de registro",
    data: "23/09/2020",
    resumo:
      "A Terceira Turma decidiu que sociedade empresária que adquiriu todos os lotes e se sub-rogou nos direitos do loteador tem legitimidade para pedir o cancelamento do procedimento de registro do loteamento, desde que sem prejuízo ao desenvolvimento urbano.",
    referencia: "RMS 60.343-SP, Rel. Min. Moura Ribeiro, Terceira Turma, j. 18/08/2020",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/23092020-Sem-prejuizo-ao-desenvolvimento-urbano--loteador-pode-pedir-cancelamento-do-procedimento-de-registro.aspx",
    teseFixada:
      "O adquirente de todos os lotes que se sub-roga nos direitos do loteador (art. 29 da Lei 6.766/1979) tem legitimidade para requerer o cancelamento do registro do loteamento, se não houver prejuízo ao desenvolvimento urbano nem melhoramentos já realizados na área.",
    baseLegal: ["Art. 22 e art. 29 da Lei 6.766/1979."],
    estrategiaDefesa: [
      "Ao adquirir a totalidade dos lotes de um loteamento não implantado, formalizar a sub-rogação nos direitos do loteador (art. 29, Lei 6.766/1979) antes de requerer o cancelamento do registro, para assegurar legitimidade.",
      "Reunir prova de ausência de prejuízo ao desenvolvimento urbano e de que não houve melhoramentos públicos já incorporados à área.",
    ],
    estrategiaAcordo: [
      "Quando houver oposição do Município, negociar contrapartida urbanística (doação de área, obra pontual) em vez de litigar pelo cancelamento a qualquer custo.",
    ],
    avaliacaoBase: [
      "Baixo risco financeiro direto — o tema é essencialmente registral/administrativo; custo relevante é o de eventuais contrapartidas urbanísticas negociadas com o Município.",
    ],
  },
  {
    id: "loteamento-03",
    tema: "loteamento",
    titulo: "Comprador de lote não precisa pagar taxa anterior à compra",
    data: "24/08/2021",
    resumo:
      "A taxa de manutenção devida pelo antigo dono do lote não pode ser exigida do novo comprador do imóvel em loteamento — a obrigação é pessoal do proprietário à época do fato gerador, salvo disposição em contrário assumida expressamente.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/24082021-Taxa-de-manutencao-devida-pelo-antigo-dono-nao-pode-ser-exigida-do-comprador-de-imovel-em-loteamento.aspx",
    teseFixada:
      "A obrigação de pagar taxa de manutenção de loteamento tem natureza pessoal (não propter rem quando não há disposição contratual/registral expressa), não se transmitindo automaticamente ao adquirente do lote.",
    baseLegal: ["Lei 6.766/1979 — regime de obrigações do loteamento."],
    estrategiaDefesa: [
      "Ao cobrar taxa de manutenção/conservação de loteamento, cobrar do proprietário à época do fato gerador, e não automaticamente do adquirente atual, salvo cláusula expressa de sub-rogação no contrato de compra e venda.",
      "Revisar contratos-padrão de venda de lotes para incluir cláusula clara de responsabilidade do adquirente por taxas futuras, mitigando esse risco em vendas futuras.",
    ],
    estrategiaAcordo: [
      "Em cobranças de taxa contra novos adquirentes, aceitar redirecionar a cobrança ao antigo proprietário quando comprovado o fato gerador anterior à transferência.",
    ],
    avaliacaoBase: [
      "Ajustar contratos futuros para incluir cláusula de sub-rogação expressa do dever de pagar taxas de manutenção, reduzindo risco de inadimplência não recuperável em revendas.",
    ],
  },
  {
    id: "loteamento-04",
    tema: "loteamento",
    titulo: "Construtora deve pagar taxa de manutenção de loteamento",
    data: "24/10/2022",
    resumo:
      "Construtora que mantém lotes não vendidos em loteamento fechado deve pagar a taxa de manutenção à empresa administradora, na mesma proporção que os demais proprietários, sob pena de enriquecimento sem causa.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2022/24102022-Construtora-deve-pagar-taxa-de-manutencao-a-empresa-de-administracao-de-loteamento.aspx",
    teseFixada:
      "A titularidade de lotes não comercializados por incorporadora/construtora não a exime do pagamento proporcional da taxa de manutenção do loteamento, sob pena de oneração indevida dos demais proprietários.",
    baseLegal: ["Art. 1.334 do Código Civil, por analogia (rateio proporcional entre proprietários)."],
    estrategiaDefesa: [
      "Evitar convenções/regulamentos internos que fixem taxa reduzida para lotes ainda de titularidade da incorporadora — esse tipo de cláusula tende a ser anulado (mesma lógica aplicada a taxa condominial, ver casos de taxa-condominial).",
      "Orçar a taxa de manutenção de lotes em estoque como custo operacional recorrente do land bank, não como contingência incerta.",
    ],
    estrategiaAcordo: [
      "Negociar diretamente com a administradora um cronograma de pagamento das taxas de lotes em estoque, evitando judicialização e possíveis encargos moratórios.",
    ],
    avaliacaoBase: [
      "Provisionar taxa de manutenção integral (mesmo valor per lote dos demais proprietários) para todo lote em estoque em loteamento fechado/condomínio de lotes.",
    ],
  },

  // ---------- Corretagem (comissão e SATI) ----------
  {
    id: "corretagem-01",
    tema: "corretagem",
    titulo: "STJ afasta responsabilidade de corretora por atraso do imóvel",
    data: "14/03/2022",
    resumo:
      "A simples menção à imobiliária/corretora em propaganda de imóvel em construção não a torna responsável solidária pelo atraso na entrega da obra, obrigação que é da construtora/incorporadora.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/14032022-Mencao-a-imobiliaria-na-propaganda-de-imovel-em-construcao-nao-a-torna-responsavel-por-atraso-da-obra.aspx",
    teseFixada:
      "A imobiliária que apenas intermedeia a venda, sem assumir obrigação de entrega da obra, não responde solidariamente pelo atraso — responsabilidade exclusiva da incorporadora/construtora.",
    baseLegal: ["Arts. 7º, parágrafo único, e 25, §1º, do CDC — solidariedade limitada aos integrantes da cadeia de fornecimento responsáveis pelo defeito/serviço específico."],
    estrategiaDefesa: [
      "Em ações que também demandem a corretora, esclarecer a divisão de papéis contratuais para evitar que a incorporadora seja indevidamente onerada por obrigações de intermediação que não lhe cabem.",
      "Usar este precedente para delimitar, em contratos de parceria com imobiliárias, que a obrigação de entrega da obra é exclusiva da incorporadora.",
    ],
    estrategiaAcordo: [
      "Não incluir a corretora no rateio de indenizações por atraso de obra ao negociar acordos coletivos com compradores.",
    ],
    avaliacaoBase: [
      "Não provisionar valores de regresso contra corretoras por atraso de obra — o risco recai integralmente sobre a incorporadora/construtora.",
    ],
  },
  {
    id: "corretagem-02",
    tema: "corretagem",
    titulo: "STJ garante comissão integral a corretora",
    data: "10/07/2025",
    resumo:
      "Corretora que aproximou as partes tem direito à comissão sobre a totalidade da área efetivamente negociada, mesmo em relação à parte da negociação concluída sem a presença direta da corretora.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/10072025-Corretora-que-aproximou-partes-tem-direito-a-comissao-sobre-total-da-area-negociada-sem-sua-presenca.aspx",
    teseFixada:
      "Basta a aproximação eficaz das partes pelo corretor para caracterizar o direito à comissão sobre a integralidade do negócio concluído, ainda que parte da negociação final ocorra sem a presença física do corretor.",
    baseLegal: ["Art. 725 do Código Civil — direito à remuneração do corretor pela aproximação útil das partes."],
    estrategiaDefesa: [
      "Ao contestar cobrança de comissão por corretor, focar em provar ausência de nexo de aproximação eficaz (e não apenas ausência física na assinatura final), já que este precedente amplia a proteção ao corretor.",
      "Formalizar por escrito, em toda intermediação, o escopo exato da área/unidades objeto da corretagem, para delimitar a base de cálculo da comissão.",
    ],
    estrategiaAcordo: [
      "Negociar percentual fixo de comissão previamente definido por escopo de área, evitando disputas sobre a chamada \"aproximação eficaz\" após a venda.",
    ],
    avaliacaoBase: [
      "Provisionar comissão de corretagem sobre a área total do negócio quando houver evidência de aproximação eficaz do corretor, mesmo sem participação na etapa final.",
    ],
  },
  {
    id: "corretagem-03",
    tema: "corretagem",
    titulo: "STJ discute prescrição da restituição de corretagem e SATI (Tema 938)",
    data: "20/08/2019",
    resumo:
      "Julgado do Tema 938: em ação de resolução contratual por atraso da incorporadora, com pretensão de restituição de comissão de corretagem e SATI, não se aplica a prescrição trienal, mas hipótese de decadência.",
    referencia: "REsp 1.737.992-RO, Rel. Min. Paulo de Tarso Sanseverino, Terceira Turma, j. 20/08/2019",
    fonte: "https://scon.stj.jus.br/jurisprudencia/externo/informativo/?aplicacao=informativo&acao=pesquisar&livre=%40CNOT%3D%27017163%27",
    teseFixada:
      "A pretensão de restituição de comissão de corretagem e SATI vinculada à resolução do contrato por inadimplemento da incorporadora não se submete à prescrição trienal do art. 206, §3º, CC, mas ao regime da resolução contratual principal.",
    temaRepetitivo: "Tema 938",
    baseLegal: ["Art. 206, §3º, do Código Civil — afastado neste contexto específico."],
    estrategiaDefesa: [
      "Não invocar isoladamente a prescrição trienal (art. 206, §3º, CC) para pedidos de restituição de corretagem/SATI vinculados a resolução contratual — a tese foi afastada pelo STJ neste tema.",
      "Deslocar a defesa para o mérito: legitimidade passiva da incorporadora e prova da informação clara sobre o valor da corretagem/SATI no ato da venda.",
    ],
    estrategiaAcordo: [
      "Em ações antigas sobre esse ponto, evitar condicionar acordo à tese de prescrição trienal — negociar com base no mérito da cobrança de SATI (validade ou não da cobrança).",
    ],
    avaliacaoBase: [
      "Reclassificar como exposição de mérito (não mais defesa processual de prescrição) todas as ações pendentes de restituição de corretagem/SATI vinculadas a distrato.",
    ],
  },
  {
    id: "corretagem-04",
    tema: "corretagem",
    titulo: "Corretor não é responsável por danos causados por construtora",
    data: "26/01/2026",
    resumo:
      "Em regra, o corretor de imóveis não responde por descumprimento de obrigações da construtora, tese fixada no Tema 1173 pela Segunda Seção.",
    referencia: "REsp 2.008.542-RJ e REsp 2.008.545-DF, Rel. Min. Raul Araújo, Segunda Seção, j. 08/10/2025",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2026/26012026-Em-regra--corretor-de-imoveis-nao-responde-por-descumprimento-de-obrigacoes-da-construtora.aspx",
    teseFixada:
      "O corretor de imóveis, em regra, não responde por danos decorrentes do descumprimento de obrigações da construtora/incorporadora (atraso, vícios), salvo se tiver assumido expressamente obrigação própria ou agido com culpa na intermediação.",
    temaRepetitivo: "Tema 1173",
    baseLegal: ["Art. 14 c/c art. 25, §1º, do CDC — responsabilidade solidária limitada aos integrantes da cadeia efetivamente responsáveis pelo defeito."],
    estrategiaDefesa: [
      "Usar o Tema 1173 para excluir corretores/imobiliárias parceiras de ações de indenização por atraso ou vício construtivo, direcionando a responsabilidade exclusivamente à incorporadora.",
      "Revisar contratos de parceria comercial com imobiliárias para reforçar a segregação de responsabilidades, evitando cláusulas que sugiram corresponsabilidade do corretor por obrigações de obra.",
    ],
    estrategiaAcordo: [
      "Não incluir corretoras/imobiliárias em rateio de acordos coletivos de distrato, atraso ou vício construtivo — o risco é exclusivo da incorporadora conforme a tese fixada.",
    ],
    avaliacaoBase: [
      "Eliminar da provisão qualquer expectativa de regresso ou corresponsabilidade financeira de corretores por atraso/vício de obra — risco concentrado 100% na incorporadora.",
    ],
  },

  // ---------- Taxa condominial ----------
  {
    id: "condominial-01",
    tema: "taxa-condominial",
    titulo: "Convenção de condomínio outorgada por construtora ou incorporadora não pode fixar taxa menor para unidades não vendidas",
    data: "s/d",
    resumo:
      "A Terceira Turma declarou nula cláusula de convenção de condomínio que previa taxa condominial correspondente a 30% do valor integral para unidades ainda não comercializadas, pertencentes à construtora.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/Convencao-de-condominio-outorgada-por-construtora-ou-incorporadora-nao-pode-fixar-taxa-menor-para-unidades-nao-vendidas.aspx",
    teseFixada:
      "A redução ou isenção da taxa condominial em favor de um ou mais condôminos onera os demais e viola a regra de proporcionalidade do art. 1.334 do Código Civil; construtora/incorporadora deve pagar taxa integral por unidades em estoque.",
    baseLegal: ["Art. 1.334 do Código Civil — proporcionalidade das despesas condominiais."],
    estrategiaDefesa: [
      "Não incluir, em convenções de condomínio outorgadas unilateralmente pela incorporadora, cláusula de taxa reduzida para unidades em estoque — esse tipo de disposição tende a ser anulado.",
      "Orçar taxa condominial integral (mesmo valor das unidades vendidas) para todas as unidades em estoque como custo operacional do land bank/estoque de unidades prontas.",
    ],
    estrategiaAcordo: [
      "Em condomínios já constituídos com cláusula de taxa reduzida contestada, negociar transição gradual para a taxa integral, evitando cobrança retroativa integral de uma só vez.",
    ],
    avaliacaoBase: [
      "Provisionar taxa condominial integral (não fracionária) para todas as unidades não vendidas em estoque, desde a instalação do condomínio.",
    ],
  },
  {
    id: "condominial-02",
    tema: "taxa-condominial",
    titulo: "Não há ilegalidade na taxa de condomínio mais alta para apartamento com fração ideal maior",
    data: "s/d",
    resumo:
      "O STJ confirmou que é legítimo cobrar taxa condominial proporcional à fração ideal de cada unidade, ainda que isso resulte em valores diferentes entre unidades do mesmo condomínio.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/Nao-ha-ilegalidade-na-taxa-de-condominio-mais-alta-para-apartamento-com-fracao-ideal-maior.aspx",
    teseFixada:
      "A cobrança proporcional à fração ideal é a regra geral do art. 1.336, I, do CC, e sua aplicação estrita não configura ilegalidade nem abuso, mesmo gerando valores distintos entre unidades.",
    baseLegal: ["Art. 1.336, I, do Código Civil — rateio proporcional à fração ideal."],
    estrategiaDefesa: [
      "Ao definir frações ideais na incorporação (memorial de incorporação), documentar claramente o critério técnico utilizado, para sustentar a validade da proporcionalidade caso questionada por condôminos futuramente.",
      "Usar este precedente para rechaçar pedidos de equalização de taxa condominial entre unidades de metragem/fração ideal distintas dentro do mesmo empreendimento.",
    ],
    estrategiaAcordo: [
      "Evitar qualquer acordo que implique reclassificar frações ideais já registradas — o risco de judicialização é baixo dado o precedente favorável.",
    ],
    avaliacaoBase: [
      "Risco financeiro residual — a tese confirma a prática de mercado (rateio por fração ideal), reduzindo a necessidade de provisão para esse tipo de questionamento.",
    ],
  },
  {
    id: "condominial-03",
    tema: "taxa-condominial",
    titulo: "Registro obriga comprador a pagar condomínio, mesmo sem chaves",
    data: "14/10/2025",
    resumo:
      "O comprador registrado na matrícula do imóvel responde pelas despesas condominiais a partir do registro, mesmo que ainda não tenha recebido as chaves da unidade.",
    fonte: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2025/14102025-Comprador-registrado-na-matricula-do-imovel-responde-por-condominio--mesmo-sem-receber-as-chaves-.aspx",
    teseFixada:
      "A obrigação propter rem de pagar despesas condominiais nasce do registro da propriedade (art. 1.345 do CC), independentemente da data de entrega efetiva das chaves ao comprador.",
    baseLegal: ["Art. 1.345 do Código Civil — obrigação propter rem do proprietário registral pelas despesas condominiais."],
    estrategiaDefesa: [
      "Ao ser demandada por condomínio por unidades já vendidas e registradas em nome do comprador, opor este precedente para direcionar a cobrança ao adquirente registrado, e não à incorporadora.",
      "Manter controle rigoroso das datas de registro de cada unidade vendida para delimitar com precisão o momento de transferência da responsabilidade condominial.",
    ],
    estrategiaAcordo: [
      "Nenhuma necessidade de acordo defensivo aqui — a tese já protege a incorporadora ao transferir a responsabilidade ao comprador registrado a partir do registro.",
    ],
    avaliacaoBase: [
      "Provisionar despesas condominiais apenas até a data de registro de cada unidade em nome do comprador; a partir daí, a obrigação é do adquirente, ainda que sem posse física (chaves).",
    ],
  },
];
