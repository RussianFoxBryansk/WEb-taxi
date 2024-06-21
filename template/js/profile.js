
  // JavaScript для смены имени
  document.getElementById('changeNameIcon').addEventListener('click', function() {
    var newName = prompt('Введите новое имя пользователя:');
    if (newName) {
        document.querySelector('.card-title').textContent = newName;
    }
  });
  
  // JavaScript для отображения рейтинга с использованием звездочек
  function generateStars(rating) {
    var starHTML = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            starHTML += '&#9733;'; // Звезда
        } else if (i - 0.5 <= rating) {
            starHTML += '&#11242;'; // Половинка звезды
        } else {
            starHTML += '&#9734;'; // Пустая звезда
        }
    }
    return starHTML;
  }
  
  var userRating = 3; // Пример рейтинга (можно заменить на свой)
  document.getElementById('ratingStars').innerHTML = generateStars(userRating);

  // JavaScript для смены фото профиля
document.getElementById('changePhotoText').addEventListener('click', function() {
    document.getElementById('uploadPhoto').click();
});

document.getElementById('uploadPhoto').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('userPhoto').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll('.edit-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const paymentMethod = this.nextElementSibling;
        const cardNumberInput = this.nextElementSibling.nextElementSibling;
        const checkIcon = this.nextElementSibling.nextElementSibling.nextElementSibling;
        cardNumberInput.style.display = (paymentMethod.value === 'card') ? 'block' : 'none';
        if (paymentMethod.value === 'card') {
            cardNumberInput.removeAttribute('disabled');
            checkIcon.style.display = 'inline';
        }
    });
});

document.querySelectorAll('.check-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const inputField = this.previousElementSibling;
        this.style.display = 'none';
        inputField.setAttribute('disabled', 'true');
    });
});