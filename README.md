# +Fortes — Brand Identity System

> Brandbook oficial do **+Fortes**. Sistema de identidade de marca, design system e showcase editorial.

**Live:** [brand.maisfortes.com.br](https://brand.maisfortes.com.br)

---

## Sobre o Projeto

O +Fortes e uma plataforma gratuita de acompanhamento com rede de apoio para mudanca comportamental. Este repositorio contem o **brandbook digital** — um portal navegavel que documenta a identidade visual, estrategia de marca, design system e componentes.

**Nao e um PDF.** E um site-brandbook modular com paginas de catalogo, paginas estrategicas e showcases.

## Stack Tecnica

| Tecnologia | Versao | Proposito |
|------------|--------|-----------|
| [Astro](https://astro.build) | 5.x | Framework SSG |
| [React](https://react.dev) | 19.x | Componentes interativos |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Estilizacao utility-first |
| [Radix UI](https://www.radix-ui.com) | Latest | Primitivos headless (tabs, accordion) |
| [Lucide](https://lucide.dev) | Latest | Icones |
| TypeScript | 5.x | Tipagem |

## Estrutura do Projeto

```
src/
├── layouts/
│   ├── BaseLayout.astro           # Layout raiz (head, fonts, SEO)
│   └── BrandbookLayout.astro      # Layout de pagina (sidebar + header + footer)
├── components/
│   ├── nav/                       # Navegacao (sidebar, grupos, items)
│   ├── layout/                    # PageHeader, Section, Footer
│   └── brand/                     # ColorSwatch, TokenTable, ArchetypeCard
├── pages/
│   ├── index.astro                # Home com animacoes
│   ├── brandbook/                 # Brand Identity (7 paginas)
│   ├── design-system/             # Design System (10 paginas)
│   └── showcase/                  # Showcase (2 paginas)
├── lib/
│   ├── brand.ts                   # Dados centralizados da marca
│   ├── navigation.ts              # Sitemap com todas as paginas
│   └── utils.ts                   # cn() utility
└── styles/
    └── global.css                 # Tailwind + custom layers
```

## Sitemap

### Brand Identity
- 0.0 Guidelines — Visao geral, tipografia, paleta, manifesto, arquetipos
- 1.0 Movimento — Estrategia, BrandScript SB7, voz, vocabulario, contrato
- 2.0 Foundations — Design tokens, spacing, radius, shadows, CSS variables
- 3.0 Logo — Variantes, clear space, regras de uso
- 4.0 Icons — Sistema de icones
- 5.0 Moodboard — Referencias visuais
- 6.0 Tom de Voz — Guia de copywriting

### Design System
- 0.0 Components — Catalogo
- 1.0 Buttons — Variantes, tamanhos, estados
- 2.0 Cards — Check-in, streak, goal, supporter
- 3.0 Forms — Inputs, score selector
- 4.0 Feedback — Alerts, toasts, modals
- 5.0 States — Spinners, progress, skeletons
- 6.0 Charts — Graficos de progresso
- 7.0 Sections — Blocos de marketing
- 8.0 Patterns — Backgrounds, texturas
- 9.0 Templates — Page shell, layouts

### Showcase
- 0.0 Editorial — Brandbook narrativo condensado
- 1.0 App Preview — Showcase interativo

## Desenvolvimento

### Pre-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalacao

```bash
git clone https://github.com/wilderamorim/brand.maisfortes.com.br.git
cd brand.maisfortes.com.br
npm install
```

### Comandos

```bash
npm run dev       # Servidor de desenvolvimento (http://localhost:4321)
npm run build     # Build para producao (./dist)
npm run preview   # Preview do build
```

### Adicionando uma pagina

1. Adicione a entrada em `src/lib/navigation.ts`
2. Crie o arquivo `.astro` na pasta correspondente
3. Use `BrandbookLayout` como layout e `Section` para secoes numeradas
4. Dados da marca estao centralizados em `src/lib/brand.ts`

## Identidade Visual

| Elemento | Valor |
|----------|-------|
| Cor primaria | `#2D6A4F` (Forest Green) |
| Cor secundaria | `#F4845F` (Warm Coral) |
| Cor de celebracao | `#FFB703` (Golden Amber) |
| Fonte display | Outfit |
| Fonte body | Plus Jakarta Sans |
| Fonte mono | JetBrains Mono |
| Arquetipo | Cuidador + Heroi |

## Contribuicao

Contribuicoes sao bem-vindas! Este e um projeto open-source e de impacto social.

### Como contribuir

1. Faca um fork do repositorio
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Faca commit das suas mudancas (`git commit -m 'feat: descricao da feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

### Convencoes

- **Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`)
- **Branches:** `feature/`, `fix/`, `docs/`
- **Componentes Astro:** PascalCase, arquivos `.astro`
- **Dados da marca:** Sempre altere em `src/lib/brand.ts` (source of truth)
- **CSS:** Tailwind utilities primeiro, custom CSS em `global.css` se necessario

### Reportando issues

Use as [GitHub Issues](https://github.com/wilderamorim/brand.maisfortes.com.br/issues) para:
- Bugs visuais ou de navegacao
- Sugestoes de novas paginas/secoes
- Melhorias na documentacao da marca
- Problemas de acessibilidade

## Projetos Relacionados

| Projeto | Descricao | Repositorio |
|---------|-----------|-------------|
| **maisfortes.com.br** | Plataforma principal (app) | [wilderamorim/maisfortes.com.br](https://github.com/wilderamorim/maisfortes.com.br) |
| **brand.maisfortes.com.br** | Brandbook (este repo) | [wilderamorim/brand.maisfortes.com.br](https://github.com/wilderamorim/brand.maisfortes.com.br) |

## Licenca

Este projeto esta licenciado sob a [MIT License](LICENSE).

---

**+Fortes** — Juntos, somos mais fortes.
