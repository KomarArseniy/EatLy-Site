import type { NavLink } from '../types';

/**
 * Якоря ведут на секции этой же страницы (id заданы в компонентах секций).
 * Отдельных страниц Blog / Pricing / About Us пока нет, поэтому они привязаны
 * к ближайшим по смыслу секциям.
 */
export const SECTION_IDS = {
    home: 'home',
    about: 'about',
    restaurants: 'restaurants',
    menu: 'menu',
    reviews: 'reviews',
    pricing: 'pricing',
    contact: 'contact',
} as const;

export const headerLinks: NavLink[] = [
    { label: 'Menu', href: `#${SECTION_IDS.menu}` },
    { label: 'Blog', href: `#${SECTION_IDS.reviews}` },
    { label: 'Pricing', href: `#${SECTION_IDS.pricing}` },
    { label: 'Contact', href: `#${SECTION_IDS.contact}` },
];

export const footerLinks: NavLink[] = [
    { label: 'Menu', href: `#${SECTION_IDS.menu}` },
    { label: 'Pricing', href: `#${SECTION_IDS.pricing}` },
    { label: 'About Us', href: `#${SECTION_IDS.about}` },
    { label: 'Contact', href: `#${SECTION_IDS.contact}` },
];
