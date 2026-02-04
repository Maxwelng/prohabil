export const ROUTES = {
  HOME: '/',
  ABOUT: '/#sobre',
  SERVICES: '/#servicos',
  CONTACT: '/#contato',
  AREAS: '/#areas',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];

export const NAV_LINKS = [
  { href: ROUTES.HOME, label: 'Início' },
  { href: ROUTES.ABOUT, label: 'Sobre' },
  { href: ROUTES.SERVICES, label: 'Serviços' },
  { href: ROUTES.CONTACT, label: 'Contato' },
  { href: ROUTES.AREAS, label: 'Áreas de Atuação' },
] as const;