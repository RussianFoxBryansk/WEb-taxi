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




$(document).ready(function() {
    $('#profileCheck').change(function() {
      if($(this).is(":checked")) {
        $('#registrationForm').hide();
        $('#authorizationForm').show();
        $('#noProfileCheck').prop('checked', false);
      } else {
        $('#authorizationForm').hide();
        $('#registrationForm').show();
      }
    });
  
    $('#noProfileCheck').change(function() {
      if($(this).is(":checked")) {
        $('#authorizationForm').hide();
        $('#registrationForm').show();
        $('#profileCheck').prop('checked', false);
      } else {
        $('#registrationForm').hide();
        $('#authorizationForm').show();
      }
    });
  });
  

