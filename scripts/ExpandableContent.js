// Логика: кнопка должна быть в карточке с высотой > 350
// Нужно найти все карточки такие, добавить им класс и внутрь вставить кнопку

import pxToRem from './utils/pxToRem.js'

const rootSelector = '.review-card';
const maxHeight = 120;

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

    toggleState() {
        // Значения текущей высоты и высоты всего элемента с учетом прокручиваемой
        // (невидимой в данный момент) области
        const { offsetHeight, scrollHeight } = this.rootElement;

        if (!this.rootElement.classList.contains(this.stateClasses.isExpanded)) {
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
        else {
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

    }

    onButtonClick = () => {
        this.toggleState();
    }

    bindEvents() {
        this.openButtonElement.addEventListener('click', this.onButtonClick);
        this.closeButtonElement.addEventListener('click', this.onButtonClick);
    }

}

class ExpandableContentCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(cardElement  => {
            if (pxToRem(cardElement.getBoundingClientRect().height) > pxToRem(350)) {
                // const rootElement = cardElement.querySelector('.review-card__feedback');
                // new ExpandableContent(rootElement)
                new ExpandableContent(cardElement)
            }
        })
    }
}

export default ExpandableContentCollection;