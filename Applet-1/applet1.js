function updateDisplay() {
    var textbox = document.getElementById('textbox');
    var displayText = document.getElementById('displayText');
    displayText.textContent = textbox.value;
}

function showAlert() {
    var textbox = document.getElementById('textbox');
    alert("hello " + textbox.value);
}