const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

let answers = [];

const askQuestion = function (index) {
  rl.question(questions[index] + " ", (answer) => {
    answers.push(answer);

    if (index < questions.length - 1) {
      askQuestion(index + 1);
    } else {
      printProfile();
      rl.close();
    }
  });
};

const printProfile = function () {
  const profileDescription = `${answers[0]} loves ${answers[1]} while listening to ${answers[2]}, devouring ${answers[4]} for ${answers[3]}. Prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`;

  console.log("\nProfile Description:");
  console.log(profileDescription);
};

askQuestion(0);
