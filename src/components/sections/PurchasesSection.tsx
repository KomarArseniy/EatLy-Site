import { orders, statisticCards, timePeriodOptions } from '../../data/purchases';
import { DishTile } from '../cards/DishTile';
import { StatisticCard } from '../cards/StatisticCard';
import { Select } from '../ui/Select';

export function PurchasesSection() {
    return (
        <section className="section">
            <div className="purchases__inner container">
                <div className="purchases__body">
                    <h2 className="visually-hidden">Your Purchases</h2>
                    <p className="purchases__title h2">
                        Control <span className="accent-text">Purchases</span> Via Dashboard
                    </p>

                    <div className="purchases__dishes-wrapper">
                        {orders.map((order) => (
                            <DishTile key={order.id} order={order} className="purchases__dish-tile" />
                        ))}
                    </div>
                </div>

                <div className="purchases__card card">
                    <div className="purchases__card-header">
                        <div className="purchases__card-header-title">
                            <p>Purchases</p>
                        </div>
                        <Select label="Time Period" options={timePeriodOptions} />
                    </div>

                    <div className="purchases__card-body">
                        {statisticCards.map((card) => (
                            <StatisticCard
                                key={card.id}
                                data={card}
                                className="purchases__statistic-card"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
