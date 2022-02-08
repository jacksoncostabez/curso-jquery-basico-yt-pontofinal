$(function () {
    /**
     * exibe imagem de erro caso a img no html esteja errado.
     */
    // $("img").error(function(){
    //     $("img").attr("src", "img/error.jpeg");
    // });

    // $('img').error(function() {
    //     var imagem = $(this).attr("src");
    //     alert('Imagem '+imagem+' indisponível.');
    //     $('img').attr("src", "img/error.jpeg");
    // });

    //redimnsiona a imagem conforme o tamanho da tela.

    // $('img').width($(window).width()).height($(window).height());
    // $(window).resize(function() {
    //     $('img').width($(window).width()).height($(window).height());
    // });

    //oculta a img quando rolar a página.
    // $(window).scroll(function() {
    //     $('img').fadeOut(1000);
    // });

    $('body').css('height', '5000px');

    // $(window).scroll(function() {
    //     var topo = $(window).scrollTop();
    //     alert(topo);
    // });

    //Oculta a img qnd a rolagem atingir >450px e exibe a img se for menor que isso
    $(window).scroll(function() {
        var topo = $(window).scrollTop();
        if(topo > 400) {
            $('img').fadeOut(1000);
        } else {
            $('img').fadeIn(1000);
        }
    });

});
