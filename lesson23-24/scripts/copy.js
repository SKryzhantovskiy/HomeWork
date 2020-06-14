document.addEventListener('copy', (event) => {
    event.preventDefault();
    navigator.clipboard.writeText('Нехорошо чужое брать!!!');
    alert('АЙ-ЯЙ-ЯЙ');    
  });