// Задание 1
const body = document.body;
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  body.classList.toggle("body-black");
});

// Задание 2
const textarea = document.querySelector('#message');
const counter = document.querySelector('#char-counter');
const max = 50;

textarea.addEventListener('input', () => {
  const remaining = max - textarea.value.length;
  counter.textContent = remaining;
  if (remaining <= 10) {
    counter.classList.add('danger');
  } else {
    counter.classList.remove('danger');
  }
});


// Задние 3
const like = document.querySelector("#like");
let plusik = document.querySelector(".plusik");
like.addEventListener("click", () => {
  like.classList.toggle("like-plus");
  plusik.textContent++;
});

//Задание 4
const inputs = document.querySelectorAll(".input-group input");

inputs.forEach((input) => {
  const statusText = input.parentElement.querySelector(".status-text");
  input.addEventListener("focus", () => {
    statusText.textContent = "Заполняется...";
  });
  input.addEventListener("blur", () => {
    statusText.textContent = "";
  });
});

// Задание 5
const openBtn = document.querySelector('#open-modal-btn');
const closeBtn = document.querySelector('#close-modal-btn');
const confirmBtn = document.querySelector('#confirm-modal-btn');
const overlay = document.querySelector('#modal-overlay');

openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

confirmBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});