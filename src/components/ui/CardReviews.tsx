import { cn } from '../../utils/cn';

interface CardReviewsProps {
    deliveryTime: string;
    rating: number;
    className?: string;
}

/** Строка «время доставки • рейтинг» внутри карточек. */
export function CardReviews({ deliveryTime, rating, className }: CardReviewsProps) {
    return (
        <div className={cn(className, 'card__reviews')}>
            <span className="card__reviews-time">{deliveryTime} •</span>
            <span className="card__reviews-mark">{rating}</span>
        </div>
    );
}
