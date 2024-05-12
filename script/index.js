document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.faq-button');
    let currentOpen = null;

// loop through the buttons
    buttons.forEach((button, index) => {
        // listen for clicks/taps
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            let idNumber = this.id.split('-')[1];
            let cardElement = document.getElementById('faq-' + idNumber + '-element');
            if (currentOpen && currentOpen !== cardElement) {
                currentOpen.classList.add('hidden');
            }
            cardElement.classList.toggle('hidden')
            currentOpen = cardElement.classList.contains('hidden') ? null : cardElement;
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