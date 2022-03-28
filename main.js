const buttons = document.querySelectorAll(".btn");
const item = document.querySelector(".item");

const types = [
  {
    class: "circle-className",
    typeName: "circle",
  },
  {
    class: "disappear-className",
    typeName: "disappear",
  },
  {
    class: "changeColor-className",
    typeName: "change-color",
  },
  {
    class: "bigger-className",
    typeName: "bigger",
  },
];

buttons.forEach((btn) => {
  btn.onclick = () => {
    const typeBtn = btn.getAttribute(["typeButton"]);
    const chooseType = types.find((t) => t.typeName === typeBtn);
    types.forEach((t) => {
      item.classList.remove(t.class);
    });
    item.classList.add(chooseType.class);
  };
});
