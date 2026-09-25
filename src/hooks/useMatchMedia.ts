import { useCallback, useSyncExternalStore } from 'react';

/** Подписывается на media query и возвращает, совпадает ли она сейчас. */
export function useMatchMedia(query: string): boolean {
    const subscribe = useCallback(
        (onChange: () => void) => {
            const mediaQueryList = window.matchMedia(query);
            mediaQueryList.addEventListener('change', onChange);

            return () => mediaQueryList.removeEventListener('change', onChange);
        },
        [query],
    );

    const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

    return useSyncExternalStore(subscribe, getSnapshot);
}
