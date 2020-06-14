const input = document.querySelector('input');
const log = document.getElementById('value');

input.addEventListener('input', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;
}