function changeSigninText() {
    // Added slice to support IE 11
    var elements = Array.prototype.slice.call(window.document.querySelectorAll('div.intro h2, div.buttons button#next'), 0);    

    elements.forEach(function(e) {
        e.textContent = 'Log in';
    });
}

function setupSpinner() {
    var divButtons = window.document.querySelector('div.buttons');

    if (!divButtons) return;

    var buttons = Array.prototype.slice.call(divButtons.querySelectorAll('button#next, button#verifyCode, button#cancel'), 0);
    var spinner = window.document.querySelector('div.spinner-overlay');

    spinner.style.display = 'none';

    buttons.forEach(function(b) {
        b.addEventListener('click',
            function() {

                if (!hasErrorMessage()) {
                    spinner.style.display = 'block';
                }
            });
    });

    //Observe the paragraph
    var pObserver = new window.MutationObserver(function(mutations) {
        spinner.style.display = 'none';
    }.bind(this));

    var paragraphs = Array.prototype.slice.call(window.document.querySelectorAll('div.error p'), 0);
    
    paragraphs.forEach(function(p) {
        pObserver.observe(p, {characterData: true, childList: true});
    });
}

function hasErrorMessage() {
    var paragraphs = Array.prototype.slice.call(window.document.querySelectorAll('div.error p'), 0);

    for (var i = 0; i < paragraphs.length; i++) {
        var p = paragraphs[i];

        if (!p.textContent) continue;
        else return true;
    }

    return false;
}

function initializeControls() {
    changeSigninText();
    setupSpinner();
}

initializeControls();