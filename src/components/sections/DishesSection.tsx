import { dishes } from '../../data/dishes';
import { SECTION_IDS } from '../../data/navigation';
import { DishCard } from '../cards/DishCard';
import { CardsSection } from './CardsSection';

export function DishesSection() {
    return (
        <CardsSection id={SECTION_IDS.menu} accent="Dishes" columns={5}>
            {dishes.map((dish) => (
                <li key={dish.id} className="grid__item">
                    <DishCard dish={dish} />
                </li>
            ))}
        </CardsSection>
    );
}
