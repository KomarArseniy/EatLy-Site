import type { ReactNode } from 'react';

export type IconName = 'white-arrow' | 'bottom-arrow' | 'top-arrow' | 'gray-arrow';

interface IconProps {
    name: IconName;
    children: ReactNode;
}

/** Текст с иконкой-стрелкой справа (иконка рисуется через ::after в SCSS). */
export function Icon({ name, children }: IconProps) {
    return <span className={`icon icon--${name}`}>{children}</span>;
}
