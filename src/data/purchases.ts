import statisticsIconExpense from '../assets/icons/statistics-card-img1.svg';
import statisticsIconVoucher from '../assets/icons/statistics-card-img2.svg';
import type { Order, SelectOption, StatisticCardData } from '../types';

export const orders: Order[] = [
    { id: 1, name: 'Chicken Hell', status: 'On The Way', time: '3:09 PM' },
    { id: 2, name: 'Swe Dish', status: 'Delivered', time: 'Yesterday' },
    { id: 3, name: 'Chicken Hell', status: 'Cancelled', time: 'Yesterday' },
];

export const timePeriodOptions: SelectOption[] = [
    { value: 'This Month', label: 'This Month' },
    { value: 'This Week', label: 'This Week' },
    { value: 'This Year', label: 'This Year' },
];

export const statisticCards: StatisticCardData[] = [
    {
        id: 1,
        icon: statisticsIconExpense,
        title: 'Expense',
        subtitle: 'Increased By 10%',
        cost: '$409.00',
        progressColor: 'accent',
    },
    {
        id: 2,
        icon: statisticsIconVoucher,
        title: 'Vocher Usage',
        subtitle: 'Increased By 5%',
        cost: '$45.78',
        progressColor: 'orange',
    },
];
