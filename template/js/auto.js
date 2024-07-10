// Функция для отображения характеристик автомобиля в модальном окне
function showCarDetails(carModel, year, mileage, enginePower, transmission, drive, price, photo) {
    var modalContent = document.getElementById('carDetailsModalContent');
    modalContent.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="${photo}" alt="${carModel}" class="modal-car-image" style="width: 100%;">
                </div>
                <div class="col-md-6">
                    <h2>${carModel}</h2>
                    <table class="table">
                        <tr>
                            <td>Год выпуска:</td>
                            <td>${year}</td>
                        </tr>
                        <tr>
                            <td>Пробег:</td>
                            <td>${mileage}</td>
                        </tr>
                        <tr>
                            <td>Мощность двигателя:</td>
                            <td>${enginePower}</td>
                        </tr>
                        <tr>
                            <td>Коробка передач:</td>
                            <td>${transmission}</td>
                        </tr>
                        <tr>
                            <td>Привод:</td>
                            <td>${drive}</td>
                        </tr>
                        <tr>
                            <td>₽/сутки:</td>
                            <td>${price}</td>
                        </tr>
                    </table>
                    <div class="text-center">
                        <button class="btn btn-primary btn-block">Арендовать</button>
                        <br>
                        <button class="btn btn-secondary btn-block">Зарезервировать</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#carDetailsModal').modal('show');
}

// Обработчик клика на изображение автомобиля
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('card-img-top')) {
        var card = e.target.closest('.card');
        var carModel = card.querySelector('.card-title').innerText;
      
        // Замените card.dataset.year и другие card.dataset.xxx на соответствующие переменные из вашей базы данных или другого места, где хранятся данные об автомобиле
      
        var year = ""; // Замените на значение из вашей базы данных
        var mileage = ""; // Замените на значение из вашей базы данных
        var enginePower = ""; // Замените на значение из вашей базы данных
        var transmission = ""; // Замените на значение из вашей базы данных
        var drive = ""; // Замените на значение из вашей базы данных
        var price = ""; // Замените на значение из вашей базы данных
        var photo = e.target.src;

        showCarDetails(carModel, year, mileage, enginePower, transmission, drive, price, photo);
    }
});

function filterCarsByCategory(category) {
    var carCards = document.querySelectorAll('.full-car-card');
    carCards.forEach(function(card) {
    if (card.classList.contains(category)) {
    card.style.display = 'block';  // Отобразить автомобили выбранной категории
    } else {
    card.style.display = 'none';   // Скрыть автомобили других категорий
    }
    });
    }
    
    function filterCarsByCategory(category) {
        let carCards = document.querySelectorAll('.full-car-card');
        carCards.forEach(function(card) {
          if (card.classList.contains(category + '-car')) {
            card.style.display = 'block';  // Отобразить автомобили выбранной категории
          } else {
            card.style.display = 'none';   // Скрыть автомобили других категорий
          }
        });
      }
      
      // Обработчики клика для кнопок категорий
      document.getElementById('allCarsBtn').addEventListener('click', function() {
        filterAllCars();
      });
      
      document.getElementById('economyBtn').addEventListener('click', function() {
        filterCarsByCategory('economy');
      });
      
      document.getElementById('sedanBtn').addEventListener('click', function() {
        filterCarsByCategory('sedan');
      });
      
      document.getElementById('SUVBtn').addEventListener('click', function() {
        filterCarsByCategory('SUV');
      });
      
      document.getElementById('luxuryBtn').addEventListener('click', function() {
        filterCarsByCategory('luxury');
      });
      
      document.getElementById('hatchbackBtn').addEventListener('click', function() {
        filterCarsByCategory('hatchback');
      });
      
      function filterAllCars() {
        var allCards = document.querySelectorAll('.full-car-card');
        allCards.forEach(function(card) {
          card.style.display = '';  // Отобразить все автомобили
        });
      }
    function filterCards(category) {
    let allCards = document.querySelectorAll('.car-card .col-lg-4');
    allCards.forEach(card => {
    card.style.display = 'none';
    });
    let selectedCards = document.querySelectorAll('.' + category);
selectedCards.forEach(card => {
    card.style.display = 'block';
});
}