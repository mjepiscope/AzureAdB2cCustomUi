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

    setupObservers(spinner);
}

function hasErrorMessage() {
    var paragraphs = Array.prototype.slice.call(window.document.querySelectorAll('div.error p'), 0);

    for (var i = 0; i < paragraphs.length; i++) {
        if (!!paragraphs[i].textContent 
            && paragraphs[i].parentElement.style.display !== 'none')
            return true;
    }

    return false;
}

function setupObservers(spinner) {
    setupParagraphObservers(spinner);
    setupDivObservers(spinner);
}

function setupParagraphObservers(spinner) {
    var pObserver = new window.MutationObserver(function(mutations) {
        spinner.style.display = 'none';
    }.bind(this));

    var paragraphs = Array.prototype.slice.call(window.document.querySelectorAll('div.error p'), 0);
    
    paragraphs.forEach(function(p) {
        pObserver.observe(p, {characterData: true, childList: true});
    });
}

function setupDivObservers(spinner) {
    var dObserver = new window.MutationObserver(function(mutations) {
        if (mutations.length !== 1) return;

        var div = mutations[0].target;

        if (div.style.display !== 'none') {
            spinner.style.display = 'none';
        }
    }.bind(this));

    var divs = Array.prototype.slice.call(window.document.querySelectorAll('div#codeVerification'), 0);
    
    divs.forEach(function(d) {
        dObserver.observe(d, {characterData: true, childList: true});
    });
}

function initializeControls() {
    changeSigninText();
    setupSpinner();
}

initializeControls();