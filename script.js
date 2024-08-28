// Przewijanie nagłówka (header)
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu responsywne
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});


// Paginacja usług
const services = document.querySelectorAll('.services .service-card');
const paginationLinks = document.querySelectorAll('.pagination a');
const servicesPerPage = 9; // Liczba usług na stronę

paginationLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        paginationLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        showServices(index);
    });
});

function showServices(pageIndex) {
    const start = pageIndex * servicesPerPage;
    const end = start + servicesPerPage;

    services.forEach((service, index) => {
        if (index >= start && index < end) {
            service.style.display = 'block';
        } else {
            service.style.display = 'none';
        }
    });
}

// Inicjalizacja
showServices(0);


// Rozwijane FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    question.addEventListener('click', function() {
        item.classList.toggle('open');
        const answer = item.querySelector('.answer');
        if (item.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});


// Przycisk przewijania do góry
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Efekty hover i focus na kafelkach
const cards = document.querySelectorAll('.card, .service-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('hover');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });
});


