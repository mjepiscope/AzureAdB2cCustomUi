$('document').ready(function() {

    // Change text to Log in (MPP default)
    $('div.intro h2, div.buttons button#next').text('Log in');

    // Toggle the spinner after button click and after error is displayed
    $('div.spinner-overlay').hide();

    $('div.buttons')
        .find('button#next, button#verifyCode, button#cancel')
        .click(function() {
            $('div.spinner-overlay').show();
    });

    //Observe the paragraph
    var pObserver = new window.MutationObserver( function(mutations) {
        $('div.spinner-overlay').hide();
    }.bind(this));

    $('div.error').find('p').each(function() {
        pObserver.observe(this, {characterData: true, childList: true});
    });
});