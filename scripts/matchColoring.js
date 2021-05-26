function getMatchExpression(stateTotals){
  var max = d3.max(stateTotals, function(d) { return d["TOTAL"]; } );
  var matchExpression = ['match', ['get', 'STATE']];
  stateTotals.forEach(function (row) {
    var p = 5*row['TOTAL']/max
    if (p > .7) p = .7;
    var green = 255 - ((row['TOTAL']/max) * 255);
    var red = 225 - ((row['TOTAL']/max) * 90);
    var color = 'rgba(' + red + ', ' + green + ', 255,' + p + ')';
    if (row['TOTAL']==0){
      matchExpression.push(row['STATE'], 'rgba(0, 0, 0, 0)');
    } else {
      matchExpression.push(row['STATE'], color);
    }
  });
  matchExpression.push('rgba(0, 0, 0, 0)');
  return matchExpression
}

function fillStates(){
  $('#update-blinker').css('animation','blinker 0s linear infinite')
  setTimeout(function(){
    if (map.getLayer('states-join')){
      map.setPaintProperty('states-join', 'fill-color', matchExpression);
      toggle_Clusters()
    }
  },300)
}
