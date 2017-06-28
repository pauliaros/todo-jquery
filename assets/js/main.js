$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		
		if(tarea== ""){
			alert("Debes agregar una tarea");
		}else{
			$("#comentarios").append("<div><span class='center-align'>" + tarea + "</span><p class='center-align'></p></div>");
		}
	});
});