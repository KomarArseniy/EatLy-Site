import { SECTION_IDS } from '../../data/navigation';
import { restaurants } from '../../data/restaurants';
import { RestaurantCard } from '../cards/RestaurantCard';
import { CardsSection } from './CardsSection';

export function RestaurantsSection() {
    return (
        <CardsSection id={SECTION_IDS.restaurants} accent="Restaurants" columns={3}>
            {restaurants.map((restaurant) => (
                <li key={restaurant.id} className="grid__item">
                    <RestaurantCard restaurant={restaurant} />
                </li>
            ))}
        </CardsSection>
    );
}
