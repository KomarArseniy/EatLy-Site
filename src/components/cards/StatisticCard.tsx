import type { StatisticCardData } from '../../types';
import { cn } from '../../utils/cn';

interface StatisticCardProps {
    data: StatisticCardData;
    className?: string;
}

export function StatisticCard({ data, className }: StatisticCardProps) {
    const { icon, title, subtitle, cost, progressColor } = data;

    return (
        <div className={cn(className, 'statistic-card')}>
            <div className="statistic-card__header">
                <div className="statistic-card__info">
                    <img src={icon} alt="" />
                    <div className="statistic-card__title">{title}</div>
                    <div className="statistic-card__subtitle">{subtitle}</div>
                </div>
                <div className="statistic-card__cost">{cost}</div>
            </div>

            <div
                className={cn(
                    'statistic-card__fullness',
                    progressColor === 'orange' && 'statistic-card__fullness--orange',
                )}
            />
        </div>
    );
}
