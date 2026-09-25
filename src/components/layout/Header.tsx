import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { DESKTOP_MIN_WIDTH_PX } from '../../constants/breakpoints';
import { headerLinks } from '../../data/navigation';
import { cn } from '../../utils/cn';
import { ProfileIcon } from '../icons/ProfileIcon';
import { LinkButton } from '../ui/LinkButton';
import { Logo } from './Logo';

const RESIZE_DEBOUNCE_MS = 300;
const OVERLAY_OFFSET_PX = 10;

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [overlayPosition, setOverlayPosition] = useState<CSSProperties>();

    const openButtonRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Оверлей прижимается правым краем к кнопке бургера и находится под ней
    const positionOverlay = useCallback(() => {
        const openButton = openButtonRef.current;
        const overlay = overlayRef.current;
        if (!openButton || !overlay) return;

        const buttonRect = openButton.getBoundingClientRect();
        const overlayWidth = overlay.getBoundingClientRect().width;

        setOverlayPosition({
            left: buttonRect.right - overlayWidth,
            top: buttonRect.bottom + OVERLAY_OFFSET_PX,
        });
    }, []);

    const toggleMenu = () => {
        positionOverlay();
        setIsMenuOpen((isOpen) => !isOpen);
    };

    const closeMenu = () => setIsMenuOpen(false);

    // При изменении размера окна пересчитываем позицию и закрываем меню на десктопе
    useEffect(() => {
        let timerId: number | undefined;

        const onResize = () => {
            window.clearTimeout(timerId);

            timerId = window.setTimeout(() => {
                positionOverlay();

                if (window.innerWidth >= DESKTOP_MIN_WIDTH_PX) {
                    setIsMenuOpen(false);
                }
            }, RESIZE_DEBOUNCE_MS);
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            window.clearTimeout(timerId);
        };
    }, [positionOverlay]);

    // Клик вне меню и вне кнопки бургера закрывает меню
    useEffect(() => {
        if (!isMenuOpen) return;

        const onDocumentClick = (event: MouseEvent) => {
            const target = event.target as Node;
            const isInsideOverlay = overlayRef.current?.contains(target);
            const isOnBurgerButton = openButtonRef.current?.contains(target);

            if (!isInsideOverlay && !isOnBurgerButton) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', onDocumentClick);

        return () => document.removeEventListener('click', onDocumentClick);
    }, [isMenuOpen]);

    return (
        <>
            <header className="header">
                <div className="header__inner container">
                    <Logo className="header__logo" />

                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {headerLinks.map(({ label, href }) => (
                                <li key={label} className="header__menu-list-item">
                                    <a href={href} className="header__menu-link base-link">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="header__links hidden-mobile">
                            <LinkButton className="header__links-link">Login</LinkButton>
                            <LinkButton variant="accent" className="header__links-link">
                                Sign up
                            </LinkButton>
                        </div>
                    </nav>

                    <div
                        ref={openButtonRef}
                        className={cn(
                            'header__burger-open-button burger-open-button visible-mobile',
                            isMenuOpen && 'is-active',
                        )}
                        onClick={toggleMenu}
                    >
                        <ProfileIcon />
                    </div>
                </div>
            </header>

            {/* Меню для мобильных: позиционируется относительно кнопки бургера */}
            <div
                ref={overlayRef}
                className={cn('header__overlay', isMenuOpen && 'is-active')}
                style={overlayPosition}
            >
                <div className="header__links">
                    <LinkButton className="header__links-link">Login</LinkButton>
                    <LinkButton variant="accent" className="header__links-link">
                        Sign up
                    </LinkButton>
                </div>

                <div className="header__burger-close-button burger-close-button" onClick={closeMenu}>
                    <span className="burger-close-button__line" />
                    <span className="burger-close-button__line" />
                </div>
            </div>
        </>
    );
}
