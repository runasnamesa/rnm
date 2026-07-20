# Runas na Mesa

Site estático em **Astro** — uma taverna digital para jogadores e mestres de RPG.

- **Welcome** (primeira visita): `/`
- **Taverna** (home do conteúdo): `/index`
- **Posts**: `/posts/<slug>` a partir de `src/content/posts/`

Documentação do projeto em [`docs/`](docs/). Como criar posts: [`docs/POSTS.md`](docs/POSTS.md).

## Estrutura

```text
src/
├── components/     # UI (Navbar, cards, welcome…)
├── config/         # site, navegação, content rules, welcome
├── content/posts/  # Markdown da coleção de posts
├── layouts/        # BaseLayout
├── lib/            # helpers (posts, welcome)
├── pages/          # rotas Astro
├── styles/         # design system (global.css)
└── utils/          # utilitários puros (path, etc.)
```

## Comandos

| Comando            | Ação                                      |
| :----------------- | :---------------------------------------- |
| `npm install`      | Instala dependências                      |
| `npm run dev`      | Dev server em `localhost:4321`            |
| `npm run build`    | Build estático em `./dist/`               |
| `npm run preview`  | Preview do build                          |
| `npm run check`    | Typecheck (`astro check`)                 |

## Stack

Ver [docs/01-STACK.md](docs/01-STACK.md). Em resumo: Astro, GitHub, Vercel, Cloudflare.
