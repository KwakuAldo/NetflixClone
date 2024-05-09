document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.faq-button');


    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            let idNum = this.id.split('-')[1];
            let cardEl = document.getElementById('faq-' + idNum + '-element');
            cardEl.classList.toggle('hidden')
            console.log("button clicked")
        })
    })
    console.log("DOM loaded")
})