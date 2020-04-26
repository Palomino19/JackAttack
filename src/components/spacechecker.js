// function spaceChecker() {
// To play a regular card:
//
// boardspace = (boardspace.suit= cardPLayed.suit &&
// boardspace.value = card.value && isLocked=false &&
// isClaimedBy=0)
//
// playerHand[activePLayer].hand.includes({suit =
// boardspace.suit && value  = boardspace.value}) = true
//
// Trigger ClaimBoardSPace() && GoalChecker()
// To play a TWO EYED JACK
//
// boardspace = isLocked=false, isClaimedBy=0
//
// playerHand[activePLayer].hand.includes({suit= "clubs"
// || diamonds", value="J"})
//
// Trigger ClaimBoardSPace() && GoalChecker()
// to play a ONE EYED JACK
//
//  boardspace = isLocked=false, isClaimedBy !=
//  (activePlayer || 3)
//
// playerHand[activePLayer].hand.includes({suit= "spades"
// || hearts", value="J"})
//
// Trigger UnclaimBoardSpace()
//to play JOKER
//
// boardspace = isLocked=false, isOccupied=0
//
// playerHand[activePLayer].hand.includes({suit= "null
// || hearts", value="Joker"})
//
// TriggerClaimBoardSPace() && GoalChecker() ||  Trigger UnclaimBoardSpace()
// if(playerHand[activePlayer].hand)
// }
