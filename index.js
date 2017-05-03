let data = [
    {
        from: 'Stockholm',
        to: 'New York JFK',
        transport: {
            type: 'Plane',
            id: 'SK22',
            gate: '22',
            seat: '7B',
            baggage_info: 'Baggage will beautomatically transferred from your last leg'
        }
    },
    {
        from: 'Barcelona',
        to: 'Gerona Airport',
        transport: {
            type: 'Bus'
        }
    },
    {
        from: 'Gerona Airport',
        to: 'Stockholm',
        transport: {
            type: 'Plane',
            id: 'SK455',
            gate: '45B',
            seat: '3A',
            baggage_info: 'Baggage drop at ticket counter 344'
        }
    },
    {
        from: 'Madrid',
        to: 'Barcelona',
        transport: {
            type: 'Train',
            id: '78A',
            seat: '45B'
        }
    }
];

class cardsSorter {
    constructor(cards) {
        this.cards = cards;
    }

    initialCardFinder(cards = this.cards) { 
        let hash = {};
        const data = cards;
        const valuesTo = data
            .map(el => el.to)
            .forEach(el => {
                hash[`${el}`] = 1;
            });
        const firstCard = data.filter((el, i) => !hash[`${el.from}`]);
        return firstCard[0];
    }

    lastCardFinder(cards = this.cards) {
        let hash = {};
        const data = cards;
        const valuesTo = data
            .map(el => el.from)
            .forEach(el => {
                hash[`${el}`] = 1;
            });
        const lastCard = data.filter((el, i) => !hash[`${el.to}`]);
        return lastCard[0];
    }

    sorting() {
        let result = [];

        const firstCard = this.initialCardFinder();
        const lastCard = this.lastCardFinder();
        const cards = this.cards;

        result.push(firstCard);

        const sorting = (from) => {
            cards.forEach(el => {
                if (from === 'undefined') return;
                if (el.from === from) {
                    result.push(el);
                    sorting(el.to);
                }
            })
    };
        sorting(firstCard.to);
        return result;
    }
}

const a = new cardsSorter(data);

a.initialCardFinder();
console.log(a.sorting());