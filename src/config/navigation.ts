/**
 * Primary site navigation — shared by Navbar and Footer.
 */
export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV: NavLink[] = [
  { label: 'Início', href: '/index' },
  { label: 'Guias', href: '/guias' },
  { label: 'Lore', href: '/lore' },
  { label: 'Taverna', href: '/taverna' },
  { label: 'Sobre', href: '/sobre' },
];

export const COMMUNITY_NAV: NavLink[] = [
  { label: 'Substack', href: '/comunidade' },
  { label: 'Instagram', href: '/comunidade' },
  { label: 'Discord', href: '/comunidade' },
];
