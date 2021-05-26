function fullNAView(){
  map.flyTo({center:[-120,45], zoom: 2.9, pitch: 0, bearing: 0, essential: true })
}
function lowerNAView(){
  map.flyTo({center:[-100,40], zoom: 3.65, pitch: 0, bearing: 0, essential: true })
}
function fullWorldView(){
  map.flyTo({center:[-100,40], zoom: 1.4, pitch: 0, bearing: 0, essential: true })
  $('#all-inst').prop('checked', false);
  toggle_Institutions()
}
