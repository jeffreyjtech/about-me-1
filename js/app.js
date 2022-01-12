'use strict';

const buzzText = 'BZZZZT! INCORRECT!';
const dingText = 'DING! Correct!';
const errText = 'Please answer with either "yes/no" or "y/n"';

let score = 0;

let user = prompt('Hi there, friend! What\'s your name?');

let yesNoQuestions = ['Micha Pop Quiz!\nQ1: Was Micha once a sailor?','Micha Pop Quiz!\nQ2: Does Micha have a daughter?','Micha Pop Quiz!\nQ3: Did Micha attend college in Maryland?','Micha Pop Quiz!\nQ4: Has Micha ever released a software product before?','Micha Pop Quiz!\nQ5: Does Micha keep any pets?'];
let isYesAnswer = [false, true, false, true, true];
let favoriteAuthors = ['Mark Z. Danielewski', 'Arthur C. Clarke', 'Anne McCaffrey', 'Elizabeth Hayden', 'Octavia Butler', 'Angela Davis', 'Madeleine L\'Engle', 'Zilpha Keatly Snyder', 'Brandon Sanderson', 'Ursula K. Leguin'];

let answer;

alert(`Nice to meet you, ${user}! I'm Micha. Welcome to the "About Me" game! It's a very cool game where you can guess whether facts about me are accurate or not. To play, answer with either "yes/no" or "y/n" in the space provided.\nOkay?`);

for (let i = 0; i < yesNoQuestions.length; i++){
  answer = prompt(yesNoQuestions[i]).toLowerCase();
  console.log(answer);
  if (answer === 'y' || answer === 'yes'){
    if (isYesAnswer[i] === false){
      alert(buzzText);
      continue;
    }
    if (isYesAnswer[i] === true){
      alert(dingText);
      score++;
      continue;
    }
  }
  if (answer === 'n' || answer === 'no'){
    if (isYesAnswer[i] === false){
      alert(dingText);
      score++;
      continue;
    }
    if (isYesAnswer[i] === true){
      alert(buzzText);
      continue;
    }
  }
  else {
    alert(errText);
  }
}

let correctGuess = false;
let guesses = 10;
while (guesses && !correctGuess){
  answer = prompt('Micha Pop Quiz!\nQ6: Guess the number of pets Micha keeps (Hint: it\'s fewer than 10)');
  if (answer < 1){
    alert('Too low.  Guess again.');
    guesses--;
    continue;
  }
  if (answer > 1){
    alert('Too high. Guess again.');
    guesses--;
    continue;
  }
  if (answer === '1'){
    alert(dingText);
    score++;
    correctGuess = true;
    continue;
  }

  alert('Whatever you entered, it wasn\'t the right answer.  Try again.');
}

correctGuess = false;
guesses = 10;
while (guesses && !correctGuess){
  answer = prompt('Micha Pop Quiz!\nQ7: Guess one of my favorite authors.  Format your answer like this: [firstname] [middlename or initial (optional)] [lastname]');
  for (let i = 0; i < favoriteAuthors.length; i++){
    if (answer === favoriteAuthors[i]){
      alert(dingText);
      correctGuess = true;
      score++;
      break;
    }
  }

  if (!correctGuess){
    alert(`Hmmm. ${answer} isn't on my list of top favorites, but MAYBE they should be. Guess again!`);
    guesses--;
  }
}

alert(`Well that sure was fun, wasn't it, ${user}? I thought so, too. 
Your final score was ${score}/7. Great job!
Stick around once these dialogue boxes go away, and you can read all about me. And... uh. Not sure how to end this. Never hosted a gameshow before... uh...
\nThanks for playing, and please remember to spay and neuter your pets!`);
