const form = document.getElementById('form');
form.addEventListener('reset', logReset);



function logReset(event) {
    let name = document.getElementById('userName').value;
    alert(`Давай по новой ${name}. Всё фигня.`)
}