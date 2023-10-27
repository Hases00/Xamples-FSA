form.addEventListener("submit", addSheep);

function addSheep(event) {
  event.preventDefault();

  const numSheep = form.elements.numSheep.value;
  for (let i = 0; i < numSheep; i++) {
    state.start.push("sheep");
  }

  render();
}
function render() {
  // ...
  const targetSheep = state.target.map((sheep) => {
    const element = document.createElement("li");
    element.textContent = sheep;
    return element;
  });
  targetBank.replaceChildren(...targetSheep);
}
function render() {
  const startingSheep = state.start.map(() => {
    // ...
    button.addEventListener("click", moveSheep);
    // ...
  });
}

function moveSheep() {
  const sheep = state.start.pop();
  state.target.push(sheep);

  // OR
  // state.target.push(state.start.pop());

  render();
}
