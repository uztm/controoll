document.getElementById('burgerButton').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navbarNav').classList.toggle('show');
    document.querySelectorAll('.navbar-togglers span').forEach(span => {
        span.classList.toggle('active');
    });
});