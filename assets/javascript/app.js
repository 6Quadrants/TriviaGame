

// when start is clicked, load & start timer
// count down from 1 min

// function start() {
//       intervalId = setInterval(count, 1000 * 60);
//     }
    
// scores 

$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

 


$("input[type='radio']").click(function() {
    var radioValue = $("input[name='inlineRadioOptions']:checked").val();
    if(radioValue === "correct") {
        correct++
        $("#correct").html(correct);
        alert("correct!");
    } else if(radioValue != "correct") {
        incorrect++
        $("#incorrect").html(incorrect);
        alert("incorrect!");
    } 
    
})

console.log(updatedCorrect);
console.log(correct);




// function checkedAnswer() {
    
// }

console.log(radioValue);

// questions

//get value from questions 1-9

//loop through 1-9 / run checkedAnswer

// if ".correct" is checked then correct++
// else if incorrect++
// else if nothing is checked unanswered++


// timer ends

// when timer = 00:00 

unanswered = ( 9 - (updatedCorrect + updatedIncorrect));


// show page with scores

});