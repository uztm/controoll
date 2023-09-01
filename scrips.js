document.getElementById('burgerButton').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navbarNav').classList.toggle('show');
    document.querySelectorAll('.navbar-togglers span').forEach(span => {
        span.classList.toggle('active');
    });
});


const botToken = '6677425770:AAHoMXWmxYbIlZ7arQoYgpWrwz40lH-7z1U'; // Replace with your bot token
const chatId = '-901384057'; // Replace with the chat ID you want to send the message to

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = `Name: ${name}\nPhone: ${phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
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
