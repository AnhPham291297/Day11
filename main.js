const modal = document.querySelector(".modal");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const myH1 = document.querySelector("#myH1");

btn1.onclick = () => {
  modal.classList.toggle("hidden");
};

btn2.onclick = () => {
  modal.classList.toggle("change_color");
};

btn3.addEventListener("click", () => {
  modal.classList.toggle("open");
});

btn4.onclick = () => {
  myH1.innerHTML = "Tenology school";
  myH1.style.color = "red";
};

btn5.onclick = () => {
  modal.classList.toggle("hidden");
  myH1.innerHTML = "Mindx";
  myH1.style.color = "#000";
  modal.classList.remove("change_color");
};
