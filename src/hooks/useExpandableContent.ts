import { useCallback, useLayoutEffect, useState, type RefObject } from 'react';
import { pxToRem } from '../utils/pxToRem';

/** Контент выше этого значения (px) считается «длинным» и сворачивается */
const EXPANDABLE_THRESHOLD_PX = 270;

/** Высота (px), к которой анимируется сворачивание */
const COLLAPSED_ANIMATION_HEIGHT_PX = 120;

const ANIMATION_OPTIONS: KeyframeAnimationOptions = {
    duration: 500,
    easing: 'ease-in-out',
};

const toRemString = (pixels: number) => `${pxToRem(pixels)}rem`;

/**
 * Логика «Read More / Roll Up» для длинного блока.
 * Блок становится раскрываемым, только если его содержимое выше порога.
 */
export function useExpandableContent<T extends HTMLElement>(ref: RefObject<T | null>) {
    const [isExpandable, setIsExpandable] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        const measure = () => {
            if (element.scrollHeight > EXPANDABLE_THRESHOLD_PX) {
                setIsExpandable(true);
            }
        };

        measure();

        // После загрузки шрифтов высота текста может измениться — измеряем повторно
        let isCancelled = false;
        document.fonts?.ready.then(() => {
            if (!isCancelled) measure();
        });

        return () => {
            isCancelled = true;
        };
    }, [ref]);

    const expand = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        const { offsetHeight, scrollHeight } = element;
        setIsExpanded(true);

        element.animate(
            [{ maxHeight: toRemString(offsetHeight) }, { maxHeight: toRemString(scrollHeight) }],
            ANIMATION_OPTIONS,
        );
    }, [ref]);

    const collapse = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        const { scrollHeight } = element;
        setIsExpanded(false);

        element.animate(
            [
                { maxHeight: toRemString(scrollHeight) },
                { maxHeight: toRemString(COLLAPSED_ANIMATION_HEIGHT_PX) },
            ],
            ANIMATION_OPTIONS,
        );
    }, [ref]);

    return { isExpandable, isExpanded, expand, collapse };
}
