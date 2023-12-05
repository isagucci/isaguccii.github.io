 let currentInput = '0';

    function updateDisplay() {
      document.getElementById('display').innerHTML = `<p class="numbers ${currentInput !== '0' ? 'clickedNumber' : ''}">${currentInput}</p>`;
    }

    function appendToDisplay(value) {
      if (currentInput === '0') {
        currentInput = value;
      } else {
        currentInput += value;
      }
      updateDisplay();
    }

    function appendDecimal() {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    }

    function clearDisplay() {
      currentInput = '0';
      updateDisplay();
    }

    function changeSign() {
      currentInput = (parseFloat(currentInput) * -1).toString();
      updateDisplay();
    }

    function percentage() {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    }

    function appendOperator(operator) {
      currentInput += operator;
      updateDisplay();
    }

    function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
      } catch (error) {
        currentInput = 'Error';
        updateDisplay();
      }
    }