import chickenImageUrl from '../../assets/images/home-page/chicken-img.png';
import type { Order } from '../../types';
import { cn } from '../../utils/cn';

interface DishTileProps {
    order: Order;
    className?: string;
}

export function DishTile({ order, className }: DishTileProps) {
    const { name, status, time } = order;

    return (
        <div className={cn(className, 'dish-tile tile')}>
            <img src={chickenImageUrl} className="dish-tile__image" alt="" width={75} height={82} />

            <div className="dish-tile__info">
                <div className="dish-tile__title">
                    <p>{name}</p>
                </div>

                <div className="dish-tile__status-wrapper">
                    <p className={cn('dish-tile__status', status === 'Cancelled' && 'dish-tile__status--red')}>
                        {status}
                    </p>
                    <span className="dish-tile__time">{time}</span>
                </div>
            </div>
        </div>
    );
}
