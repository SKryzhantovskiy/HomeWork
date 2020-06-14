let client = document.getElementById('client');

document.addEventListener('mousemove', function(event) {
    client.value = event.clientX + ' : ' + event.clientY;
});




window.onbeforeunload = function() {
    return "Данные не сохранены. Точно перейти?";
  };