    // Function to change the main photo and details
    function changeMainPhoto(button) {
        var card = button.closest('.car-card');
        var mainPhoto = document.getElementById('mainPhoto');
        var selectedPhoto = card.querySelector('.card-img-top').src;
        mainPhoto.src = selectedPhoto;

        // Here you can update the other details based on the selected car
        // You can use a data attribute of the card to store the details and retrieve them here

        // For example, you can set data attributes on each card to store its details
        var carModel = card.dataset.model; // Replace with the actual data attribute name
        var year = card.dataset.year; // Replace with the actual data attribute name
        var mileage = card.dataset.mileage; // Replace with the actual data attribute name
        var enginePower = card.dataset.enginePower; // Replace with the actual data attribute name
        var transmission = card.dataset.transmission; // Replace with the actual data attribute name
        var drive = card.dataset.drive; // Replace with the actual data attribute name
        var price = card.dataset.price; // Replace with the actual data attribute name

        // Update the details section with the selected car's details
        var carDetails = document.querySelector('.car-details');
        carDetails.innerHTML = `
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
                    <td>Коробка:</td>
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
                <button class="btn btn-primary btn-block mb-2">Арендовать</button>
                <br>
                <button class="btn btn-success btn-block">Зарезервировать</button>
            </div>
        `;
    }

function changeMainPhoto(photo) {
    document.getElementById('mainPhoto').src = photo.src;
  }