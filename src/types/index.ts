export type BadgeVariant = 'yellow' | 'red' | 'green';

export interface Badge {
    label: string;
    variant: BadgeVariant;
}

export interface Restaurant {
    id: number;
    name: string;
    badge: Badge;
    deliveryTime: string;
    rating: number;
}

export interface Dish {
    id: number;
    name: string;
    badge: Badge;
    deliveryTime: string;
    rating: number;
    price: {
        dollars: number;
        cents: number;
    };
}

export type OrderStatus = 'On The Way' | 'Delivered' | 'Cancelled';

export interface Order {
    id: number;
    name: string;
    status: OrderStatus;
    time: string;
}

export interface Metric {
    id: number;
    label: string;
    value: string;
}

export interface StatisticCardData {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
    cost: string;
    progressColor?: 'accent' | 'orange';
}

export interface Review {
    id: number;
    name: string;
    experience: string;
    text: string;
    rating: number;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface SelectOption {
    value: string;
    label: string;
}
