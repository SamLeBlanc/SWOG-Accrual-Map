function updateLegend(max){
  if (max == 0){
    window.alert("Search returned no data. Make sure that *at least* one box is check in every Data Select category.\r\nOtherwise, there was no data fitting your selection criteria.");
  }
  $('#leg-0').text("0")
  if (max > 500){
    val = Math.round(.4*max/100)*100
  } else if (max > 50){
    val = Math.round(.4*max/10)*10
  } else{
    val = Math.round(.4*max)
  }
  $('#leg-1').text(val)
  $('#leg-2').text(max)
}

function arrangeDraggables(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  var place = (width - 280).toString().concat('px');
  $('#drag-3').css('left','-1200px')
  $('#drag-4').css('left',place)
  $('#drag-5').css('left','-1200px')
  $('#viewbox').css('left', (width - 400).toString().concat('px'))
  $('#viewbox').css('top', (height - 120).toString().concat('px'))
  $("#state-title").css("color", "grey");
  $("#state-title").css("font-size", "22px");
  $('#state-title').text('Hover over a state')
  $("#win-3-state").css("color", "grey");
  $("#win-3-state").css("font-size", "22px");
  $('#win-3-state').text('Hover over a state')
  $('#cluster-but').prop('checked', false);
  $('#all-inst').prop('checked', true);
}


function toggle_blinker(){
  $('#update-blinker').css('animation','blinker 1.5s linear infinite')
}
