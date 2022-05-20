/* Assining Buttons */
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
/*  Assgning Span */
const p1Display = document.querySelector('#p1Score')
const p2Display = document.querySelector('#p2Score')
/* Counting Score */
let p1Score = 0
let p2Score = 0
let winningScore = 1;
let isGameOver = false;

/* Checking Score Function */   
function scoreCheck(userScore, userDisplay, oppDisplay){
    if(!isGameOver){
        userScore +=1;
        if(userScore === winningScore){
            isGameOver = true;
            userDisplay.classList.add('winner')
            oppDisplay.classList.add('loser')
        }
        userDisplay.textContent= userScore;
        
    }
}


/* Button Function to Update Score*/
p1Button.addEventListener('click', function(){
    scoreCheck(p1Score, p1Display, p2Display)
    
//     if(!isGameOver){
//         p1Score +=1;
//         if(p1Score === winningScore){
//             isGameOver = true;
//             p1Display.classList.add('winner')
//             p2Display.classList.add('loser')
//         }
//         p1Display.textContent= p1Score;
//     }
})

p2Button.addEventListener('click', function(){
    scoreCheck(p2Score, p2Display, p1Display)

    // if(!isGameOver){
    //     p2Score +=1;
    //     if(p2Score === winningScore){
    //         isGameOver = true;
    //         p1Display.classList.add('loser')
    //         p2Display.classList.add('winner')
    //     }
    //     p2Display.textContent= p2Score;
    // }
})
/* Function to Detect the Change in Select Button */
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); /* this.value will give the current the select button (winningScoreSelect) */
    reset()
})

/* Reset Button Function */
resetButton.addEventListener('click', reset)

/* Reset Function */
function reset(){
    p1Score=0
    p2Score=0
    p1Display.textContent=0
    p2Display.textContent=0
    isGameOver = false
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner','loser')
}


