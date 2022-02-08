$(function () {

    var ex = $('.ex1');

    $('.ev1').click(function() {
        $(this).css('background', '#ccc');
        ex.text('Você clicou...');
    });

    $('.ev2').dblclick(function() {
        $(this).css('background', '#ccc');
        ex.text('Você clicou duas vezes...');
    });

    $('.ev3').focusin(function() {
        $(this).css('background', '#ccc');
        ex.text('Você deu foco...');
    }).focusout(function() {
        $(this).css('background', '#000');
        ex.text('Você tirou o foco...');
    });

    $('.ev4').hover(function() {
        $(this).css('background', '#ccc');
        ex.text('Você passou o mouse...');
    });

    $('.ev5').mousedown(function (){
        $(this).css('background', '#ccc');
        ex.text('Você apertou o botão do mouse...');
    }).mouseup(function() {
        $(this).css('background', '#000');
        ex.text('Você soltou o botão do mouse...');
    });

    var a = 0;
    $('.ev6').mouseenter(function() {
        a += 1;
        ex.text('Entradas do Mouse: '+a);
    }).mouseout(function() {
        ex.text('Saída do Mouse: '+a);
    });

    var b = 0;
    $('.ev7').mouseover(function() {
        b += 1;
        ex.text('Mouse over: '+ b);
    }).mouseleave(function(){
        ex.text('Saida do mouse: ' + b);
    });

    $('.ev8').mousemove(function(move){
        var localx = move.pageX;
        var localy = move.pageY;

        ex.text('Movimento x: '+localx+' - Movimento Y: '+localy);
    })

});
