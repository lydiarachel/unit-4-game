$(document).ready(function () {

    //global variable to declare counters
    var playerCounter = 0;
    var winTracker = 0;
    var lossTracker = 0;
    //method used to set content on the html
    $("#winCounter").html(winTracker);
    $("#lossCounter").html(lossTracker);

    //setting the random number for player
    //Number to be a random number between 19 and 120.  101 plus 19, in order to capture 120
    var playerRandomNum = 0;

    //method used to set content on the html


    //Random crystal numbers generated 
    //Number to be a random number between 1 and 12.  12 plus 1, in order to capture 12
    var crysNum1 = 0

    var crysNum2 = 0

    var crysNum3 = 0

    var crysNum4 = 0

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    playerRandomNum = random(19, 120);
    console.log(playerRandomNum);
    $("#playerNumber").text(playerRandomNum);
    crysNum1 = random(1, 12);
    crysNum2 = random(1, 12);
    crysNum3 = random(1, 12);
    crysNum4 = random(1, 12);

    //Function run to start the game
    function gameStart() {
        playerRandomNum = random(19, 120);
        $("#playerNumber").text(playerRandomNum);
        crysNum1 = random(1, 12);
        console.log(crysNum1);
        crysNum2 = random(1, 12);
        console.log(crysNum2);
        crysNum3 = random(1, 12);
        console.log(crysNum3);
        crysNum4 = random(1, 12);
        console.log(crysNum4);
        playerCounter = 0;
        $("#finalScore").html(playerCounter);
    }

    //function run for crystal clicks and if/else conditionals
    $("#blueCrystal").on("click", function () {
        playerCounter += crysNum1;
        $('#finalScore').html(playerCounter);

        if (playerCounter == playerRandomNum) {
            money();
        } else if (playerCounter > playerRandomNum) {
            wahwah();
        }
    })

    $("#crystalSkull").on("click", function () {
        playerCounter += crysNum2;
        $('#finalScore').html(playerCounter);

        if (playerCounter == playerRandomNum) {
            money();
        } else if (playerCounter > playerRandomNum) {
            wahwah();
        }
    })

    $("#crystalTiger").on("click", function () {
        playerCounter += crysNum3;
        $('#finalScore').html(playerCounter);

        if (playerCounter == playerRandomNum) {
            money();
        } else if (playerCounter > playerRandomNum) {
            wahwah();
        }
    })

    $("#crystalBall").on("click", function () {
        playerCounter += crysNum4;
        $('#finalScore').html(playerCounter);

        if (playerCounter == playerRandomNum) {
            money();
        } else if (playerCounter > playerRandomNum) {
            wahwah();
        }
    })

    //Wining and losing alert displays 
    function money() {
        alert("You're so money baby, and you don't even know it!");
        winTracker++;
        $("#winCounter").html(winTracker);
        gameStart();
    }

    function wahwah() {
        alert("Waaahhhwahhhhh You lose!");
        lossTracker++;
        $("#lossCounter").html(lossTracker);
        gameStart();
    }



/*From Kinnera Bezawada to Everyone: (07:14 PM)
var goalNum;
var wins = 0;
var losses = 0;
var redGem;
var yellowGem;
var clearGem;
var greenGem;
var userSum = 0;
// define all functions
$(document).ready(function() {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function resetRound() {
    redGem = randomNum(1, 12);
    yellowGem = randomNum(1, 12);
    clearGem = randomNum(1, 12);
    greenGem = randomNum(1, 12);
    goalNum = randomNum(19, 120);
    $("#goal").text("Goal No : " + goalNum);
    userSum = 0;
    $("#sum").text("Sum : " + userSum);
  }
  function checkStatus() {
    if (userSum === goalNum) {
      wins++;
      $("#wins").text("Wins : " + wins);
      resetRound();
    } else if (userSum > goalNum) {
      losses++;
      console.log(losses);
      resetRound();
    }
  }
  function gemClick(gemValue) {
    console.log(userSum);
    userSum += gemValue;
    console.log(userSum);
    $("#sum").text("Sum : " + userSum);
    checkStatus();
  }
  //click events
  resetRound();
    $("#goal").text("Goal No : " + goalNum);
  $("#yellow").on("click", function() {
    gemClick(yellowGem);
  });
  $("#red").on("click", function() {
    gemClick(redGem);
  });*/
































})