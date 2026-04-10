# +Fortes Brandbook — brand.maisfortes.com.br

Brandbook digital do +Fortes. Sistema de identidade de marca, design system e showcase editorial.

## Stack

- **Astro 5** (SSG) + **React 19** (islands)
- **Tailwind CSS 3.4** com `darkMode: 'class'`
- **Radix UI** (tabs, accordion)
- **Lucide React** (ícones)

## Estrutura

```
src/
├── layouts/
│   ├── BaseLayout.astro       # Head, fonts, SEO, ViewTransitions
│   └── BrandbookLayout.astro  # Sidebar + PageHeader + Footer
├── components/
│   ├── nav/                   # StickyNav, NavGroup, NavItem, ThemeToggle
│   ├── layout/                # PageHeader, Section, Footer
│   └── brand/                 # ColorSwatch, TokenTable, ArchetypeCard
├── pages/
│   ├── brandbook/             # 7 páginas (Guidelines→Tom de Voz)
│   ├── design-system/         # 10 páginas (Components→Templates)
│   └── showcase/              # 2 páginas (Editorial, App Preview)
├── lib/
│   ├── brand.ts               # Source of truth (dados da marca)
│   ├── navigation.ts          # Sitemap (19 páginas)
│   └── utils.ts               # cn()
└── styles/global.css           # CSS vars temáticas (--theme-*)
```

## Convenções

- **Tema**: dark default, light via classes `html.dark` / `html.light`
- **CSS vars**: `--theme-bg`, `--theme-text`, etc. — mudam com o tema
- **Classes temáticas**: `.t-heading`, `.t-muted`, `.t-body`, `.surface-card`, `.surface-elevated`
- **Dados da marca**: sempre alterar em `src/lib/brand.ts`
- **Seções numeradas**: usar componente `<Section number="01" title="...">`
- **Páginas**: usar `BrandbookLayout` com `pageNumber`, `pageTitle`

## Comandos

```bash
npm run dev       # Dev server (:4321)
npm run build     # Build estático (./dist)
npm run preview   # Preview do build
```

## Brand

- Cor primária: `#2D6A4F` (Forest Green)
- Secundária: `#F4845F` (Warm Coral)
- Celebração: `#FFB703` (Golden Amber)
- Fontes: Outfit (display), Plus Jakarta Sans (body), JetBrains Mono (mono)
- Arquétipo: Cuidador + Herói
- Tom: firme mas gentil, amigo próximo
