
function addPrefix(input) {
    if (!input.value.startsWith("+38 ")) {
        input.value = "+38 " + input.value;
    }
}

function validateForm() {
    var nameValue = document.getElementById('name').value;
    var phoneValue = document.getElementById('phone').value;
    var emailValue = document.getElementById('email').value;

    var nameRegex = /^[а-яА-ЯІіЇїЄєҐґ']+$/; // Регулярний вираз для кирилиці

    if (nameValue === "") {
        document.getElementById('name-warning').innerText = "Будь ласка, введіть своє ім'я!";
    } else if (!nameRegex.test(nameValue)) {
        document.getElementById('name-warning').innerText = "Будь ласка, введіть лише кирилицю!";
    } else {
        document.getElementById('name-warning').innerText = "";
    }

    if (!phoneValue.startsWith("+38 ") || !/^\+38 \d{10}$/.test(phoneValue)) {
        document.getElementById('phone-warning').innerText = "Будь ласка, введіть правильний номер телефону!";
    } else {
        document.getElementById('phone-warning').innerText = "";
    }

    if (emailValue === "") {
        document.getElementById('email-warning').innerText = "Будь ласка, заповніть це поле!";
    } else {
        document.getElementById('email-warning').innerText = "";
    }

    if (nameRegex.test(nameValue) && phoneValue.startsWith("+38 ") && /^\+38 \d{10}$/.test(phoneValue) && emailValue !== "") {
        // Всі поля заповнені та відповідають вимогам, перенаправлення на result.html
        window.location.href = "result.html";
    }
}


