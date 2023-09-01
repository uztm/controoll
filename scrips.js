document.getElementById('burgerButton').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navbarNav').classList.toggle('show');
    document.querySelectorAll('.navbar-togglers span').forEach(span => {
        span.classList.toggle('active');
    });
});


const botToken = 'YOUR_BOT_TOKEN';

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = `Name: ${name}\nPhone: ${phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=YOUR_CHAT_ID&text=${encodeURIComponent(message)}`;

    fetch(url, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Your message has been sent to the bot.');
                // You can redirect the user or perform other actions here if needed.
            } else {
                alert('An error occurred while sending the message to the bot.');
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while sending the message to the bot.');
        });
});