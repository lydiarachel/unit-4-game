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
