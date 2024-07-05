

// Закрытие соединения
connection.end((err) => {
    if (err) {
        console.error('Ошибка закрытия соединения: ' + err.stack);
        return;
    }
    console.log('Соединение закрыто успешно');
});

module.exports = connection;