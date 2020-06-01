//$('document').ready(function() {

//    // Change text to Log in (MPP default)
//    $('div.intro h2, div.buttons button#next').text('Log in');

//    // Toggle the spinner after button click and after error is displayed
//    $('div.spinner-overlay').hide();

//    $('div.buttons')
//        .find('button#next, button#verifyCode, button#cancel')
//        .click(function() {
//            $('div.spinner-overlay').show();
//    });

//    //Observe the paragraph
//    var pObserver = new window.MutationObserver( function(mutations) {
//        $('div.spinner-overlay').hide();
//    }.bind(this));

//    $('div.error').find('p').each(function() {
//        pObserver.observe(this, {characterData: true, childList: true});
//    });
//});

function changeSigninText() {
    var elements = window.document.querySelectorAll('div.intro h2, div.buttons button#next');

    elements.forEach(function(e) {
        e.textContent = 'Log in';
    });

    //for (var i = 0; i < elements.length; i++) {
    //    elements[i].textContent = 'Log in';
    //}
}

function toggleSpinner() {
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

    //for (i = 0; i < buttons.length; i++) {
    //    buttons[i].addEventListener('click',
    //        function() {
    //            spinner.style.display = 'block';
    //        });
    //}

    //Observe the paragraph
    var pObserver = new window.MutationObserver( function(mutations) {
        spinner.style.display = 'none';
    }.bind(this));

    var paragraphs = window.document.querySelectorAll('div.error p');

    paragraphs.forEach(function(p) {
        pObserver.observe(p, {characterData: true, childList: true});
    });

    //for (i = 0; i < paragraphs.length; i++) {
    //    pObserver.observe(paragraphs[i], {characterData: true, childList: true});
    //}
}

function initializeControls() {
    changeSigninText();
    toggleSpinner();
}

setTimeout(initializeControls(), 500);