// Get the output element
const output = document.getElementById('output');

// Get all the buttons
const buttons = document.querySelectorAll('.calc button');

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button's value
    const value = button.textContent;

    // Perform different actions based on the button's value
    switch(value) {
      case 'Cl':
        // Clear the output
        output.value = '';
        break;
      case 'Del':
        // Delete the last character from the output
        output.value = output.value.slice(0, -1);
        break;
      case '=':
        // Evaluate the expression in the output
        try {
          output.value = eval(output.value);
        } catch (e) {
          output.value = 'Error';
        }
        break;
      default:
        // Append the button's value to the output
        output.value += value;
        break;
    }
  });
});


