"use strict";

const ball = document.querySelector("#ball");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

ball.addEventListener("click", checkQuestion);

function checkQuestion() {
  ball.classList.add("shake-animation");
  setTimeout(() => {
    ball.classList.remove("shake-animation");
    const question = input.value;
    const reg = /[\w+[\w+|\s+]+\?/;

    if (reg.test(question)) {
      answer.textContent = getRandom(answers);
    } else {
      error.textContent = "Please ask your question correctly";
    }
  }, 1000);
}

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
