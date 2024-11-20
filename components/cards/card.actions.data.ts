export interface CardActions {
    name: string;
    url: string;
    icon: string;
}

export const CARD_ACTIONS_DATA: CardActions[] = [
    {
        name: "Избранное",
        url: '/favorites',
        icon: "ph:heart",
    },
    {
        name: "Сравнить",
        url: '/',
        icon: "ph:align-left-light",
    },
    {
        name: "Задать вопрос",
        url: '/',
        icon: "ph:seal-question-light",
    },
    {
        name: "Отзывы",
        url: '/',
        icon: "ph:star-light",
    },
    {
        name: "Поделиться",
        url: '/',
        icon: "ph:share-network",
    },
]