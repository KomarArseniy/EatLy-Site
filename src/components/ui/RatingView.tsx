import { StarIcon } from '../icons/StarIcon';
import { cn } from '../../utils/cn';

const MAX_RATING = 5;

interface RatingViewProps {
    /** Количество закрашенных звёзд (из 5) */
    rating?: number;
}

export function RatingView({ rating = MAX_RATING }: RatingViewProps) {
    return (
        <div className="rating-view" role="img" aria-label={`Rating: ${rating} out of ${MAX_RATING}`}>
            {Array.from({ length: MAX_RATING }, (_, index) => (
                <div key={index} className={cn('rating-view__star', index < rating && 'is-active')}>
                    <StarIcon />
                </div>
            ))}
        </div>
    );
}
