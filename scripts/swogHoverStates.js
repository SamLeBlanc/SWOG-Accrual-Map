function addTable2(arr) {
  if ($("#tb2")){
    $("#tb2").remove();
  }
  var myTableDiv = document.getElementById("box-4")
  var table = document.getElementById('state-info')
  var tableBody = document.createElement('TBODY')
  tableBody.id = "tb2"
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

function addTable3(arr) {
  if ($("#tb3")){
    $("#tb3").remove();
  }
  var myTableDiv = document.getElementById("box-5")
  var table = document.getElementById('cat-info')
  var tableBody = document.createElement('TBODY')
  tableBody.id = "tb3"
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

function addListToTable(abb){
  var col_names = ['REGPERIOD','STTYPE','SEX','ADMIN','REVAGENCY','RACE','ETHNICITY']
  yearList = getYearList();
  revList = getRevagencyList();
  sexList = getSexList();
  typeList = getStudyTypeList();
  adminList = getAdminList();
  ageList = [parseInt($('#min-age')[0].value),parseInt($('#max-age')[0].value)]
  col_names.forEach(function(c){
    if($('#data-category').val() == c){
      var new_arr = [];
      list = (d3.map(allData, function(d){return(d[c])}).keys()).sort()
      list.forEach((element) => {
        if ($('#table-button').html() == "All"){
          dt = allData.filter(function(d){
            return d["STATE"] == abb && d[c] == element
          })
        } else {
          dt = allData.filter(function(d){
            return (
              d["STATE"] == abb &&
              d[c] == element &&
              (yearList.indexOf(parseInt(d["REGPERIOD"])) >= 0) &&
              (revList.indexOf(d["REVAGENCY"]) >= 0) &&
              (sexList.indexOf(d["SEX"]) >= 0) &&
              (typeList.indexOf(d["STTYPE"]) >= 0) &&
              (adminList.indexOf(d["ADMIN"]) >= 0) &&
              (d["AGE"] >= ageList[0]) && (d["AGE"] <= ageList[1])
            )
          })
        }
        new_arr.push([element,dt.length])
      });
      addTable3(new_arr)
    }
  })
}

function setHoverState(e,hoveredId){
  if (e.features.length > 0) {
    if (hoveredId) {
      map.setFeatureState(
        { source: 'states', id: hoveredId, sourceLayer:'finalMap-ap9nu3' },
        { hover: false }
      );
    }
    $("#state-title").css("font-size", "30px");
    $("#state-title").css("color", "black");
    $("#win-3-state").css("font-size", "30px");
    $("#win-3-state").css("color", "black");
    $('#state-title').text(e.features[0].properties.NAME)
    $('#win-3-state').text(e.features[0].properties.NAME)
    $("#state-value").css("font-size", "60px");
    var name = e.features[0].properties.NAME;

    NAME = name
    var abb = Object.keys(state_to_name).find(key => state_to_name[key] === name);
    ABB = abb;
    addListToTable(abb)

    if (usa_abbrs.includes(abb)){
      $("#national-value").text('USA Accrual: ' + (nationalSubtotals[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else if (canada_abbrs.includes(abb)){
      $("#national-value").text('Canada Accrual: ' + (nationalSubtotals[1]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else if (intl_abbrs.includes(abb)){
      $("#national-value").text('Intl. Accrual: ' + (nationalSubtotals[2]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

    stateTotals.forEach(function(f){
      if (f.STATE == e.features[0].properties.STATE){
        value = f.TOTAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        $('#state-value').text(value)
      }
    });

    hoveredId = e.features[0].id;
    map.setFeatureState(
      { source: 'states', id: hoveredId, sourceLayer:'finalMap-ap9nu3' },
      { hover: true }
    );
  }
  return hoveredId
}

function removeHoverState(hoveredId){
  if (hoveredId) {
    map.setFeatureState(
      { source: 'states', id: hoveredId, sourceLayer:'finalMap-ap9nu3' },
      { hover: false }
    );
  }
  $("#state-title").css("font-size", "22px");
  $("#state-title").css("color", "grey");
  $('#state-title').text('Hover over a state')
  $("#state-value").css("font-size", "0px");
  $('#state-value').text('')
  hoveredId = null;
}
