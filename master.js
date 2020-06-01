function changeSigninText() {
    var elements = window.document.querySelectorAll('div.intro h2, div.buttons button#next');

    elements.forEach(function(e) {
        e.textContent = 'Log in';
    });
}

function setupSpinner() {
    var divButtons = window.document.querySelector('div.buttons');

    if (!divButtons) return;

    var buttons = divButtons.querySelectorAll('button#next, button#verifyCode, button#cancel');
    var spinner = window.document.querySelector('div.spinner-overlay');

    spinner.style.display = 'none';

    buttons.forEach(function(b) {
        b.addEventListener('click',
            function() {
                spinner.style.display = 'block';
            });
    });

    //Observe the paragraph
    var pObserver = new window.MutationObserver( function(mutations) {
        spinner.style.display = 'none';
    }.bind(this));

    var paragraphs = window.document.querySelectorAll('div.error p');

    paragraphs.forEach(function(p) {
        pObserver.observe(p, {characterData: true, childList: true});
    });
}

function initializeControls() {
    changeSigninText();
    setupSpinner();
}

initializeControls();