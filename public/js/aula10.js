$(function() {

    var ex = $('.ex1');
    var ex2 = $('.ex2');
    var button = $(':button');

    // button.click(function() {
    //     ex.fadeOut('slow');
    // }).dblclick(function() {
    //     ex.fadeIn('slow');
    // });

    // button.click(function() {
    //     ex.fadeTo('slow', 0.5);
    // });

    //apos o primeiro evento acabar, ele dispara o proximo evento.
    button.click(function() {
        ex.fadeTo('slow', 0.4, function() {
            ex2.fadeTo('slow', 0.2);
        });
    });

});