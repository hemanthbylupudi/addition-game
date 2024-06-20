let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumber.textContent = Math.ceil(firstRandomNumber);
    secondNumber.textContent = Math.ceil(secondRandomNumber);
    userInput.value = "";
    gameResult.textContent = "";

}
restartGame()

function checkResult() {
    let firstIntNumber = parseInt(firstNumber.textContent);
    let secondIntNumber = parseInt(secondNumber.textContent);

    let result = firstIntNumber + secondIntNumber;
    let userIntInput = parseInt(userInput.value);
    if (userIntInput === result) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!!"
        gameResult.style.backgroundColor = "#1e217c";
    }
}