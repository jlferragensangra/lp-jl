# JL Ferragens — Landing Page

Landing page da **JL Ferragens**, comércio de ferragens e materiais metálicos para construção há 10 anos em Angra dos Reis · RJ, com duas unidades: **Bracuhy** e **Praia da Ribeira**.

🔗 Domínio: [www.jlferragensangra.com.br](https://www.jlferragensangra.com.br/)

## Estrutura do projeto

```
├── index.html   # Estrutura da página, SEO e dados estruturados (schema.org)
├── style.css    # Estilos e animações
└── script.js    # Interações (scroll reveal, contadores, header, progresso)
```

Site estático puro — **sem build, sem dependências, sem framework**. Basta abrir o `index.html` no navegador ou hospedar os três arquivos em qualquer serviço de hosting estático (GitHub Pages, Netlify, Vercel, cPanel etc.).

## Seções da página

1. **Hero** — chamada principal com CTAs de WhatsApp e estatísticas animadas
2. **Letreiro industrial** — marquee com os produtos
3. **Sobre** — história e diferenciais da empresa
4. **Produtos** — cards com medidas: metalon, vergalhão, colunas, perfil U, telhas (galvalume e sanduíche) e lambril
5. **Unidades** — endereços, WhatsApp e link de mapa de cada loja
6. **FAQ** — perguntas frequentes (com marcação FAQPage para buscadores)
7. **CTA final** + rodapé + botão flutuante de WhatsApp

## Animações e interações

- Entrada do hero palavra por palavra + contadores animados
- Scroll reveal com cascata nos cards (`IntersectionObserver`)
- Letreiros marquee, faixa hazard deslizante e brilho pulsante no hero
- Barra de progresso de leitura e header que encolhe ao rolar
- Microinterações: brilho nos botões, hover nos cards, pulso no WhatsApp

Todas as animações respeitam `prefers-reduced-motion` e a página funciona normalmente sem JavaScript.

## SEO / AEO

- Meta tags completas (description, canonical, geo, Open Graph, Twitter Card)
- Dados estruturados JSON-LD: `Organization`, `HardwareStore` (2 unidades com horários), `OfferCatalog` e `FAQPage`

## Como editar

| O que mudar | Onde |
|---|---|
| Textos, telefones, endereços, produtos | `index.html` |
| Cores, fontes, espaçamentos, animações | `style.css` (variáveis em `:root`) |
| Comportamento das animações | `script.js` |

As cores da marca ficam nas variáveis CSS no topo do `style.css`:

```css
--laranja-fogo: #E8491D;
--laranja:      #F97F16;
--aco-900:      #16181C;
```

### Fotos

Os espaços marcados com `[ foto ]` (loja e produtos) são placeholders — substitua pelas imagens reais mantendo as proporções (`4/5` na foto da loja, `16/9` nos produtos).

## Contato

- **Unidade Bracuhy** — Rod. Haroldo Fernandes, km 503 · (24) 99961-9962
- **Unidade Praia da Ribeira** — Rod. Gov. Mário Covas, km 489 · (24) 99914-4327
- Instagram: [@jlferragensangra](https://www.instagram.com/jlferragensangra/)
- Horário: Seg–Sex 7h30–18h · Sáb 7h30–12h
