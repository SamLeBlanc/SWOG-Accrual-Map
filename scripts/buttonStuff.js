// The method buttonBoys runs at when the webpage is refreshed
// buttonBoys ensures the draggable minimize buttons and the All/Select button are properly initialized
// There are more of the minimize buttons than actual draggables, this is just to ensure the method
// is ready to go when another draggable is added

function buttonBoys(){
  $("#table-button").click(function(){
    if ($(this).html() == "All"){
      $(this).html("Selection");
    } else {
      $(this).html("All");
    }
    addListToTable(ABB)
  });

  $("#butt-1").click(function(){
    $("#box-1").slideToggle();
  });
  $("#butt-2").click(function(){
    $("#box-2").slideToggle();
  });
  $("#butt-3").click(function(){
    $("#box-3").slideToggle();
  });
  $("#butt-4").click(function(){
    $("#box-4").slideToggle();
  });
  $("#butt-5").click(function(){
    $("#box-5").slideToggle();
  });
  $("#butt-6").click(function(){
    $("#box-6").slideToggle();
  });
  $("#butt-7").click(function(){
    $("#box-7").slideToggle();
  });
  $("#butt-8").click(function(){
    $("#box-8").slideToggle();
  });
  $("#butt-9").click(function(){
    $("#box-9").slideToggle();
  });
  $("#butt-10").click(function(){
    $("#box-10").slideToggle();
  });
}
