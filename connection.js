// connection.js
const mysql = require('mysql');

// Создание соединения
const connection = mysql.createConnection({
    host: 'localhost',  // Хост базы данных
    user: 'root',   // Имя пользователя
    password: '',  // Пароль
    database: 'Carsharing'   // Имя базы данных
});

// Установка соединения
connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения: ' + err.stack);
        return;
    }
    console.log('Подключение к базе данных успешно', connection.threadId);
});

// Экспорт соединения, чтобы его можно было использовать в других модулях
module.exports = connection;