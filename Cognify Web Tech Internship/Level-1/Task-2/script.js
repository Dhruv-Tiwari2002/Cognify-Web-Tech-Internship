const addButton = document.getElementById("add-btn");
const resetButton = document.getElementById("reset-btn");
const resultDiv = document.getElementById("result");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const welcomeMessage = document.getElementById("welcome-message");

// Display a dynamic welcome message based on the current time
const setWelcomeMessage = () => {
    const hours = new Date().getHours();
    let message = "Welcome!";
    if (hours >= 4 && hours < 12) {
        message = "Good Morning! Let's calculate!";
    } else if (hours >= 12 && hours < 18) {
        message = "Good Afternoon! Ready to crunch some numbers?";
    } else {
        message = "Good Evening! Let's do some math!";
    }
    welcomeMessage.textContent = message;
};

// Perform addition and validate input
const add = () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields!");
        return;
    }

    addButton.classList.add("clicked");
    setTimeout(() => {
        addButton.classList.remove("clicked");
    }, 300);

    resultDiv.textContent = `Result: ${num1 + num2}`;
};

// Reset inputs and result
const reset = () => {
    input1.value = "";
    input2.value = "";
    resultDiv.textContent = "0";
};

// Set up event listeners
addButton.onclick = add;
resetButton.onclick = reset;

// Initialize page
window.onload = () => {
    setWelcomeMessage();
    reset();
};
