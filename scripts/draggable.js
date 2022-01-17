function move_drags(drag_div){
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (drag_div == 1){
    if (parseInt($('#drag-1').css('left')) == 0){
      $('#drag-1').css('left','-1200px').css('top','40px')
    } else {
      $('#drag-1').css('left','0px').css('top','40px')
    }
  } else if (drag_div == 2){
    if (parseInt($('#drag-2').css('left')) == 0){
      $('#drag-2').css('left','-1200px').css('top','150px')
    } else {
      $('#drag-2').css('left','0px').css('top','150px')
    }
  } else if (drag_div == 3){
    if (parseInt($('#drag-3').css('left')) == -1200){
      $('#drag-3').css('left',`${width - 280}px`)
      return
    } else if (parseInt($('#drag-5').css('left')) == -1200){
      $('#drag-5').css('left',`${width - 540}px`)
      return
    } else {
      $('#drag-3').css('left',`-1200px`)
      $('#drag-5').css('left',`-1200px`)
    }
  }
  else if (drag_div == 4){
    if (parseInt($('#drag-6').css('left')) == 240){
      $('#drag-6').css('left','-1200px')
    } else {
      $('#drag-6').css('left','240px')
    }
  }
}

$( function() {
  $( "#drag-1" ).draggable();
} );

$( function() {
  $( "#drag-2" ).draggable();
} );

$( function() {
  $( "#drag-3" ).draggable();
} );

$( function() {
  $( "#drag-4" ).draggable();
} );
$( function() {
  $( "#drag-5" ).draggable();
} );
$( function() {
  $( "#drag-6" ).draggable();
} );

$( function() {
  $( "#drag-7" ).draggable();
} );

$( function() {
  $( "#drag-8" ).draggable();
} );

$( function() {
  $( "#drag-9" ).draggable();
} );

$( function() {
  $( "#drag-10" ).draggable();
} );
