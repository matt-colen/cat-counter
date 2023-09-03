let count = 0;

function increment() {
  ++count;
  document.querySelector("#count-el").textContent = count;
}

function save() {
  let countStr = ` ${count} - `;
  let saveEl = document.querySelector("#save-el");
  saveEl.textContent += countStr;
  document.querySelector("#count-el").textContent = 0;
  count = 0;
}

document.querySelector("#increment-btn").addEventListener("click", () => {
  increment();
});

document.querySelector("#save-btn").addEventListener("click", () => {
  save();
});
