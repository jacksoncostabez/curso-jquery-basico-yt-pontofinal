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

    var ex = $('.ex1');

    //dar foco no proximo campo apos digitar a palavra da condição
    $('.ev1').focus(function(){
        ex.text($(this).attr('title'));
    }).keyup(function(){
        if($(this).val() == 'pontocom') {
            $('.ev2').focus();
        }
    });

    //aciona um evento após a saida de um elemento.
    // $('.ev1').blur(function(){
    //     ex.text('Saida do campo: '+$(this).attr('name'));
    // });

    $('.ev1').change(function(){
        ex.text('Campo alterado: '+$(this).val());
    });

    $('.selecionar').click(function() {
        $('.ev3').select();
        $('form').submit(function(){
            return false;
        });
    });

});