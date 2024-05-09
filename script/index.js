document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.faq-button');
    let currentOpen = null;

// loop through the buttons
    buttons.forEach((button, index) => {
        // listen for clicks/taps
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            let idNum = this.id.split('-')[1];
            let cardEl = document.getElementById('faq-' + idNum + '-element');
            if (currentOpen && currentOpen !== cardEl) {
                currentOpen.classList.add('hidden');
            }
            cardEl.classList.toggle('hidden')
            currentOpen = cardEl.classList.contains('hidden') ? null : cardEl;
            console.log("button clicked")
        })
    })

    // listen for clicks/taps on the document
    document.addEventListener('click', function () {
        if (currentOpen) {
            currentOpen.classList.add('hidden');
            currentOpen = null;
        }
    })

    console.log("DOM loaded")
})