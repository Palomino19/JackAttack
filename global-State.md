Active Player: 1-4

Player Hand: array of 5 card objects

Score:0-2

spaces: occupied by: red, blue, null

draw pile: array of card objects

Board:
spaces:

card:
faceValue: a, 2-10, J(one eye), J(two eyes), Q, k,Joker
suit: diamond, heart, spades, clubs
canRemove: true/false
isWild: true/False

    AceClubs: faceValue:Ace Suit:♣️

    Joker:{isWild: true, canRemove: true}

    J(one eye):{isWild: false, canRemove: true}

    J(two eyes):{isWild: true, canRemove: false}

    function isWild(card){
        switch(card.title)
        case Joker
        case TwoEyedJack
        return true
        default
        return false
    }

    function canRemove(card){
        switch(card.title)
        case joker
        case oneEyedJack
        return true
        default
        return false
    }
