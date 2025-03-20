// frontend/script.js

document.addEventListener('DOMContentLoaded', function () {
    const reserveButton = document.getElementById('reserveButton');

    reserveButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8000/api/reserve/', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText);
                if (response.status === 'success') {
                    alert('Reservation successful!');
                } else {
                    alert('Reservation failed. Please try again.');
                }
            }
        };

        const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
        xhr.send(data);
    });
});
