///////variables

var json=1;
var autoscroll=true;

///////eventos
$(window).scroll(function (){
 if ($(window).scrollTop() + $(window).height() + 150 >= $(document).height() && autoscroll==true){
   cargarJson();    
  }
});

$(document).ready( function() {
	
$("#auto").click(function(){
  if(autoscroll){
    autoscroll=false;
    $('#auto').text("Activar Auto-Scroll");
  }else{
    autoscroll=true;
    $('#auto').text("Desactivar Auto-Scroll");
  }
});

$("#cargarmas").click(function(){
  cargarJson();
});
	

});

///////funciones

function cargarJson(){
  
     if(json<5){
       $("#cargando").show();
       $.getJSON("https://rawgit.com/Bernat77/news/master/data/json"+json+".json", function (jsonObject) {
         añadirJson(jsonObject);
         $("#cargando").hide();
         });
      json++;
	  row++;
      }else{
        $("#cargarmas").text("No hay más noticias.");
        $("#cargarmas").addClass("disabled");
      }
  }


function añadirJson(json){
  $("#filas").append('<div class="row">'+'</div>');
    $.each(json, function( i, item ) {
      $("#filas .row:last").append('<div class="col-sm-12 col-md-6">' 
	  + '<div class="cuadro">' + '<div class="titulo">' + '<h3 class="text-center">'
	  +item.titulo+'</h3>' + '</div>' + '<p class="text-right fecha"><i>'+item.fecha
	  +'</i></p>' + '<img src="'+item.imgs+'" class="img-responsive center-block" alt="'
	  +item.alt+'">' + '<p class="cuerpo">'+item.cuerpo+'</p>' + '</div>' + '</div>');

    
})
  
}
