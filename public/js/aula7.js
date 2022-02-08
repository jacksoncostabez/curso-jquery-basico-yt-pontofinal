$(function() {

    //colocando placepholder no input
    $('.place').each(function(){
        var place = $(this).attr('title');
        var input = $(this); //pega o input

        input.val(place)
            .css('color', '#ccc')
            .focusin(function(){
                input.css('color', '#000');
                if (input.val() == place) {
                    input.val('');
                }
            }).focusout(function(){
                if (input.val() == '') {
                    input.css('color', '#ccc');
                    input.val(place);
                }
            });
    });

    //pega tecla pressionada
    // var ex = $('.ex1');
    // $('.key').keypress(function(){
    //     ex.text($(this).val());
    // });

    //pega tecla pressionada e com shift atualiza em tempo real
    // var ex = $('.ex1');
    // $('.key').keydown(function(){
    //     ex.text($(this).val());
    // });

    //pega tecla pressionada tem tempo real e adiciona ao elemento
    var ex = $('.ex1');
    $('.key').keyup(function(){
        ex.text($(this).val());
    });


})