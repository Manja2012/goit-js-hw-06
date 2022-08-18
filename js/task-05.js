const input = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');
function onInputAction(event){
    const valueInput = event.currentTarget.value;
    if (valueInput.length === 0){
        return nameInput.textContent = 'Anonymous';
    }
    nameInput.textContent = valueInput;
}
input.addEventListener('input',onInputAction )