const dobInput = document.querySelector("#enter-dob");
const luckyNumberInput = document.querySelector("#enter-luckyNumber");

const output = document.querySelector("#luck-result");

const checkBtn = document.querySelector("#check");

function checkSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}

checkBtn.addEventListener("click", function () {
  if (dobInput.value && luckyNumberInput.value > 0) {
    const dobSum = checkSum(dobInput.value);
    const luckyNum = Number(luckyNumberInput.value);

    const yourLuck = dobSum % luckyNum;
    if (yourLuck === 0) {
      output.value = "Yeah! you are lucky one 🥳";
    } else {
      output.value = "This might not be your lucky number";
    }
  } else {
    alert("Please enter positive values in required fields.");
  }
});

// console.log(dobInput);
