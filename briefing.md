**Cliente:** GuudPet.

**Objetivo:** criar um site que apresente a empresa, transmita confiança e facilite pedidos de agendamento pelo WhatsApp.

**Público:** tutores de cães e gatos da região, com prioridade para quem acessa pelo celular.

**Estrutura da página:**
- Apresentação inicial com fotografia, mensagem principal e botão “Agendar pelo WhatsApp”.
- Breve apresentação da empresa.
- Serviços confirmados, com descrições claras.
- Galeria com fotos reais do espaço, dos animais e do atendimento.
- Localização, horário de funcionamento e contato.
- Footer com informações da empresa e redes sociais disponíveis.

**Marca e materiais:** utilizar o logo e as fotografias da pasta `materiais`. Seguir o arquivo `guudpet-design-patterns.md` como referência visual. Identificar materiais ausentes antes de finalizar o conteúdo.

**Visual:** acolhedor, divertido e organizado. Base creme `#FFF6E8`, rosa principal `#FF71A7`, rosa claro `#FFBBD5` e castanho escuro `#3D2B1F`. Usar **Comic Cat** nos títulos expressivos e **Inter Tight** nos textos, navegação e informações funcionais. Aplicar separadores ondulados e recortes de animais de forma pontual, preservando a legibilidade.

**Referências visuais:** aceder à pasta `referencias` e analisar as imagens antes de definir o layout. Usá-las para compreender a direção visual pretendida: composição, cores, tipografia, fotografias, formas orgânicas e personalidade lúdica. Interpretar essas referências em conjunto com o briefing e o arquivo `guudpet-design-patterns.md`, adaptando a linguagem à GuudPet.

**Funcionalidade:** botões de agendamento abrem o WhatsApp com a mensagem: “Olá, GuudPet! Gostaria de saber mais sobre os serviços e solicitar um agendamento.” Incluir acesso ao WhatsApp facilmente disponível no celular e link para abrir a localização no mapa.

**Animações:** usar GSAP e Framer Motion para criar movimentos fluidos, lúdicos e com um toque infantil, alinhados à personalidade acolhedora da GuudPet. Explorar pequenos saltos, movimentos elásticos suaves, animais que espreitam pelas bordas, imagens que flutuam discretamente e botões que reagem ao toque. Reservar GSAP para sequências e efeitos de scroll e Framer Motion para entradas e microinterações. Manter a leitura clara, o desempenho no celular e respeitar `prefers-reduced-motion`.

**Tecnologia:** Next.js ou Vite, com layout responsivo e imagens otimizadas. O agendamento será tratado pelo WhatsApp; esta entrega não inclui sistema interno de reservas.

**Dados necessários:** [telefone com código do país], [endereço completo], [horário de funcionamento], [serviços confirmados] e [redes sociais].

**Pendências:** confirmar os dados acima, o texto de apresentação, as descrições dos serviços e a disponibilidade do logo, das fontes e das fotografias na pasta `materiais`.

**Entrega:** código-fonte, instruções de instalação e execução e preview para revisão. Conferir navegação, legibilidade, imagens e links de WhatsApp e localização no celular e no desktop.