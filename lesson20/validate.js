function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    switch (login) {
        case 'beeline':
            alert ('Указанный логин занят, выберите другой');
            break;
        case 'beeinterns':
            alert ('Указанный логин занят, выберите другой');
            break;
        case 'bee':
            alert ('Указанный логин занят, выберите другой');
            break;
        default:
            break;
    }    
    
    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else  if (!firstName) {
        alert('Введите имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (gender === 'male') {
        alert(`Уважаемый ${firstName}, заявка создана`);
    } else if (gender === 'female') {
        alert(`Уважаемая ${firstName}, заявка создана`) 
    }
}