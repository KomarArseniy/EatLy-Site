import pxToRem from './utils/pxToRem.js'

const rootSelector = '.review-card';
const maxHeight = 120;
const maxAcceptableHeight = 300;

class ExpandableContent {
    selectors = {
        root: 'expandable-content',
        openButton: 'expandable-content__button--open',
        closeButton: 'expandable-content__button--close'
    }

    stateClasses = {
        isExpanded: 'is-expanded',
        notExpanded: 'not-expanded',
    }

    animationParams = {
        duration: 500,
        easing: 'ease-in-out',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.rootElement.classList.add(`${this.selectors.root}`);
        this.rootElement.innerHTML +=
            ' <button type="button" class="button expandable-content__button expandable-content__button--open">' +
            ' <span class="icon icon--bottom-accent-arrow">Read More</span>' +
            ' </button>' +
            '<button type="button" class="button expandable-content__button expandable-content__button--close">' +
            '<span class="icon icon--top-accent-arrow">Roll Up</span>' +
            '</button>';

        this.openButtonElement = this.rootElement.querySelector(`.${this.selectors.openButton}`);
        this.closeButtonElement = this.rootElement.querySelector(`.${this.selectors.closeButton}`);

        this.bindEvents();
    }

    showFullCard = () => {
        const { offsetHeight, scrollHeight } = this.rootElement;
        this.rootElement.classList.add(this.stateClasses.isExpanded);
        this.openButtonElement.classList.add(this.stateClasses.isExpanded);
        this.closeButtonElement.classList.add(this.stateClasses.isExpanded);

        this.rootElement.classList.add(this.stateClasses.isExpanded);
        this.rootElement.animate([
            {
                maxHeight: `${pxToRem(offsetHeight)}rem`
            },
            {
                maxHeight: `${pxToRem(scrollHeight)}rem`
            }
        ], this.animationParams);
    }

    hideFullCard = () =>  {

        const {  scrollHeight } = this.rootElement;
        this.rootElement.classList.remove(this.stateClasses.isExpanded);
        this.openButtonElement.classList.remove(this.stateClasses.isExpanded);
        this.closeButtonElement.classList.remove(this.stateClasses.isExpanded);

        this.rootElement.animate([
            {
                maxHeight: `${pxToRem(scrollHeight)}rem`
            },
            {
                maxHeight: `${pxToRem(maxHeight)}rem`
            }
        ], this.animationParams);
    }

    bindEvents() {
        this.openButtonElement.addEventListener('click', this.showFullCard);
        this.closeButtonElement.addEventListener('click', this.hideFullCard);
    }
}

class ExpandableContentCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(cardElement  => {
            const contentHeight = pxToRem(cardElement.scrollHeight);

            if (contentHeight > pxToRem(maxAcceptableHeight)) {
                const expandableCard = new ExpandableContent(cardElement);
            }
        })
    }
}

export default ExpandableContentCollection;