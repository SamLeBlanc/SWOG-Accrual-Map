function htmlStateList(){
  var all = [];
  stateTotals.forEach(function(f){
      all.push([f.NAME,f.TOTAL])
  });
  all = all.sort(compareSecondColumn)
  var textArray = [];
  all.forEach(function(a){
    n = state_to_name[a[0]].substring(0,25)
    if (a[1] > 0) textArray.push([n,a[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")])
  })
  addTable(textArray)
}

function addTable(arr) {
  if ($("#tb")){
    $("#tb").remove();
  }
    var myTableDiv = document.getElementById("table-hold")
    var table = document.getElementById('state-table')
    var tableBody = document.createElement('TBODY')
    tableBody.id = "tb"
    table.border = "1px solid black"
    table.appendChild(tableBody);

    //TABLE ROWS
    for (i = 0; i < arr.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < arr[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(arr[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}
