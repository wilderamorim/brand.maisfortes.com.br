export interface NavPage {
  number: string;
  title: string;
  slug: string;
}

export interface NavGroup {
  group: string;
  slug: string;
  pages: NavPage[];
}

export const navigation: NavGroup[] = [
  {
    group: 'Brand Identity',
    slug: 'brandbook',
    pages: [
      { number: '0.0', title: 'Guidelines', slug: '' },
      { number: '1.0', title: 'Movimento', slug: 'movimento' },
      { number: '2.0', title: 'Foundations', slug: 'foundations' },
      { number: '3.0', title: 'Logo', slug: 'logo' },
      { number: '4.0', title: 'Icons', slug: 'icons' },
      { number: '5.0', title: 'Moodboard', slug: 'moodboard' },
      { number: '6.0', title: 'Tom de Voz', slug: 'tom-de-voz' },
    ],
  },
  {
    group: 'Design System',
    slug: 'design-system',
    pages: [
      { number: '0.0', title: 'Components', slug: '' },
      { number: '1.0', title: 'Buttons', slug: 'buttons' },
      { number: '2.0', title: 'Cards', slug: 'cards' },
      { number: '3.0', title: 'Forms', slug: 'forms' },
      { number: '4.0', title: 'Feedback', slug: 'feedback' },
      { number: '5.0', title: 'States', slug: 'states' },
      { number: '6.0', title: 'Charts', slug: 'charts' },
      { number: '7.0', title: 'Sections', slug: 'sections' },
      { number: '8.0', title: 'Patterns', slug: 'patterns' },
      { number: '9.0', title: 'Templates', slug: 'templates' },
    ],
  },
  {
    group: 'Showcase',
    slug: 'showcase',
    pages: [
      { number: '0.0', title: 'Editorial', slug: '' },
      { number: '1.0', title: 'App Preview', slug: 'app-preview' },
    ],
  },
];

export function getPageUrl(groupSlug: string, pageSlug: string): string {
  if (pageSlug === '') return `/${groupSlug}/`;
  return `/${groupSlug}/${pageSlug}/`;
}

export function getAllPages() {
  return navigation.flatMap((group) =>
    group.pages.map((page) => ({
      ...page,
      group: group.group,
      groupSlug: group.slug,
      url: getPageUrl(group.slug, page.slug),
    }))
  );
}
