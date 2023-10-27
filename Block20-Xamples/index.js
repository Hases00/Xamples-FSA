// State
const state = {
  start: ["sheep"],
  target: [],
};

// References
const startingBank = document.querySelector("#startingBank ul");
const targetBank = document.querySelector("#targetBank ul");
const form = document.querySelector("form");

// TODO: Add event listener so that sheep are added when the form is submitted

render();

/**
 * Update the DOM to reflect the current state of the sheep
 */
function render() {
  // Render sheep on the starting bank
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = sheep;
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked

    return li;
  });
  startingBank.replaceChildren(...startingSheep);

  // TODO: Render sheep on the target bank
}
