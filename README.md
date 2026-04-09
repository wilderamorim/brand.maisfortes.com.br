# +Fortes — Brand Identity System

> Brandbook oficial do **+Fortes**. Sistema de identidade de marca, design system e showcase editorial.

**Live:** [brand.maisfortes.com.br](https://brand.maisfortes.com.br)

---

## Sobre o Projeto

O +Fortes é uma plataforma gratuita de acompanhamento com rede de apoio para mudança comportamental. Este repositório contém o **brandbook digital** — um portal navegável que documenta a identidade visual, estratégia de marca, design system e componentes.

**Não é um PDF.** É um site-brandbook modular com páginas de catálogo, páginas estratégicas e showcases.

## Stack Técnica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| [Astro](https://astro.build) | 5.x | Framework SSG |
| [React](https://react.dev) | 19.x | Componentes interativos |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Estilização utility-first |
| [Radix UI](https://www.radix-ui.com) | Latest | Primitivos headless (tabs, accordion) |
| [Lucide](https://lucide.dev) | Latest | Ícones |
| TypeScript | 5.x | Tipagem |

## Estrutura do Projeto

```
src/
├── layouts/
│   ├── BaseLayout.astro           # Layout raiz (head, fonts, SEO)
│   └── BrandbookLayout.astro      # Layout de página (sidebar + header + footer)
├── components/
│   ├── nav/                       # Navegação (sidebar, grupos, items)
│   ├── layout/                    # PageHeader, Section, Footer
│   └── brand/                     # ColorSwatch, TokenTable, ArchetypeCard
├── pages/
│   ├── index.astro                # Home com animações
│   ├── brandbook/                 # Brand Identity (7 páginas)
│   ├── design-system/             # Design System (10 páginas)
│   └── showcase/                  # Showcase (2 páginas)
├── lib/
│   ├── brand.ts                   # Dados centralizados da marca
│   ├── navigation.ts              # Sitemap com todas as páginas
│   └── utils.ts                   # cn() utility
└── styles/
    └── global.css                 # Tailwind + custom layers
```

## Sitemap

### Brand Identity
- 0.0 Guidelines — Visão geral, tipografia, paleta, manifesto, arquétipos
- 1.0 Movimento — Estratégia, BrandScript SB7, voz, vocabulário, contrato
- 2.0 Foundations — Design tokens, spacing, radius, shadows, CSS variables
- 3.0 Logo — Variantes, clear space, regras de uso
- 4.0 Icons — Sistema de ícones
- 5.0 Moodboard — Referências visuais
- 6.0 Tom de Voz — Guia de copywriting

### Design System
- 0.0 Components — Catálogo
- 1.0 Buttons — Variantes, tamanhos, estados
- 2.0 Cards — Check-in, streak, goal, supporter
- 3.0 Forms — Inputs, score selector
- 4.0 Feedback — Alerts, toasts, modals
- 5.0 States — Spinners, progress, skeletons
- 6.0 Charts — Gráficos de progresso
- 7.0 Sections — Blocos de marketing
- 8.0 Patterns — Backgrounds, texturas
- 9.0 Templates — Page shell, layouts

### Showcase
- 0.0 Editorial — Brandbook narrativo condensado
- 1.0 App Preview — Showcase interativo

## Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
git clone https://github.com/wilderamorim/brand.maisfortes.com.br.git
cd brand.maisfortes.com.br
npm install
```

### Comandos

```bash
npm run dev       # Servidor de desenvolvimento (http://localhost:4321)
npm run build     # Build para produção (./dist)
npm run preview   # Preview do build
```

### Adicionando uma página

1. Adicione a entrada em `src/lib/navigation.ts`
2. Crie o arquivo `.astro` na pasta correspondente
3. Use `BrandbookLayout` como layout e `Section` para seções numeradas
4. Dados da marca estão centralizados em `src/lib/brand.ts`

## Identidade Visual

| Elemento | Valor |
|----------|-------|
| Cor primária | `#2D6A4F` (Forest Green) |
| Cor secundária | `#F4845F` (Warm Coral) |
| Cor de celebração | `#FFB703` (Golden Amber) |
| Fonte display | Outfit |
| Fonte body | Plus Jakarta Sans |
| Fonte mono | JetBrains Mono |
| Arquétipo | Cuidador + Herói |

## Contribuição

Contribuições são bem-vindas! Este é um projeto open-source e de impacto social.

### Como contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Faça commit das suas mudanças (`git commit -m 'feat: descrição da feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

### Convenções

- **Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`)
- **Branches:** `feature/`, `fix/`, `docs/`
- **Componentes Astro:** PascalCase, arquivos `.astro`
- **Dados da marca:** Sempre altere em `src/lib/brand.ts` (source of truth)
- **CSS:** Tailwind utilities primeiro, custom CSS em `global.css` se necessário

### Reportando issues

Use as [GitHub Issues](https://github.com/wilderamorim/brand.maisfortes.com.br/issues) para:
- Bugs visuais ou de navegação
- Sugestões de novas páginas/seções
- Melhorias na documentação da marca
- Problemas de acessibilidade

## Projetos Relacionados

| Projeto | Descrição | Repositório |
|---------|-----------|-------------|
| **maisfortes.com.br** | Plataforma principal (app) | [wilderamorim/maisfortes.com.br](https://github.com/wilderamorim/maisfortes.com.br) |
| **brand.maisfortes.com.br** | Brandbook (este repo) | [wilderamorim/brand.maisfortes.com.br](https://github.com/wilderamorim/brand.maisfortes.com.br) |

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**+Fortes** — Juntos, somos mais fortes.
