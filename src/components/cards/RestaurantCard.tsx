import saveIconUrl from '../../assets/icons/restaurant-card-save.svg';
import restaurantImageUrl from '../../assets/images/home-page/restaurant-image-chicken.png';
import type { Restaurant } from '../../types';
import { CardReviews } from '../ui/CardReviews';
import { DivisionBadge } from '../ui/DivisionBadge';

interface RestaurantCardProps {
    restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
    const { name, badge, deliveryTime, rating } = restaurant;

    return (
        <div className="restaurant-card card">
            <img src={restaurantImageUrl} alt="Chicken Restaurant" className="restaurant-card__image" />

            <div className="restaurant-card__content">
                <DivisionBadge {...badge} />

                <div className="restaurant-card__info">
                    <div className="restaurant-card__info-wrapper">
                        <h3 className="restaurant-card__info-title">{name}</h3>
                        <CardReviews
                            className="restaurant-card__reviews"
                            deliveryTime={deliveryTime}
                            rating={rating}
                        />
                    </div>

                    <div className="restaurant-card__action">
                        <img src={saveIconUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
