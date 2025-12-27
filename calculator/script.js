const display = document.getElementById("display");

function appendCharacter(char) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
        // Get the current value from the screen
        let expression = display.value;

        // Replace user-friendly symbols with JavaScript Math functions
        // "g" flag means replace ALL occurrences, not just the first one
        
        expression = expression.replace(/sin/g, 'Math.sin');
        expression = expression.replace(/cos/g, 'Math.cos');
        expression = expression.replace(/tan/g, 'Math.tan');
        expression = expression.replace(/sqrt/g, 'Math.sqrt');
        expression = expression.replace(/pi/g, 'Math.PI');
        expression = expression.replace(/\^/g, '**'); // Python/JS style power operator

        // Evaluate the sanitized expression
        let result = eval(expression);

        // Check if result is a valid number (handles division by zero, etc)
        if (!isFinite(result) || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}