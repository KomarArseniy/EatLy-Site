import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { MOBILE_MEDIA_QUERY } from '../../constants/breakpoints';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import type { SelectOption } from '../../types';
import { cn } from '../../utils/cn';

interface SelectProps {
    /** Подпись для скринридеров (визуально скрыта) */
    label: string;
    options: SelectOption[];
    /** Индекс изначально выбранной опции */
    defaultIndex?: number;
    onChange?: (value: string) => void;
}

type DropdownSide = 'left' | 'right';

/**
 * Кастомный select: на десктопе — стилизованный combobox с клавиатурной навигацией,
 * на мобильных — нативный <select>.
 */
export function Select({ label, options, defaultIndex = 0, onChange }: SelectProps) {
    const uid = useId();
    const controlId = `${uid}-control`;
    const labelId = `${uid}-label`;
    const dropdownId = `${uid}-dropdown`;
    const getOptionId = (index: number) => `${uid}-option-${index + 1}`;

    const [isExpanded, setIsExpanded] = useState(false);
    // «Текущая» опция — подсвеченная при навигации, «выбранная» — подтверждённая
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
    const [dropdownSide, setDropdownSide] = useState<DropdownSide>('left');

    const isMobile = useMatchMedia(MOBILE_MEDIA_QUERY);

    const buttonRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Выпадающий список открывается в сторону центра экрана, чтобы не вылезать за край
    useLayoutEffect(() => {
        const updateDropdownSide = () => {
            const button = buttonRef.current;
            if (!button) return;

            const { width, x } = button.getBoundingClientRect();
            const buttonCenterX = x + width / 2;
            const halfViewportWidth = document.documentElement.clientWidth / 2;

            setDropdownSide(buttonCenterX < halfViewportWidth ? 'left' : 'right');
        };

        updateDropdownSide();
        window.addEventListener('resize', updateDropdownSide);

        return () => window.removeEventListener('resize', updateDropdownSide);
    }, [isExpanded]);

    // Клик вне кнопки и списка закрывает выпадающий список
    useEffect(() => {
        if (!isExpanded) return;

        const onDocumentClick = (event: MouseEvent) => {
            const target = event.target as Node;
            const isInsideButton = buttonRef.current?.contains(target);
            const isInsideDropdown = dropdownRef.current?.contains(target);

            if (!isInsideButton && !isInsideDropdown) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('click', onDocumentClick);

        return () => document.removeEventListener('click', onDocumentClick);
    }, [isExpanded]);

    const selectOption = (index: number) => {
        setSelectedIndex(index);
        setCurrentIndex(index);
        onChange?.(options[index].value);
    };

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const isButtonFocused = document.activeElement === buttonRef.current;
        const isNeedToExpand = !isExpanded && isButtonFocused;

        switch (event.code) {
            case 'ArrowUp':
                event.preventDefault();
                if (isNeedToExpand) {
                    setIsExpanded(true);
                } else {
                    setCurrentIndex((index) => Math.max(index - 1, 0));
                }
                break;

            case 'ArrowDown':
                event.preventDefault();
                if (isNeedToExpand) {
                    setIsExpanded(true);
                } else {
                    setCurrentIndex((index) => Math.min(index + 1, options.length - 1));
                }
                break;

            case 'Space':
            case 'Enter':
                event.preventDefault();
                if (isNeedToExpand) {
                    setIsExpanded(true);
                } else {
                    selectOption(currentIndex);
                    setIsExpanded(false);
                }
                break;
        }
    };

    const selectedOption = options[selectedIndex];

    return (
        <div className="select">
            <label className="select__label visually-hidden" id={labelId} htmlFor={controlId}>
                {label}
            </label>

            {/* Нативный select: используется на мобильных устройствах */}
            <select
                className="select__original-control field__control"
                id={controlId}
                tabIndex={isMobile ? 0 : -1}
                value={selectedOption.value}
                onChange={(event) => selectOption(event.target.selectedIndex)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <div className="select__body" onKeyDown={onKeyDown}>
                <div
                    ref={buttonRef}
                    className={cn('select__button field__control', isExpanded && 'is-expanded')}
                    tabIndex={isMobile ? -1 : 0}
                    role="combobox"
                    aria-expanded={isExpanded}
                    aria-haspopup="listbox"
                    aria-controls={dropdownId}
                    aria-labelledby={labelId}
                    aria-activedescendant={getOptionId(currentIndex)}
                    onClick={() => setIsExpanded((value) => !value)}
                >
                    {selectedOption.label}
                </div>

                <div
                    ref={dropdownRef}
                    className={cn(
                        'select__dropdown',
                        isExpanded && 'is-expanded',
                        dropdownSide === 'left' ? 'is-on-the-left-side' : 'is-on-the-right-side',
                    )}
                    role="listbox"
                    id={dropdownId}
                    aria-labelledby={labelId}
                >
                    {options.map((option, index) => (
                        <div
                            key={option.value}
                            className={cn(
                                'select__option',
                                index === selectedIndex && 'is-selected',
                                index === currentIndex && 'is-current',
                            )}
                            role="option"
                            aria-selected={index === selectedIndex}
                            id={getOptionId(index)}
                            onClick={() => {
                                selectOption(index);
                                setIsExpanded(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
