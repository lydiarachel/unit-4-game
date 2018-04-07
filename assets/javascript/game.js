$(document).ready(function () {

    //global variables
    var playerCounter = 0;
    var winTracker = 0;
    var lossTracker = 0;
    var playerRandomNum = 0;
    var crysNum1;
    var crysNum2;
    var crysNum3;
    var crysNum4;

    //function for min and max math random
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    playerRandomNum = random(19, 120);
    console.log(playerRandomNum);
    $("#playerNumber").text(playerRandomNum);
    crysNum1 = random(1, 12);
    console.log(crysNum1)
    crysNum2 = random(1, 12);
    console.log(crysNum2)
    crysNum3 = random(1, 12);
    console.log(crysNum3)
    crysNum4 = random(1, 12);
    console.log(crysNum4)

    //Function run to start the game
    function gameStart() {
        playerRandomNum = random(19, 120);
        $("#playerNumber").text(playerRandomNum);
        crysNum1 = random(1, 12);
        crysNum2 = random(1, 12);
        crysNum3 = random(1, 12);
        crysNum4 = random(1, 12);
        playerCounter = 0;
        $("#finalScore").text(playerCounter);
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
})