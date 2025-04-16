function calculateAge() {
  const inputField = document.getElementById("dob");
  const resultYears = document.getElementById("years");
  const resultMonths = document.getElementById("months");
  const resultDays = document.getElementById("days");

  const birthDate = new Date(inputField.value);
  if (isNaN(birthDate.getTime())) {
    alert("Please enter a valid date");
    return;
  }

  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;
}
