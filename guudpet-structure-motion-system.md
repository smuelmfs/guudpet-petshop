# GuudPet — Sistema de estrutura e movimento

Referência estrutural: https://groomer.framer.website/

Data da análise: 8 de outubro de 2026.

Material adicional analisado: vídeo `ScreenRecording_10-08-2026 10-59-33_1.mp4`, com aproximadamente 24,7 segundos. Ver a secção 20 para a extração por momento e as orientações de movimento.

## 1. Objetivo e prioridade das fontes

### Correção prioritária: composição, não uma coleção de cards

O principal problema identificado pelo cliente é o excesso de cards e de informação encaixada em cards dentro de outros cards. O nível pretendido é o da composição do vídeo: imagens protagonistas, títulos expressivos, texto livre, sobreposições, faixas sinuosas e mudanças de ritmo entre secções. Aumentar cards ou adicionar animações à estrutura atual não resolve este problema.

Esta orientação prevalece sobre receitas anteriores deste documento que sugiram grelhas ou superfícies de cards. O vídeo contém cards em componentes específicos; isso não autoriza transformar toda a página numa grelha de caixas. Usar cards apenas onde a unidade de conteúdo os justifica, sobretudo avaliações e fotos da galeria. Não colocar estes componentes dentro de outro card decorativo.

- Hero: título, texto, CTA e animais integrados numa composição aberta; sem caixa envolvendo o conjunto.
- Serviços: preferir uma composição aberta de imagens recortadas, títulos e descrições curtas, ou blocos editoriais alternados. Não impor seis caixas iguais nem uma caixa individual a cada parágrafo, ícone ou benefício.
- Sobre e diferenciais: uma imagem grande ligada a texto livre e uma lista simples; no máximo um grande painel de fundo por secção quando necessário à composição. O painel organiza o cenário, não cria cards internos para cada informação.
- Etapas: linha visual, números e texto diretamente sobre o fundo; sem três cards repetidos.
- FAQ: linhas com separadores e expansão; sem um card independente por pergunta.
- Localização e contacto: composição direta com informação e mapa/foto quando disponíveis; sem fragmentar telefone, horário e endereço em três caixas.
- Avaliações e galeria: cards podem existir como elementos próprios, com proporções generosas e composição expressiva, sem fazer desse padrão a linguagem de todas as secções.

Variar a composição entre secções: centralização no hero, assimetria editorial, imagem e texto em lados alternados, faixa curva atravessando o cenário, avaliações em leque e galeria horizontal. Não repetir a fórmula título + três cards em sequência. Movimento GSAP deve reforçar essas relações: revelar texto e imagem em tempos coordenados, animar sobreposições e faixas; evitar aplicar o mesmo fade-up a todas as caixas.

**Critério de revisão:** se, sem as animações, a página continuar a parecer uma coleção de caixas iguais, a estrutura ainda não foi corrigida. Rever primeiro a composição estática, depois a coreografia. Preservar conteúdo necessário e legibilidade, reorganizando a informação em vez de a esconder ou eliminar para reduzir caixas.

Refinar o site existente da GuudPet, preservando a sua identidade e elevando a estrutura, a composição e as animações. O Groomer é uma referência de organização visual e personalidade; o resultado deve ser próprio e adequado ao agendamento pelo WhatsApp.

Manter a paleta atual da GuudPet. Corrigir a tipografia obrigatoriamente: **Comic Cat é a fonte principal**; **Clash Grotesk é a fonte dos textos menores e de suporte**. Se o código atual tiver substituído estas fontes, restaurar esta combinação. Não preservar uma substituição incorreta apenas por já existir no código.

Alteração solicitada pelo cliente: o resultado atual ficou demasiado pequeno e compacto. A nova execução deve ter secções amplas, títulos com presença, imagens grandes e faixas animadas com curvas e contornos orgânicos, mantendo o padrão visual da GuudPet.

Ordem de prioridade:

1. Briefing: negócio, conteúdo, funcionalidades e escopo.
2. Identidade GuudPet: paleta e logo atuais; Comic Cat como principal e Clash Grotesk para textos menores e suporte; informação real da empresa.
3. Este documento: estrutura, hierarquia, componentes, comportamento e movimento.
4. Pasta `referencias`: analisar todos os novos prints relevantes e o `index.html` para compreender escala, composição, faixas e movimento; usar o Groomer como referência complementar.

Antes de editar, identificar as variáveis de tema, fontes carregadas, componentes existentes e assets disponíveis. Reutilizar a paleta e o logo atuais e corrigir as fontes conforme este documento. Abrir e analisar o `index.html` da pasta `referencias`, observando a composição renderizada e lendo as partes de estrutura e animação relevantes. Os novos prints e esse HTML devem orientar as decisões; não afirmar que foram analisados sem os abrir. Não importar a paleta, fontes, logo, fotografias ou textos comerciais do Groomer.

## 2. Evidência e receitas propostas

**Confirmado no Groomer:** navbar fixa no topo; navegação horizontal; hero central com título dominante; animais recortados sobrepostos à faixa seguinte; grelha de seis serviços em três colunas; badges; blocos arredondados; CTAs com aparência de camadas; secções de apresentação, diferenciais, depoimentos, etapas, galeria, FAQ e artigos.

**Evidência de movimento:** elementos de serviços foram encontrados em estados transformados de escala aproximada 0,8 e deslocamento vertical de 100 px, com perspectiva; a secção de apresentação também apresentou deslocamento de 100 px. Existem ticker e texto circular com transformações. Esses estados indicam recursos de movimento, mas não provam o gatilho, duração ou easing de cada efeito.

**Propostas para GuudPet:** todos os timings, easings, amplitudes, breakpoints e regras de GSAP deste documento. São receitas para produzir um resultado controlado, não parâmetros extraídos do projeto Framer.

**Limites:** inspeção da homepage Groomer desktop e observação de uma versão GuudPet através do vídeo fornecido. O código e a versão atual publicada da GuudPet não foram inspecionados. Menu mobile, todos os hovers, timings exatos e páginas internas não foram verificados. O agente deve ler e renderizar o projeto atual antes de aplicar as orientações.

## 3. O que deve tornar o resultado melhor

Superar a referência significa melhorar a clareza, a composição e a qualidade do movimento:

- Explicar o serviço e mostrar o agendamento logo na primeira tela.
- Usar títulos curtos para manter impacto também no celular.
- Dar uma função a cada elemento decorativo.
- Mostrar serviços reais, fotos reais e contactos verificáveis.
- Criar uma sequência de leitura com pausas e variações de composição.
- Usar movimentos coordenados e poucos loops discretos.
- Preservar a utilização com teclado, toque e movimento reduzido.

Não aumentar a quantidade de secções ou animações apenas para aparentar complexidade.

## 4. Sistema de layout — proposta

### Tipografia obrigatória

| Aplicação | Fonte |
| --- | --- |
| Hero, títulos principais e títulos expressivos de secção | **Comic Cat** |
| Títulos de serviços e chamadas com personalidade | **Comic Cat** |
| Parágrafos, descrições, legendas, textos menores e suporte | **Clash Grotesk** |
| Campos, dados de contacto e informação funcional | **Clash Grotesk** |

Carregar os ficheiros reais das fontes quando disponíveis. Não aproximar a Comic Cat com uma fonte genérica nem substituí-la por Nerko One, Inter Tight ou Clash Grotesk nos títulos principais. Verificar a fonte efetivamente renderizada no navegador, não apenas o nome declarado no CSS. Confirmar pesos disponíveis e reservar altura suficiente para as letras durante entradas mascaradas.

### Escala e presença visual

O site precisa de deixar de parecer miniaturizado. Aumentar a escala da composição como um conjunto: títulos, imagens, cards, padding e intervalos. Não tentar resolver apenas adicionando espaço vazio entre blocos pequenos.

Pontos de partida propostos, a ajustar aos novos prints e ao `index.html`:

- Hero desktop com aproximadamente 85–100 svh quando adequado ao conteúdo, título de 96–144 px e imagem protagonista de grande dimensão.
- Títulos de secção desktop na ordem de 64–96 px; mobile aproximadamente 36–52 px, conforme a Comic Cat e o comprimento.
- Corpo de texto desktop de 18–20 px; mobile de 16–18 px, com entrelinha confortável.
- Grandes secções com padding vertical de 100–160 px no desktop e 64–96 px no mobile.
- Serviços com imagens e cards de presença real, sem grelhas de miniaturas.
- Galeria com fotografias amplas e variação de proporções bem controlada.
- Usar largura total para algumas transições e faixas, mantendo o texto num container legível.

Não forçar todas as secções a 100vh; ajustar a altura ao conteúdo e à composição. No mobile, priorizar leitura e ação, sem comprimir a identidade.

| Token estrutural | Desktop | Mobile |
| --- | --- | --- |
| Container principal | Máximo de 1.280–1.440 px, centralizado; faixas podem ocupar toda a largura | Largura disponível com margens de 20–24 px |
| Margem exterior | 32–48 px | 20–24 px |
| Distância entre secções | 120–180 px, conforme a composição | 64–96 px |
| Gap de grelha | 24–32 px | 16–24 px |
| Raio de blocos grandes | 28–40 px | 20–28 px |
| Raio de cards | 20–28 px | 16–24 px |
| Largura de texto corrido | Aproximadamente 45–65 caracteres por linha | Ajustada ao viewport |

Esses valores são pontos de partida. Ajustar com a tipografia real da GuudPet e comparar os resultados renderizados.

Usar uma escala de espaçamento consistente. Reservar grandes vazios para introduções e transições, mantendo os elementos relacionados próximos. Não obrigar todas as secções a ocupar uma altura de viewport.

## 5. Navbar

### Referência observada

A navbar mantém-se fixa no topo. No viewport analisado, o elemento de navegação media aproximadamente 1.288 × 64 px, com padding `8px 8px 10px`, gap de 20 px e cantos inferiores de 30 px. O wrapper tinha `position: fixed`, `top: 0` e `z-index: 10`.

Visualmente, aparece como uma faixa enquadrada, com logo à esquerda, links à direita e contacto em cápsula na extremidade. A borda inferior ajuda a distingui-la do conteúdo.

### Estrutura proposta para GuudPet

- Logo à esquerda.
- Links de âncora: Sobre, Serviços, Galeria e Localização.
- CTA “Agendar” à direita, ligado ao WhatsApp.
- Altura controlada para preservar espaço no celular.
- Fundo do tema atual, com contorno ou camada inferior que dê presença.
- Offset nas âncoras para que o título da secção não fique escondido atrás da navbar.

### Movimento proposto

- Entrada inicial: deslocamento vertical de −16 a −24 px e opacidade de 0 para 1, durante 0,45–0,65 s.
- Após sair do topo: reduzir ligeiramente o padding, com transição de 0,25–0,35 s. Não alterar drasticamente a posição dos links.
- Links: indicador discreto de hover e foco. Não fazer as letras saltarem individualmente.
- CTA: resposta de pressão com deslocamento vertical de 2–4 px em direção à camada inferior.
- Evitar esconder automaticamente a navbar se isso dificultar encontrar o agendamento.

### Mobile — proposta não verificada na referência

- Logo e botão de menu; CTA compacto se houver espaço.
- Menu em painel com os mesmos links e uma ação de agendamento clara.
- Animar abertura e fecho de forma curta; bloquear scroll de fundo enquanto aberto.
- Gerir foco, Escape e devolução do foco ao botão.
- Não depender de hover para qualquer ação.

## 6. Hero

### Padrão observado

Título central muito grande, descrição curta abaixo, CTA central e prova social compacta. Um selo circular complementa o título. Fotografias de cão e gato recortadas sobrepõem a transição para o bloco de informação seguinte. Ícones sociais aparecem numa coluna lateral.

### Composição GuudPet

1. Pequena etiqueta de contexto, se ajudar a explicar o negócio.
2. Título com 2–3 linhas controladas e uma ideia principal.
3. Descrição curta que explique o serviço e a região.
4. CTA principal para WhatsApp e ação secundária “Ver serviços”.
5. Prova social apenas quando existir evidência real; caso contrário, usar uma informação útil confirmada.
6. Uma composição de animais recortados ligada à transição seguinte.

Usar uma palavra de destaque com a cor de marca existente. Trabalhar quebras de linha, largura e peso antes de acrescentar decoração. No mobile, manter título, explicação e CTA visíveis e reduzir a composição de animais.

### Timeline GSAP proposta

| Elemento | Movimento | Duração sugerida | Relação na sequência |
| --- | --- | --- | --- |
| Etiqueta | Opacidade + y de 12 px para 0 | 0,35–0,45 s | Primeiro |
| Linhas do título | yPercent de 100 para 0 dentro de máscaras | 0,65–0,85 s | Stagger de 0,07–0,1 s |
| Descrição | Opacidade + y de 16 px para 0 | 0,45–0,6 s | Sobreposição com o fim do título |
| CTAs | Opacidade + y de 12 px para 0 | 0,4–0,55 s | Logo após a descrição |
| Animal recortado | y de 40–60 px, escala de 0,94 para 1 | 0,7–0,95 s | Em paralelo com o CTA |
| Selo decorativo | Rotação contínua lenta, se utilizado | Volta em 24–36 s | Loop sem aceleração |

Easings propostos: `power3.out` nas entradas; `back.out(1.15)` num único elemento lúdico; `none` na rotação contínua. Não aplicar bounce a toda a página.

O vídeo adicional mostra revelação progressiva de caracteres. Usar esse recurso em títulos curtos e expressivos quando melhorar a sequência, com stagger curto e altura reservada; preferir palavras ou linhas nos títulos longos. Não aplicar revelação por caracteres aos parágrafos de suporte. As máscaras devem acomodar ascendentes e descendentes da Comic Cat. O conteúdo precisa de permanecer acessível se JavaScript falhar.

## 7. Faixa de informação útil

No Groomer, localização, horário e contacto aparecem cedo, num bloco arredondado com três colunas e ícones.

Para GuudPet:

- Três grupos de informação: localização, funcionamento e agendamento/contacto.
- Ícone, título curto, informação e ação quando relevante.
- Desktop em três colunas; mobile em sequência vertical ou grelha legível.
- Manter as cores atuais, escolhendo uma superfície que contraste com o fundo.

Entrada proposta: y de 24 px, opacidade e stagger de 0,08 s. Revelar uma vez ao aproximar-se do viewport. Não animar números de telefone ou endereço letra a letra.

## 8. Serviços — componente principal

### Referência observada

Grelha de três colunas por duas linhas. Cada card combina um animal recortado, um suporte gráfico atrás da imagem e uma área de texto abaixo. O animal ultrapassa o suporte. O suporte tem um canto superior muito arredondado, criando uma silhueta assimétrica.

Uma área de texto observada utilizava padding de 30 × 20 px, gap de 10 px e cantos inferiores de 20 px. O card media cerca de 403 px de largura no viewport analisado. Essas medidas não devem ser fixadas em todos os ecrãs.

### Construção proposta — revista após a correção do cliente

A grelha acima é uma observação do Groomer, não um requisito da GuudPet. Priorizar serviços numa composição aberta: animal recortado, suporte gráfico localizado atrás da imagem, título e descrição sobre o fundo da secção. O suporte da imagem não deve prolongar-se automaticamente numa caixa envolvendo todo o texto.

- Selecionar a composição conforme a quantidade de serviços confirmados; não inventar seis itens para preencher uma grelha.
- Dar presença às imagens e manter títulos e descrições com hierarquia clara.
- Para vários serviços, considerar linhas editoriais alternadas ou grupos abertos, evitando uma sequência monótona de caixas iguais.
- Integrar uma ação contextual quando útil; não acrescentar caixas para preços, benefícios e CTAs dentro de cada serviço.
- Manter proporções visuais consistentes sem exigir molduras iguais em todos os itens.

Usar overflow visível na camada da imagem e recorte apenas na superfície necessária. Evitar cortar orelhas, patas ou cabeças com recortes globais.

### Movimento GSAP proposto

- Revelação: suporte e texto sobem 20–28 px; imagem sobe 40–60 px e cresce de 0,92 para 1.
- Stagger entre conjuntos de serviço: 0,08–0,12 s; duração de 0,55–0,8 s. Coordenar imagem, título e suporte, mesmo quando não há card.
- Hover em desktop: animal sobe 6–10 px, gira no máximo 1–2 graus e cresce até 1,02.
- Pequena estrela ou detalhe pode entrar junto da imagem, se existir asset real adequado.
- Ao sair do hover, regressar suavemente ao estado base.
- Toque: feedback no CTA; não simular hover persistente.

Não usar vários loops de flutuação simultâneos. Não repetir a entrada de todos os serviços a cada pequena inversão do scroll.

## 9. Sobre / apresentação

O Groomer inclui um título grande, vídeo, descrição e CTA. Também apresenta um ticker curvo de palavras.

Para GuudPet, construir uma secção de duas colunas: fotografia ou vídeo real de um lado; título, texto breve e diferenciais concretos do outro. Alternar a composição em relação ao hero central.

Proposta de movimento:

- Revelar as colunas com y de 24–36 px e um ligeiro desfasamento.
- Se houver imagem, usar parallax discreto de 12–24 px dentro do seu enquadramento.
- Não acrescentar vídeo sem material disponível.
- Usar ticker apenas se houver conteúdo curto e propósito visual claro.

Para um ticker GSAP: repetir a sequência de itens para fechar o loop; velocidade linear constante; recalcular a distância após carregamento das fontes e imagens. A inclinação da faixa pode ser estática, enquanto o conteúdo se move dentro dela. Não presumir que este é o mecanismo do Framer original.

### Faixas orgânicas e animações fora da caixa — requisito do cliente

As faixas decorativas e tickers devem ter uma linguagem orgânica, expressiva e divertida. **Não usar uma faixa retangular reta como solução padrão.** Uma faixa reta apenas rodada alguns graus também não satisfaz esta direção.

Analisar os novos prints e o `index.html` da pasta `referencias` para definir os perfis das faixas. Explorar, conforme a referência:

- Bandas em arco ou curvas que atravessam a composição.
- Bordas onduladas ou recortadas e transições assimétricas.
- Texto que percorre um trajeto curvo, com distância e ritmo consistentes.
- Sobreposições que ligam duas secções, em vez de blocos isolados.
- Animais e detalhes que interagem com os limites da faixa.

Proposta GSAP: construir o perfil curvo com assets vetoriais ou caminhos adequados; animar o texto ao longo do percurso ou o conteúdo dentro de uma máscara orgânica. Para texto curvo, um `textPath` pode deslocar o seu offset; outra opção é distribuir elementos por um percurso, preservando espaçamento. Escolher a técnica depois de analisar o HTML fornecido, sem prometer que o método é o mesmo das referências.

O movimento deve ser contínuo, com loop sem salto visível. Ajustar velocidade ao comprimento real da faixa; oferecer pausa quando o conteúdo precisar de leitura. Eventuais deformações da curva devem ser suaves, sem distorcer continuamente as letras ou prejudicar o desempenho.

Criar momentos de surpresa coordenados: entrada de uma faixa que liga secções, animal que espreita ou acompanha um movimento, reação elástica curta no CTA. Ir além de fades iguais em todos os blocos. Preservar texto estável para informação funcional e simplificar o movimento no mobile e com preferência reduzida.

## 10. Diferenciais e confiança

Referência: lista de diferenciais com ícones numa coluna e grandes blocos de indicadores na outra.

GuudPet: selecionar 3–4 diferenciais reais, com descrições breves. Na outra coluna, usar foto ou informação verificável. Números, anos de experiência e classificações precisam de confirmação.

Movimento proposto: entradas por grupos, com stagger curto; animação numérica apenas se os indicadores fizerem sentido. Não usar contadores fictícios para preencher o layout.

## 11. Galeria

O Groomer apresenta uma secção de galeria enquadrada e usa sequências repetidas de imagens. A observação não estabelece todos os parâmetros de deslocamento.

Para GuudPet, favorecer fotografias reais com curadoria: proporções coerentes, recortes cuidados e sequência que mostre animais, espaço e atendimento.

Opções propostas:

- Grelha com uma imagem maior e imagens de apoio, quando a quantidade de fotos for pequena.
- Faixa horizontal arrastável, quando existirem muitas fotos adequadas.

Movimento: entrada suave do conjunto; zoom de até 1,03 no hover dentro da moldura; drag com resposta direta. Se houver lightbox, animar abertura curta, gerir foco e oferecer fecho claro. Não impor uma longa secção horizontal presa ao scroll no celular.

## 12. Depoimentos, etapas e FAQ

### Depoimentos

Usar somente conteúdo real. Cards com fotografia, opinião e nome, sem excesso de texto. Slider opcional com controlos claros e pausa; evitar deslocamento automático rápido de texto que o utilizador precisa de ler.

### Etapas

A referência utiliza números grandes e uma sequência vertical. Adaptar para “Como agendar” se esse conteúdo for útil: escolher serviço, conversar pelo WhatsApp e confirmar o horário. Confirmar o processo com a empresa.

Entrada por etapa com y de 20 px. Uma linha de ligação pode ser revelada durante o scroll, sem esconder a informação quando a animação estiver desativada.

### FAQ

Perguntas curtas e relevantes para atendimento. Usar botões acessíveis com `aria-expanded`. Animar abertura de altura e opacidade durante 0,25–0,35 s, com rotação discreta do indicador. Evitar deslocamentos bruscos da página.

FAQ é opcional: não inventar respostas operacionais da empresa.

## 13. CTA final e footer

- Bloco final com frase breve, fotografia ou recorte e botão de WhatsApp.
- Footer com localização, contacto, horário e links necessários.
- Repetir a identidade de componentes do topo.
- Remover chamadas do template como “Get Template”.
- Blog e newsletter não são necessários para o escopo atual, salvo se o briefing os incluir.

Entrada proposta do CTA final: y de 24 px e escala de 0,98 para 1. Um detalhe decorativo pode reagir à entrada, mas o botão deve permanecer estável e imediatamente utilizável.

## 14. Sistema de botões em camadas

O Groomer apresenta botões com uma face arredondada, uma camada clara intermédia e uma base deslocada, produzindo uma sensação tátil.

Recriar essa estrutura com as cores atuais da GuudPet:

- Wrapper reserva espaço para a base.
- Base permanece no lugar.
- Face do botão movimenta-se independentemente.
- Hover: face sobe 1–2 px, durante aproximadamente 0,18 s.
- Pressão: face desce 3–4 px em direção à base, durante 0,1–0,15 s.
- Foco: indicador visível e consistente.

O movimento não deve alterar o fluxo do layout nem deslocar elementos vizinhos.

## 15. Arquitetura de movimento com GSAP

Estas são orientações de implementação para o agente, não uma identificação da biblioteca usada no Groomer.

- Separar timelines por secção e comportamentos por componente.
- Usar ScrollTrigger para entradas e pequenos efeitos ligados ao scroll.
- Entradas comuns devem ocorrer uma vez; scrub apenas em movimentos decorativos que façam sentido.
- Usar condições de viewport e preferência de movimento para ajustar ou desativar efeitos.
- Limpar timelines, triggers e listeners quando os componentes forem desmontados.
- Aguardar assets relevantes antes de medir posições; atualizar medições se necessário.
- Evitar animar a mesma propriedade do mesmo elemento com GSAP, CSS e Framer Motion ao mesmo tempo.
- Se Framer Motion continuar no projeto, atribuir-lhe apenas componentes separados, como menu ou accordion, com ownership claro.
- Preferir transform e opacity a animações que provoquem layout contínuo.

### Vocabulário de movimento proposto

| Categoria | Duração | Easing | Amplitude |
| --- | --- | --- | --- |
| Feedback de botão | 0,1–0,2 s | `power2.out` | 2–4 px |
| Entrada de texto curto | 0,4–0,6 s | `power3.out` | 12–24 px |
| Entrada de secção | 0,55–0,8 s | `power3.out` | 24–36 px |
| Animal recortado | 0,7–0,95 s | `back.out(1.15)` | 40–60 px na entrada |
| Flutuação pontual | 3–5 s por percurso | `sine.inOut` | 4–8 px, com yoyo |
| Ticker / selo | Loop lento | `none` | Movimento contínuo sem saltos |

Não usar todos os efeitos em todas as secções. A personalidade infantil deve aparecer em pequenos gestos bem escolhidos.

## 16. Movimento reduzido

- Remover loops, parallax, rotações contínuas e grandes deslocamentos.
- Apresentar conteúdo no estado final.
- Manter feedback funcional curto e sem elasticidade excessiva.
- Garantir navegação, menu, galeria e FAQ utilizáveis sem a animação.

## 17. Sequência de trabalho para o agente

1. Inspecionar o site atual, os novos prints e o `index.html` em `referencias`; identificar a paleta, assets e problemas de escala. Confirmar Comic Cat e Clash Grotesk e restaurá-las se necessário.
2. Definir uma única direção estrutural a partir deste documento.
3. Corrigir navbar, hero e composição dos serviços primeiro, ampliando a escala visual e planeando as faixas orgânicas que ligam as secções.
4. Validar hierarquia, margens, quebras de linha e recortes no desktop e mobile.
5. Completar sobre, galeria, contactos e CTA final conforme o briefing.
6. Aplicar GSAP depois de a composição estática funcionar.
7. Rever movimento em condições de toque, teclado e preferência reduzida.
8. Entregar preview, resumo das mudanças e pendências reais.

## 18. Critérios de aceitação

- Paleta e logo da GuudPet preservados. Comic Cat confirmada nos títulos principais; Clash Grotesk nos textos menores e suporte.
- Novos prints e `index.html` da pasta `referencias` efetivamente analisados.
- Secções amplas, títulos com presença e fotografias grandes; resultado sem aparência pequena ou compacta.
- Faixas decorativas curvas, onduladas ou orgânicas; sem repetição de banners retangulares retos.
- Movimento com personalidade e sequências coordenadas, além de entradas genéricas.
- Navbar não encobre conteúdo ou âncoras.
- Hero explica o negócio e facilita agendamento.
- Serviços têm composição aberta, hierarquia clara e animais sem cortes acidentais; não são uma grelha obrigatória de caixas.
- Fotografias mantêm qualidade e proporções adequadas.
- Decoração não interfere com texto ou controlos.
- Nenhum overflow horizontal involuntário.
- Animações não ocultam permanentemente conteúdo nem bloqueiam cliques.
- Loops limitados e pausados ou removidos quando necessário.
- WhatsApp e localização utilizam dados confirmados.
- Nenhum número, depoimento, serviço ou contacto copiado do template como informação da GuudPet.
- Resultado verificado no desktop e celular, incluindo estados de interação.

## 19. Instrução central

Preservar a paleta e o logo da GuudPet, usar Comic Cat como fonte principal e Clash Grotesk nos textos menores e suporte, e reconstruir a composição a partir dos novos prints e do `index.html` em `referencias`, tendo o Groomer como apoio estrutural: navbar fixa com presença, hero central expressivo, animais recortados integrados nas transições, serviços bem enquadrados, secções amplas e faixas curvas ou irregulares com ritmo. Desenvolver esses padrões com movimento GSAP coordenado, útil e lúdico, sem transformar a página numa sequência de efeitos independentes.


O objetivo é superar as referências em composição, escala e animação mantendo o nosso padrão de site. Não copiar a identidade das referências nem reduzir a execução a uma coleção de cards pequenos e faixas retas.

## 20. Extração estrutural e de movimento do vídeo

### Âmbito

O vídeo mostra uma versão desktop identificada como GuudPet, com scroll pela página e movimento horizontal da galeria. Não tratar o vídeo como demonstração de que todos os elementos já satisfazem a direção desejada: ele serve de evidência para compreender os padrões e melhorar a execução.

Foi analisada a sequência completa através de frames ao longo de aproximadamente 24,7 s, com amostras mais próximas na entrada do hero, na faixa curva e na galeria. A gravação apresenta perspectiva e pequenas mudanças de enquadramento; por isso, não permite converter os pixels do vídeo em medidas CSS fiáveis.

A paleta visível no vídeo não substitui os tokens do projeto. Confirmar as cores diretamente no código atual. As fontes obrigatórias continuam a ser Comic Cat para títulos e Clash Grotesk para textos menores e suporte; o vídeo não prova qual ficheiro de fonte está efetivamente carregado.

### Mapa da sequência observada

Os intervalos são aproximados e identificam momentos da gravação, não a duração de cada animação.

| Momento | Estrutura visível | Movimento observado | Direção para o agente |
| --- | --- | --- | --- |
| 0–2 s | Navbar fixa, hero central, selo, CTA e animais recortados | Título aparece progressivamente; descrição, CTA e prova social entram em sequência | Coordenar a entrada e aumentar a presença da composição |
| 2–4 s | Cão e gato apoiados no topo de um bloco de informação | Página desloca-se com o scroll; animais sobrepõem a transição | Preservar a ligação entre hero e bloco, sem confundir scroll com parallax |
| 4–6 s | Título de serviços e três cards com animal, suporte e texto | Secção torna-se visível durante scroll; animais apresentam estados de entrada | Ampliar cards e assegurar um estado final consistente |
| 6–9 s | Fotografia grande em moldura dupla, bloco editorial e banda sinuosa | Título revela-se; a banda tem texto distribuído sobre uma curva | Fazer desta secção um momento editorial forte e da faixa um elemento orgânico real |
| 9–11 s | Texto e lista de um lado; animal recortado do outro | Conteúdo entra durante aproximação da secção | Equilibrar as colunas com imagem de grande presença |
| 11–14 s | Quatro cards de avaliações com inclinações diferentes | Cards surgem em estados inclinados e ficam mais alinhados; título revela-se | Coordenar a entrada dos cards, sem prejudicar a leitura final |
| 14–16 s | Processo vertical com três etapas, números em badges e linha de ligação | Etapas inferiores passam de suaves/apagadas para legíveis ao avançar | Revelar a progressão, mantendo toda a informação acessível |
| 16–20 s | Galeria numa grande superfície com fotos inclinadas e molduras | Fotos deslocam-se horizontalmente enquanto o título mantém posição vertical semelhante | Construir faixa arrastável fluida; não atribuir autoplay sem comprovação |
| 20–22 s | FAQ em duas colunas: título e introdução à esquerda, perguntas à direita | Entrada progressiva do título; não há abertura de perguntas demonstrada | Manter hierarquia clara; implementar e testar accordion separadamente |
| 22–24,7 s | CTA final num painel central e footer com colunas | Título do CTA revela-se; footer torna-se visível no scroll | Encerrar com escala e continuidade visual, mantendo ação imediata |

### A. Navbar fixa com presença

No vídeo, a barra permanece no topo durante o percurso. O conteúdo principal alinha-se com uma largura central semelhante à da navegação. A barra tem contorno, extremidades arredondadas, logo à esquerda e CTA na direita.

Requisitos:

- Preservar a posição fixa e a organização clara.
- Aumentar a legibilidade de links e CTA se o projeto atual parecer miniaturizado.
- Não transformar a navbar num elemento visualmente maior que o hero.
- O vídeo não mostra o menu mobile nem uma animação de hover: esses comportamentos precisam de implementação e validação próprias.

### B. Revelação de títulos — personalidade sem fragmentar a leitura

Os frames do início mostram o título a formar-se progressivamente, com caracteres parcialmente visíveis antes do estado final. O mecanismo exato não é identificável pela gravação.

Receita GSAP proposta:

- Reservar desde o início a largura e altura do título final.
- Dividir o título em palavras e, apenas quando adequado, caracteres; preservar uma leitura única para tecnologias de apoio.
- Caracteres entram com opacity de 0 para 1, y de 20–32 px para 0 e escala de 0,9–0,95 para 1.
- Duração por elemento: 0,4–0,55 s; stagger de 0,015–0,03 s.
- Usar `power3.out`; um ligeiro `back.out(1.1)` pode ser aplicado em chamadas curtas.
- Fazer a sequência completa de um título curto terminar aproximadamente em 0,7–1,1 s.
- Descrição entra como bloco; CTA começa antes de terminar toda a decoração.
- Não esconder o botão até ao final de uma sequência longa.

Os parágrafos no início do vídeo também apresentam estados parciais. Para melhorar a leitura, substituí-los por uma entrada do bloco completo em opacity e y, com duração curta. Repetir a mesma animação letra a letra em todos os títulos tornaria a experiência previsível; alternar com entradas por linhas e composições de imagem.

### C. Hero com animais a ultrapassar o limite

O cão e o gato aparecem juntos, no lado inferior direito da composição, sobre o limite superior do bloco seguinte. A sobreposição conecta visualmente as duas secções.

Requisitos:

- Usar imagem recortada com proporção preservada e dimensão suficiente.
- Separar a camada dos animais do fundo e do conteúdo funcional.
- Reservar espaço para que o recorte não cubra texto ou CTA.
- Proposta de entrada: y de 40 px e escala de 0,94 para 1 em 0,8 s.
- Um movimento respirado de 4–6 px pode existir num detalhe, mas não é necessário manter todos os animais em loop.

O vídeo não demonstra que os animais têm parallax ligado ao scroll. Se o agente o adicionar, deve assinalá-lo como melhoria e mantê-lo discreto.

### D. Secção editorial com molduras sobrepostas

Entre aproximadamente 6 e 9 s, uma fotografia grande aparece sobre um painel editorial. Uma segunda moldura, ligeiramente deslocada, cria profundidade. Texto, CTA, banda curva e outra fotografia ocupam o mesmo conjunto, formando uma composição contínua.

Direção:

- Trabalhar com um painel editorial amplo, não com vários cards minúsculos.
- Fotografia principal deve dominar a composição.
- Usar duas molduras com pequeno deslocamento, preservando a paleta atual.
- Animar a fotografia e a moldura de apoio com desfasamento curto, em vez de mover toda a secção da mesma forma.
- Proposta: imagem de y 32 px para 0 em 0,7 s; moldura de apoio de y 20 px para 0, iniciada 0,08 s depois.
- Texto permanece dentro de uma largura legível; a faixa percorre espaço reservado na composição.

### E. Banda sinuosa — requisito visual central

A faixa visível forma uma curva contínua com vale e subida, semelhante a uma onda larga. As palavras acompanham a orientação da curva. **Isto é diferente de rodar uma faixa retangular reta.**

O vídeo permite confirmar a geometria curva e a distribuição de texto sobre o percurso. Não permite determinar com segurança a duração do loop, o easing nem se a forma da curva muda independentemente do scroll.

Construção proposta:

1. Criar um percurso curvo largo, dimensionado para a composição.
2. Construir a banda com espessura coerente ao longo do percurso.
3. Distribuir texto e separadores ao longo desse mesmo percurso, com margem interna suficiente.
4. Repetir a sequência com espaçamento uniforme para permitir movimento contínuo.
5. Animar o percurso do texto, mantendo a forma base da banda estável, salvo se a referência HTML indicar outra intenção.

Receita proposta: loop linear, cerca de 35–60 px/s de deslocamento equivalente no desktop, ajustado ao tamanho do texto e à extensão do caminho. A medida é um ponto de partida, não uma extração do vídeo. Calcular o fecho a partir do comprimento real da sequência, evitando saltos e espaços vazios.

No mobile, adaptar o perfil da curva para que o texto não fique demasiado pequeno. Não usar overflow horizontal acidental para simular amplitude. Com movimento reduzido, mostrar a banda estática com conteúdo suficiente para comunicar a marca.

### F. Cards de avaliações em leque

Os cards apresentam uma composição em leque: inclinações diferentes, ligeira sobreposição e alinhamento informal. Entre os momentos observados, alguns passam de mais inclinados para uma disposição mais estável.

Receita GSAP proposta:

- Entrada com y de 32–48 px, opacity de 0 para 1 e rotation inicial alternada entre −6 e 6 graus.
- Final com pequenas inclinações de −3 a 3 graus, ou com cards praticamente alinhados se o texto exigir.
- Stagger de 0,08–0,12 s e duração de 0,6–0,85 s.
- Hover opcional: card aproxima-se de rotation 0 e scale 1,02; volta ao estado final ao sair.
- Reservar espaço para sobreposição sem cobrir o corpo do depoimento.
- No mobile, cards amplos e sequência horizontal ou vertical legível; reduzir o leque.

Só utilizar avaliações verificadas. A gravação não valida a autenticidade dos textos ou classificações.

### G. Etapas que ganham destaque no scroll

O processo tem números em badges, ligação vertical e conteúdo de etapas. As etapas inferiores aparecem menos intensas e passam a legíveis à medida que o scroll avança.

Proposta:

- Revelar cada etapa com opacity e y curto, uma vez por aproximação.
- Animar o preenchimento da linha de ligação de forma sincronizada com a progressão.
- Após a entrada, manter a etapa legível; evitar que o utilizador leia texto permanentemente apagado.
- Não acrescentar longos trechos de scroll vazio para ativar cada item.
- A progressão decorativa pode usar scrub; o texto funcional não deve depender da posição exata do scroll para existir.

### H. Galeria horizontal com cartões soltos

Entre aproximadamente 17 e 19 s, o título mantém posição semelhante enquanto as imagens se deslocam lateralmente, inclusive com mudança de direção. Há um indicador “Arraste” e fotografias com pequenas rotações, molduras claras e tamanhos ligeiramente variados.

Isso comprova deslocamento horizontal da faixa, mas não permite afirmar sozinho qual gesto o provoca ou se existe autoplay.

Direção de implementação:

- Drag por rato e toque, com comportamento direto e previsível.
- Preservar scroll vertical da página no celular.
- Cards grandes, com pequenas rotações estáticas ou assentamento suave durante o movimento.
- Usar movimento com desaceleração ou inércia apenas se houver suporte disponível; não presumir plugins instalados.
- Indicador de drag pode acompanhar o cursor no desktop; retirar ou simplificar no touch.
- Adicionar alternativas por teclado ou controlos de navegação.
- Não chamar esta galeria de faixa curva apenas porque os cards estão inclinados: a banda sinuosa editorial é outro componente.

Proposta de melhoria: tornar a transição exterior da galeria orgânica conforme os novos prints, mantendo as fotografias estáveis e fáceis de explorar. Usar a paleta do projeto, sem extrair cores da gravação.

### I. FAQ e CTA final

O FAQ tem introdução numa coluna e perguntas na outra. O vídeo mostra as perguntas fechadas; abertura, fecho e gestão de foco não foram demonstrados.

O CTA final é um painel central dentro de uma secção maior, seguido de footer em colunas. O título entra progressivamente.

Melhorias propostas:

- Dar ao título e ao CTA uma escala maior e padding consistente com o restante site.
- Unificar o painel final e o footer através de uma transição orgânica apropriada à marca.
- Usar uma entrada coordenada, sem impedir acesso imediato ao WhatsApp.
- Implementar e testar FAQ em separado, com altura animada curta e estados acessíveis.

### J. Correções de escala e acabamento a verificar no projeto

A gravação sugere momentos de grande vazio em torno de conteúdo relativamente pequeno, sobretudo hero e alguns cabeçalhos. Isso deve ser conferido no viewport real: a perspectiva da gravação impede medidas exatas.

O agente deve:

- Aumentar títulos, imagens e cards em conjunto, em vez de ampliar apenas margens.
- Reduzir vazios sem função entre secções, preservando o ritmo amplo solicitado.
- Conferir se os três animais dos serviços terminam com posição e proporção consistentes; o animal central aparece muito baixo em alguns frames, o que pode ser um estado transitório.
- Garantir que o hero, as faixas e o CTA final têm presença suficiente no desktop e no mobile.
- Preservar Comic Cat e Clash Grotesk através dos ficheiros reais, não por semelhança visual.

### Critério final para o agente

Usar o vídeo como evidência de composição e comportamento, em conjunto com os novos prints e o `index.html` da pasta `referencias`. Construir uma versão com maior escala, melhor hierarquia e animações mais coordenadas, preservando o padrão da GuudPet. Não reproduzir defeitos ou estados transitórios da gravação. Confirmar o resultado no navegador, comparando o estado final de cada secção e a experiência completa de scroll.
