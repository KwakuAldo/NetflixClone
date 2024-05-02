let button = document.querySelector('button[aria-controls="faq-card"]');
let faqCard = document.getElementById('card-element');

//event listener for button
button.addEventListener('click', function() {
    let isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) { 
        faqCard.style.display = 'collapse';
        button.setAttribute('aria-expanded', 'false');
    } else {
        faqCard.style.display = 'visible';
        button.setAttribute('aria-expanded', 'true');
    }
});