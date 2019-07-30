// Pair programming w/ Jackson Fung

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answer = {
  q1: {
    question: "What's your name?",
    ans: '',
  },
  q2: {
    question: "What's an activity you like doing?",
    ans: ''
  },
  q3: {
    question: "What do you listen to while doing that?",
    ans: ''
  },
  q4: {
    question: "Which meal is your favourite (eg: dinner, brunch, etc.)",
    ans: ''
  },
  q5: {
    question: "What's your favourite thing to eat for that meal?",
    ans: ''
  },
  q6: {
    question: "Which sport is your absolute favourite?",
    ans: '',
  },
  q7: {
    question: "What is your superpower? In a few words, tell us what you are amazing at!",
    ans: ''
  },
};

let keys = Object.keys(answer);

const askQuestion = function(i) {
  rl.question(answer[keys[i]].question, a => {
    answer[keys[i]].ans = a;
    if (i < keys.length - 1) {
      askQuestion(i + 1);
    } else if (i >= keys.length - 1) {
      rl.close();
      console.log(`${answer.q1.ans} likes to ${answer.q2.ans} while listening to ${answer.q3.ans}. They love to eat ${answer.q4.ans} at ${answer.q5.ans}. Their favourite sport is ${answer.q6.ans} and they are amazing at ${answer.q7.ans}.`);
    }
  });
};

askQuestion(0);
