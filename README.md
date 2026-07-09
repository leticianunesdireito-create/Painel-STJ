# Painel STJ — Construção Civil, Incorporação e Loteamento

Painel interno do Jurídico da MRV Engenharia e Participações S/A para
acompanhamento de jurisprudência do STJ em ações de construção civil,
incorporação imobiliária e loteamento.

Cobre 6 temas: atraso de obra e multa contratual, distrato e rescisão
contratual, vícios construtivos e qualidade, loteamento e incorporação
(regularidade), corretagem (comissão/SATI) e taxa condominial. Traz também
uma seção de Recursos Repetitivos (Temas 971, 938, 1039 e 1173) e, para cada
caso, sugestões de estratégia de defesa, parâmetros de acordo e avaliação de
base (provisionamento), com a base legal aplicável (Lei 13.786/2018 e Lei
6.766/1979).

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
- `src/data/temas.ts` — os 6 temas e suas cores.
- `src/data/casos.ts` — os casos/notícias do STJ, com estratégias e base legal.
- `src/data/repetitivos.ts` — os Temas Repetitivos em destaque.
- `src/components/` — `Header`, `RepetitivosSection`, `FilterBar`, `CaseCard`,
  `StrategyPanel`.

## Atualizando o conteúdo

Para adicionar um novo caso, inclua uma entrada em `src/data/casos.ts`
seguindo a interface `CasoSTJ`, sempre com `fonte` apontando para uma URL
oficial do STJ.
