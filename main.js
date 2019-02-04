var login = null;
var massage;

login = prompt('Введите Ваш логин:');
if (login === null) {
    massage = 'Вход оменен!';
} else if (login === 'Админ') {
    var password = null;
    password = prompt('Пароль?');
        if (password === null) {
            massage = 'Вход оменен!';
        } else if (password === 'Черный властелин') {
            massage = 'Добро пожаловать!';
        } else {
            massage = 'Пароль не верен';
        }
} else {
    massage = 'Я Вас не знаю!';
}
alert(massage);