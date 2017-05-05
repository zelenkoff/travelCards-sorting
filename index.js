class cardsSorter {
    constructor(cards) {
        this.cards = cards;
    }

    firstCardFinder(cards = this.cards) { 
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

        const firstCard = this.firstCardFinder();
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

    finderToSeat(seat) {
        if (seat) {
            return `Seat ${seat}.`;
        } else {
            return 'No seat assignment.';
        }
    }

    airportHelper(el) {
        if (el.transport.gate) {
            return `Gate ${el.transport.gate}.`;
        } else {
            return 'Clarify information about gate in to airport.';
        }
    }

    drawPathWay() {
        const sortedCards = this.sorting();
        const ul = document.createElement('ul');
        const body = document.getElementsByTagName('body')[0];

        body.appendChild(ul);

        sortedCards.forEach(el => {
            let li = document.createElement('li');
            let card = '';
    
            switch (el.transport.type) {
                case 'Train':
                    card = `Take train ${el.transport.id} from ${el.from} to ${el.to}. ${this.finderToSeat(el.transport.seat)}`;
                    break;
                case 'Bus':
                    card = `Take the bus from ${el.from} to ${el.to}. ${this.finderToSeat(el.transport.seat)}`;
                    break;
                case 'Plane':
                    card = `From ${el.from} take flight ${el.transport.id} to ${el.to}.
                    ${this.airportHelper(el)}${this.finderToSeat(el.transport.seat)}${el.transport.baggage_info}`;
                    break;
                default:
                    card = `Go from ${el.from} to ${el.to}.`
                    break;
            };

            li.innerHTML += card;
            document.getElementsByTagName('ul')[0].appendChild(li);

        });
    };
}
