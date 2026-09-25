type ClassValue = string | false | null | undefined;

/** Склеивает CSS-классы, отбрасывая «пустые» значения. */
export const cn = (...classes: ClassValue[]): string => classes.filter(Boolean).join(' ');
