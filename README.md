# Painel STJ — Construção Civil e Incorporação Imobiliária

Painel interno do Jurídico da MRV Engenharia e Participações S/A para
acompanhamento de jurisprudência do STJ em ações de construção civil e
incorporação imobiliária.

Cobre 7 temas: atraso de obra e multa contratual, distrato e rescisão
contratual, vícios construtivos e qualidade, alienação fiduciária,
registro imobiliário, corretagem (comissão/SATI) e taxa condominial.

O painel tem duas abas independentes, cada uma agrupada por tema e ordenada
por data mais recente:
- **Notícias e Decisões** — com busca textual e filtros de ano/mês.
- **Recursos Repetitivos** — com busca textual e filtro por status
  (julgado / em julgamento).

Para cada caso, o painel traz sugestões de estratégia de defesa, parâmetros
de acordo e avaliação de base (provisionamento), com a base legal aplicável
(Lei 13.786/2018, Lei 9.514/1997, Lei 6.015/1973 etc.).

Todo o conteúdo tem como fonte notícias e informativos oficiais do STJ
(`stj.jus.br` e subdomínios oficiais `scon.stj.jus.br` / `processo.stj.jus.br`).
**Confira sempre o inteiro teor do acórdão antes de usar em petição** — ver
aviso fixo no topo do painel.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção (tsc -b && vite build)
npm run preview  # serve a build de produção localmente
```

## Estrutura

- `src/types.ts` — modelos de dados (`CasoSTJ`, `TemaInfo`, `Repetitivo`).
- `src/data/temas.ts` — os 7 temas e suas cores.
- `src/data/casos.ts` — os casos/notícias do STJ, com estratégias e base legal.
- `src/data/repetitivos.ts` — os Recursos Repetitivos, por tema.
- `src/lib/dates.ts` — parsing/ordenação de datas em formato brasileiro.
- `src/components/` — `Header`, `TabBar`, `NewsTab`, `RepetitivosTab`,
  `AccordionSection`, `TemaSection`, `RepetitivoTemaSection`, `CaseCard`,
  `RepetitivoCard`, `StrategyPanel`, `NewsFilterBar`, `FilterBar`.

## Atualizando o conteúdo

Para adicionar um novo caso, inclua uma entrada em `src/data/casos.ts`
seguindo a interface `CasoSTJ`, sempre com `fonte` apontando para uma URL
oficial do STJ. Para um novo Recurso Repetitivo, inclua uma entrada em
`src/data/repetitivos.ts` seguindo a interface `Repetitivo`.
