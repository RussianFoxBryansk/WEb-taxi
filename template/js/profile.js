
  // JavaScript для смены имени
  document.getElementById('changeNameIcon').addEventListener('click', function() {
    let newName = prompt('Введите новое имя пользователя:');
    if (newName) {
        document.querySelector('.card-title').textContent = newName;
    }
  });
  
  // JavaScript для отображения рейтинга с использованием звездочек
  function generateStars(rating) {
    let starHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starHTML += '<img src="media/star/star-sharp-svgrepo-com (1).svg"  /img>'; // Звезда
        } else if (i - 0.5 <= rating) {
            starHTML += '<img  src="media/star/star-sharp-half-svgrepo-com (1).svg" /img>'; // Половинка звезды
        } else {
            starHTML += '<img src="media/star/star-sharp-svgrepo-com (2).svg"  /img>'; // Пустая звезда
        }
    }
    return starHTML;
  }
  
  let userRating = 0; // Пример рейтинга (можно заменить на свой)
  document.getElementById('ratingStars').innerHTML = generateStars(userRating);

  // JavaScript для смены фото профиля
document.getElementById('changePhotoText').addEventListener('click', function() {
    document.getElementById('uploadPhoto').click();
});

document.getElementById('uploadPhoto').addEventListener('change', function() {
    let file = this.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('userPhoto').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll('.edit-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        let inputField = this.nextElementSibling;
        let checkIcon = this.nextElementSibling.nextElementSibling;
        
        inputField.removeAttribute('disabled');
        inputField.focus();
        checkIcon.style.display = 'inline';
        this.style.display = 'none';
    });
});

document.querySelectorAll('.check-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        let inputField = this.previousElementSibling;
        let editIcon = inputField.previousElementSibling;

        inputField.setAttribute('disabled', true);
        editIcon.style.display = 'inline';
        this.style.display = 'none';
    });
});

document.getElementById('paymentMethod').addEventListener('change', function() {
    let cardNumberInput = document.getElementById('cardNumber');
    let checkIcon = cardNumberInput.nextElementSibling;

    if (this.value === 'card') {
        cardNumberInput.style.display = 'inline';
        checkIcon.style.display = 'inline';
    } else {
        cardNumberInput.style.display = 'none';
        checkIcon.style.display = 'none';
    }
});