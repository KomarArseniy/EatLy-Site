import { useRef } from 'react';
import personImageUrl from '../../assets/images/home-page/person.png';
import { useExpandableContent } from '../../hooks/useExpandableContent';
import type { Review } from '../../types';
import { cn } from '../../utils/cn';
import { ExpandableControls } from '../ui/ExpandableControls';
import { RatingView } from '../ui/RatingView';

interface ReviewCardProps {
    review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
    const { name, experience, text, rating } = review;

    const rootRef = useRef<HTMLElement>(null);
    const { isExpandable, isExpanded, expand, collapse } = useExpandableContent(rootRef);

    return (
        <article
            ref={rootRef}
            className={cn(
                'review-card',
                isExpandable && 'expandable-content',
                isExpandable && isExpanded && 'is-expanded',
            )}
        >
            <div className="review-card__header">
                <img className="review-card__image" src={personImageUrl} alt="" />
                <div className="review-card__info">
                    <div className="review-card__name">{name}</div>
                    <div className="review-card__experience">{experience}</div>
                </div>
            </div>

            <div className="review-card__body">
                <div className="review-card__feedback">
                    <p>{text}</p>
                </div>
                <RatingView rating={rating} />
            </div>

            {isExpandable && (
                <ExpandableControls isExpanded={isExpanded} onExpand={expand} onCollapse={collapse} />
            )}
        </article>
    );
}
