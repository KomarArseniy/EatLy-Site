class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        openBurgerMenuButton: '[data-js-open-header-burger-menu-button]',
        closeBurgerMenuButton: '[data-js-close-header-burger-menu-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = document.querySelector(this.selectors.overlay);
        this.openBurgerMenuButtonElement = this.rootElement?.querySelector(this.selectors.openBurgerMenuButton);
        this.closeBurgerMenuButtonElement = document.querySelector(this.selectors.closeBurgerMenuButton);
        this.resizeTimer = null;

        this.bindEvents();
    }

    positionOverlayMenu() {
        if (!this.openBurgerMenuButtonElement || !this.overlayElement) return;

        const buttonRect = this.openBurgerMenuButtonElement.getBoundingClientRect();
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

        this.overlayElement.style.left = `${buttonRect.right- this.overlayElement.getBoundingClientRect().width  + scrollX}px`;
        this.overlayElement.style.top = `${buttonRect.bottom + 10}px`;
    }

    openBurgerMenu() {
        this.openBurgerMenuButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
    }

    onOpenBurgerButtonClick = () => {
        if (!this.openBurgerMenuButtonElement || !this.closeBurgerMenuButtonElement || !this.overlayElement)
            return;

        this.positionOverlayMenu();
        this.openBurgerMenu();
    }

    closeBurgerMenu() {
        this.closeBurgerMenuButtonElement.classList.remove(this.stateClasses.isActive);
        this.openBurgerMenuButtonElement.classList.remove(this.stateClasses.isActive);
        this.overlayElement.classList.remove(this.stateClasses.isActive);
    }

    onCloseBurgerButtonClick = () => {
        this.closeBurgerMenu();
    }

    onResize = () => {
        clearTimeout(this.resizeTimer);

        this.resizeTimer = setTimeout(() => {
            this.positionOverlayMenu();

            if (window.innerWidth >= 768) {
                this.closeBurgerMenu();
            }
        }, 300)
    }

    onDocumentClick = () => {
        const isClickInsideOverlay = this.overlayElement?.contains(event.target);
        const isClickOnBurgerButton = this.openBurgerMenuButtonElement?.contains(event.target);

        // Если клик был снаружи и меню открыто - закрываем
        if (!isClickInsideOverlay && !isClickOnBurgerButton) {
            this.closeBurgerMenu();
        }
    }

    bindEvents() {
        this.openBurgerMenuButtonElement?.addEventListener('click', this.onOpenBurgerButtonClick);
        this.closeBurgerMenuButtonElement?.addEventListener('click', this.onCloseBurgerButtonClick);
        window.addEventListener('resize', this.onResize);
        document.addEventListener('click', this.onDocumentClick);
    }
}

export default Header;