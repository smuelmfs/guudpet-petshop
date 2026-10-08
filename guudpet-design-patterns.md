# Guudpet — Design Patterns

## 1. Referência e âmbito

Documento preparado para a marca **Guudpet**, a partir do print do case “Mokronos Pet Store”.

Data: 7 de outubro de 2026.

Fontes visuais:

- Print geral: `screencapture-dprofile-ru-case-189639-mokronos-pet-store-2026-10-07-17_05_07.png`.
- Recorte de tipografia e paleta: `image(20261007-161556).png`.

O print mostra uma apresentação de projeto publicada no Dprofile, com identidade visual, fotografias e mockups desktop/mobile de uma loja. Não é uma captura direta de todas as páginas da loja em funcionamento.

O print geral mede 243 × 2.048 px. O recorte adicional permite confirmar os nomes das fontes e os códigos de cor apresentados na identidade. Pequenos textos do site, dimensões e detalhes de interação continuam sem confirmação precisa. As recomendações abaixo distinguem observação visual de decisões propostas para o Guudpet.

## 2. Conceito visual

Uma loja pet com personalidade afetiva, divertida e próxima. Combina uma base creme com rosa intenso, fotografia de animais em ambientes naturais, recortes de animais e composições que lembram colagens.

Características centrais:

- Fundo quente e acolhedor.
- Rosa como principal elemento de destaque.
- Animais como protagonistas da comunicação e dos produtos.
- Formas orgânicas e bordas onduladas.
- Contraste entre fotos naturais e elementos gráficos coloridos.
- Mistura de organização comercial com detalhes espontâneos e lúdicos.

Direção para o Guudpet: traduzir essa linguagem para uma marca própria, com logótipo, conteúdo, fotos e grafismos originais.

## 3. Paleta de cores

Os códigos abaixo estão escritos no recorte da apresentação da identidade. Substituem as aproximações de pixels da primeira versão deste documento. A aplicação de cada cor ao Guudpet é uma orientação proposta, não uma extração do CSS original.

| Papel sugerido | Código indicado na referência | Uso no Guudpet |
| --- | --- | --- |
| Creme principal | `#FFF6E8` | Fundo da loja e superfícies neutras |
| Rosa principal | `#FF71A7` | CTAs, títulos, faixas e destaques |
| Rosa claro | `#FFBBD5` | Cards e fundos secundários |
| Castanho de apoio | `#5B4432` | Elementos gráficos e texto secundário, após validar contraste |
| Castanho intermédio | `#57402E` | Títulos ou elementos de apoio |
| Castanho escuro | `#3D2B1F` | Texto principal sobre superfícies claras |

O recorte também apresenta uma amostra muito clara com o rótulo `#FF71A7`, aparentemente suavizada por transparência ou tratamento gráfico. O código é legível; a opacidade não é indicada. Não tratar essa aparência clara como um hexadecimal adicional confirmado.

Verdes e azuis pertencem principalmente às fotografias. Não precisam de se tornar cores funcionais da interface.

## 4. Tipografia

### Fontes confirmadas

O recorte identifica explicitamente duas famílias: **Inter Tight** e **Comic Cat**. Os papéis abaixo são a orientação de uso para o Guudpet, coerente com a linguagem visual da referência; o recorte não fornece um mapa completo de fontes por componente.

| Fonte | Papel no Guudpet | Característica |
| --- | --- | --- |
| **Inter Tight** | Textos, navegação, nomes de produtos, preços, formulários e informação funcional | Sans-serif limpa e compacta |
| **Comic Cat** | Títulos de campanha, lettering de destaque e expressão da marca | Aparência manual, divertida e irregular |

### Padrões observados

- Nome da marca em letras grandes, maiúsculas e expressivas.
- Letras de destaque com contornos irregulares e aparência manual.
- Contraste entre lettering de marca e informação comercial compacta.
- Rosa aplicado em títulos, etiquetas e destaques.

### Aplicação no Guudpet

| Camada | Fonte proposta |
| --- | --- |
| Logótipo / títulos de campanha | Comic Cat como ponto de partida; ajustar o lettering do logótipo à marca |
| Títulos editoriais expressivos | Comic Cat |
| Títulos funcionais de secção | Inter Tight |
| Preços, descrições, navegação e checkout | Inter Tight |
| Pequenos detalhes gráficos | Comic Cat, com uso pontual |

Reservar Comic Cat para expressão e campanhas. Nomes de produtos, preços, opções e checkout precisam de leitura imediata.

Tamanhos, pesos, entrelinhas e espaçamento entre letras não foram confirmados. Definir estes valores para o Guudpet durante a implementação.

## 5. Layout da loja

Os mockups permitem observar estes padrões:

| Padrão | Construção visual | Aplicação |
| --- | --- | --- |
| Cabeçalho compacto | Logo, navegação e controlos numa faixa clara | Acesso rápido à loja |
| Hero modular | Bloco maior com animal e blocos menores em rosa | Campanha, promoção e categorias |
| Vitrine de produtos | Fotografias grandes com informação compacta abaixo | Mostrar o produto antes da explicação |
| Blocos de categoria | Imagens de animais ou acessórios em superfícies coloridas | Facilitar a descoberta |
| Secção editorial orgânica | Fundo rosa claro e separadores ondulados | Comunicar a personalidade da marca |
| Banner promocional | Imagem larga com CTA de destaque | Criar uma pausa entre vitrines |
| Prova social | Cards e mosaico de fotografias de animais | Reforçar proximidade e confiança |
| Formulário destacado | Bloco rosa claro sobre creme, com animais recortados nas laterais | Incentivar contacto ou adesão |
| Footer colorido | Área rosa com colunas de links | Encerrar a página com continuidade visual |

A apresentação sugere uma homepage com campanha, produtos, categorias, conteúdo de marca, banner, avaliações, galeria e formulário. Os rótulos pequenos não permitem confirmar a função exata de todos os blocos.

## 6. Componentes

### Cards de produto

- Fotografia do animal ou acessório ocupa a maior parte do card.
- Fundos claros, creme ou pastel.
- Informação comercial abaixo da imagem.
- Composição relativamente simples para deixar o produto dominar.
- Identidade reforçada pela fotografia e pela cor, sem necessidade de decorar todos os cards.

Para o Guudpet, incluir nome, preço, variantes relevantes e uma ação clara. A disposição exata destes elementos é uma decisão de implementação, não uma medição do print.

### Botões e CTAs

- Rosa intenso como cor recorrente de ação.
- Formato horizontal e compacto.
- Alguns controlos parecem ligeiramente arredondados, mas o raio exato não pode ser confirmado.

Definir estados de hover, foco, loading e desativado no projeto Guudpet; nenhum destes estados é verificável numa imagem estática.

### Imagens e recortes

- Fotos retangulares convivem com animais recortados sem fundo.
- Gatos e cães podem ultrapassar os limites de um bloco, criando sobreposição.
- Cards menores apresentam molduras claras semelhantes a cartões fotográficos.
- Fotografias de produto mantêm espaço em torno do sujeito.

### Formulários

- Superfície rosa clara com campos discretos.
- CTA rosa mais intenso.
- Ilustrações fotográficas de animais em redor.

Usar a decoração nas margens para preservar a leitura, o preenchimento e a área clicável dos campos.

## 7. Motivos gráficos

### Bordas onduladas

Separadores com ondulação recorrente conectam blocos creme e rosa. A repetição funciona como assinatura visual.

### Trilhos e linhas pontilhadas

Linhas rosa, com aparência desenhada ou pontilhada, atravessam as composições e ligam elementos. Na apresentação, ajudam a conduzir o olhar entre animais, fotografias e mockups.

### Repetição de lettering

Algumas faixas usam repetição de pequenos textos como textura. No Guudpet, aplicar esse recurso em áreas decorativas, com baixo protagonismo em relação ao conteúdo.

### Colagens

Imagens com tamanhos, alinhamentos e recortes diferentes criam um efeito espontâneo. Usar uma grelha base para manter a composição controlada, mesmo quando o resultado parece informal.

## 8. Direção de arte

| Tipo de imagem | Características |
| --- | --- |
| Campanha | Animais expressivos, enquadramentos próximos e acessórios visíveis |
| Lifestyle | Pessoas e animais em parques, relva, flores e luz natural |
| Produto | Animal ou acessório isolado, com fundo claro ou pastel |
| Comunidade | Fotografias variadas de cães e gatos, organizadas em mosaico |
| Recorte decorativo | Animal sem fundo, com pose que interage com a composição |

Acessórios como coleiras, lenços, roupas e bolsas aparecem integrados na fotografia. Isso aproxima produto e contexto de uso.

Para manter coerência no Guudpet, definir iluminação, tratamento de cor, distância de enquadramento e proporção das imagens antes de produzir os assets.

## 9. Interface versus apresentação do case

Esta distinção evita transformar a loja inteira numa reprodução da página de portfólio.

| Elemento | Onde é observado | Como aproveitar |
| --- | --- | --- |
| Creme, rosa e fotografia pet | Identidade e mockups da loja | Base da direção visual |
| Vitrines, categorias e CTAs | Mockups da loja | Componentes comerciais |
| Ondulações e recortes de animais | Apresentação e partes dos mockups | Assinatura gráfica em pontos selecionados |
| Telemóveis sobre fotografia de um cão | Apresentação do case | Recurso para apresentar o projeto |
| Laptop na relva junto de um animal | Apresentação do case | Composição promocional / portfólio |
| Diagrama da arquitetura do site | Apresentação do case | Referência de documentação |
| Mostruário de fontes e paleta | Apresentação do case | Referência para organizar a identidade |
| Grande encerramento “Thank you” | Apresentação do case | Encerramento de apresentação |
| Barras pretas e controlos do Dprofile | Plataforma que contém o case | Excluir da identidade Guudpet |

## 10. Responsividade

Existem mockups mobile que mostram produtos, formulários e outras áreas da loja. Isso indica que a referência contempla uma experiência móvel, mas não permite confirmar breakpoints ou comportamento responsivo real.

Recomendações para o Guudpet, não extraídas como regras oficiais:

- Reorganizar o hero modular para uma leitura vertical.
- Manter fotografias de produto grandes no mobile.
- Ajustar o número de colunas ao espaço e ao comprimento dos nomes.
- Reduzir sobreposições decorativas em ecrãs pequenos.
- Preservar áreas de toque confortáveis.
- Garantir que linhas e recortes não provoquem scroll horizontal.
- Manter preço, variante e ação de compra próximos na página de produto.

## 11. Movimento

O print não permite confirmar animações, carrosséis automáticos, sticky elements, transições ou estados interativos.

Se houver animação no Guudpet, tratá-la como escolha própria: movimentos discretos em imagens e feedback claro nos controlos. Não atribuir efeitos ou bibliotecas ao projeto original sem evidência.

## 12. Regras de aplicação no Guudpet

1. Usar creme como base e rosa intenso como destaque recorrente.
2. Fazer dos animais o principal elemento emocional da marca.
3. Usar Comic Cat nos títulos expressivos e Inter Tight na informação funcional.
4. Repetir ondulações e linhas orgânicas em momentos selecionados.
5. Alternar vitrines organizadas com blocos editoriais mais livres.
6. Utilizar fotos lifestyle para mostrar os produtos em contexto.
7. Concentrar a decoração em redor do conteúdo funcional.
8. Criar identidade, textos e assets próprios para o nome Guudpet.
9. Validar contraste, foco, mobile e checkout durante a implementação.

## 13. Limites da extração

**Observado:** direção de arte, combinações de cor, composições, motivos gráficos, mockups desktop/mobile e padrões visuais de componentes.

**Confirmado no recorte da identidade:** nomes das fontes Inter Tight e Comic Cat e códigos de cor `#FFF6E8`, `#FF71A7`, `#FFBBD5`, `#5B4432`, `#57402E` e `#3D2B1F`.

**Proposto para o Guudpet:** distribuição das fontes e cores por componente. Essa distribuição não foi verificada no código do site original.

**Não confirmado:** aplicação exata das fontes em cada elemento do original, pesos, opacidades, tamanhos, espaçamentos, raios, grelha oficial, textos pequenos, breakpoints, animações, interações, navegação e funcionamento da compra.

Este documento é uma referência visual para o Guudpet. Não representa o design system oficial do case original nem uma especificação técnica obtida do código do site.
