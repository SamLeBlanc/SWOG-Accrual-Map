function getInputLists(){
  yearList = getYearList();
  revList = getRevagencyList();
  sexList = getSexList();
  typeList = getStudyTypeList();
  adminList = getAdminList();
  ageList = [parseInt($('#min-age')[0].value), parseInt($('#max-age')[0].value)]
}

function getNationalSubtotals(){
  d1 = allData.filter(function(d){
    return baseFilter(d)
  })
  var fullTotal = d1.length
  var canadaTotal = d1.filter(function(d){ return d["COUNTRY"] == 'CA' }).length;
  var usaTotal = d1.filter(function(d){ return d["COUNTRY"] == 'US' }).length
  var intlTotal = d1.filter(function(d){ return (d["COUNTRY"] != 'US' && d["COUNTRY"] != 'CA')}).length

  $("#total-value").text('Full Accrual: ' + (fullTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  $("#national-value").text("");
  return [usaTotal,canadaTotal,intlTotal]
}

function baseFilterByState(d,abbr){
  return (
    d["STATE"] == abbr &&
    (yearList.indexOf(parseInt(d["REGPERIOD"])) >= 0) &&
    (revList.indexOf(d["REVAGENCY"]) >= 0) &&
    (sexList.indexOf(d["SEX"]) >= 0) &&
    (typeList.indexOf(d["STTYPE"]) >= 0) &&
    (adminList.indexOf(d["ADMIN"]) >= 0) &&
    (d["AGE"] >= ageList[0]) && (d["AGE"] <= ageList[1])
  )
}

function baseFilter(d){
  return (
    (yearList.indexOf(parseInt(d["REGPERIOD"])) >= 0) &&
    (revList.indexOf(d["REVAGENCY"]) >= 0) &&
    (sexList.indexOf(d["SEX"]) >= 0) &&
    (typeList.indexOf(d["STTYPE"]) >= 0) &&
    (adminList.indexOf(d["ADMIN"]) >= 0) &&
    (d["AGE"] >= ageList[0]) && (d["AGE"] <= ageList[1])
  )
}
