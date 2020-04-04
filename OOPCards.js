class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }
}

function isSame(first, second) {
    return (first.suit === second.suit) && (first.rank === second.rank)
}

const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const ranks = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'king', 'queen', 'ace']

let deck = []

for (const suit of suits) {
    for (const rank of ranks) {
        deck.push(new Card(suit, rank))
    }
}

let hand = []

for (let i = 0; i < 5; i++) {
    hand.push(deck[Math.floor(Math.random() * deck.length)])
}



// console.log(isSame(card1, card2))
console.log(deck)
console.log(hand)