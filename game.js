var nameGuest = prompt('My name is Ali, what is your name?');
  alert('Please to meet you ' + nameGuest +'!');
var guessingGame = function() {
  var answersToQuestions = ["YES", "YES", "YES", "NO", "NO"];
  var questions = ['I have witnessed 3 solar eclipse since I was born, Yes or No',
  'I have hiked trails no wider than a 12 inches ruler, Yes or No',
  'I was once detained by the Secret Service in Disneyland, Yes or No',
  'Oscar Wilde has published five novels before he died, Yes or No',
  'Van Gogh painted The Starry Night with Paul Gaugauin in Britanny, Yes or No'];
var guess = 0;
  for (var i = 0; i < answersToQuestions.length; i++) {
    var userInput = prompt(questions[i]);
    if (userInput.toUpperCase() === answersToQuestions[i]) {
      alert('That is correct.');
      guess += 1;
      document.getElementById('score').innerHTML = guess;
    } else {
      alert('Sorry, that is incorrect.');
    }
  }
  if (guess === 5 || guess === 4) {
    alert("You guessed " + guess + " out of 5! Way to go!");
  } else if (guess === 3 || guess === 2){
    alert("You guessed " + guess + " out of 5! Not bad.");
  } else {
    alert("You guessed " + guess + " out of 5! Nice try, you should have an adventure with me.");
  }
};
