// Находим кнопку "Добавить остановку" по id
let addStopButton = document.getElementById('addStop');

// Находим контейнер для мест остановок
let stopsContainer = document.querySelector('.stops-container');

// Функция для создания обработчика события удаления остановки
function createDeleteHandler(stopInput) {
    return function() {
        stopsContainer.removeChild(stopInput); // Удаляем поле ввода для места остановки из контейнера
    };
}

// Счетчик для уникальных id полей ввода
let stopId = 1;

// Добавляем обработчик события нажатия на кнопку
addStopButton.addEventListener('click', function() {
    // Создаем новое поле ввода для места остановки
    let newStopInput = document.createElement('div');
    newStopInput.classList.add('d-flex', 'mb-2');
    
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', 'Введите место остановки');
    input.setAttribute('id', 'stop' + stopId); // Уникальный id

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.setAttribute('class', 'btn btn-outline-secondary ml-2');
    deleteButton.addEventListener('click', createDeleteHandler(newStopInput));

    newStopInput.appendChild(input);
    newStopInput.appendChild(deleteButton);

    // Добавляем новое поле ввода в контейнер для мест остановок
    stopsContainer.appendChild(newStopInput);

    // Увеличиваем счетчик для следующего уникального id
    stopId++;
});

function selectCar(card) {
    $('.card').removeClass('selected');
    $(card).addClass('selected');
}



  

    // Предположим, у вас есть массив промокодов promoCodes
    let promoCodes = ['CODE1', 'CODE2', 'CODE3'];

    // Найдем элементы для отображения в модальном окне
    let promoCodesSection = document.getElementById('promoCodesSection');
    let noPromoCodesMessage = document.getElementById('noPromoCodesMessage');
    
    // Проверяем, есть ли промокоды
    if (promoCodes.length > 0) {
        // Если промокоды найдены, отображаем блок promoCodesSection и заполняем его
        promoCodesSection.style.display = 'block';
        promoCodesSection.innerHTML = '<p>Ваши промокоды: ' + promoCodes.join(', ') + '</p>';
        noPromoCodesMessage.style.display = 'none';
    } else {
        // Если промокодов нет, скрываем блок promoCodesSection и отображаем сообщение об их отсутствии
        promoCodesSection.style.display = 'none';
        noPromoCodesMessage.style.display = 'block';
    }
