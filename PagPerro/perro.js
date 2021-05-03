$(document).ready(function(){
    $("ul.menu li a:first").addClass('selec');
    $(".secciones article").hide();
    $(".secciones article:first").show();

    $("ul.menu li a").click(function(){
        $("ul.menu li a").removeClass('selec');
        $(this).addClass('selec');
        $(".secciones article").hide();

        var opr = $(this).attr('href');
        $(opr).show();
        return false;
    });
});