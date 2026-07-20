# Criando posts

Crie um arquivo `.md` em `src/content/posts/`. O nome do arquivo vira a URL: por exemplo, `minha-aventura.md` gera `/posts/minha-aventura`.

Use este frontmatter:

```md
---
title: Título do texto
description: Resumo curto para cards e SEO.
pubDate: 2026-07-15
category: Guias
image: https://images.unsplash.com/...
readTime: 5 min de leitura
draft: false
---

Conteúdo do post em Markdown.
```

Categorias aceitas (definidas em `src/config/content.ts`): `RPG`, `Narrativa`, `Guias`, `Lore` e `Reflexões`.

Defina `draft: true` para manter o texto fora do site até a publicação.

Campos opcionais de importação (Substack): `origin`, `link`, `slug`.

Helpers de listagem e slugs de categoria ficam em `src/lib/posts.ts` — use-os nas páginas em vez de reimplementar filtros.
