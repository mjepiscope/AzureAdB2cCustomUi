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
    var elements = document.querySelectorAll('div.intro h2, div.buttons button#next');

    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = 'Log in';
    }
}

function toggleSpinner() {
    var buttons = document.querySelector('div.buttons').querySelectorAll('button#next, button#verifyCode, button#cancel');
    var spinner = document.querySelector('div.spinner-overlay');

    spinner.style.display = 'none';

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',
            function() {
                spinner.style.display = 'block';
            });
    }

    //Observe the paragraph
    var pObserver = new window.MutationObserver( function(mutations) {
        spinner.style.display = 'none';
    }.bind(this));

    var paragraphs = document.querySelectorAll('div.error p');

    for (i = 0; i < paragraphs.length; i++) {
        pObserver.observe(paragraphs[i], {characterData: true, childList: true});
    }
}

function initialize() {
    changeSigninText();
    toggleSpinner();
}

initialize();