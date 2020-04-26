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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<!-- <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAaZEHRpNv8Ph483YBZb1-rbthYKQ5QU6A",
authDomain: "increaselimit.firebaseapp.com",
databaseURL: "https://increaselimit.firebaseio.com",
projectId: "increaselimit",
storageBucket: "increaselimit.appspot.com",
messagingSenderId: "615706483903",
appId: "1:615706483903:web:40bb7bf973f5b8245eba0a"
