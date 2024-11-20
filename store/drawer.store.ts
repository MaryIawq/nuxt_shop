import { defineStore } from "pinia";
import { ref } from "vue";
import { CARDS_DATA, ICard } from "~/components/cards/cards.data";

interface DrawerContentItem {
    cardId: number;
    quantity: number;
}

interface DrawerState {
    drawerContent: Record<number, DrawerContentItem>;
}

const cards = ref<ICard[]>(CARDS_DATA);

export const useDrawerStore = defineStore<'drawer', DrawerState>({
    id: 'drawer',
    state: (): DrawerState => ({
        drawerContent: {},
    }),
    getters: {
        formattedDrawer: (state): Array<{
            id: number;
            title: string;
            price: number;
            quantity: number;
            cost: number;
        }> => {
            return Object.keys(state.drawerContent).map((cardId) => {
                const card = state.drawerContent[parseInt(cardId)];
                const foundCard = cards.value.find((c) => c.id === card.cardId);

                if (!foundCard) {
                    throw new Error(`Card with ID ${card.cardId} not found`);
                }

                return {
                    id: card.cardId,
                    title: foundCard.title,
                    price: foundCard.price,
                    quantity: card.quantity,
                    cost: card.quantity * foundCard.price,
                };
            });
        },
        total(state): number {
            return Object.keys(state.drawerContent).reduce((acc: number, id: string) => {
                const cardId = parseInt(id);
                const card = cards.value.find((p) => p.id === cardId);
                if (card) {
                    return acc + card.price * state.drawerContent[cardId].quantity;
                }
                return acc;
            }, 0);
        },
        cardsTotal(state): number {
            return Object.keys(state.drawerContent).reduce((acc: number, id: string) => {
                const cardId = parseInt(id);
                return acc + state.drawerContent[cardId].quantity;
            }, 0);
        },
    },
    actions: {
        add(cardId: number) {
            if (this.drawerContent.hasOwnProperty(cardId)) {
                this.drawerContent[cardId].quantity += 1;
            } else {
                this.drawerContent[cardId] = {
                    cardId,
                    quantity: 1,
                };
            }
        },
        remove(cardId: number) {
            if (!this.drawerContent[cardId]) {
                return;
            }
            this.drawerContent[cardId].quantity -= 1;

            if (this.drawerContent[cardId].quantity === 0) {
                delete this.drawerContent[cardId];
            }
        },
        removeCard(cardId: number) {
            delete this.drawerContent[cardId];
        },
    },
});
