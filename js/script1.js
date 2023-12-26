
function validateForm() {
    var nameValue = document.querySelector('.form-field[name="name"]').value;
    var phoneValue = document.querySelector('.form-field[name="phone"]').value;
    var problemValue = document.querySelector('.form-textarea').value;

    if (nameValue.trim() === '') {
        document.getElementById('name-warning').innerText = "Будь ласка, введіть ім'я!";
        return false;
    } else {
        document.getElementById('name-warning').innerText = "";
    }

    if (phoneValue.trim() === '') {
        document.getElementById('phone-warning').innerText = "Будь ласка, введіть телефон!";
        return false;
    } else {
        document.getElementById('phone-warning').innerText = "";
    }

    if (problemValue.trim() === '') {
        document.getElementById('problem-warning').innerText = "Будь ласка, опишіть проблему!";
        return false;
    } else {
        document.getElementById('problem-warning').innerText = "";
    }

    // Перенаправлення на сторінку result.html
    window.location.href = 'result.html';

    return false; // Забороняємо відправку форми, так як ми робимо перенаправлення
}

