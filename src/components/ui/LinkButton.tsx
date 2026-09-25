import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'accent' | 'with-border' | 'gray';
    /** Тонкое начертание шрифта (button--thin) */
    thin?: boolean;
    /** Кнопка содержит иконку-стрелку, которая меняется при hover (только для accent) */
    withIcon?: boolean;
}

/** Ссылка, оформленная как кнопка (.button). */
export function LinkButton({
    variant,
    thin,
    withIcon,
    href = '#',
    className,
    children,
    ...rest
}: LinkButtonProps) {
    return (
        <a
            href={href}
            className={cn(
                'button',
                variant && `button--${variant}`,
                variant === 'accent' && withIcon && 'button--accent-with-icon',
                thin && 'button--thin',
                className,
            )}
            {...rest}
        >
            {children}
        </a>
    );
}
