import dishImageUrl from '../../assets/images/home-page/dish-image.png';
import type { Dish } from '../../types';
import { HeartIcon } from '../icons/HeartIcon';
import { CardReviews } from '../ui/CardReviews';
import { DivisionBadge } from '../ui/DivisionBadge';

interface DishCardProps {
    dish: Dish;
}

export function DishCard({ dish }: DishCardProps) {
    const { name, badge, deliveryTime, rating, price } = dish;

    return (
        <div className="dish-card card">
            <div className="dish-card__like-button">
                <HeartIcon />
            </div>

            <img src={dishImageUrl} alt={name} width={180} height={180} className="dish-card__image" />

            <div className="dish-card__content">
                <DivisionBadge {...badge} />

                <div className="dish-card__info-wrapper">
                    <div className="dish-card__info">
                        <p className="dish-card__info-title">{name}</p>
                        <CardReviews
                            className="dish-card__reviews"
                            deliveryTime={deliveryTime}
                            rating={rating}
                        />
                    </div>

                    <div className="dish-card__cost-wrapper">
                        <div className="dish-card__cost">
                            <p>
                                ${price.dollars}
                                <span className="dish-card__cost-pennies">
                                    .{String(price.cents).padStart(2, '0')}
                                </span>
                            </p>
                        </div>

                        {/* aria-label не используем: глобальный стиль button[aria-label] ломает «плюс» кнопки */}
                        <button type="button" className="add-to-cart-button">
                            <span className="visually-hidden">Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
