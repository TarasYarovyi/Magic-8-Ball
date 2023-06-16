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
  ball.style.animation = "shake 1s";

  const question = input.value;
  const reg = /[\w+[\w+|\s+]+\?/;

  answer.style.display = "";
  error.style.display = "";
  answer.style.animation = "";
  error.style.animation = "";

  if (reg.test(question)) {
    answer.textContent = getRandom(answers);
    answer.style.animation = "show 3s";
    error.style.display = "none";
  } else {
    error.textContent = "Please ask your question correctly";
    error.style.animation = "show 3s";
    answer.style.display = "none";
  }
  setTimeout(() => {
    ball.style.animation = "";
    answer.style.animation = "";
    error.style.animation = "";
  }, 3000);
}

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
