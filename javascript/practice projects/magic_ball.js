//create array to show the answers
$(document).ready(function () {
  var magicBall = {};
  magicBall.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course", "Possible", "In your dreams."]
  

  //hide answer temporarily
  $("#ans").hide();

  magicBall.askQ = (question) => {
    $("#ball9").effect("shake");

    $("#ball9").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

    $("#ans").fadeIn(3000);

    var randomNo = Math.random();
    var length = magicBall.listOfAnswers.length

    console.log(length)
    var randomNoForListOfAns = randomNo * length;
    var randomIndex = Math.floor(randomNoForListOfAns);
    var ans = magicBall.listOfAnswers[randomIndex];

    
    $("#ans").text(ans);
    console.log(question);
    console.log(ans)
  };

  var onClick = function () {
    $("#ans").hide();
    $("#ball9").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

    setTimeout(function () {
      var question = prompt("ASK A YES/NO QUESTION");
      magicBall.askQ(question);
    }, 500);
  };

  $("#ac-button").click(onClick);

});
