export interface ILinkItem {
    name: string;
    icon: string;
    url: string;
}

export interface INavItem {
    title: string;
    url: string;
    icon: string;
    links: ILinkItem[];
}
export const NAV_DATA: INavItem[] = [
    {
        title: 'Контакты',
        url: '',
        icon: 'ph:address-book-tabs-light',
        links: [
            {
                name: 'Частые вопросы',
                icon: 'ph:question-mark-thin',
                url: '',
            },
            {
                name: 'Написать в телеграмм',
                icon: 'ph:telegram-logo-thin',
                url: '',
            },
            {
                name: 'Написать в whatsapp',
                icon: 'ph:whatsapp-logo-thin',
                url: '',
            },
            {
                name: '8 (800) 123 45 67',
                icon: 'ph:phone-call-thin',
                url: '',
            }
        ]
    },
    {
        title: 'Условия работы',
        url: '',
        icon: 'ph:circles-three-light',
        links: [
            {
                name: 'Доставка и оплата',
                icon: 'ph:car-profile-thin',
                url: '',
            },
            {
                name: 'Система скидок',
                icon: 'ph:gift-light',
                url: '',
            },
            {
                name: 'Время работы',
                icon: 'ph:clock-thin',
                url: '',
            }
        ]
    },
    {
        title: 'О нас',
        url: '',
        icon: 'ph:info-circle-light',
        links: [
            {
                name: 'Наша история',
                icon: 'ph:book-open-light',
                url: '',
            },
            {
                name: 'Команда',
                icon: 'ph:users-light',
                url: '',
            },
            {
                name: 'Отзывы',
                icon: 'ph:star-light',
                url: '',
            }
        ]
    },
    {
        title: 'Услуги',
        url: '',
        icon: 'ph:clipboard-light',
        links: [
            {
                name: 'Консультации',
                icon: 'ph:chat-light',
                url: '',
            },
            {
                name: 'Обучение',
                icon: 'ph:graduation-cap-light',
                url: '',
            },
            {
                name: 'Поддержка',
                icon: 'ph:headset-light',
                url: '',
            }
        ]
    },
    {
        title: 'Политика конфиденциальности',
        url: '',
        icon: 'ph:shield-light',
        links: [
            {
                name: 'Сбор данных',
                icon: 'ph:database-light',
                url: '',
            },
            {
                name: 'Использование данных',
                icon: 'ph:lock-light',
                url: '',
            },
            {
                name: 'Права пользователей',
                icon: 'ph:user-light',
                url: '',
            }
        ]
    }
];
