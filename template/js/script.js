// Находим кнопку "Добавить остановку" по id
let addStopButton = document.getElementById('addStop');

// Находим контейнер для мест остановок
let stopsContainer = document.querySelector('.stops-container');

// Счетчик для уникальных id полей ввода
let stopId = 1;

// Добавляем обработчик события нажатия на кнопку
addStopButton.addEventListener('click', function() {
    // Создаем новое поле ввода для места остановки
    let newStopInput = document.createElement('input');
    newStopInput.setAttribute('type', 'text');
    newStopInput.setAttribute('class', 'form-control mb-3');
    newStopInput.setAttribute('placeholder', 'Введите место остановки');
    newStopInput.setAttribute('id', 'stop' + stopId); // Уникальный id

    // Добавляем новое поле ввода в контейнер для мест остановок
    stopsContainer.appendChild(newStopInput);
    
    // Увеличиваем счетчик для следующего уникального id
    stopId++;
});

function selectCar(card) {
    $('.card').removeClass('selected');
    $(card).addClass('selected');
}