function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the string and compare it correctly
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr; // This will correctly check for palindromes
}

function checkPalindrome() {
  const inputField = document.getElementById("text-input"); // Get input field
  const resultDisplay = document.getElementById("result"); // Get result display area
  const word = inputField.value.trim(); // get input value and remove extra spaces

  // Check if input is empty
  if (word == "") {
    resultDisplay.textContent = "Please enter a word";
    resultDisplay.style.background = "red"; // show error messege in red
    resultDisplay.style.color = "white"; // show error messege in red
    return;
  }

  if (isPalindrome(word)) {
    resultDisplay.innerHTML = "Yes. It's a Palindrome!";
    resultDisplay.style.background = "green";
    resultDisplay.style.color = "white";
  } else {
    resultDisplay.innerHTML = "Nope. It's Not a Palindrome!";
    resultDisplay.style.background = "red";
    resultDisplay.style.color = "white";
  }
}
