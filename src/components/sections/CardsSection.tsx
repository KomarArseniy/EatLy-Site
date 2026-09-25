import type { ReactNode } from 'react';
import { Icon } from '../ui/Icon';
import { LinkButton } from '../ui/LinkButton';

interface CardsSectionProps {
    /** Якорь секции для навигации по странице */
    id?: string;
    /** Выделенное акцентным цветом слово в заголовке: «Our Top <accent>» */
    accent: string;
    columns: 3 | 5;
    /** Элементы сетки (<li className="grid__item">) */
    children: ReactNode;
}

/** Секция-каталог: заголовок, сетка карточек и кнопка «View All». */
export function CardsSection({ id, accent, columns, children }: CardsSectionProps) {
    return (
        <section className="section" id={id}>
            <div className="cards__inner container">
                <h2 className="cards__title">
                    Our Top <span className="accent-text">{accent}</span>
                </h2>

                <div className="cards__wrapper">
                    <ul className={`grid grid--${columns}-cols`}>{children}</ul>

                    <LinkButton variant="gray" thin>
                        <Icon name="gray-arrow">View All</Icon>
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
