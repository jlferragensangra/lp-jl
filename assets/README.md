# Imagens do site

Imagens usadas na landing page. Nomes sem espaços/acentos para funcionar bem em URLs.

## Tamanhos exatos

| Onde | Tamanho | Proporção | Formato | Peso |
|---|---|---|---|---|
| Foto de produto (cards) | **1000 × 1000 px** | 1:1 | JPG/WebP, fundo branco | 40–80 KB |
| Foto da loja/equipe (Sobre) | **1200 × 960 px** | 5:4 | JPG/WebP | 100–180 KB |
| Logo do header | **600 × 190 px** | ~3:1 | PNG transparente | até 50 KB |
| Compartilhamento (`og-image.jpg`) | **1200 × 630 px** | 1.91:1 | JPG | até 200 KB |
| Favicon | **512 × 512 px** | 1:1 | PNG | até 30 KB |

Medidas reais renderizadas (base do cálculo, dobradas para telas retina):
card de produto vai até 510 × 383 px (celular, coluna única) e 354 × 266 px
no desktop; foto da seção Sobre chega a 449 × 561 px.

### Regras que valem sempre

- Nome do arquivo **sem espaços e sem acentos**: `perfil-u.jpg`, não `perfil u.jpg`
- O card de produto **nunca corta** a imagem — qualquer proporção aparece inteira.
  A proporção 1:1 é a que aproveita melhor o espaço, sem sobrar vazio nas laterais.
- Otimize antes de subir: [squoosh.app](https://squoosh.app) ou [tinypng.com](https://tinypng.com)

Para trocar/adicionar: coloque o arquivo nesta pasta e aponte o `src` do
`<img>` do card correspondente no `index.html`.

## Produtos (cards) — em uso

- `metalon.png` — tubo de metalon
- `vergalhao.jpg` — vergalhões de aço
- `colunas.jpg` — colunas montadas
- `perfil-u.jpg` — perfis U
- `telha-sanduiche.jpg` — telha sanduíche (card "Telhas")
- `lambril.jpg` — lambril

## Loja

- `loja.jpg` — fachadas das duas unidades (seção "Sobre"). A caixa da seção
  usa proporção 5:4 (paisagem) para casar com essa foto sem cortar nada;
  se um dia trocar por outra foto de proporção bem diferente, ajuste
  `aspect-ratio` de `.sobre-foto` em `style.css` para não distorcer o
  enquadramento.

## Logos

- `logo-original.jpg` — logo colorido (fundo branco)
- `logo-branco.png` — versão branca vazada, fundo transparente (usada no header)

## Ainda faltando (sugestão)

- Foto real de telha galvalume (hoje o card "Telhas" usa a foto da sanduíche)
