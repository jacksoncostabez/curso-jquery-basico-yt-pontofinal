$(function() {

    $('#slide img:eq(0)').addClass('ativo').show();
    var texto = $('.ativo').attr('alt');
    $('#slide').prepend('<p>'+texto+'</p>');

    setInterval(slide,3000); //chama a função slide a cada 3s

    function slide() {
        if($('.ativo').next().size()) {
            $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');
        } else {
            $('.ativo').fadeOut().removeClass('ativo');
            $('#slide img:eq(0)').fadeIn().addClass('ativo');
        }

        var texto = $('.ativo').attr('alt');
        $('#slide p').hide().html(texto).delay(500).fadeIn();
    }

});