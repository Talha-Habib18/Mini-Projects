// Roll button ko uske ID se select kar rahe hain
const buttonEl = document.getElementById("roll-button");

// Dice dikhane wali jagah ko select kar rahe hain
const diceEl = document.getElementById("dice");

// Roll history dikhane wali list ko select kar rahe hain
const rollHistoryEl = document.getElementById("roll-history");

// Sabhi previous rolls ko store karne ke liye ek array banayi
let historyList = [];

// Dice roll karne ka function
function rollDice() {
  // Random number generate kar rahe hain (1 se 6 ke beech)
  const rollResult = Math.floor(Math.random() * 6) + 1;

  // Jo number aaya uske according dice ka face get kar rahe hain
  const diceFace = getDiceFace(rollResult);

  // Dice ka result screen par show kar rahe hain
  diceEl.innerHTML = diceFace;

  // Roll result ko historyList mein add kar rahe hain
  historyList.push(rollResult);

  // Roll history ko update kar rahe hain
  updateRollHistory();
}

// Roll history dikhane ke liye function
function updateRollHistory() {
  // Pehle purani history clear kar dete hain
  rollHistoryEl.innerHTML = "";

  // Har ek roll ko list mein dikhate hain
  for (let i = 0; i < historyList.length; i++) {
    // Ek new list item banate hain
    const listItem = document.createElement("li");

    // Usmein roll number aur dice ka face add karte hain
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;

    // List item ko roll history list mein add karte hain
    rollHistoryEl.appendChild(listItem);
  }
}

// Ye function dice number ke according Unicode dice face return karta hai
function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;"; // ⚀
    case 2:
      return "&#9857;"; // ⚁
    case 3:
      return "&#9858;"; // ⚂
    case 4:
      return "&#9859;"; // ⚃
    case 5:
      return "&#9860;"; // ⚄
    case 6:
      return "&#9861;"; // ⚅
    default:
      return ""; // Agar kuch galat ho jaye to
  }
}

// Jab roll button par click ho to ye kaam hoga
buttonEl.addEventListener("click", () => {
  // Dice mein animation class add karte hain (CSS se roll effect aayega)
  diceEl.classList.add("roll-animation");

  // 1 second baad (1000ms) animation hatake dice roll karte hain
  setTimeout(() => {
    // Animation class ko remove karte hain
    diceEl.classList.remove("roll-animation");

    // Actual dice roll function call karte hain
    rollDice();
  }, 1000);
});
