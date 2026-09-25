import type { Review } from '../types';

const SHORT_TEXT =
    '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”';

export const reviews: Review[] = [
    {
        id: 1,
        name: 'Bill J.',
        experience: '2 Month With Us',
        text: '“ Online invoice“ Online invoice helps companies save time, are faster and save maximum effort companies save time, are faster for the clients and save maximum effort. Online invoice payment helps companies save time ” Payment helps companies save time, are faster and save helps companies save time, are fa maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”',
        rating: 5,
    },
    {
        id: 2,
        name: 'John W.',
        experience: '01 Year With Us',
        text: '“ Cool service ”',
        rating: 5,
    },
    {
        id: 3,
        name: 'Christopher N.',
        experience: '03 Year With Us',
        text: SHORT_TEXT,
        rating: 5,
    },
    {
        id: 4,
        name: 'Alexander R.',
        experience: '01 Year With Us',
        text: SHORT_TEXT,
        rating: 5,
    },
    {
        id: 5,
        name: 'Alexander R.',
        experience: '01 Year With Us',
        text: SHORT_TEXT,
        rating: 5,
    },
    {
        id: 6,
        name: 'Alexander R.',
        experience: '01 Year With Us',
        text: SHORT_TEXT,
        rating: 5,
    },
];
