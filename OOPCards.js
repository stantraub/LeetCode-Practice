class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }
}

function isSame(first, second) {
    return (first.suit === second.suit) && (first.rank === second.rank)
}

class Deck {
    constructor() {
        this.deck = []

        const suits = ['clubs', 'diamonds', 'hearts', 'spades']
        const ranks = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'king', 'queen', 'ace']

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(suit, rank))
            }
        }
    }

 
}

let deck = new Deck().deck

let hand = []

for (let i = 0; i < 5; i++) {
    hand.push(deck[Math.floor(Math.random() * deck.length)])
}



// console.log(isSame(card1, card2))
console.log(deck)
console.log(hand)