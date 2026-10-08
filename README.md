# GuudPet

Site de petshop com Next.js App Router, React, TypeScript, GSAP e Framer Motion.
Tipografia local: Comic Cat nos títulos e Clash Grotesk nos textos de suporte.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Abre http://localhost:3000.

```sh
npm run build
npm run start
```

## Conteúdo

Os serviços, avaliações e contactos estão em `src/config.ts`. Telefone, WhatsApp e endereço aguardam confirmação. Enquanto o número não estiver preenchido, os botões apresentam um aviso e permitem copiar a mensagem; não enviam uma reserva. Os ícones sociais ainda não têm links.

## Estrutura

- `src/main.tsx`: secções e interações.
- `src/styles.css`: identidade, responsividade e animações.
- `src/app/`: rotas, metadata e página 404.
- `public/`: imagens, fontes e cursores usados, incluindo os SVG originais dos cursores.
- Documentos de briefing e direção visual: mantidos na raiz para futuras alterações.

As imagens estão otimizadas em WebP. Os materiais de trabalho e versões anteriores foram arquivados fora do projeto antes da publicação.

## Publicação

A Vercel utiliza `npm run build` e deteta o framework Next.js. Não são necessárias variáveis de ambiente. A ligação ao GitHub permite publicar alterações a partir de `main`.
