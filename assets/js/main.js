$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
	
		if(tarea== ""){
			alert("Debes agregar una tarea");
		}else{
			$("#comentarios").append("<p><input type='checkbox' class='check' id='test6'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv>"+tarea+"<button class='delete'>Remove</button></p>");
		}
	});

	function removeItem() {
	  $(this).closest('p').remove();
	}

	function markThis() {
	  if (this.checked) {
	    $(this).closest('p').addClass('.delete');
	  } else {
	    $(this).closest('p').removeClass('.delete');
	  }
	}

	$(document).on('click', '.check', markThis);

	$(document).on('click', '.delete', removeItem);


});

$('#comentarios').on('change', 'input[type=checkbox]', function(event) {  //runs function when to do list checkbox is checked
    var tareaNueva = $("input:checked").attr('value');  // create variable assign it to value of li that is checked
    $('#done').append('<p>' + tareaNueva + '</p>');  //move selected li value to done list
    $(this).parent().remove(); //remove task(checked) li from to do list
  });