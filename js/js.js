///////variables
var json = 1;
var autoscroll = false;

///////eventos
$(window).scroll(function() {
    var boton = false;
    if ($(window).scrollTop() + $(window).height() + 100 >= $(document).height() && autoscroll == true) {
        cargarJson(boton);
    }
});

$(document).ready(function() {

    $("#auto").click(function() {
        if (autoscroll) {
            autoscroll = false;
            $('#auto').text("Activar Auto-Scroll");
        } else {
            autoscroll = true;
            $('#auto').text("Desactivar Auto-Scroll");
        }
    });

    $("#cargarmas").click(function() {
        var boton = true;
        if (!autoscroll) {
            cargarJson(boton);
        }
    });

});

///////funciones

function cargarJson(boton) {

    if (json < 5) {
        $("#cargando").show();
        autoscroll = false;
        $.getJSON("https://rawgit.com/Bernat77/news/master/data/json" + json + ".json", function(jsonObject) {
            añadirJson(jsonObject);
            $("#cargando").hide();
            autoscroll = !boton;
        });
        json++;
        row++;
    } else {
        $("#cargarmas").text("No hay más noticias.");
        $("#cargarmas").addClass("disabled");
    }
}



function añadirJson(json) {
    $("#filas").append('<div class="row">' + '</div>');
    $.each(json, function(i, item) {
        $("#filas .row:last").append('<div class="col-sm-12 col-md-6">' +
            '<div class="cuadro">' + '<div class="titulo">' + '<h3 class="text-center"><a href=#>' +
            item.titulo + '</a></h3>' + '</div>' + '<p class="text-right fecha"><i>' + item.fecha +
            '</i></p>' + '<img src="' + item.imgs + '" class="img-responsive center-block" alt="' +
            item.alt + '">' + '<p class="cuerpo">' + item.cuerpo + '</p>' + '</div>' + '</div>');


    })

}
