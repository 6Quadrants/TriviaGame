

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;



$(window).on("load", function () {
     $("#begin").on("click", countdown.start);
    });

    var intervalID;
    var clockRunning = false;

var countdown = {
        time: 0,
   
start: function() {
    if(!clockRunning) {
        intervalId = setInterval(countdown.count, 1000);
        clockRunning= true;
        $("#counter").text("01:00");
    }
},

count: function() {

    countdown.time--;

   
    var converted = countdown.timeConverter(countdown.time);
    $("#counter").text(converted);

    if (countdown.time === -60) {
        clearInterval(intervalId);
        clockRunning = false;
        $("#counter").html("TIME IS UP, LOSER!");

    }

    console.log(converted);
    console.log(countdown.time);

},


timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    if(minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0";
      }

    return minutes + ":" + seconds;

}

};


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
    

    console.log(unanswered);
});

